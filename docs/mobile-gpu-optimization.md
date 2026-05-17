# 移动端 GPU 性能优化方案

> 日期：2025-05-17  
> 范围：安卓 Chrome 上 GPU 飙升 100% + 星门终端输入卡顿/无显示  
> 状态：✅ 已修复并验证

---

## 一、问题描述

在安卓 Chrome 上存在两个严重问题：

1. **GPU 周期性飙升**：进入 main 页后，即使无任何交互，GPU 每 15-20 秒周期性飙升至 100%
2. **星门终端输入异常**：点击起飞台后输入口令时，输入框不显示字符，伴随 GPU 100%，特别是在第二轮输入时必现

---

## 二、根因分析

### 2.1 GPU 周期性飙升（根因）

**三重 WebGL 渲染循环叠加**

页面上同时运行着三个独立的 WebGL 渲染循环：

| 渲染循环 | 用途 | 帧率 | 生命周期 |
|---|---|---|---|
| Torus Glass (`torus-glass.js`) | intro 页的玻璃环动画 | 60fps | ❌ 永不销毁 |
| Galaxy (`main.js`) | main 页的星系粒子 | 60fps | main 页期间 |
| 流体模拟 (`background.js`) | 全局背景流体 | 60fps | 全局 |

`initTorusGlass()` 返回了 cleanup 函数，但调用处（`scripts.pug`）**完全忽略了返回值**。用户从 intro 页切换到 main 页后，Torus 的 `tick()` 函数通过 `requestAnimationFrame` 无限循环，即使其 canvas 已被隐藏，GPU 仍在渲染。

三个 60fps 的 WebGL 循环同时运行，导致移动端 GPU 持续过载 → 热节流 → 周期性性能骤降。

### 2.2 星门终端输入异常

**隐藏 input + JS 同步显示的架构与 Android IME 不兼容**

原架构：
```
input(opacity:0, 隐藏) → JS 读取 input.value → 过滤 → 写入 span#code-display
```

问题链：
1. Android Chrome 的 IME（输入法）对 `input.value` 的修改非常敏感
2. JS 过滤后回写 `input.value` 会导致 IME 状态重置
3. IME 进入异常的"预测组合模式"，持续尝试重新组合 → GPU 爆发
4. 第一轮输入删除后，IME 内部状态与 input.value 不同步，第二轮输入彻底失效

### 2.3 backdrop-filter 性能陷阱

星门终端的 `.overlay` 使用了 `backdrop-filter: blur()`。在安卓 Chrome 上，**每次 DOM 更新**（包括每次按键修改 `textContent`）都会触发全屏 GPU 重合成（recomposite），叠加上述问题导致输入更加卡顿。

---

## 三、修复方案

### 3.1 Torus WebGL 生命周期管理（根因修复）

**文件**：`src/components/scripts.pug` + `src/js/main.js`

```javascript
// scripts.pug：保存 cleanup 函数引用
window._destroyTorus = initTorusGlass('#intro-torus-canvas', brandText);

// main.js switchPage()：切换页面时销毁
if (window._destroyTorus) {
    window._destroyTorus();
    window._destroyTorus = null;
}
```

cleanup 函数会：
- 取消 `requestAnimationFrame`
- 移除 `resize` 和 `visibilitychange` 事件监听
- 释放 geometry、material、renderer 等 GPU 资源

### 3.2 输入架构重构

**文件**：`src/components/main.pug` + `src/css/main/main.less` + `src/js/main.js`

**旧架构**（有问题）：
```
input(隐藏) → keydown/input 事件 → JS 过滤 → 写入 span 显示 → 同步回写 input.value
```

**新架构**（修复）：
```
input(可见+样式化) → 浏览器原生处理显示 → input 事件仅做字符过滤
```

核心改动：
- 移除 `span#code-display`、`span.cursor`、`span.prefix`
- `input#launch-code` 直接作为可见元素，CSS 样式化为终端显示效果
- 添加 `autocorrect="off"` `autocapitalize="off"` `spellcheck="false"` `inputmode="latin"`
- JS 只在输入非法字符时才回写 `input.value`，最小化 IME 干扰
- 移除所有 `compositionstart/end`、`beforeinput` 等 IME 处理代码

### 3.3 backdrop-filter 移除

**文件**：`src/css/main/main.less`

```less
.overlay {
    // 移除: backdrop-filter: blur(15px);
    // 替代: 高不透明度径向渐变，视觉上接近磨砂玻璃，零 GPU 开销
    background: radial-gradient(
        circle at center,
        rgba(20, 12, 40, 0.93) 0%,
        rgba(8, 4, 16, 0.98) 80%
    );
}
```

### 3.4 移动端渲染降级

**文件**：`src/components/scripts.pug` + `src/js/main.js` + `src/js/background.js`

虽然根因是 Torus 未销毁，以下优化作为**性能余量**保留（经测试视觉无损）：

#### 流体模拟（background.js）

| 参数 | 桌面端 | 移动端 |
|---|---|---|
| SIM_RESOLUTION | 128 | 64 |
| DYE_RESOLUTION | 1024 | 256 |
| PRESSURE_ITERATIONS | 20 | 10 |
| BLOOM | ✅ | ❌ |
| SUNRAYS | ✅ | ❌ |
| SHADING | ✅ | ❌ |
| 帧率 | 60fps | 30fps |
| pixelRatio | devicePixelRatio | 1 |

#### Galaxy 动画（main.js）

| 参数 | 桌面端 | 移动端 |
|---|---|---|
| 粒子数 | 150,000 | 35,000 |
| antialias | ✅ | ❌ |
| pixelRatio | min(dpr, 2) | 1 |
| 帧率 | 60fps | 30fps |

#### 其他优化

- **Vector3 复用**：`animate()` 中复用同一个 `THREE.Vector3` 而非每帧 `new`，消除 GC 压力
- **resize 宽度守卫**：三个 WebGL 模块的 resize 处理均只在宽度变化时执行，避免安卓键盘弹出/收起触发昂贵的 framebuffer 重建
- **移动端 text-shadow 简化**：减少每次按键的 GPU 重绘开销

---

## 四、涉及文件清单

| 文件 | 改动类型 |
|---|---|
| `src/components/scripts.pug` | 移动端 config 参数分级 + Torus cleanup 引用保存 |
| `src/components/main.pug` | 输入架构重构（移除 code-display/cursor/prefix） |
| `src/components/head.pug` | CSS 版本号更新（缓存刷新） |
| `src/js/main.js` | Galaxy 移动端优化 + Torus 销毁 + Stargate 输入重构 |
| `src/js/background.js` | 流体模拟移动端降帧 + pixelRatio 限制 |
| `src/css/main/main.less` | backdrop-filter 移除 + input 样式化 + 移动端 text-shadow 简化 |

---

## 五、验证方法

在安卓 Chrome 上测试以下场景：

1. **GPU 稳定性**：进入 main 页后静置 60 秒，观察 GPU 不再周期性飙升
2. **键盘弹出/收起**：点击起飞台拉起键盘 → 点击空白处收起键盘，无卡顿
3. **输入正常**：输入口令字符实时显示，删除实时响应
4. **多轮输入**：输入 → 全部删除 → 再次输入，第二轮输入正常无卡顿
5. **快速输入删除**：快速连续输入+删除，无 GPU 飙升
6. **视觉质量**：背景动画流畅，星系粒子效果正常
