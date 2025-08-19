// ==UserScript==
// @name        智能翻译助手
// @name:zh-CN  智能翻译助手
// @name:zh-TW  智能翻譯助手
// @name:ar     Intelligent Translation Assistant
// @name:bg     Intelligent Translation Assistant
// @name:cs     Intelligent Translation Assistant
// @name:da     Intelligent Translation Assistant
// @name:de     Intelligent Translation Assistant
// @name:el     Intelligent Translation Assistant
// @name:en     Intelligent Translation Assistant
// @name:eo     Intelligent Translation Assistant
// @name:es     Intelligent Translation Assistant
// @name:es-419 Intelligent Translation Assistant
// @name:fi     Intelligent Translation Assistant
// @name:fr     Intelligent Translation Assistant
// @name:fr-CA  Intelligent Translation Assistant
// @name:he     Intelligent Translation Assistant
// @name:hr     Intelligent Translation Assistant
// @name:hu     Intelligent Translation Assistant
// @name:id     Intelligent Translation Assistant)
// @name:it     Intelligent Translation Assistant
// @name:ja     Intelligent Translation Assistant
// @name:ka     Intelligent Translation Assistant
// @name:ko     Intelligent Translation Assistant
// @name:nb     Intelligent Translation Assistant
// @name:nl     Intelligent Translation Assistant
// @name:pl     Intelligent Translation Assistant
// @name:pt-BR  Intelligent Translation Assistant
// @name:ro     Intelligent Translation Assistant
// @name:ru     Intelligent Translation Assistant
// @name:sv     Intelligent Translation Assistant
// @name:th     Intelligent Translation Assistant
// @name:tr     Intelligent Translation Assistant
// @name:uk     Intelligent Translation Assistant
// @name:ug     Intelligent Translation Assistant
// @name:vi     Intelligent Translation Assistant
// @namespace    http://tampermonkey.net/
// @version      1.1.2
// @description       功能强大的网页翻译工具，支持多语言，可自定义配置，界面精美，支持移动端
// @description:zh-CN 功能强大的网页翻译工具，支持多语言，可自定义配置，界面精美，支持移动端
// @description:zh-TW 功能強大的網頁翻譯工具，支援多語言，可自訂配置，介面精美，支援行動端
// @description:ar    أداة ترجمة ويب قوية، تدعم لغات متعددة، ويمكن تخصيصها، ولها واجهة جميلة، وتدعم الأجهزة المحمولة
// @description:bg    Мощен инструмент за уеб превод, поддържа множество езици, може да се персонализира, има красив интерфейс и поддържа мобилни терминали
// @description:cs    Výkonný nástroj pro webový překlad, podporuje více jazyků, lze jej přizpůsobit, má krásné rozhraní a podporuje mobilní terminály
// @description:da    Kraftfuldt weboversættelsesværktøj, understøtter flere sprog, kan tilpasses, har en flot brugerflade og understøtter mobile terminaler
// @description:de    Leistungsstarkes Web-Übersetzungstool, unterstützt mehrere Sprachen, kann angepasst werden, hat eine schöne Benutzeroberfläche und unterstützt mobile Endgeräte
// @description:el    Ισχυρό εργαλείο μετάφρασης ιστοσελίδων, υποστηρίζει πολλές γλώσσες, μπορεί να προσαρμοστεί, έχει όμορφο περιβάλλον εργασίας και υποστηρίζει κινητά τερματικά
// @description:eo    Potenca rettradukilo, subtenas plurajn lingvojn, povas esti personigita, havas belan interfacon, kaj subtenas porteblajn terminalojn
// @description:es    Potente herramienta de traducción web, admite varios idiomas, se puede personalizar, tiene una hermosa interfaz y es compatible con terminales móviles.
// @description:fi    Tehokas verkkokäännöstyökalu, tukee useita kieliä, on muokattavissa, siinä on kaunis käyttöliittymä ja se tukee mobiililaitteita
// @description:fr    Outil de traduction Web puissant, prend en charge plusieurs langues, peut être personnalisé, possède une belle interface et prend en charge les terminaux mobiles
// @description:fr-CA Outil de traduction Web puissant, prend en charge plusieurs langues, peut être personnalisé, possède une belle interface et prend en charge les terminaux mobiles
// @description:he    כלי תרגום אינטרנט עוצמתי, תומך בשפות מרובות, ניתן להתאמה אישית, בעל ממשק יפהפה ותומך במסופים ניידים
// @description:hr    Moćan alat za web prevođenje, podržava više jezika, može se prilagoditi, ima prekrasno sučelje i podržava mobilne terminale
// @description:hu    Hatékony weblapfordító eszköz, többnyelvű támogatással, testreszabható beállításokkal, kifinomult felülettel és mobil eszközökre optimalizálva.
// @description:id    Alat penerjemah situs web yang andal, mendukung multi-bahasa, dapat dikonfigurasi sesuai kebutuhan, antarmuka elegan, dan kompatibel dengan perangkat seluler.
// @description:it    Uno strumento di traduzione web potente, supporta più lingue, configurabile, con interfaccia raffinata e compatibile con dispositivi mobili.
// @description:ja    強力なウェブ翻訳ツール。多言語対応、カスタマイズ可能な設定、洗練されたインターフェース、モバイル対応。
// @description:ka    მძლავრი ვებ-გვერდის თარგმნის ინსტრუმენტი, მრავალენოვანი მხარდაჭერით, კონფიგურირებადი პარამეტრებით, დახვეწილი ინტერფეისით და მობილური მოწყობილობებისთვის მხარდაჭერით.
// @description:ko    강력한 웹페이지 번역 도구, 다국어 지원, 사용자 정의 설정 가능, 세련된 인터페이스, 모바일 지원.
// @description:nb    Et kraftig nettstedoversettelsesverktøy som støtter flere språk, kan tilpasses, har et elegant grensesnitt og er egnet for mobilbruk.
// @description:nl    Een krachtige webvertaaltool, ondersteunt meerdere talen, is aanpasbaar, heeft een verfijnde interface en ondersteuning voor mobiele apparaten.
// @description:pl    Potężne narzędzie do tłumaczenia stron internetowych, obsługujące wiele języków, konfigurowalne, z eleganckim interfejsem i obsługą urządzeń mobilnych.
// @description:pt-BR Uma ferramenta de tradução de páginas web poderosa, suporte multilíngue, configurável, interface refinada e compatível com dispositivos móveis.
// @description:ro    Un instrument puternic de traducere a paginilor web, suportă mai multe limbi, configurabil, cu interfață rafinată și suport pentru dispozitive mobile.
// @description:ru    Мощный инструмент для перевода веб-страниц, поддерживает множество языков, настраиваемую конфигурацию, изысканный интерфейс и работу на мобильных устройствах.
// @description:sv    Ett kraftfullt översättningsverktyg för webbsidor, stöder flerspråkighet, anpassningsbara inställningar, sofistikerat gränssnitt och mobilkompatibilitet.
// @description:th    เครื่องมือแปลเว็บเพจอันทรงพลัง รองรับหลายภาษา สามารถกำหนดค่าต่างๆ ได้เอง มีอินเทอร์เฟซที่สวยงาม และรองรับการทำงานบนมือถือ
// @description:tr    Güçlü bir web sayfası çeviri aracı, çok dilli destek, özelleştirilebilir yapılandırma, şık arayüz ve mobil cihaz desteği.
// @description:uk    Потужний інструмент для перекладу веб-сторінок, підтримує багатомовність, налаштування, витончений інтерфейс і сумісність з мобільними пристроями.
// @description:ug    كۈچلۈك توربەت تەرجىمە قورالى، كۆپ تىلنى قوللايدۇ، سەپلىمە تەڭشىكى، زىنھار ئېغىز كۆرۈنۈشى ۋە تەۋەككۈر ئۈسكۈنىسىنى قوللايدۇ.
// @description:vi    Công cụ dịch trang web mạnh mẽ, hỗ trợ đa ngôn ngữ, có thể tùy chỉnh cấu hình, giao diện tinh tế và hỗ trợ thiết bị di động.
// @author       Eray
// @icon      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABvBAMAAAApjDIIAAAA82VYSWZNTQAqAAAACAAFAQAAAwAAAAEAcQAAAQEAAwAAAAEAbwAAATEAAgAAABcAAABKh2kABAAAAAEAAABhARIABAAAAAEAAAAAAAAAAEFuZHJvaWQgUEQyMTE4X0FfOS4zLjEAAASQAwACAAAAFAAAAJeSkQACAAAABDc4MgCQEQACAAAABwAAAKuSCAAEAAAAAQAAAAAAAAAAMjAyNTowODoxOSAyMjoxMjoxMAArMDg6MDAAAAMBAAADAAAAAQBxAAABMQACAAAAFwAAANwBAQADAAAAAQBvAAAAAAAAQW5kcm9pZCBQRDIxMThfQV85LjMuMQA+yDmGAAAAFVBMVEVuY8VtacxwXbxub9P///+3s+Pp6Pd/O4+7AAAGzklEQVRYw41Yy3IcNwwEqEhnTljKmTUp57zjjXyOotGeV9bj7NiK/v8TghdJkDu7MWVLpSr1NtBoYMCB/eZJyz6lNC1p6k+cECGCnC3UsoXDSGeCGAlKZwOZ+EvRE31fOjTSP2Ld5Ez8Py3MOXlUFMoI/AW4GS1hhDPxmfhL2JRSGClUPEUSbL/o6dVhjPBSnqrRGU5RaMiShUUQzniCpGqIrgTrsmxxRqvJKeciVdE0CZJ8WYRTNRqRzKecPQyNEyFWIJy3T6pQrFlKyFoUGMSxM20oW5Q5l2cqJdGAhSwqr6IjniKXvTm2GaBA2bEADTVyLnvn2JYmc6pjIbZWgb6WRjk4Vv61cmxyCmVxbBWWfUflVJHsZOikXfbbjp1UG0ZgAYJPcl9rsiRHycGarltVqcIOjhVdyT0IXtcMPadkuRTvFbNymtolrG2BtjxTETalvrNinHoH0Amdtsk7dmmORW0S6NChIltvDY6NpZ2bAwiWGdpxFmia7l5fF+GTaalTNnqFLE+zgIwPETa9fXw8mdtbY6IHwtCXOn6m6WVdnzjBWJVtnITKNVrXlVpMQVqs3nRKmIMh09JGgYWrSJs9XEr0aQbzbRuxTVeNtozY2IvTOBcGE+Ptaz2E/Lf9ths42ULAht2b57581LOua/vl4+gwQY5VZbFHHxFtn103RjRicLVMf55DHl1fZmEsjtfpM13gHAg5z6VO2ekip1WDCZlzVs5kEr19DOd9XQ/8c4e9rkIqo2BSy6ZxbFMQD/wzOliWLBnJT0uxDz841ROlOfGlBNrmFoTqBBnMfVvGyaYdIxEHbSRL42QrDGMEpcHeRdbRPnxm4ZQUhxkrRr9e10fourKlyZxcl/00kEp/3ZBAWBaKOkk4yyBIHbEVFXkcaI+8tEoOWc5BOJnUQbkU0pggaSL68ayxzp6zrQW3VH7GRU3T4UwcaZbs3FdI0/t6eGLON0uzQQP7nT5gFm1PRyyl9w+X892nGQqlxMp5qmfcHInTbxQl6XPNTYLQpal9bfXUseUfJAx5gvhW06R5chRpZzDSeWbOve0hFY4U5g+8ou/PSknhP4A8EkwhcYJbmMoTOn5hdW85WOXkZrNyMoz0Ec6NJYbDPb7UYPnXwy4UYbUuGfQB5CijdtcjB6vy3PBY+CbBiqzGWbYC/5TGO5khBwtWhsw3HQSqkFQljXssW53MsIoqcmSwPcj0Yc7ZOKfFbwW66U/6x0crpnzMQf2uJwtyXH5kGnBqB2uuTzr/LEtVVqNtewxGvdEY53OVluXaaZZSlnDKacvvrQ1oMGnvuVM5RM1zVm07VfVCE23Y/ygCHX9hvcR/YlquDEx+GdUVT4pyKKSZW+YPiljC1EhLPbsNj+Ds2PX5xUiv6Kc0AZQGs2hPt0ok266Pu1slzTIZZvqwzyG0cnqFsGwwYoNnuDLSGw6Uk/0eznLKVgCTUgJwto8QCHMPM33/yymryNSE5TGrWXKCghFpc+DRq8rOpcv6O20sWXI57ngOsbQxZzLS42yB9tGWpbJkCUp6FAfx43ZliXKu4MZpS+XUKCHfHYDDfGQH0Ad+V1F7pGWJJUsdeFev0pz3NDFnFbfFW5CxWNZR0oxdRNqDPfgfpEnGaOVCQqdlqdNVm1PPIecThcw8qBNo50bzJ7+i1CQrEttWedeylMfItUd+nk847dKOXAlPKQ5o5+tYT5Rq2p327rl77nVr2YMLt0RbOCNc7drDSwV61t2IB/8QLbZbUES35/PO8zt3mv7pJ0aGPtpyCwK3iwZ9RrNd5flDf/veSUTIWG5B/tpV9jv2Xubeoq5mF3lk1DuJvveBbvuheLktZ+mteSYf/j1oGxtnjN0+EbQ5deLdmP9atPr+pb9EZ9YnSHP+WnyuLeqQWKrS3Q90oeDmtElA4M5FHC0/DYZbRZbFGTKP2TZ9KICvHSfGliV2nIFuhE9t4NGi8XWoynDx4nVdlvWMaYq+JSF0VcFyeqjV3zYR118tWr13uVpmAfLzErYwXbR9LSun7ltz9tPSc0L/gkGvpbrHzmUT2ULy7AJ0VQliWeUEHepbERMnDO8KtL3siXeZc3jvk7Wly1awjWMk+mYuu2hZl4w2b3PW13E11qCTVra7+RInuqbUNwVSyNn2gq2SFCRi924su11fOMMZpL/IlPulLqLzhWDZxDFif4n2e+zFPCVJ9Pe1fsO7WBU/ffQa5Da8fD7afvronWK+4IGKxOEtVS63PblFnamJaev7MgRXkf/lxPEKpW0ZLqJzZx/jlPvl2TAdZwfVWs7FCxeRLtJQHRt+grN1SQj1dqodtj2ACvI/wZeKnkWuZZ8AAAAASUVORK5CYII=
// @run-at       document-start
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @license       Apache-2.0
// @require       https://unpkg.com/i18n-jsautotranslate@3.18.0/index.js
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
                allowHalfBall: true,
                panelPosition: null,
                panelSize: isMobile() ? 0.9 : 1, // 移动端默认90%，PC端默认100%
                panelOpacity: 1
            };
            const saved = GM_getValue('translateConfig', null);
            return saved ? { ...defaultConfig, ...saved } : defaultConfig;
        };

        const config = getConfig();
        const mobile = isMobile();

        // 检测深色模式
        const isDarkMode = () => {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        };

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

        // 检测深色模式
        function isDarkMode() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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
                    allowHalfBall: true,
                    panelPosition: null,
                    panelSize: isMobile() ? 0.9 : 1,
                    panelOpacity: 1
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
                this.isTranslating = false;
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

                    this.initialized = true;
                } catch (error) {
                    console.error('翻译初始化失败:', error);
                }
            }

            startListener() {
                if (!this.listenerStarted && typeof translate !== 'undefined') {
                    try {
                        translate.listener.start();
                        this.listenerStarted = true;
                    } catch (error) {
                        // 忽略重复启动的错误
                        if (!error.message?.includes('已经启动')) {
                            console.error('启动监听失败:', error);
                        }
                    }
                }
            }

            changeLanguage(targetLang) {
                if (!this.initialized) this.init();
                if (typeof translate === 'undefined') return;
                
                try {
                    // 避免重复翻译到相同语言
                    if (this.currentLanguage === targetLang && this.isTranslating) {
                        return;
                    }
                    
                    this.currentLanguage = targetLang;
                    this.isTranslating = true;
                    
                    // 确保监听器已启动
                    this.startListener();
                    
                    translate.changeLanguage(targetLang);
                } catch (error) {
                    console.error('切换语言失败:', error);
                    this.isTranslating = false;
                }
            }

            toggle(enabled) {
                if (enabled && !this.initialized) {
                    this.init();
                    this.startListener();
                    if (this.configManager.get('autoTranslate')) {
                        setTimeout(() => {
                            this.changeLanguage(this.configManager.get('targetLanguage'));
                        }, 100);
                    }
                } else if (!enabled && this.initialized) {
                    this.isTranslating = false;
                    this.changeLanguage(this.configManager.get('localLanguage'));
                }
            }

            execute() {
                if (!this.initialized) this.init();
                if (typeof translate !== 'undefined') {
                    try {
                        this.startListener();
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
                this.isPanelDragging = false;
                this.dragOffset = { x: 0, y: 0 };
                this.panelDragOffset = { x: 0, y: 0 };
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
                const darkMode = isDarkMode();
                
                GM_addStyle(`
                    /* 深色模式支持 */
                    ${darkMode ? `
                        #translate-panel {
                            background: #1e1e1e !important;
                            color: #e0e0e0 !important;
                        }
                        
                        .translate-panel-header {
                            background: linear-gradient(135deg, #4a5eb7 0%, #5a3d7a 100%) !important;
                        }
                        
                        .translate-control-label {
                            color: #e0e0e0 !important;
                        }
                        
                        .translate-select {
                            background: #2d2d2d !important;
                            color: #e0e0e0 !important;
                            border-color: #444 !important;
                        }
                        
                        .translate-select:focus {
                            border-color: #667eea !important;
                        }
                        
                        .translate-select option {
                            background: #2d2d2d !important;
                            color: #e0e0e0 !important;
                        }
                        
                        .translate-slider {
                            background: #444 !important;
                        }
                        
                        .translate-slider-value {
                            color: #b0b0b0 !important;
                        }
                        
                        .translate-section-title {
                            color: #e0e0e0 !important;
                            border-bottom-color: #444 !important;
                        }
                        
                        .translate-info {
                            background: #2d2d2d !important;
                            color: #b0b0b0 !important;
                        }
                        
                        .translate-description {
                            color: #999 !important;
                        }
                    ` : ''}
                    
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
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                        z-index: 2147483646;
                        display: none;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        overflow: hidden;
                        touch-action: none;
                        user-select: none;
                        -webkit-user-select: none;
                    }

                    #translate-panel.show {
                        display: block;
                        animation: slideIn 0.3s ease;
                    }

                    #translate-panel.dragging {
                        transition: none !important;
                        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
                    }

                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .translate-panel-header {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: ${mobile ? '15px' : '20px'};
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: move;
                    }

                    .translate-panel-title {
                        font-size: ${mobile ? '16px' : '18px'};
                        font-weight: 600;
                        user-select: none;
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
                        max-height: ${mobile ? '60vh' : '500px'};
                        overflow-y: auto;
                        -webkit-overflow-scrolling: touch;
                        cursor: default;
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

                    .translate-description {
                        font-size: 12px;
                        color: #666;
                        margin-top: 4px;
                        font-weight: normal;
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
                        color: #333;
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

                    .translate-button-group {
                        display: flex;
                        gap: 10px;
                        margin-bottom: ${mobile ? '15px' : '20px'};
                    }

                    .translate-button-group .translate-button {
                        flex: 1;
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
                const config = this.configManager.config;

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
                                <input type="checkbox" id="translate-enable" ${config.enabled ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">自动翻译</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-auto" ${config.autoTranslate ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">
                                源语言
                                <div class="translate-description">当前页面的语言</div>
                            </label>
                            <select class="translate-select" id="translate-local-lang">
                                ${languages.map(lang => `
                                    <option value="${lang.value}" ${config.localLanguage === lang.value ? 'selected' : ''}>
                                        ${lang.name}
                                    </option>
                                `).join('')}
                            </select>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">
                                目标语言
                                <div class="translate-description">要翻译成什么语言</div>
                            </label>
                            <select class="translate-select" id="translate-target-lang">
                                ${languages.map(lang => `
                                    <option value="${lang.value}" ${config.targetLanguage === lang.value ? 'selected' : ''}>
                                        ${lang.name}
                                    </option>
                                `).join('')}
                            </select>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="translate-control-group" style="margin-top: 25px;">
                            <button class="translate-button" id="translate-now-btn">立即翻译</button>
                        </div>

                        <!-- 界面设置 -->
                        <div class="translate-section-title" style="margin-top: 25px;">界面设置</div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">显示悬浮球</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-show-ball" ${config.showFloatBall ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">允许悬浮球超出边缘</label>
                            <label class="translate-switch">
                                <input type="checkbox" id="translate-allow-half" ${config.allowHalfBall ? 'checked' : ''}>
                                <span class="translate-switch-slider"></span>
                            </label>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球大小</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-ball-size" 
                                    min="30" max="80" value="${config.floatBallSize}">
                                <span class="translate-slider-value">${config.floatBallSize}px</span>
                            </div>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球透明度</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-ball-opacity" 
                                    min="30" max="100" value="${config.floatBallOpacity * 100}">
                                <span class="translate-slider-value">${Math.round(config.floatBallOpacity * 100)}%</span>
                            </div>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">控制面板大小</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-panel-size" 
                                    min="50" max="120" value="${config.panelSize * 100}">
                                <span class="translate-slider-value">${Math.round(config.panelSize * 100)}%</span>
                            </div>
                        </div>

                        <div class="translate-control-group">
                            <label class="translate-control-label">控制面板透明度</label>
                            <div class="translate-slider-container">
                                <input type="range" class="translate-slider" id="translate-panel-opacity" 
                                    min="50" max="100" value="${config.panelOpacity * 100}">
                                <span class="translate-slider-value">${Math.round(config.panelOpacity * 100)}%</span>
                            </div>
                        </div>

                        <div class="translate-button-group">
                            <button class="translate-button" id="translate-reset-ball-btn" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                重置悬浮球位置
                            </button>
                            <button class="translate-button" id="translate-reset-panel-btn" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                                重置面板位置
                            </button>
                        </div>

                        <div class="translate-info">
                            💡 提示：${mobile ? '长按' : '拖动'}悬浮球或面板标题栏可调整位置，设置会自动保存
                        </div>
                    </div>
                `;
                
                document.body.appendChild(panel);
                this.panel = panel;

                // 设置面板初始大小和透明度
                this.updatePanelSize();
                this.panel.style.opacity = config.panelOpacity;

                // 恢复面板位置
                if (config.panelPosition) {
                    this.panel.style.left = `${config.panelPosition.x}px`;
                    this.panel.style.top = `${config.panelPosition.y}px`;
                }
            }

            updatePanelSize() {
                const mobile = isMobile();
                const size = this.configManager.get('panelSize');
                const baseWidth = mobile ? window.innerWidth * 0.9 : 400;
                const baseHeight = mobile ? window.innerHeight * 0.8 : 600;
                
                const width = Math.min(baseWidth * size, mobile ? window.innerWidth * 0.95 : 600);
                const maxHeight = baseHeight * size;
                
                this.panel.style.width = `${width}px`;
                this.panel.style.maxHeight = `${maxHeight}px`;
                
                // 更新body的最大高度
                const body = this.panel.querySelector('.translate-panel-body');
                if (body) {
                    body.style.maxHeight = `${maxHeight - 60}px`;
                }
            }

            bindEvents() {
                const mobile = isMobile();

                if (mobile) {
                    this.bindMobileEvents();
                } else {
                    this.bindDesktopEvents();
                }

                this.bindCommonEvents();
                this.bindPanelDragEvents();
            }

            bindPanelDragEvents() {
                const header = this.panel.querySelector('.translate-panel-header');
                const mobile = isMobile();

                if (mobile) {
                    // 移动端面板拖动
                    let isDragging = false;
                    let startX, startY, initialX, initialY;
                    let longPressTimer = null;

                    header.addEventListener('touchstart', (e) => {
                        // 如果点击的是关闭按钮，不触发拖动
                        if (e.target.id === 'translate-panel-close') return;
                        
                        const touch = e.touches[0];
                        startX = touch.clientX;
                        startY = touch.clientY;
                        initialX = this.panel.offsetLeft;
                        initialY = this.panel.offsetTop;
                        
                        // 长按300ms后开始拖动
                        longPressTimer = setTimeout(() => {
                            isDragging = true;
                            this.panel.classList.add('dragging');
                            if (navigator.vibrate) {
                                navigator.vibrate(50);
                            }
                        }, 300);
                        
                        e.preventDefault();
                    });

                    header.addEventListener('touchmove', (e) => {
                        if (!isDragging) {
                            // 如果移动了就取消长按
                            if (longPressTimer) {
                                const touch = e.touches[0];
                                const moveDistance = Math.sqrt(
                                    Math.pow(touch.clientX - startX, 2) + 
                                    Math.pow(touch.clientY - startY, 2)
                                );
                                if (moveDistance > 10) {
                                    clearTimeout(longPressTimer);
                                    longPressTimer = null;
                                }
                            }
                            return;
                        }
                        
                        const touch = e.touches[0];
                        const dx = touch.clientX - startX;
                        const dy = touch.clientY - startY;
                        
                        let newX = initialX + dx;
                        let newY = initialY + dy;
                        
                        // 限制在可视区域内
                        const maxX = window.innerWidth - this.panel.offsetWidth;
                        const maxY = window.innerHeight - this.panel.offsetHeight;
                        
                        newX = Math.max(0, Math.min(newX, maxX));
                        newY = Math.max(0, Math.min(newY, maxY));
                        
                        this.panel.style.left = `${newX}px`;
                        this.panel.style.top = `${newY}px`;
                        
                        e.preventDefault();
                    });

                    header.addEventListener('touchend', () => {
                        if (longPressTimer) {
                            clearTimeout(longPressTimer);
                            longPressTimer = null;
                        }
                        
                        if (isDragging) {
                            isDragging = false;
                            this.panel.classList.remove('dragging');
                            
                            // 保存面板位置
                            this.configManager.set('panelPosition', {
                                x: parseInt(this.panel.style.left),
                                y: parseInt(this.panel.style.top)
                            });
                        }
                    });
                } else {
                    // PC端面板拖动
                    let isDragging = false;
                    let startX, startY, initialX, initialY;

                    header.addEventListener('mousedown', (e) => {
                        // 如果点击的是关闭按钮，不触发拖动
                        if (e.target.id === 'translate-panel-close') return;
                        
                        isDragging = true;
                        startX = e.clientX;
                        startY = e.clientY;
                        initialX = this.panel.offsetLeft;
                        initialY = this.panel.offsetTop;
                        
                        this.panel.classList.add('dragging');
                        e.preventDefault();
                    });

                    document.addEventListener('mousemove', (e) => {
                        if (!isDragging) return;
                        
                        const dx = e.clientX - startX;
                        const dy = e.clientY - startY;
                        
                        let newX = initialX + dx;
                        let newY = initialY + dy;
                        
                        // 限制在可视区域内
                        const maxX = window.innerWidth - this.panel.offsetWidth;
                        const maxY = window.innerHeight - this.panel.offsetHeight;
                        
                        newX = Math.max(0, Math.min(newX, maxX));
                        newY = Math.max(0, Math.min(newY, maxY));
                        
                        this.panel.style.left = `${newX}px`;
                        this.panel.style.top = `${newY}px`;
                    });

                    document.addEventListener('mouseup', () => {
                        if (isDragging) {
                            isDragging = false;
                            this.panel.classList.remove('dragging');
                            
                            // 保存面板位置
                            this.configManager.set('panelPosition', {
                                x: parseInt(this.panel.style.left),
                                y: parseInt(this.panel.style.top)
                            });
                        }
                    });
                }
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

                // 控制面板大小滑块
                const panelSizeSlider = document.getElementById('translate-panel-size');
                if (panelSizeSlider) {
                    panelSizeSlider.addEventListener('input', (e) => {
                        const size = parseInt(e.target.value) / 100;
                        this.configManager.set('panelSize', size);
                        this.updatePanelSize();
                        e.target.nextElementSibling.textContent = `${e.target.value}%`;
                        
                        // 确保面板在可视区域内
                        this.ensurePanelInViewport();
                    });
                }

                // 控制面板透明度滑块
                const panelOpacitySlider = document.getElementById('translate-panel-opacity');
                if (panelOpacitySlider) {
                    panelOpacitySlider.addEventListener('input', (e) => {
                        const opacity = parseInt(e.target.value) / 100;
                        this.configManager.set('panelOpacity', opacity);
                        this.panel.style.opacity = opacity;
                        e.target.nextElementSibling.textContent = `${e.target.value}%`;
                    });
                }

                // 立即翻译按钮
                document.getElementById('translate-now-btn').addEventListener('click', () => {
                    const targetLang = this.configManager.get('targetLanguage');
                    this.translateManager.changeLanguage(targetLang);
                    this.togglePanel();
                });

                // 重置悬浮球位置按钮
                document.getElementById('translate-reset-ball-btn').addEventListener('click', () => {
                    const defaultPosition = { x: 20, y: 100 };
                    this.floatBall.style.left = `${defaultPosition.x}px`;
                    this.floatBall.style.top = `${defaultPosition.y}px`;
                    this.configManager.set('floatBallPosition', defaultPosition);
                });

                // 重置面板位置按钮
                document.getElementById('translate-reset-panel-btn').addEventListener('click', () => {
                    this.configManager.set('panelPosition', null);
                    this.positionPanel();
                });

                // 监听窗口大小变化
                window.addEventListener('resize', () => {
                    this.ensureInViewport();
                    this.ensurePanelInViewport();
                });

                // 监听方向变化
                window.addEventListener('orientationchange', () => {
                    setTimeout(() => {
                        this.ensureInViewport();
                        this.ensurePanelInViewport();
                        this.updatePanelSize();
                    }, 300);
                });
            }

            togglePanel() {
                if (this.panel.classList.contains('show')) {
                    this.panel.classList.remove('show');
                } else {
                    this.panel.classList.add('show');
                    const savedPosition = this.configManager.get('panelPosition');
                    if (!savedPosition) {
                        this.positionPanel();
                    } else {
                        this.ensurePanelInViewport();
                    }
                }
            }

            positionPanel() {
                const mobile = isMobile();
                
                if (mobile) {
                    // 移动端居中显示
                    const panelWidth = this.panel.offsetWidth;
                    const panelHeight = this.panel.offsetHeight;
                    
                    const left = (window.innerWidth - panelWidth) / 2;
                    const top = (window.innerHeight - panelHeight) / 2;
                    
                    this.panel.style.left = `${left}px`;
                    this.panel.style.top = `${top}px`;
                } else {
                    // PC端根据悬浮球位置定位
                    const ballRect = this.floatBall.getBoundingClientRect();
                    const panelWidth = this.panel.offsetWidth;
                    const panelHeight = this.panel.offsetHeight;
                    
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

            ensurePanelInViewport() {
                if (!this.panel.classList.contains('show')) return;
                
                const position = this.configManager.get('panelPosition');
                if (!position) return;
                
                const panelWidth = this.panel.offsetWidth;
                const panelHeight = this.panel.offsetHeight;
                
                let x = position.x;
                let y = position.y;
                
                const maxX = window.innerWidth - panelWidth;
                const maxY = window.innerHeight - panelHeight;
                
                x = Math.max(0, Math.min(x, maxX));
                y = Math.max(0, Math.min(y, maxY));
                
                this.panel.style.left = `${x}px`;
                this.panel.style.top = `${y}px`;
                
                if (x !== position.x || y !== position.y) {
                    this.configManager.set('panelPosition', { x, y });
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
