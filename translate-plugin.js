// ==UserScript==
// @name         智能翻译助手
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  功能强大的网页翻译工具，支持多语言，可自定义配置，界面精美，支持移动端
// @author       Eray
// @run-at       document-start
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @license      Apache-2.0
// @require      https://unpkg.com/i18n-jsautotranslate@3.18.0/index.js
// @downloadURL https://update.greasyfork.org/scripts/546362/%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/546362/%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 尽早注入样式和创建悬浮球
    const earlyInit = () => {
        // 检测是否为移动设备
        const isMobile = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                || window.innerWidth <= 768;
        };

        // 获取保存的配置
        const getConfig = () => {
            const defaultConfig = {
                enabled: true,
                localLanguage: 'chinese_simplified',
                targetLanguage: 'chinese_simplified',
                floatBallSize: isMobile() ? 45 : 50,
                floatBallPosition: { x: 20, y: 100 },
                floatBallOpacity: 0.8,
                autoTranslate: false,
                showFloatBall: true,
                translateService: 'client.edge',
                allowHalfBall: true
            };
            const saved = GM_getValue('translateConfig', null);
            return saved ? { ...defaultConfig, ...saved } : defaultConfig;
        };

        const config = getConfig();
        const mobile = isMobile();

        // 注入基础样式
        const baseStyles = `
            #translate-float-ball {
                position: fixed;
                width: ${config.floatBallSize}px;
                height: ${config.floatBallSize}px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                cursor: ${mobile ? 'pointer' : 'move'};
                z-index: 2147483647;
                display: ${config.showFloatBall ? 'flex' : 'none'};
                align-items: center;
                justify-content: center;
                opacity: ${config.floatBallOpacity};
                left: ${config.floatBallPosition.x}px;
                top: ${config.floatBallPosition.y}px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                user-select: none;
                -webkit-user-select: none;
                touch-action: none;
            }
            #translate-float-ball svg {
                width: ${mobile ? '24px' : '28px'};
                height: ${mobile ? '24px' : '28px'};
                fill: white;
                pointer-events: none;
            }
        `;

        // 创建style标签
        const style = document.createElement('style');
        style.textContent = baseStyles;
        
        // 创建悬浮球
        const ball = document.createElement('div');
        ball.id = 'translate-float-ball';
        ball.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
            </svg>
        `;

        // 等待DOM准备好
        if (document.head) {
            document.head.appendChild(style);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.head.appendChild(style);
            });
        }

        if (document.body) {
            document.body.appendChild(ball);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(ball);
            });
        }
    };

    // 立即执行早期初始化
    earlyInit();

    // 主要功能代码
    (() => {
        // 动态加载脚本
        function loadScript(src) {
            return new Promise((resolve, reject) => {
                // 检查是否已经加载
                if (window.translate) {
                    resolve();
                    return;
                }
                
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        // 检测是否为移动设备
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                || window.innerWidth <= 768;
        }

        // 配置管理
        class ConfigManager {
            constructor() {
                this.defaultConfig = {
                    enabled: true,
                    localLanguage: 'chinese_simplified',
                    targetLanguage: 'chinese_simplified',
                    floatBallSize: isMobile() ? 45 : 50,
                    floatBallPosition: { x: 20, y: 100 },
                    floatBallOpacity: 0.8,
                    autoTranslate: false,
                    ignoredClasses: [],
                    ignoredIds: [],
                    customTerms: {},
                    showFloatBall: true,
                    translateService: 'client.edge',
                    allowHalfBall: true
                };
                this.config = this.loadConfig();
            }

            loadConfig() {
                const saved = GM_getValue('translateConfig', null);
                return saved ? { ...this.defaultConfig, ...saved } : this.defaultConfig;
            }

            saveConfig() {
                GM_setValue('translateConfig', this.config);
            }

            get(key) {
                return this.config[key];
            }

            set(key, value) {
                this.config[key] = value;
                this.saveConfig();
            }
        }

        // 翻译管理器
        class TranslateManager {
            constructor(configManager) {
                this.configManager = configManager;
                this.initialized = false;
                this.listenerStarted = false;
                this.currentLanguage = null;
            }

            init() {
                if (this.initialized || typeof translate === 'undefined') return;
                
                try {
                    // 配置translate.js
                    translate.language.setLocal(this.configManager.get('localLanguage'));
                    translate.service.use(this.configManager.get('translateService'));
                    translate.selectLanguageTag.show = false;
                    
                    // 设置忽略的类和ID
                    const ignoredClasses = this.configManager.get('ignoredClasses');
                    const ignoredIds = this.configManager.get('ignoredIds');
                    
                    if (ignoredClasses.length > 0) {
                        translate.ignore.class = ignoredClasses;
                    }
                    if (ignoredIds.length > 0) {
                        translate.ignore.id = ignoredIds;
                    }

                    // 设置自定义术语
                    const customTerms = this.configManager.get('customTerms');
                    if (Object.keys(customTerms).length > 0) {
                        translate.nomenclature.append(customTerms);
                    }

                    // 只启动一次监听
                    if (!this.listenerStarted) {
                        translate.listener.start();
                        this.listenerStarted = true;
                    }
                    
                    this.initialized = true;
                } catch (error) {
                    console.error('翻译初始化失败:', error);
                }
            }

            changeLanguage(targetLang) {
                if (!this.initialized) this.init();
                if (typeof translate === 'undefined') return;
                
                try {
                    this.currentLanguage = targetLang;
                    translate.changeLanguage(targetLang);
                } catch (error) {
                    console.error('切换语言失败:', error);
                }
            }

            toggle(enabled) {
                if (enabled && !this.initialized) {
                    this.init();
                    if (this.configManager.get('autoTranslate')) {
                        setTimeout(() => {
                            this.changeLanguage(this.configManager.get('targetLanguage'));
                        }, 100);
                    }
                } else if (!enabled && this.initialized) {
                    this.changeLanguage(this.configManager.get('localLanguage'));
                }
            }

            execute() {
                if (!this.initialized) this.init();
                if (typeof translate !== 'undefined') {
                    try {
                        translate.execute();
                    } catch (error) {
                        console.error('执行翻译失败:', error);
                    }
                }
            }
        }

        // UI管理器
        class UIManager {
            constructor(configManager, translateManager) {
                this.configManager = configManager;
                this.translateManager = translateManager;
                this.floatBall = document.getElementById('translate-float-ball');
                this.panel = null;
                this.isDragging = false;
                this.dragOffset = { x: 0, y: 0 };
                this.touchStartPos = { x: 0, y: 0 };
                this.touchStartTime = 0;
                
                this.init();
            }

            init() {
                this.injectStyles();
                this.setupFloatBall();
                this.createPanel();
                this.bindEvents();
                
                // 初始化翻译
                if (this.configManager.get('enabled')) {
                    setTimeout(() => {
                        this.translateManager.toggle(true);
                    }, 1000);
                }
            }

            injectStyles() {
                const mobile = isMobile();
                GM_addStyle(`
                    /* 悬浮球动画样式 */
                    #translate-float-ball:active {
                        transform: scale(0.95);
                    }

                    #translate-float-ball.dragging {
                        transition: none !important;
                        transform: scale(1.1);
                        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
                    }

                    #translate-float-ball:hover {
                        transform: scale(1.05);
                        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
                    }

                    /* 控制面板样式 */
                    #translate-panel {
                        position: fixed;
                        width: ${mobile ? '90%' : 'min(400px, 90vw)'};
                        max-width: 400px;
                        max-height: ${mobile ? '85vh' : '600px'};
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                        z-index: 2147483646;
                        display: none;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        overflow: hidden;
                        ${mobile ? `
                            left: 50% !important;
                            top: 50% !important;
                            transform: translate(-50%, -50%);
                        ` : ''}
                    }

                    #translate-panel.show {
                        display: block;
                        animation: slideIn 0.3s ease;
                    }

                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: ${mobile ? 'translate(-50%, -45%)' : 'translateY(-20px)'};
                        }
                        to {
                            opacity: 1;
                            transform: ${mobile ? 'translate(-50%, -50%)' : 'translateY(0)'};
                        }
                    }

                    .translate-panel-header {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: ${mobile ? '15px' : '20px'};
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .translate-panel-title {
                        font-size: ${mobile ? '16px' : '18px'};
                        font-weight: 600;
                    }

                    .translate-panel-close {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background 0.3s;
                        font-size: 18px;
                        color: white;
                    }

                    .translate-panel-close:hover {
                        background: rgba(255, 255, 255, 0.3);
                    }

                    .translate-panel-close:active {
                        transform: scale(0.95);
                    }

                    .translate-panel-body {
                        padding: ${mobile ? '15px' : '20px'};
                        max-height: ${mobile ? 'calc(85vh - 60px)' : '500px'};
                        overflow-y: auto;
                        -webkit-overflow-scrolling: touch;
                    }

                    .translate-panel-body::-webkit-scrollbar {
                        width: 6px;
                    }

                    .translate-panel-body::-webkit-scrollbar-thumb {
                        background: rgba(0,0,0,0.2);
                        border-radius: 3px;
                    }

                    .translate-panel-body::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .translate-control-group {
                        margin-bottom: ${mobile ? '15px' : '20px'};
                    }

                    .translate-control-label {
                        display: block;
                        margin-bottom: 8px;
                        font-size: 14px;
                        font-weight: 500;
                        color: #333;
                    }

                    .translate-switch {
                        position: relative;
                        display: inline-block;
                        width: 50px;
                        height: 24px;
                    }

                    .translate-switch input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    .translate-switch-slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #ccc;
                        transition: .4s;
                        border-radius: 24px;
                    }

                    .translate-switch-slider:before {
                        position: absolute;
                        content: "";
                        height: 18px;
                        width: 18px;
                        left: 3px;
                        bottom: 3px;
                        background-color: white;
                        transition: .4s;
                        border-radius: 50%;
                    }

                    .translate-switch input:checked + .translate-switch-slider {
                        background-color: #667eea;
                    }

                    .translate-switch input:checked + .translate-switch-slider:before {
                        transform: translateX(26px);
                    }

                    .translate-select {
                        width: 100%;
                        padding: ${mobile ? '12px' : '10px'};
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        font-size: ${mobile ? '16px' : '14px'};
                        background: white;
                        cursor: pointer;
                        transition: border-color 0.3s;
                    }

                    .translate-select:focus {
                        outline: none;
                        border-color: #667eea;
                    }

                    .translate-slider-container {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    .translate-slider {
                        flex: 1;
                        -webkit-appearance: none;
                        height: 6px;
                        border-radius: 3px;
                        background: #ddd;
                        outline: none;
                    }

                    .translate-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background: #667eea;
                        cursor: pointer;
                    }

                    .translate-slider::-moz-range-thumb {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background: #667eea;
                        cursor: pointer;
                        border: none;
                    }

                    .translate-slider-value {
                        min-width: 45px;
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }

                    .translate-button {
                        width: 100%;
                        padding: ${mobile ? '14px' : '12px'};
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: ${mobile ? '16px' : '14px'};
                        font-weight: 500;
                        cursor: pointer;
                        transition: transform 0.3s, box-shadow 0.3s;
                        -webkit-tap-highlight-color: transparent;
                    }

                    .translate-button:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                    }

                    .translate-button:active {
                        transform: scale(0.98);
                    }

                    .translate-section-title {
                        font-size: ${mobile ? '15px' : '16px'};
                        font-weight: 600;
                        color: #333;
                        margin-bottom: 15px;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #f0f0f0;
                    }

                    .translate-info {
                        background: #f8f9fa;
                        padding: 12px;
                        border-radius: 8px;
                        font-size: ${mobile ? '12px' : '13px'};
                        color: #666;
                        margin-top: 10px;
                        line-height: 1.5;
                    }

                    /* 响应式优化 */
                    @media (max-width: 768px) {
                        .translate-control-group {
                            margin-bottom: 15px;
                        }
                    }

                    @media (min-width: 769px) and (max-width: 1024px) {
                        #translate-panel {
                            width: min(400px, 80vw);
                        }
                    }
                `);
            }

            setupFloatBall() {
                if (!this.floatBall) return;
                
                const size = this.configManager.get('floatBallSize');
                const position = this.configManager.get('floatBallPosition');
                const opacity = this.configManager.get('floatBallOpacity');
                
                this.floatBall.style.width = `${size}px`;
                this.floatBall.style.height = `${size}px`;
                this.floatBall.style.opacity = opacity;
                
                // 确保在可视区域内
                this.ensureInViewport();
            }

            createPanel() {
                const panel = document.createElement('div');
                panel.id = 'translate-panel';
                
                // 获取支持的语言列表
                const languages = [
                    { value: 'chinese_simplified', name: '简体中文' },
                    { value: 'chinese_traditional', name: '繁體中文' },
                    { value: 'english', name: 'English' },
                    { value: 'spanish', name: 'Español' },
                    { value: 'french', name: 'Français' },
                    { value: 'german', name: 'Deutsch' },
                    { value: 'japanese', name: '日本語' },
                    { value: 'korean', name: '한국어' },
                    { value: 'russian', name: 'Русский' },
                    { value: 'arabic', name: 'العربية' },
                    { value: 'portuguese', name: 'Português' },
                    { value: 'italian', name: 'Italiano' },
                    { value: 'dutch', name: 'Nederlands' },
                    { value: 'polish', name: 'Polski' },
                    { value: 'turkish', name: 'Türkçe' },
                    { value: 'thai', name: 'ไทย' },
                    { value: 'vietnamese', name: 'Tiếng Việt' },
                    { value: 'indonesian', name: 'Bahasa Indonesia' },
                    { value: 'hindi', name: 'हिन्दी' },
                    { value: 'hebrew', name: 'עברית' }
                ];

                const mobile = isMobile();

                panel.innerHTML = `
                    <div class="translate-panel-header">
                        <div class="translate-panel-title">🌐 智能翻译助手</div>
                        <button class="translate-panel-close" id="translate-panel-close">✕</button>
                    </div>
                    <div class="translate-panel-body">
                        <!-- 基础设置 -->
                        <div class="translate-section-title">基础设置</div>
                        
                        <div class="translate-control-group">
                            <label class="translate-control-label">启用翻译</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-enable" ${this.configManager.get('enabled') ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">自动翻译</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-auto" ${this.configManager.get('autoTranslate') ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">本地语言</label>
                            <select class="translate-select" id="translate-local-lang">
                                ${languages.map(lang => `
                                    <option value="${lang.value}" ${this.configManager.get('localLanguage') === lang.value ? 'selected' : ''}>
                                        ${lang.name}
                                    </option>
                                `).join('')}
                            </select>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">目标语言</label>
                            <select class="translate-select" id="translate-target-lang">
                                ${languages.map(lang => `
                                    <option value="${lang.value}" ${this.configManager.get('targetLanguage') === lang.value ? 'selected' : ''}>
                                        ${lang.name}
                                    </option>
                                `).join('')}
                            </select>
                        </div>

                        <!-- 界面设置 -->
                        <div class="translate-section-title" style="margin-top: 25px;">界面设置</div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">显示悬浮球</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-show-ball" ${this.configManager.get('showFloatBall') ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">允许悬浮球超出边缘</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-allow-half" ${this.configManager.get('allowHalfBall') ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球大小</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-ball-size" 
                                    min="30" max="80" value="${this.configManager.get('floatBallSize')}">
                                <span class="translate-slider-value">${this.configManager.get('floatBallSize')}px</span>
                            </div>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球透明度</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-ball-opacity" 
                                    min="30" max="100" value="${this.configManager.get('floatBallOpacity') * 100}">
                                <span class="translate-slider-value">${Math.round(this.configManager.get('floatBallOpacity') * 100)}%</span>
                            </div>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="translate-control-group" style="margin-top: 25px;">
                            <button class="translate-button" id="translate-now-btn">立即翻译</button>
                        </div>

                        <div class="translate-control-group">
                            <button class="translate-button" id="translate-reset-btn" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                重置位置
                            </button>
                        </div>

                        <div class="translate-info">
                            💡 提示：${mobile ? '长按' : '拖动'}悬浮球可调整位置，设置会自动保存
                        </div>
                    </div>
                `;
                
                document.body.appendChild(panel);
                this.panel = panel;
            }

            bindEvents() {
                const mobile = isMobile();

                if (mobile) {
                    this.bindMobileEvents();
                } else {
                    this.bindDesktopEvents();
                }

                this.bindCommonEvents();
            }

            bindMobileEvents() {
                let longPressTimer = null;
                let isDragging = false;
                let hasMoved = false;

                this.floatBall.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    const touch = e.touches[0];
                    this.touchStartPos = { x: touch.clientX, y: touch.clientY };
                    this.touchStartTime = Date.now();
                    hasMoved = false;
                    
                    longPressTimer = setTimeout(() => {
                        isDragging = true;
                        this.floatBall.classList.add('dragging');
                        if (navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                    }, 300);

                    this.dragOffset.x = touch.clientX - this.floatBall.offsetLeft;
                    this.dragOffset.y = touch.clientY - this.floatBall.offsetTop;
                });

                this.floatBall.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    const touch = e.touches[0];
                    
                    const moveDistance = Math.sqrt(
                        Math.pow(touch.clientX - this.touchStartPos.x, 2) + 
                        Math.pow(touch.clientY - this.touchStartPos.y, 2)
                    );
                    
                    if (moveDistance > 10) {
                        hasMoved = true;
                        if (longPressTimer) {
                            clearTimeout(longPressTimer);
                            longPressTimer = null;
                        }
                    }

                    if (isDragging) {
                        let newX = touch.clientX - this.dragOffset.x;
                        let newY = touch.clientY - this.dragOffset.y;
                        
                        // 根据设置决定是否允许超出边缘
                        if (!this.configManager.get('allowHalfBall')) {
                            const maxX = window.innerWidth - this.floatBall.offsetWidth;
                            const maxY = window.innerHeight - this.floatBall.offsetHeight;
                            newX = Math.max(0, Math.min(newX, maxX));
                            newY = Math.max(0, Math.min(newY, maxY));
                        } else {
                            const halfSize = this.floatBall.offsetWidth / 2;
                            const maxX = window.innerWidth - halfSize;
                            const maxY = window.innerHeight - halfSize;
                            newX = Math.max(-halfSize, Math.min(newX, maxX));
                            newY = Math.max(-halfSize, Math.min(newY, maxY));
                        }
                        
                        this.floatBall.style.left = `${newX}px`;
                        this.floatBall.style.top = `${newY}px`;
                    }
                });

                this.floatBall.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    
                    if (longPressTimer) {
                        clearTimeout(longPressTimer);
                    }

                    this.floatBall.classList.remove('dragging');

                    if (isDragging) {
                        this.configManager.set('floatBallPosition', {
                            x: parseInt(this.floatBall.style.left),
                            y: parseInt(this.floatBall.style.top)
                        });
                    } else if (!hasMoved) {
                        const touchDuration = Date.now() - this.touchStartTime;
                        if (touchDuration < 300) {
                            this.togglePanel();
                        }
                    }

                    isDragging = false;
                    hasMoved = false;
                });
            }

            bindDesktopEvents() {
                this.floatBall.addEventListener('click', (e) => {
                    if (!this.isDragging) {
                        this.togglePanel();
                    }
                });

                this.floatBall.addEventListener('mousedown', (e) => {
                    this.isDragging = false;
                    this.dragOffset.x = e.clientX - this.floatBall.offsetLeft;
                    this.dragOffset.y = e.clientY - this.floatBall.offsetTop;
                    this.floatBall.classList.add('dragging');
                    
                    const mouseMoveHandler = (e) => {
                        this.isDragging = true;
                        let newX = e.clientX - this.dragOffset.x;
                        let newY = e.clientY - this.dragOffset.y;
                        
                        // 根据设置决定是否允许超出边缘
                        if (!this.configManager.get('allowHalfBall')) {
                            const maxX = window.innerWidth - this.floatBall.offsetWidth;
                            const maxY = window.innerHeight - this.floatBall.offsetHeight;
                            newX = Math.max(0, Math.min(newX, maxX));
                            newY = Math.max(0, Math.min(newY, maxY));
                        } else {
                            const halfSize = this.floatBall.offsetWidth / 2;
                            const maxX = window.innerWidth - halfSize;
                            const maxY = window.innerHeight - halfSize;
                            newX = Math.max(-halfSize, Math.min(newX, maxX));
                            newY = Math.max(-halfSize, Math.min(newY, maxY));
                        }
                        
                        this.floatBall.style.left = `${newX}px`;
                        this.floatBall.style.top = `${newY}px`;
                    };
                    
                    const mouseUpHandler = () => {
                        document.removeEventListener('mousemove', mouseMoveHandler);
                        document.removeEventListener('mouseup', mouseUpHandler);
                        this.floatBall.classList.remove('dragging');
                        
                        if (this.isDragging) {
                            this.configManager.set('floatBallPosition', {
                                x: parseInt(this.floatBall.style.left),
                                y: parseInt(this.floatBall.style.top)
                            });
                        }
                        
                        setTimeout(() => {
                            this.isDragging = false;
                        }, 100);
                    };
                    
                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                });
            }

            bindCommonEvents() {
                // 面板关闭按钮
                document.getElementById('translate-panel-close').addEventListener('click', () => {
                    this.togglePanel();
                });

                // 启用翻译开关
                document.getElementById('translate-enable').addEventListener('change', (e) => {
                    this.configManager.set('enabled', e.target.checked);
                    this.translateManager.toggle(e.target.checked);
                });

                // 自动翻译开关
                document.getElementById('translate-auto').addEventListener('change', (e) => {
                    this.configManager.set('autoTranslate', e.target.checked);
                });

                // 本地语言选择
                document.getElementById('translate-local-lang').addEventListener('change', (e) => {
                    this.configManager.set('localLanguage', e.target.value);
                    if (typeof translate !== 'undefined') {
                        translate.language.setLocal(e.target.value);
                    }
                });

                // 目标语言选择
                document.getElementById('translate-target-lang').addEventListener('change', (e) => {
                    this.configManager.set('targetLanguage', e.target.value);
                });

                // 显示悬浮球开关
                document.getElementById('translate-show-ball').addEventListener('change', (e) => {
                    this.configManager.set('showFloatBall', e.target.checked);
                    this.floatBall.style.display = e.target.checked ? 'flex' : 'none';
                });

                // 允许悬浮球超出边缘
                document.getElementById('translate-allow-half').addEventListener('change', (e) => {
                    this.configManager.set('allowHalfBall', e.target.checked);
                    this.ensureInViewport();
                });

                // 悬浮球大小滑块
                const sizeSlider = document.getElementById('translate-ball-size');
                if (sizeSlider) {
                    sizeSlider.addEventListener('input', (e) => {
                        const size = parseInt(e.target.value);
                        this.configManager.set('floatBallSize', size);
                        this.floatBall.style.width = `${size}px`;
                        this.floatBall.style.height = `${size}px`;
                        e.target.nextElementSibling.textContent = `${size}px`;
                        this.ensureInViewport();
                    });
                }

                // 悬浮球透明度滑块
                const opacitySlider = document.getElementById('translate-ball-opacity');
                if (opacitySlider) {
                    opacitySlider.addEventListener('input', (e) => {
                        const opacity = parseInt(e.target.value) / 100;
                        this.configManager.set('floatBallOpacity', opacity);
                        this.floatBall.style.opacity = opacity;
                        e.target.nextElementSibling.textContent = `${e.target.value}%`;
                    });
                }

                // 立即翻译按钮
                document.getElementById('translate-now-btn').addEventListener('click', () => {
                    const targetLang = this.configManager.get('targetLanguage');
                    this.translateManager.changeLanguage(targetLang);
                    this.togglePanel();
                });

                // 重置位置按钮
                document.getElementById('translate-reset-btn').addEventListener('click', () => {
                    const defaultPosition = { x: 20, y: 100 };
                    this.floatBall.style.left = `${defaultPosition.x}px`;
                    this.floatBall.style.top = `${defaultPosition.y}px`;
                    this.configManager.set('floatBallPosition', defaultPosition);
                });

                // 监听窗口大小变化
                window.addEventListener('resize', () => {
                    this.ensureInViewport();
                });

                // 监听方向变化
                window.addEventListener('orientationchange', () => {
                    setTimeout(() => {
                        this.ensureInViewport();
                    }, 300);
                });
            }

            togglePanel() {
                if (this.panel.classList.contains('show')) {
                    this.panel.classList.remove('show');
                } else {
                    this.panel.classList.add('show');
                    if (!isMobile()) {
                        this.positionPanel();
                    }
                }
            }

            positionPanel() {
                if (isMobile()) return;

                const ballRect = this.floatBall.getBoundingClientRect();
                const panelWidth = 400;
                const panelHeight = 600;
                
                let left = ballRect.right + 10;
                let top = ballRect.top;
                
                if (left + panelWidth > window.innerWidth) {
                    left = ballRect.left - panelWidth - 10;
                }
                
                if (left < 0) {
                    left = (window.innerWidth - panelWidth) / 2;
                }
                
                if (top < 10) {
                    top = 10;
                }
                
                if (top + panelHeight > window.innerHeight - 10) {
                    top = window.innerHeight - panelHeight - 10;
                }
                
                this.panel.style.left = `${left}px`;
                this.panel.style.top = `${top}px`;
            }

            ensureInViewport() {
                const position = this.configManager.get('floatBallPosition');
                const size = this.configManager.get('floatBallSize');
                const allowHalf = this.configManager.get('allowHalfBall');
                
                let x = position.x;
                let y = position.y;
                
                if (allowHalf) {
                    const halfSize = size / 2;
                    const maxX = window.innerWidth - halfSize;
                    const maxY = window.innerHeight - halfSize;
                    x = Math.max(-halfSize, Math.min(x, maxX));
                    y = Math.max(-halfSize, Math.min(y, maxY));
                } else {
                    const maxX = window.innerWidth - size;
                    const maxY = window.innerHeight - size;
                    x = Math.max(0, Math.min(x, maxX));
                    y = Math.max(0, Math.min(y, maxY));
                }
                
                this.floatBall.style.left = `${x}px`;
                this.floatBall.style.top = `${y}px`;
                
                if (x !== position.x || y !== position.y) {
                    this.configManager.set('floatBallPosition', { x, y });
                }
            }
        }

        // 初始化
        async function init() {
            // 等待DOM加载
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }

            try {
                // 动态加载 translate.js
                await loadScript('https://cdnjs.webstatic.cn/ajax/libs/translate.js/3.18.0/translate.js');
                
                // 初始化组件
                const configManager = new ConfigManager();
                const translateManager = new TranslateManager(configManager);
                const uiManager = new UIManager(configManager, translateManager);

                // 注册菜单命令
                GM_registerMenuCommand('打开翻译设置', () => {
                    uiManager.togglePanel();
                });

                // 全局对象
                window.translateHelper = {
                    config: configManager,
                    translate: translateManager,
                    ui: uiManager
                };

                console.log('智能翻译助手已加载');
            } catch (error) {
                console.error('翻译脚本加载失败:', error);
            }
        }

        // 延迟初始化主功能，确保悬浮球已显示
        setTimeout(init, 100);
    })();
})();
