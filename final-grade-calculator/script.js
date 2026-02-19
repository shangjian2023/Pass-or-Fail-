// 期末求生计算器 - 核心逻辑与交互
(function() {
    'use strict';

    // DOM 元素
    const elements = {
        // 输入元素
        usualScore: document.getElementById('usualScore'),
        usualScoreSlider: document.getElementById('usualScoreSlider'),
        weightSlider: document.getElementById('weightSlider'),
        weightDisplay: document.querySelector('.weight-display'),
        customTarget: document.getElementById('customTarget'),
        
        // 按钮
        weightBtns: document.querySelectorAll('.weight-btn'),
        targetBtns: document.querySelectorAll('.target-btn'),
        calculateBtn: document.getElementById('calculateBtn'),
        shareBtn: document.getElementById('shareBtn'),
        modalClose: document.getElementById('modalClose'),
        downloadBtn: document.getElementById('downloadBtn'),
        
        // 结果元素
        resultSection: document.getElementById('resultSection'),
        resultCard: document.querySelector('.result-card'),
        resultEmoji: document.getElementById('resultEmoji'),
        resultStatus: document.getElementById('resultStatus'),
        resultScore: document.getElementById('resultScore'),
        resultMessage: document.getElementById('resultMessage'),
        resultDetail: document.getElementById('resultDetail'),
        
        // 模态框
        shareModal: document.getElementById('shareModal'),
        shareScore: document.getElementById('shareScore'),
        shareWish: document.getElementById('shareWish')
    };

    // 状态
    let state = {
        usualScore: 85,
        weight: 40,
        target: 80
    };

    // 情绪反馈配置
    const feedbackConfig = {
        impossible: {
            emoji: '😱',
            status: '难度爆表',
            class: 'danger',
            messages: [
                '难度较大，需超常发挥！',
                '这个目标有点高，建议调整一下',
                '平时分可能有误？再检查一下吧'
            ]
        },
        hard: {
            emoji: '😰',
            status: '挑战较大',
            class: 'warning',
            messages: [
                '需要努力复习，加油！',
                '有难度，但并非不可能',
                '建议制定详细复习计划'
            ]
        },
        normal: {
            emoji: '😊',
            status: '压力适中',
            class: '',
            messages: [
                '压力不大，但也要认真复习哦',
                '正常发挥就能达到',
                '保持状态，稳扎稳打'
            ]
        },
        easy: {
            emoji: '😄',
            status: '轻松达成',
            class: 'success',
            messages: [
                '恭喜！你已经稳过了',
                '可以安心复习（或预习）了',
                '目标触手可及，继续保持'
            ]
        },
        free: {
            emoji: '🎉',
            status: '稳过无疑',
            class: 'success',
            messages: [
                '恭喜！你已经稳过了',
                '即使不考也能及格，太棒了！',
                '可以安心准备其他科目了'
            ]
        }
    };

    // 初始化
    function init() {
        bindEvents();
        updateUI();
    }

    // 绑定事件
    function bindEvents() {
        // 平时分输入同步
        elements.usualScore.addEventListener('input', handleUsualScoreInput);
        elements.usualScoreSlider.addEventListener('input', handleSliderInput);

        // 权重按钮
        elements.weightBtns.forEach(btn => {
            btn.addEventListener('click', handleWeightBtnClick);
        });

        // 权重滑块
        elements.weightSlider.addEventListener('input', handleWeightSliderInput);

        // 目标按钮
        elements.targetBtns.forEach(btn => {
            btn.addEventListener('click', handleTargetBtnClick);
        });

        // 自定义目标
        elements.customTarget.addEventListener('input', handleCustomTargetInput);

        // 计算按钮
        elements.calculateBtn.addEventListener('click', calculate);

        // 分享按钮
        elements.shareBtn.addEventListener('click', showShareModal);
        elements.modalClose.addEventListener('click', hideShareModal);
        elements.downloadBtn.addEventListener('click', downloadShareCard);

        // 点击模态框外部关闭
        elements.shareModal.addEventListener('click', (e) => {
            if (e.target === elements.shareModal) {
                hideShareModal();
            }
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                hideShareModal();
            }
            if (e.key === 'Enter' && elements.shareModal.classList.contains('show')) {
                hideShareModal();
            }
        });
    }

    // 处理平时分输入
    function handleUsualScoreInput(e) {
        let value = parseFloat(e.target.value);
        if (isNaN(value)) return;
        
        // 限制范围
        value = Math.max(0, Math.min(100, value));
        
        state.usualScore = value;
        elements.usualScoreSlider.value = value;
        
        // 移除错误状态
        elements.usualScore.classList.remove('error');
    }

    // 处理滑块输入
    function handleSliderInput(e) {
        const value = parseFloat(e.target.value);
        state.usualScore = value;
        elements.usualScore.value = value;
    }

    // 处理权重按钮点击
    function handleWeightBtnClick(e) {
        const weight = parseInt(e.target.dataset.weight);
        state.weight = weight;
        
        // 更新按钮状态
        elements.weightBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // 更新滑块
        elements.weightSlider.value = weight;
        elements.weightDisplay.textContent = weight + '%';
    }

    // 处理权重滑块
    function handleWeightSliderInput(e) {
        const value = parseInt(e.target.value);
        state.weight = value;
        elements.weightDisplay.textContent = value + '%';
        
        // 更新按钮状态
        elements.weightBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.weight) === value);
        });
    }

    // 处理目标按钮点击
    function handleTargetBtnClick(e) {
        const target = parseInt(e.currentTarget.dataset.target);
        state.target = target;
        
        // 更新按钮状态
        elements.targetBtns.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        // 更新自定义输入
        elements.customTarget.value = target;
    }

    // 处理自定义目标输入
    function handleCustomTargetInput(e) {
        let value = parseFloat(e.target.value);
        if (isNaN(value)) return;
        
        // 限制范围
        value = Math.max(0, Math.min(100, value));
        state.target = value;
        
        // 更新按钮状态
        elements.targetBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.target) === value);
        });
        
        // 移除错误状态
        elements.customTarget.classList.remove('error');
    }

    // 核心计算逻辑
    function calculate() {
        // 验证输入
        if (!validateInputs()) return;

        const { usualScore, weight, target } = state;
        
        // 计算期末需要分数
        // 公式：期末需要分数 = (目标总分 - 平时成绩 × 平时权重) / 期末权重
        const finalWeight = 100 - weight;
        const requiredScore = (target * 100 - usualScore * weight) / finalWeight;
        
        // 显示结果
        displayResult(requiredScore);
        
        // 显示分享按钮
        elements.shareBtn.style.display = 'flex';
        
        // 滚动到结果区域
        elements.resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // 验证输入
    function validateInputs() {
        let isValid = true;
        
        if (isNaN(state.usualScore) || state.usualScore < 0 || state.usualScore > 100) {
            elements.usualScore.classList.add('error');
            isValid = false;
        }
        
        if (isNaN(state.target) || state.target < 0 || state.target > 100) {
            elements.customTarget.classList.add('error');
            isValid = false;
        }
        
        if (!isValid) {
            showToast('请输入有效的分数（0-100）');
        }
        
        return isValid;
    }

    // 显示结果
    function displayResult(requiredScore) {
        const roundedScore = Math.round(requiredScore * 10) / 10;
        
        // 确定反馈类型
        let feedbackType;
        if (requiredScore > 100) {
            feedbackType = 'impossible';
        } else if (requiredScore > 85) {
            feedbackType = 'hard';
        } else if (requiredScore > 60) {
            feedbackType = 'normal';
        } else if (requiredScore > 0) {
            feedbackType = 'easy';
        } else {
            feedbackType = 'free';
        }
        
        const feedback = feedbackConfig[feedbackType];
        
        // 更新结果卡片样式
        elements.resultCard.className = 'result-card ' + feedback.class;
        
        // 更新表情和状态
        elements.resultEmoji.textContent = feedback.emoji;
        elements.resultStatus.textContent = feedback.status;
        
        // 更新分数（带动画）
        animateNumber(elements.resultScore, roundedScore);
        
        // 更新消息
        const randomMessage = feedback.messages[Math.floor(Math.random() * feedback.messages.length)];
        elements.resultMessage.textContent = randomMessage;
        
        // 更新详情
        if (requiredScore > 100) {
            elements.resultDetail.textContent = `需要考 ${roundedScore} 分，已超过满分100分`;
        } else if (requiredScore < 0) {
            elements.resultDetail.textContent = '即使期末考0分也能达到目标';
        } else {
            elements.resultDetail.textContent = `按卷面满分100分计算，你需要在试卷上拿到 ${roundedScore} 分`;
        }
    }

    // 数字动画
    function animateNumber(element, targetValue) {
        const startValue = parseFloat(element.textContent) || 0;
        const duration = 500;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用缓动函数
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
            
            element.textContent = currentValue.toFixed(1);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    // 显示分享模态框
    function showShareModal() {
        const score = elements.resultScore.textContent;
        elements.shareScore.textContent = score;
        
        // 根据分数设置祝福语
        const scoreNum = parseFloat(score);
        if (scoreNum > 100) {
            elements.shareWish.textContent = '转发此图，老师捞我！';
        } else if (scoreNum < 0) {
            elements.shareWish.textContent = '转发此图，考神附体！';
        } else {
            elements.shareWish.textContent = '转发此图，期末必过！';
        }
        
        elements.shareModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // 隐藏分享模态框
    function hideShareModal() {
        elements.shareModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // 下载分享卡片
    function downloadShareCard() {
        // 创建canvas来生成图片
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const scale = 2; // 高清输出
        
        canvas.width = 360 * scale;
        canvas.height = 480 * scale;
        ctx.scale(scale, scale);
        
        // 绘制背景
        const gradient = ctx.createLinearGradient(0, 0, 360, 480);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 360, 480);
        
        // 绘制内容
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        
        // 图标和标题
        ctx.font = '24px Arial';
        ctx.fillText('📚', 180, 60);
        ctx.font = 'bold 18px "Noto Sans SC", sans-serif';
        ctx.fillText('期末求生计算器', 180, 95);
        
        // 分数
        ctx.font = '14px "Noto Sans SC", sans-serif';
        ctx.globalAlpha = 0.9;
        ctx.fillText('我的期末需要考', 180, 160);
        
        ctx.globalAlpha = 1;
        ctx.font = 'bold 72px "Noto Sans SC", sans-serif';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 2;
        ctx.fillText(elements.shareScore.textContent, 180, 240);
        ctx.shadowColor = 'transparent';
        
        ctx.font = '16px "Noto Sans SC", sans-serif';
        ctx.globalAlpha = 0.9;
        ctx.fillText('分', 180, 270);
        
        // 祝福语
        ctx.font = '16px "Noto Sans SC", sans-serif';
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        const wishText = elements.shareWish.textContent;
        
        // 绘制圆角矩形背景
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        roundRect(ctx, 60, 300, 240, 45, 22);
        ctx.fill();
        
        ctx.fillStyle = 'white';
        ctx.fillText(wishText, 180, 330);
        
        // 底部
        ctx.font = '14px "Noto Sans SC", sans-serif';
        ctx.globalAlpha = 0.8;
        ctx.fillText('🍀 祝我期末不挂科 🍀', 180, 420);
        
        // 下载图片
        const link = document.createElement('a');
        link.download = `期末成绩预测-${elements.shareScore.textContent}分.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        showToast('图片已保存');
    }

    // 绘制圆角矩形辅助函数
    function roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // 显示提示
    function showToast(message) {
        // 移除已有的toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // 创建新toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(45, 55, 72, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 24px;
            font-size: 14px;
            z-index: 10000;
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // 3秒后移除
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // 更新UI状态
    function updateUI() {
        elements.usualScore.value = state.usualScore;
        elements.usualScoreSlider.value = state.usualScore;
        elements.weightSlider.value = state.weight;
        elements.weightDisplay.textContent = state.weight + '%';
        elements.customTarget.value = state.target;
    }

    // 启动
    init();
})();
