document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.impossible-switch-box');
    if (!box) return;

    const input = document.getElementById('trick-toggle');
    const bgRef = document.querySelector('.bear-checkbox__bg');
    const indicatorRef = document.querySelector('.bear-checkbox__indicator');
    const pawRef = document.querySelector('.bear__paw');
    const armWrapRef = document.querySelector('.bear__arm-wrap');
    const armRef = document.querySelector('.bear__arm');
    const bearRef = document.querySelector('.bear');
    const swearRef = document.querySelector('.bear__swear');

    let count = 1;
    let checked = false;

    // 起源防护装甲：将所有的暴露悬空肉身部件送进结界黑箱待命
    gsap.set([bearRef, armWrapRef, pawRef], { autoAlpha: 0 });

    const armLimit = gsap.utils.random(0, 3);
    const headLimit = gsap.utils.random(armLimit + 1, armLimit + 3);
    const angerLimit = gsap.utils.random(headLimit + 1, headLimit + 3);
    
    // 原作者设定的生物帧常数
    const armDuration = 0.2;
    const bearDuration = 0.25;
    const checkboxDuration = 0.25;
    const pawDuration = 0.1;

    const checkboxWrap = document.querySelector('.bear-checkbox');

    const onHover = () => {
        if (Math.random() > 0.5 && count > armLimit) {
            gsap.to(bearRef, { duration: bearDuration / 2, y: '40%', autoAlpha: 1 });
        }
    };

    const offHover = () => {
        if (!checked) {
            gsap.to(bearRef, { duration: bearDuration / 2, y: '100%', autoAlpha: 0 });
        }
    };

    checkboxWrap.addEventListener('mouseenter', onHover);
    checkboxWrap.addEventListener('mouseleave', offHover);

    // =========================================
    // 独核驱动宇宙：我们摒弃了极易出 Bug 的异步野轴镶嵌与多套 Timeline 并行
    // 转为极客式的：一条轴打穿全时空，每一处皆由硬刚算尽的独立坐标构成，斩绝所有双路串台逃逸残骸
    // =========================================
    const fireSingleTimelineHackTL = () => {
        const mainTL = gsap.timeline();

        // [0: 初始爆发起点] 开关被打到真开启的状态 (0 时刻发生并持续 0.25)
        mainTL.to(bgRef, { duration: checkboxDuration, backgroundColor: '#2eec71' }, 0)
              .to(indicatorRef, { duration: checkboxDuration, x: '100%' }, 0);

        let bearTranslation; 
        if (count > armLimit && count < headLimit) {
            bearTranslation = '40%';
        } else if (count >= headLimit) {
            bearTranslation = '0%'; // 起立怒视高度
        }

        const onComplete = () => {
            checked = false;
            input.checked = false; 
            count++;
        };

        if (Math.random() > 0.5 && count > angerLimit) {
            // 在 timeline 时调用 set 即刻渲染
            mainTL.set(swearRef, { display: 'block' }, checkboxDuration);
        }

        // 基本时间长（两只手臂耗时加肉垫耗时）= 0.5
        const base = armDuration + armDuration + pawDuration;
        const preDelay = Math.random();
        
        // 执行完绿灯推转后小熊才会准备挂入动作机：这里我们增加原生中带的惊悚随机停滞延迟
        const bearStartDelay = checkboxDuration + Math.random(); 
        
        // 1. 如果你足够遭人恨并且越过了头起立限制，小熊的本体先闪上来
        if (count > armLimit) {
            mainTL.to(bearRef, {
                duration: bearDuration,
                y: bearTranslation,
                autoAlpha: 1 
            }, bearStartDelay);
        }

        // 2. 长手开始往前方延伸够向玻璃面的那一帧时刻（如果小熊出现，就等随机发呆秒再说；如果没有（前期）立刻去够！）
        const armStartTime = bearStartDelay + (count > armLimit ? preDelay : 0);
        mainTL.to(
            armWrapRef,
            { x: 50, duration: armDuration, autoAlpha: 1 }, 
            armStartTime
        )
        // 3. 手够到头了，使劲压迫手腕往左拨的动作！这是灵魂物理错觉所在！
        .to(armRef, { scaleX: 0.7, duration: armDuration }, armStartTime + armDuration)
        // 4. 重拽的结尾并带出这把拽下来的手套爪肉垫（也就是抓稳的那一根稻草）：
        .to(pawRef, {
            duration: pawDuration,
            scaleX: 0.8,
            autoAlpha: 1, 
            onComplete: () => gsap.set(swearRef, { display: 'none' }),
        }, armStartTime + armDuration * 2);
        
        // 5. 决定生死也是开关重置的断电那秒！
        const delayToOff = count > armLimit ? base + bearDuration + preDelay : base;
        const offTime = bearStartDelay + delayToOff;

        // 瞬间退色、且开关猛然回撤左边到底：
        mainTL.to(bgRef, { duration: checkboxDuration, backgroundColor: '#1f1f2e' }, offTime)
              .to(indicatorRef, { duration: checkboxDuration, x: '0%' }, offTime)
              // 开关跌回的同时光速撒手散去爪心、并将胳膊拉回、小熊闪藏：绝无半点不拖拉！三位同时发生！
              .to(pawRef, { duration: pawDuration, scaleX: 0, autoAlpha: 0 }, offTime)
              .to(armRef, { duration: pawDuration, scaleX: 1 }, offTime + pawDuration)
              .to(armWrapRef, { duration: armDuration, x: 0, autoAlpha: 0 }, offTime + pawDuration)
              .to(bearRef, { duration: bearDuration, y: '100%', autoAlpha: 0 }, offTime + pawDuration);

        // 绑定整个重返现实时间后的封包，恢复生命机准备接受下一波防撞点击验证
        const maxTime = offTime + pawDuration + Math.max(armDuration, bearDuration);
        mainTL.set({}, { onComplete: onComplete }, maxTime + 0.1);
    };

    input.addEventListener('change', (e) => {
        // 重写锁，完全在漫长的关灯锁定时掐断所有非理性的狂暴回推
        if (checked) {
            e.preventDefault();
            input.checked = false; 
            return;
        }
        checked = true;
        fireSingleTimelineHackTL();
    });
});
