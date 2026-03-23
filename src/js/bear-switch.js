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

    // 搞笑且可爱的语句数组：用于小熊被惹怒时的吐槽
    const funnyMessages = [
        "入口真的不在这里啦！笨蛋！",
        "别戳我肚皮，好痒哦 (ﾉ>ω<)ﾉ",
        "我是超级凶的暴力熊，嗷呜~",
        "你再乱摸我真的要生气了哦！",
        "找入口？去滑动屏幕呀大笨蛋！",
        "哎呀！我只是一只打工熊...",
        "你是不是迷路啦？略略略~",
        "点我没用，真的没用！",
        "再点...再点我就咬你哦！",
        "（假装死机中，请勿打扰）...",
        "信不信我顺着网线过去亲你一口！",
        "#@$%*! (骂骂咧咧)",
        "我生气起来可是连自己都害怕的！",
        "坏人！又关我的灯！",
        "呜呜，我的小鱼干被你按掉了..."
    ];

    // 起源防护装甲
    gsap.set([bearRef, armWrapRef, pawRef], { autoAlpha: 0 });

    // ★★★ 终极纯干零引流·赛博合成电频中枢 ★★★
    const AudioSynth = {
        ctx: new (window.AudioContext || window.webkitAudioContext)(),
        playTone(freq, type, duration, vol=1, detune=0) {
            if(this.ctx.state === 'suspended') this.ctx.resume();
            const o = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            o.type = type;
            o.frequency.setValueAtTime(freq, this.ctx.currentTime);
            o.detune.value = detune;
            g.gain.setValueAtTime(vol, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
            o.connect(g);
            g.connect(this.ctx.destination);
            o.start();
            o.stop(this.ctx.currentTime + duration);
        },
        // 清脆极客的高压启动点击 (Success Feeling)
        switchOn() {
            this.playTone(900, 'square', 0.05, 0.4);
            setTimeout(() => this.playTone(1300, 'sine', 0.07, 0.4), 25);
        },
        // 带着沉重闭合阻尼且生气的撞击声 (Error Feeling)
        switchOff() {
            this.playTone(250, 'triangle', 0.08, 0.7);
            setTimeout(() => this.playTone(80, 'square', 0.1, 0.8), 35);
        },
        // 粗粝野兽级深度喉音怒吼 (利用白噪加低通滤波与 LFO 声带颤动算法)
        groan() {
            if(this.ctx.state === 'suspended') this.ctx.resume();
            const duration = 1.2;
            const bufferSize = this.ctx.sampleRate * duration;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1; // 填充纯白噪引擎底盘
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            
            // 极其核心的：低频抖动器 (模拟喉咙声带物理振颤)
            const lfo = this.ctx.createOscillator();
            lfo.type = 'sawtooth';
            // 喉管从剧烈抖降到缓慢平息（45Hz 坠向 10Hz）
            lfo.frequency.setValueAtTime(45, this.ctx.currentTime);
            lfo.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + duration);
            
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 800; // 在频率节点拉出极深度的撕裂感
            lfo.connect(lfoGain);
            
            // 带通滤波器充当猛兽的呼吸道共鸣腔
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.Q.value = 1.5; 
            // 鼻腔声学从 400Hz 沉降到 150Hz
            filter.frequency.setValueAtTime(400, this.ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + duration);
            
            lfoGain.connect(filter.detune);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(1.5, this.ctx.currentTime + 0.1); // 最粗粝的猛然迸发
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            noise.start();
            lfo.start();
            noise.stop(this.ctx.currentTime + duration);
            lfo.stop(this.ctx.currentTime + duration);
        }
    };

    let isSoundEnabled = false;

    // 【终极过渡融合】将首生发声锁从独立喇叭彻底无缝化进小熊开关自身操作中
    const initialUnlock = () => {
        if (!isSoundEnabled) {
            isSoundEnabled = true;
            // Safari 的严苛首杀机制，在这里靠着极其合法且源源不断的原生点击获得最干净的回暖授权。
            if (AudioSynth.ctx.state === 'suspended') {
                AudioSynth.ctx.resume();
            }
        }
        // 这一击破冰的使命仅此一次，为了内核调度性能它将在生效后立即解绑自我销毁。
        box.removeEventListener('click', initialUnlock);
        box.removeEventListener('touchstart', initialUnlock);
    };
    
    // 用最根部的 box 整个外盒包裹去绑定，获得最安全也是最早被拦截的高亮捕获期
    box.addEventListener('click', initialUnlock);
    box.addEventListener('touchstart', initialUnlock);

    const safePlay = (soundKey) => {
        if (!isSoundEnabled) return;
        try {
            if (soundKey === 'ON') AudioSynth.switchOn();
            if (soundKey === 'OFF') AudioSynth.switchOff();
            if (soundKey === 'GROAN') AudioSynth.groan();
        } catch(e) {}
    };

    // ★★★ 深度触觉交互控制流 (Haptics API Integration) ★★★
    const triggerHaptic = (type) => {
        if (!navigator.vibrate) return;
        // 使用非常轻量非阻塞的原生底层调用法，避开累赘框架。
        try {
            if (type === 'success') {
                navigator.vibrate([15, 30, 20]); // 两次紧促短震反馈
            } else if (type === 'error') {
                navigator.vibrate([40, 60, 40, 60, 50]); // 厚重拖沓带破坏感的长震
            } else {
                navigator.vibrate(10);
            }
        } catch(e) {}
    };

    // ★★★ 视觉表情爆发引擎 (Emoji Particle System) ★★★
    const fireEmojis = (type, el) => {
        const emojis = type === 'success' 
            ? ['🎉', '✨', '🚀', '✅', '💡'] 
            : ['😡', '💔', '❌', '👎', '💢', '🐻'];
        
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top;

        const fragment = document.createDocumentFragment();
        const particles = [];

        for (let i = 0; i < 9; i++) {
            const particle = document.createElement('div');
            particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.fontSize = (Math.random() * 22 + 18) + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.transform = 'translate(-50%, -50%)';
            
            fragment.appendChild(particle);
            particles.push(particle);
        }
        
        document.body.appendChild(fragment);

        particles.forEach(particle => {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 200 + 80;
            const duration = Math.random() * 1.5 + 1.2;
            
            // Success如热气球般悠长高升，Error如重力碎渣向远砸落
            const throwY = type === 'success' ? -300 : 200;
            
            gsap.to(particle, {
                x: Math.cos(angle) * velocity,
                y: Math.sin(angle) * velocity + throwY,
                rotation: Math.random() * 720 - 360,
                opacity: 0,
                duration: duration,
                ease: "power2.out",
                onComplete: () => particle.remove()
            });
        });
    };

    const armLimit = gsap.utils.random(0, 3);
    const headLimit = gsap.utils.random(armLimit + 1, armLimit + 3);
    const angerLimit = gsap.utils.random(headLimit + 1, headLimit + 3);
    const armDuration = 0.2;
    const bearDuration = 0.25;
    const checkboxDuration = 0.25;
    const pawDuration = 0.1;
    let isAnimating = false;

    // 唯一主防死锁执行线
    const fireSingleTimelineHackTL = () => {
        const mainTL = gsap.timeline(); 

        // 【首发破关】：播放振奋之音、成功触感及胜利喜悦微粒！
        safePlay('ON');
        triggerHaptic('success');
        fireEmojis('success', box);

        mainTL.to(bgRef, { duration: checkboxDuration, backgroundColor: '#2eec71' }, 0)
              .to(indicatorRef, { duration: checkboxDuration, x: '100%' }, 0);

        let bearTranslation; 
        if (count > armLimit && count < headLimit) {
            bearTranslation = '40%';
        } else if (count >= headLimit) {
            bearTranslation = '0%';
        }

        const onComplete = () => {
            checked = false;
            input.checked = false; 
            count++;
            isAnimating = false; 
        };

        // 极高频触发搞笑对话：只要小熊探头（出过手后），就有 80% 概率说话
        if (Math.random() > 0.2 && count > armLimit) {
            mainTL.call(() => {
                swearRef.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
                gsap.set(swearRef, { display: 'block', autoAlpha: 1 });
            }, [], checkboxDuration)
                  .call(() => safePlay('GROAN'), [], checkboxDuration);
        }

        const base = armDuration + armDuration + pawDuration;
        const preDelay = Math.random();
        const bearStartDelay = checkboxDuration + Math.random(); 
        
        if (count > armLimit) {
            mainTL.to(bearRef, {
                duration: bearDuration,
                y: bearTranslation,
                autoAlpha: 1 
            }, bearStartDelay);
        }

        const armStartTime = bearStartDelay + (count > armLimit ? preDelay : 0);
        mainTL.to(armWrapRef, { x: 50, duration: armDuration, autoAlpha: 1 }, armStartTime)
              .to(armRef, { scaleX: 0.7, duration: armDuration }, armStartTime + armDuration)
              .to(pawRef, {
                  duration: pawDuration, scaleX: 0.8, autoAlpha: 1, 
                  onComplete: () => gsap.set(swearRef, { display: 'none' }),
              }, armStartTime + armDuration * 2);
        
        const delayToOff = count > armLimit ? base + bearDuration + preDelay : base;
        const offTime = bearStartDelay + delayToOff;

        // 【终结拍打】：放出怒斥断电声、低沉重压马达感及各种消极反抗微粒！
        mainTL.call(() => {
            safePlay('OFF');
            triggerHaptic('error');
            fireEmojis('error', box);
        }, [], offTime);

        mainTL.to(bgRef, { duration: checkboxDuration, backgroundColor: '#1f1f2e' }, offTime)
              .to(indicatorRef, { duration: checkboxDuration, x: '0%' }, offTime)
              .to(pawRef, { duration: pawDuration, scaleX: 0, autoAlpha: 0 }, offTime)
              .to(armRef, { duration: pawDuration, scaleX: 1 }, offTime + pawDuration)
              .to(armWrapRef, { duration: armDuration, x: 0, autoAlpha: 0 }, offTime + pawDuration)
              .to(bearRef, { duration: bearDuration, y: '100%', autoAlpha: 0 }, offTime + pawDuration);

        const maxTime = offTime + pawDuration + Math.max(armDuration, bearDuration);
        mainTL.call(onComplete, [], maxTime + 0.1);
    };

    input.addEventListener('change', (e) => {
        if (isAnimating) {
            input.checked = checked; 
            return;
        }
        
        gsap.killTweensOf([bearRef, armWrapRef, pawRef, indicatorRef, bgRef]);
        gsap.set([bearRef, armWrapRef, pawRef], { autoAlpha: 0 }); 
        gsap.set(bearRef, { y: '100%' });
        gsap.set(armWrapRef, { x: 0 });
        gsap.set(armRef, { scaleX: 1 });
        gsap.set(pawRef, { scaleX: 0 });

        isAnimating = true;
        checked = true;
        fireSingleTimelineHackTL();
    });
});
