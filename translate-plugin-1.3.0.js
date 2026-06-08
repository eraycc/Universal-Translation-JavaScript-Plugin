// ==UserScript==
// @name        智能翻译助手
// @name:zh-CN  智能翻译助手
// @name:zh-TW  智能翻譯助手
// @name:zh-HK  智能翻譯助手
// @name:en     Intelligent Translation Assistant
// @name:es     Asistente de Traducción Inteligente
// @name:fr     Assistant de Traduction Intelligent
// @name:de     Intelligenter Übersetzungsassistent
// @name:it     Assistente di Traduzione Intelligente
// @name:pt     Assistente de Tradução Inteligente
// @name:pt-BR  Assistente de Tradução Inteligente
// @name:ru     Интеллектуальный Переводчик
// @name:ja     インテリジェント翻訳アシスタント
// @name:ko     지능형 번역 도우미
// @name:ar     مساعد الترجمة الذكي
// @name:tr     Akıllı Çeviri Asistanı
// @name:nl     Intelligente Vertaalassistent
// @name:pl     Inteligentny Asystent Tłumaczenia
// @name:sv     Intelligent Översättningsassistent
// @name:da     Intelligent Oversættelsesassistent
// @name:fi     Älykäs Käännösavustaja
// @name:no     Intelligent Oversettelsesassistent
// @name:cs     Inteligentní Překladový Asistent
// @name:hu     Intelligens Fordító Asszisztens
// @name:ro     Asistent de Traducere Inteligent
// @name:sk     Inteligentný Prekladový Asistent
// @name:uk     Інтелектуальний Помічник Перекладу
// @name:bg     Интелигентен Преводачески Асистент
// @name:el     Έξυπνος Βοηθός Μετάφρασης
// @name:he     עוזר תרגום חכם
// @name:hi     इंटेलिजेंट ट्रांसलेशन असिस्टेंट
// @name:th     ผู้ช่วยแปลอัจฉริยะ
// @name:vi     Trợ lý Dịch thuật Thông minh
// @name:id     Asisten Terjemahan Cerdas
// @name:ms     Pembantu Terjemahan Pintar
// @name:tl     Matalinong Katulong sa Pagsasalin
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description       功能强大的网页翻译工具，支持多语言，可自定义配置，界面精美，支持移动端
// @description:zh-CN 功能强大的网页翻译工具，支持多语言，可自定义配置，界面精美，支持移动端
// @description:zh-TW 功能強大的網頁翻譯工具，支援多語言，可自訂配置，介面精美，支援行動端
// @description:zh-HK 功能強大的網頁翻譯工具，支援多語言，可自訂配置，介面精美，支援行動端
// @description:en    Powerful web translation tool, supports multiple languages, customizable configuration, beautiful interface, mobile support
// @description:es    Potente herramienta de traducción web, admite múltiples idiomas, configuración personalizable, interfaz elegante, compatible con dispositivos móviles
// @description:fr    Outil de traduction web puissant, prend en charge plusieurs langues, configuration personnalisable, interface élégante, prise en charge mobile
// @description:de    Leistungsstarkes Web-Übersetzungstool, unterstützt mehrere Sprachen, anpassbare Konfiguration, schöne Oberfläche, Mobilgeräte-Unterstützung
// @description:it    Potente strumento di traduzione web, supporta più lingue, configurazione personalizzabile, interfaccia elegante, supporto mobile
// @description:pt    Ferramenta de tradução web poderosa, suporta vários idiomas, configuração personalizável, interface bonita, suporte móvel
// @description:pt-BR Ferramenta de tradução web poderosa, suporta vários idiomas, configuração personalizável, interface bonita, suporte móvel
// @description:ru    Мощный веб-инструмент перевода, поддерживает несколько языков, настраиваемая конфигурация, красивый интерфейс, поддержка мобильных устройств
// @description:ja    強力なウェブ翻訳ツール、多言語対応、カスタマイズ可能な設定、美しいインターフェース、モバイルサポート
// @description:ko    강력한 웹 번역 도구, 다국어 지원, 사용자 정의 구성, 아름다운 인터페이스, 모바일 지원
// @description:ar    أداة ترجمة ويب قوية، تدعم لغات متعددة، تكوين قابل للتخصيص، واجهة جميلة، دعم للأجهزة المحمولة
// @description:tr    Güçlü web çeviri aracı, çoklu dil desteği, özelleştirilebilir yapılandırma, güzel arayüz, mobil destek
// @description:nl    Krachtige webvertaaltool, ondersteunt meerdere talen, aanpasbare configuratie, mooie interface, ondersteuning voor mobiele apparaten
// @description:pl    Potężne narzędzie do tłumaczenia stron internetowych, obsługuje wiele języków, konfigurowalne ustawienia, piękny interfejs, obsługa urządzeń mobilnych
// @description:sv    Kraftfull webböversättningsverktyg, stöder flera språk, anpassningsbar konfiguration, vackert gränssnitt, mobilstöd
// @description:da    Kraftfuldt weboversættelsesværktøj, understøtter flere sprog, tilpasningsbar konfiguration, smukt interface, mobilunderstøttelse
// @description:fi    Tehokas verkkokäännöstyökalu, tukee useita kieliä, mukautettava määritys, kaunis käyttöliittymä, mobiilituki
// @description:no    Kraftig nettoversettelsesverktøy, støtter flere språk, tilpassbar konfigurasjon, vakkert grensesnitt, mobilstøtte
// @description:cs    Výkonný nástroj pro webový překlad, podporuje více jazyků, přizpůsobitelná konfigurace, krásné rozhraní, podpora mobilních zařízení
// @description:hu    Hatékony webes fordítási eszköz, támogatja a többnyelvűséget, testreszabható konfiguráció, szép felület, mobil támogatás
// @description:ro    Instrument puternic de traducere web, suportă mai multe limbi, configurație personalizabilă, interfață frumoasă, suport pentru dispozitive mobile
// @description:sk    Výkonný nástroj pre webový preklad, podporuje viac jazykov, prispôsobiteľná konfigurácia, krásne rozhranie, podpora mobilných zariadení
// @description:uk    Потужний веб-інструмент перекладу, підтримує кілька мов, настроювана конфігурація, красивий інтерфейс, підтримка мобільних пристроїв
// @description:bg    Мощен уеб преводачески инструмент, поддържа множество езици, персонализируема конфигурация, красив интерфейс, поддръжка на мобилни устройства
// @description:el    Ισχυρό εργαλείο μετάφρασης ιστού, υποστηρίζει πολλές γλώσσες, προσαρμόσιμη διαμόρφωση, όμορφη διεπαφή, υποστήριξη κινητών
// @description:he    כלי תרגום אינטרנט חזק, תומך במספר שפות, תצורה ניתנת להתאמה אישית, ממשק יפה, תמיכה בנייד
// @description:hi    शक्तिशाली वेब अनुवाद उपकरण, कई भाषाओं का समर्थन करता है, अनुकूलन योग्य विन्यास, सुंदर इंटरफेस, मोबाइल समर्थन
// @description:th    เครื่องมือแปลเว็บที่มีประสิทธิภาพ รองรับหลายภาษา การกำหนดค่าที่ปรับแต่งได้ อินเทอร์เฟซที่สวยงาม การรองรับมือถือ
// @description:vi    Công cụ dịch web mạnh mẽ, hỗ trợ đa ngôn ngữ, cấu hình tùy chỉnh, giao diện đẹp, hỗ trợ di động
// @description:id    Alat terjemahan web yang kuat, mendukung banyak bahasa, konfigurasi yang dapat disesuaikan, antarmuka yang indah, dukungan seluler
// @description:ms    Alat terjemahan web yang berkuasa, menyokong pelbagai bahasa, konfigurasi boleh suai, antara muka yang cantik, sokongan mudah alih
// @description:tl    Makapangyarihang tool sa pagsasalin ng web, sumusuporta sa maraming wika, naaayos na pagsasaayos, magandang interface, suporta sa mobile
// @author       Eray
// @icon      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABvBAMAAAApjDIIAAAA82VYSWZNTQAqAAAACAAFAQAAAwAAAAEAcQAAAQEAAwAAAAEAbwAAATEAAgAAABcAAABKh2kABAAAAAEAAABhARIABAAAAAEAAAAAAAAAAEFuZHJvaWQgUEQyMTE4X0FfOS4zLjEAAASQAwACAAAAFAAAAJeSkQACAAAABDc4MgCQEQACAAAABwAAAKuSCAAEAAAAAQAAAAAAAAAAMjAyNTowODoxOSAyMjoxMjoxMAArMDg6MDAAAAMBAAADAAAAAQBxAAABMQACAAAAFwAAANwBAQADAAAAAQBvAAAAAAAAQW5kcm9pZCBQRDIxMThfQV85LjMuMQA+yDmGAAAAFVBMVEVuY8VtacxwXbxub9P///+3s+Pp6Pd/O4+7AAAGzklEQVRYw41Yy3IcNwwEqEhnTljKmTUp57zjjXyOotGeV9bj7NiK/v8TghdJkDu7MWVLpSr1NtBoYMCB/eZJyz6lNC1p6k+cECGCnC3UsoXDSGeCGAlKZwOZ+EvRE31fOjTSP2Ld5Ez8Py3MOXlUFMoI/AW4GS1hhDPxmfhL2JRSGClUPEUSbL/o6dVhjPBSnqrRGU5RaMiShUUQzniCpGqIrgTrsmxxRqvJKeciVdE0CZJ8WYRTNRqRzKecPQyNEyFWIJy3T6pQrFlKyFoUGMSxM20oW5Q5l2cqJdGAhSwqr6IjniKXvTm2GaBA2bEADTVyLnvn2JYmc6pjIbZWgb6WRjk4Vv61cmxyCmVxbBWWfUflVJHsZOikXfbbjp1UG0ZgAYJPcl9rsiRHycGarltVqcIOjhVdyT0IXtcMPadkuRTvFbNymtolrG2BtjxTETalvrNinHoH0Amdtsk7dmmORW0S6NChIltvDY6NpZ2bAwiWGdpxFmia7l5fF+GTaalTNnqFLE+zgIwPETa9fXw8mdtbY6IHwtCXOn6m6WVdnzjBWJVtnITKNVrXlVpMQVqs3nRKmIMh09JGgYWrSJs9XEr0aQbzbRuxTVeNtozY2IvTOBcGE+Ptaz2E/Lf9ths42ULAht2b57581LOua/vl4+gwQY5VZbFHHxFtn103RjRicLVMf55DHl1fZmEsjtfpM13gHAg5z6VO2ekip1WDCZlzVs5kEr19DOd9XQ/8c4e9rkIqo2BSy6ZxbFMQD/wzOliWLBnJT0uxDz841ROlOfGlBNrmFoTqBBnMfVvGyaYdIxEHbSRL42QrDGMEpcHeRdbRPnxm4ZQUhxkrRr9e10fourKlyZxcl/00kEp/3ZBAWBaKOkk4yyBIHbEVFXkcaI+8tEoOWc5BOJnUQbkU0pggaSL68ayxzp6zrQW3VH7GRU3T4UwcaZbs3FdI0/t6eGLON0uzQQP7nT5gFm1PRyyl9w+X892nGQqlxMp5qmfcHInTbxQl6XPNTYLQpal9bfXUseUfJAx5gvhW06R5chRpZzDSeWbOve0hFY4U5g+8ou/PSknhP4A8EkwhcYJbmMoTOn5hdW85WOXkZrNyMoz0Ec6NJYbDPb7UYPnXwy4UYbUuGfQB5CijdtcjB6vy3PBY+CbBiqzGWbYC/5TGO5khBwtWhsw3HQSqkFQljXssW53MsIoqcmSwPcj0Yc7ZOKfFbwW66U/6x0crpnzMQf2uJwtyXH5kGnBqB2uuTzr/LEtVVqNtewxGvdEY53OVluXaaZZSlnDKacvvrQ1oMGnvuVM5RM1zVm07VfVCE23Y/ygCHX9hvcR/YlquDEx+GdUVT4pyKKSZW+YPiljC1EhLPbsNj+Ds2PX5xUiv6Kc0AZQGs2hPt0ok266Pu1slzTIZZvqwzyG0cnqFsGwwYoNnuDLSGw6Uk/0eznLKVgCTUgJwto8QCHMPM33/yymryNSE5TGrWXKCghFpc+DRq8rOpcv6O20sWXI57ngOsbQxZzLS42yB9tGWpbJkCUp6FAfx43ZliXKu4MZpS+XUKCHfHYDDfGQH0Ad+V1F7pGWJJUsdeFev0pz3NDFnFbfFW5CxWNZR0oxdRNqDPfgfpEnGaOVCQqdlqdNVm1PPIecThcw8qBNo50bzJ7+i1CQrEttWedeylMfItUd+nk847dKOXAlPKQ5o5+tYT5Rq2p327rl77nVr2YMLt0RbOCNc7drDSwV61t2IB/8QLbZbUES35/PO8zt3mv7pJ0aGPtpyCwK3iwZ9RrNd5flDf/veSUTIWG5B/tpV9jv2Xubeoq5mF3lk1DuJvveBbvuheLktZ+mteSYf/j1oGxtnjN0+EbQ5deLdmP9atPr+pb9EZ9YnSHP+WnyuLeqQWKrS3Q90oeDmtElA4M5FHC0/DYZbRZbFGTKP2TZ9KICvHSfGliV2nIFuhE9t4NGi8XWoynDx4nVdlvWMaYq+JSF0VcFyeqjV3zYR118tWr13uVpmAfLzErYwXbR9LSun7ltz9tPSc0L/gkGvpbrHzmUT2ULy7AJ0VQliWeUEHepbERMnDO8KtL3siXeZc3jvk7Wly1awjWMk+mYuu2hZl4w2b3PW13E11qCTVra7+RInuqbUNwVSyNn2gq2SFCRi924su11fOMMZpL/IlPulLqLzhWDZxDFif4n2e+zFPCVJ9Pe1fsO7WBU/ffQa5Da8fD7afvronWK+4IGKxOEtVS63PblFnamJaev7MgRXkf/lxPEKpW0ZLqJzZx/jlPvl2TAdZwfVWs7FCxeRLtJQHRt+grN1SQj1dqodtj2ACvI/wZeKnkWuZZ8AAAAASUVORK5CYII=
// @run-at       document-start
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @license      Apache-2.0
// @supportURL   https://github.com/eraycc/Universal-Translation-JavaScript-Plugin/issues
// @homepageURL  https://greasyfork.org/zh-CN/scripts/546362-%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%8A%A9%E6%89%8B
// @require      https://unpkg.com/i18n-jsautotranslate@4.0.0/index.js
// @downloadURL https://update.greasyfork.org/scripts/546362/%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/546362/%E6%99%BA%E8%83%BD%E7%BF%BB%E8%AF%91%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || window.innerWidth <= 768;
    }
    function isDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function buildDefaultConfig() {
        return {
            enabled: true,
            localLanguage: 'english',
            targetLanguage: 'chinese_simplified',
            autoTranslate: false,
            translateService: 'client.edge',
            customServiceUrls: '',
            showFloatBall: true,
            floatBallSize: isMobile() ? 45 : 50,
            floatBallPosition: { x: 20, y: 100 },
            floatBallOpacity: 0.8,
            allowHalfBall: true,
            doubleClickToggle: true,
            panelPosition: null,
            panelSize: isMobile() ? 0.9 : 1,
            panelOpacity: 1,
            ignoredClasses: '',
            ignoredIds: '',
            ignoredTags: '',
            ignoredTexts: '',
            customTerms: '',
            enableListener: true,
            enableCache: true,
            enableAjaxListener: true,
            waitingExecute: true,
            translateAttributes: ['title', 'alt', 'placeholder'],
            customTagAttributes: '',
            // 划词翻译（独立于总开关，拥有独立的源/目标语言）
            enableSelectionTranslate: false,
            selectionLocalLanguage: 'english',
            selectionTargetLanguage: 'chinese_simplified',
            // 高级
            enableWholeAll: false,
            translateLocal: false,
            translateLanguagesRange: '',
            hideTextBeforeTranslate: false,
            enableProgressTip: false,
            enableSSE: false,
            imageRules: '',
            enableIframe: false,
            iframeTranslateJsUrl: 'https://unpkg.com/i18n-jsautotranslate@4.0.0/index.js',
            appendParams: '',
            appendHeaders: ''
        };
    }

    function loadCfg() {
        const def = buildDefaultConfig();
        const saved = GM_getValue('translateConfig', null);
        return saved ? { ...def, ...saved } : def;
    }

    function injectGlobalStyles() {
        const mobile = isMobile();
        const dark = isDarkMode();
        GM_addStyle(`
            #translate-float-ball{
                position:fixed;border-radius:50%;
                background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
                box-shadow:0 4px 15px rgba(102,126,234,.4);
                cursor:${mobile ? 'pointer' : 'move'};
                z-index:2147483647;align-items:center;justify-content:center;
                transition:transform .3s ease,box-shadow .3s ease;
                user-select:none;-webkit-user-select:none;touch-action:none;
            }
            #translate-float-ball.tt-show{display:flex}
            #translate-float-ball.tt-hide{display:none}
            #translate-float-ball svg{
                width:${mobile ? '24px' : '28px'};height:${mobile ? '24px' : '28px'};
                fill:#fff;pointer-events:none;
            }
            @keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
            @keyframes slideOutRight{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}
            @keyframes ttSlideIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
            #translate-toast-container{position:fixed;top:20px;right:20px;z-index:2147483647;pointer-events:none}
            .tt-toast{color:#fff;padding:12px 20px;border-radius:8px;margin-bottom:10px;box-shadow:0 4px 12px rgba(0,0,0,.15);animation:slideInRight .3s ease;pointer-events:auto;font-size:14px}
            .tt-toast.tt-success{background:#4caf50}
            .tt-toast.tt-error{background:#f44336}
            .tt-toast.tt-info{background:#2196f3}
            .tt-toast.tt-out{animation:slideOutRight .3s ease}
            #translate-panel{
                position:fixed;background:#fff;border-radius:12px;
                box-shadow:0 10px 40px rgba(0,0,0,.15);z-index:2147483646;display:none;
                font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
                overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;
            }
            #translate-panel.show{display:block;animation:ttSlideIn .3s ease}
            #translate-panel.dragging{transition:none !important;box-shadow:0 15px 50px rgba(0,0,0,.2)}
            #translate-float-ball.dragging{transition:none !important;transform:scale(1.1);box-shadow:0 6px 20px rgba(102,126,234,.6)}
            #translate-float-ball:active{transform:scale(.95)}
            #translate-float-ball:hover{transform:scale(1.05);box-shadow:0 6px 20px rgba(102,126,234,.5)}
            .translate-panel-header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:${mobile ? '15px' : '20px'};display:flex;justify-content:space-between;align-items:center;cursor:move}
            .translate-panel-title{font-size:${mobile ? '16px' : '18px'};font-weight:600;user-select:none}
            .translate-panel-close{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.2);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .3s;font-size:18px;color:#fff}
            .translate-panel-close:hover{background:rgba(255,255,255,.3)}
            .translate-panel-body{padding:${mobile ? '15px' : '20px'};max-height:${mobile ? '60vh' : '500px'};overflow-y:auto;-webkit-overflow-scrolling:touch;cursor:default}
            .translate-panel-body::-webkit-scrollbar{width:6px}
            .translate-panel-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:3px}
            .translate-control-group{margin-bottom:${mobile ? '15px' : '20px'}}
            .translate-control-label{display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:#333}
            .translate-description{font-size:12px;color:#666;margin-top:4px;font-weight:normal}
            .translate-description a{color:#667eea}
            .translate-switch{position:relative;display:inline-block;width:50px;height:24px}
            .translate-switch input{opacity:0;width:0;height:0}
            .translate-switch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#ccc;transition:.4s;border-radius:24px}
            .translate-switch-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background:#fff;transition:.4s;border-radius:50%}
            .translate-switch input:checked + .translate-switch-slider{background:#667eea}
            .translate-switch input:checked + .translate-switch-slider:before{transform:translateX(26px)}
            .translate-select,.translate-input{width:100%;padding:${mobile ? '12px' : '10px'};border:1px solid #ddd;border-radius:8px;font-size:${mobile ? '16px' : '14px'};background:#fff;cursor:pointer;transition:border-color .3s;color:#333;box-sizing:border-box}
            .translate-select:focus,.translate-input:focus{outline:none;border-color:#667eea}
            .translate-textarea{width:100%;min-height:80px;padding:${mobile ? '12px' : '10px'};border:1px solid #ddd;border-radius:8px;font-size:${mobile ? '14px' : '13px'};background:#fff;transition:border-color .3s;color:#333;box-sizing:border-box;resize:vertical;font-family:monospace;line-height:1.5}
            .translate-textarea:focus{outline:none;border-color:#667eea}
            .translate-slider-container{display:flex;align-items:center;gap:10px}
            .translate-slider{flex:1;-webkit-appearance:none;height:6px;border-radius:3px;background:#ddd;outline:none}
            .translate-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#667eea;cursor:pointer}
            .translate-slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#667eea;cursor:pointer;border:none}
            .translate-slider-value{min-width:45px;text-align:center;font-size:14px;color:#666}
            .translate-button{width:100%;padding:${mobile ? '14px' : '12px'};background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;border:none;border-radius:8px;font-size:${mobile ? '16px' : '14px'};font-weight:500;cursor:pointer;transition:transform .3s,box-shadow .3s;-webkit-tap-highlight-color:transparent}
            .translate-button:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(102,126,234,.4)}
            .translate-button:active{transform:scale(.98)}
            .translate-button.tt-pink{background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%)}
            .translate-button.tt-orange{background:linear-gradient(135deg,#fa709a 0%,#fee140 100%)}
            .translate-button.tt-red{background:linear-gradient(135deg,#ff9a9e 0%,#fecfef 100%)}
            .translate-button.tt-yellow{background:linear-gradient(135deg,#ffecd2 0%,#fcb69f 100%)}
            .translate-button.tt-mt{margin-top:8px}
            .translate-button-group{display:flex;gap:10px;margin-bottom:${mobile ? '15px' : '20px'}}
            .translate-button-group.tt-mt{margin-top:20px}
            .translate-button-group .translate-button{flex:1}
            .translate-section-title{font-size:${mobile ? '15px' : '16px'};font-weight:600;color:#333;margin:25px 0 15px;padding-bottom:10px;border-bottom:2px solid #f0f0f0}
            .translate-section-title.tt-first{margin-top:0}
            .translate-info{background:#f8f9fa;padding:12px;border-radius:8px;font-size:${mobile ? '12px' : '13px'};color:#666;margin-top:10px;line-height:1.5}
            .tt-subbox{border:1px dashed #c9c9f5;border-radius:8px;padding:12px;margin-top:10px}
            .tt-hidden{display:none}
            ${dark ? `
                #translate-panel{background:#1e1e1e !important;color:#e0e0e0 !important}
                .translate-panel-header{background:linear-gradient(135deg,#4a5eb7 0%,#5a3d7a 100%) !important}
                .translate-control-label{color:#e0e0e0 !important}
                .translate-select,.translate-input,.translate-textarea{background:#2d2d2d !important;color:#e0e0e0 !important;border-color:#444 !important}
                .translate-select option{background:#2d2d2d !important;color:#e0e0e0 !important}
                .translate-slider{background:#444 !important}
                .translate-slider-value{color:#b0b0b0 !important}
                .translate-section-title{color:#e0e0e0 !important;border-bottom-color:#444 !important}
                .translate-info{background:#2d2d2d !important;color:#b0b0b0 !important}
                .translate-description{color:#999 !important}
                .tt-subbox{border-color:#444 !important}
            ` : ''}
        `);
    }

    const earlyInit = () => {
        injectGlobalStyles();
        const cfg = loadCfg();
        const ball = document.createElement('div');
        ball.id = 'translate-float-ball';
        ball.className = cfg.showFloatBall ? 'tt-show' : 'tt-hide';
        ball.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
            </svg>`;
        ball.style.setProperty('width', `${cfg.floatBallSize}px`);
        ball.style.setProperty('height', `${cfg.floatBallSize}px`);
        ball.style.setProperty('opacity', String(cfg.floatBallOpacity));
        ball.style.setProperty('left', `${cfg.floatBallPosition.x}px`);
        ball.style.setProperty('top', `${cfg.floatBallPosition.y}px`);
        if (document.body) document.body.appendChild(ball);
        else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(ball));
    };
    earlyInit();

    (() => {
        const PRIVATE_DEPLOY_DOC = 'https://translate.zvo.cn/41160.html';
        const PRIVATE_HOST_DOC = 'https://translate.zvo.cn/4068.html';

        class ConfigManager {
            constructor() {
                this.defaultConfig = buildDefaultConfig();
                this.config = loadCfg();
            }
            saveConfig() { GM_setValue('translateConfig', this.config); }
            get(k) { return this.config[k]; }
            set(k, v) { this.config[k] = v; this.saveConfig(); }
            reset() {
                try { GM_deleteValue('translateConfig'); } catch (e) {}
                this.config = { ...this.defaultConfig };
            }
            clearCache() {
                if (typeof translate !== 'undefined') {
                    try { translate.storage && translate.storage.clear && translate.storage.clear(); } catch (e) {}
                    try { translate.language.clearCacheLanguage && translate.language.clearCacheLanguage(); } catch (e) {}
                }
                let cleared = 0;
                try {
                    Object.keys(localStorage).forEach(key => {
                        if (key.indexOf('translate') > -1 || key.indexOf('hash_') > -1) {
                            localStorage.removeItem(key); cleared++;
                        }
                    });
                } catch (e) {}
                return cleared;
            }
            getRealServiceName() {
                const s = this.get('translateService');
                if (s === 'translate.service.public' || s === 'translate.service.private') return 'translate.service';
                return s;
            }
            isPrivateService() { return this.get('translateService') === 'translate.service.private'; }
        }

        class TranslateManager {
            constructor(configManager) {
                this.cm = configManager;
                this.initialized = false;
                this.listenerStarted = false;
                this.selectionStarted = false;
                this.currentLanguage = null;
                this.isTranslating = false;
                this._selectionGuard = null;   // 划词翻译的语言守卫监听器
            }

            applyServiceSettings() {
                if (typeof translate === 'undefined') return;
                const real = this.cm.getRealServiceName();
                try { translate.service.use(real); } catch (e) {}
                if (this.cm.isPrivateService()) {
                    const customUrls = this.cm.get('customServiceUrls');
                    if (customUrls) {
                        const urls = customUrls.split(',').map(u => u.trim()).filter(u => u);
                        if (urls.length) {
                            try {
                                if (translate.request.setHost) translate.request.setHost(urls.length === 1 ? urls[0] : urls);
                                else translate.request.api.host = urls.length === 1 ? urls[0] : urls;
                            } catch (e) {}
                        }
                    }
                }
            }

            applyAllSettings() {
                if (typeof translate === 'undefined') return;
                translate.language.setLocal(this.cm.get('localLanguage'));
                this.applyServiceSettings();
                translate.selectLanguageTag.show = false;
                this.applyIgnoreSettings();
                this.applyCustomTerms();
                this.applyAttributeSettings();
                this.applyImageRules();
                this.applyAdvancedSettings();
                this.applyRequestParams();
            }

            applyIgnoreSettings() {
                if (typeof translate === 'undefined') return;
                try {
                    (this.cm.get('ignoredClasses') || '').split(',').map(c => c.trim()).filter(c => c)
                        .forEach(c => { try { translate.ignore.class.push(c); } catch (e) {} });
                } catch (e) {}
                try {
                    (this.cm.get('ignoredIds') || '').split(',').map(i => i.trim()).filter(i => i)
                        .forEach(i => { try { translate.ignore.id.push(i); } catch (e) {} });
                } catch (e) {}
                try {
                    (this.cm.get('ignoredTags') || '').split(',').map(t => t.trim().toLowerCase()).filter(t => t)
                        .forEach(t => { try { translate.ignore.tag.push(t); } catch (e) {} });
                } catch (e) {}
                try {
                    (this.cm.get('ignoredTexts') || '').split('\n').map(t => t.trim()).filter(t => t)
                        .forEach(t => { try { translate.ignore.text.push(t); } catch (e) {} });
                } catch (e) {}
            }

            applyCustomTerms() {
                if (typeof translate === 'undefined') return;
                const terms = this.cm.get('customTerms');
                if (!terms) return;
                try { translate.nomenclature.append(this.cm.get('localLanguage'), this.cm.get('targetLanguage'), terms); } catch (e) {}
            }

            applyAttributeSettings() {
                if (typeof translate === 'undefined') return;
                try {
                    const attrs = this.cm.get('translateAttributes');
                    if (attrs && attrs.length) translate.translateAttributes = attrs;
                } catch (e) {}
                try {
                    (this.cm.get('customTagAttributes') || '').split('\n').map(l => l.trim()).filter(l => l).forEach(line => {
                        const idx = line.indexOf('=');
                        if (idx > -1) {
                            const tag = line.slice(0, idx).trim().toLowerCase();
                            const list = line.slice(idx + 1).split(',').map(a => a.trim()).filter(a => a);
                            if (tag && list.length) translate.element.tagAttribute[tag] = list;
                        }
                    });
                } catch (e) {}
            }

            applyImageRules() {
                if (typeof translate === 'undefined') return;
                const map = {};
                (this.cm.get('imageRules') || '').split('\n').map(l => l.trim()).filter(l => l).forEach(line => {
                    const idx = line.indexOf('=');
                    if (idx > -1) {
                        const src = line.slice(0, idx).trim(), target = line.slice(idx + 1).trim();
                        if (src && target) map[src] = target;
                    }
                });
                if (Object.keys(map).length) { try { translate.images.add(map); } catch (e) {} }
            }

            applyAdvancedSettings() {
                if (typeof translate === 'undefined') return;
                try { if (this.cm.get('enableWholeAll')) translate.whole.enableAll(); } catch (e) {}
                try { translate.language.translateLocal = !!this.cm.get('translateLocal'); } catch (e) {}
                try {
                    const range = (this.cm.get('translateLanguagesRange') || '').split(',').map(r => r.trim()).filter(r => r);
                    if (range.length) translate.language.translateLanguagesRange = range;
                } catch (e) {}
                try { if (this.cm.get('enableProgressTip')) translate.progress.api.startUITip(); } catch (e) {}
                try { translate.waitingExecute.use = !!this.cm.get('waitingExecute'); } catch (e) {}
                try { if (this.cm.get('enableSSE') && translate.request.sse) translate.request.sse.start(); } catch (e) {}
                try {
                    if (this.cm.get('enableIframe')) {
                        const url = this.cm.get('iframeTranslateJsUrl');
                        if (url && translate.element.iframe && translate.element.iframe.use) translate.element.iframe.use(url);
                    }
                } catch (e) {}
                try {
                    if (translate.storage) {
                        if (this.cm.get('enableCache')) translate.storage.enable && translate.storage.enable();
                        else translate.storage.disable && translate.storage.disable();
                    }
                } catch (e) {}
            }

            applyRequestParams() {
                if (typeof translate === 'undefined') return;
                const parse = (raw) => {
                    const obj = {};
                    (raw || '').split('\n').map(l => l.trim()).filter(l => l).forEach(line => {
                        const idx = line.indexOf('=');
                        if (idx > -1) obj[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
                    });
                    return obj;
                };
                try {
                    const p = parse(this.cm.get('appendParams'));
                    if (Object.keys(p).length) translate.request.appendParams = p;
                    const h = parse(this.cm.get('appendHeaders'));
                    if (Object.keys(h).length) translate.request.appendHeaders = h;
                } catch (e) {}
            }

            init() {
                if (this.initialized || typeof translate === 'undefined') return;
                try {
                    this.applyAllSettings();
                    this.initialized = true;
                    console.log('翻译管理器初始化完成 (translate.js ' + (translate.version || '') + ')');
                } catch (e) { console.error('翻译初始化失败:', e); }
            }

            startListener() {
                if (typeof translate === 'undefined') return;
                try {
                    if (this.cm.get('enableListener') && !this.listenerStarted) {
                        translate.listener.start();
                        this.listenerStarted = true;
                    }
                    if (this.cm.get('enableAjaxListener') && translate.request.listener) {
                        translate.request.listener.start();
                    }
                } catch (e) {
                    if (!(e.message && e.message.indexOf('已经启动') > -1)) console.warn('启动监听失败:', e);
                }
            }

            changeLanguage(targetLang) {
                if (!this.initialized) this.init();
                if (typeof translate === 'undefined') return;
                try {
                    if (this.currentLanguage === targetLang && this.isTranslating) return;
                    this.currentLanguage = targetLang;
                    this.isTranslating = true;
                    this.applyAllSettings();
                    this.startListener();
                    translate.changeLanguage(targetLang);
                    setTimeout(() => { this.isTranslating = false; this.enforceSelectionLanguage(); }, 1000);
                } catch (e) { console.error('切换语言失败:', e); this.isTranslating = false; }
            }

            toggle(enabled) {
                if (enabled) {
                    if (!this.initialized) this.init();
                    this.startListener();
                    if (this.cm.get('autoTranslate')) {
                        setTimeout(() => this.changeLanguage(this.cm.get('targetLanguage')), 100);
                    }
                } else {
                    this.isTranslating = false;
                    if (typeof translate !== 'undefined') {
                        try { translate.reset ? translate.reset() : this.changeLanguage(this.cm.get('localLanguage')); }
                        catch (e) { this.changeLanguage(this.cm.get('localLanguage')); }
                    }
                    // 关闭整页翻译/还原后，重新确保划词翻译的语言不丢失（修复 to=undefined）
                    setTimeout(() => this.enforceSelectionLanguage(), 300);
                }
            }

            execute() {
                if (!this.initialized) this.init();
                if (typeof translate === 'undefined') return;
                try {
                    this.applyAllSettings();
                    this.startListener();
                    translate.execute();
                    setTimeout(() => this.enforceSelectionLanguage(), 1000);
                } catch (e) { console.error('执行翻译失败:', e); }
            }

            /* ===== 划词翻译：完全独立，使用专属的源/目标语言 ===== */

            // 把划词翻译的源/目标语言写入 translate.js（核心是保证 defaultTo 不为空）
            enforceSelectionLanguage() {
                if (typeof translate === 'undefined') return;
                if (!this.cm.get('enableSelectionTranslate')) return;
                const selLocal = this.cm.get('selectionLocalLanguage');
                const selTarget = this.cm.get('selectionTargetLanguage');
                if (!selTarget) return;
                try {
                    if (selLocal) translate.language.setLocal(selLocal);
                    translate.language.setDefaultTo(selTarget);
                    // 兜底：直接写入内部字段，防止某些路径未生效
                    if (translate.language) translate.language.defaultTo = selTarget;
                } catch (e) {}
            }

            startSelectionTranslate() {
                if (typeof translate === 'undefined') return;
                const selTarget = this.cm.get('selectionTargetLanguage');
                if (!selTarget) { console.warn('划词翻译目标语言为空，已跳过启动'); return; }
                try {
                    this.applyServiceSettings();
                    this.enforceSelectionLanguage();
                    if (translate.selectLanguageTag) translate.selectLanguageTag.show = false;
                    translate.selectionTranslate.start();
                    this.selectionStarted = true;
                    this.installSelectionGuard();
                    console.log('鼠标划词翻译已启动（独立）。源: ' + this.cm.get('selectionLocalLanguage') + ' → 目标: ' + selTarget);
                } catch (e) { console.error('启动划词翻译失败:', e); }
            }

            stopSelectionTranslate() {
                if (typeof translate === 'undefined' || !translate.selectionTranslate) return;
                try {
                    if (translate.selectionTranslate.stop) translate.selectionTranslate.stop();
                    this.selectionStarted = false;
                    this.removeSelectionGuard();
                } catch (e) {}
            }

            // 关键修复：在每次用户结束选择(mouseup/选区变化)的瞬间，
            // 立即把 defaultTo 重新设置为划词专属目标语言，
            // 确保 translate.js 内部读取 defaultTo 时永远不是 undefined。
            installSelectionGuard() {
                if (this._selectionGuard) return;
                const guard = () => { this.enforceSelectionLanguage(); };
                // mousedown 时机最早，确保在 translate.js 处理 mouseup 之前 defaultTo 已正确
                document.addEventListener('mousedown', guard, true);
                document.addEventListener('mouseup', guard, true);
                document.addEventListener('dblclick', guard, true);
                document.addEventListener('selectionchange', guard, true);
                this._selectionGuard = guard;
            }

            removeSelectionGuard() {
                if (!this._selectionGuard) return;
                const guard = this._selectionGuard;
                document.removeEventListener('mousedown', guard, true);
                document.removeEventListener('mouseup', guard, true);
                document.removeEventListener('dblclick', guard, true);
                document.removeEventListener('selectionchange', guard, true);
                this._selectionGuard = null;
            }
        }

        class ToastManager {
            constructor() {
                this.container = document.createElement('div');
                this.container.id = 'translate-toast-container';
                if (document.body) document.body.appendChild(this.container);
                else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(this.container));
            }
            show(message, type = 'success', duration = 2000) {
                const toast = document.createElement('div');
                toast.className = 'tt-toast tt-' + type;
                toast.textContent = message;
                this.container.appendChild(toast);
                setTimeout(() => {
                    toast.classList.add('tt-out');
                    setTimeout(() => { try { this.container.removeChild(toast); } catch (e) {} }, 300);
                }, duration);
            }
        }

        function getSupportedLanguages() {
            return [
                { value: 'chinese_simplified', name: '简体中文' },
                { value: 'chinese_traditional', name: '繁體中文' },
                { value: 'english', name: 'English' },
                { value: 'japanese', name: '日本語' },
                { value: 'korean', name: '한국어' },
                { value: 'french', name: 'Français' },
                { value: 'spanish', name: 'Español' },
                { value: 'portuguese', name: 'Português' },
                { value: 'german', name: 'Deutsch' },
                { value: 'italian', name: 'Italiano' },
                { value: 'russian', name: 'Русский' },
                { value: 'arabic', name: 'العربية' },
                { value: 'hindi', name: 'हिन्दी' },
                { value: 'bengali', name: 'বাংলা' },
                { value: 'urdu', name: 'اردو' },
                { value: 'persian', name: 'فارسی' },
                { value: 'turkish', name: 'Türkçe' },
                { value: 'vietnamese', name: 'Tiếng Việt' },
                { value: 'thai', name: 'ไทย' },
                { value: 'indonesian', name: 'Bahasa Indonesia' },
                { value: 'malay', name: 'Bahasa Melayu' },
                { value: 'filipino', name: 'Filipino' },
                { value: 'dutch', name: 'Nederlands' },
                { value: 'polish', name: 'Polski' },
                { value: 'ukrainian', name: 'Українська' },
                { value: 'romanian', name: 'Română' },
                { value: 'greek', name: 'Ελληνικά' },
                { value: 'czech', name: 'Čeština' },
                { value: 'hungarian', name: 'Magyar' },
                { value: 'swedish', name: 'Svenska' },
                { value: 'danish', name: 'Dansk' },
                { value: 'finnish', name: 'Suomi' },
                { value: 'norwegian', name: 'Norsk' },
                { value: 'slovak', name: 'Slovenčina' },
                { value: 'slovene', name: 'Slovenščina' },
                { value: 'croatian', name: 'Hrvatski' },
                { value: 'serbian', name: 'Српски' },
                { value: 'bosnian', name: 'Bosanski' },
                { value: 'bulgarian', name: 'Български' },
                { value: 'macedonian', name: 'Македонски' },
                { value: 'albanian', name: 'Shqip' },
                { value: 'lithuanian', name: 'Lietuvių' },
                { value: 'latvian', name: 'Latviešu' },
                { value: 'estonian', name: 'Eesti' },
                { value: 'belarusian', name: 'Беларуская' },
                { value: 'hebrew', name: 'עברית' },
                { value: 'yiddish', name: 'ייִדיש' },
                { value: 'armenian', name: 'Հայերեն' },
                { value: 'georgian', name: 'ქართული' },
                { value: 'azerbaijani', name: 'Azərbaycanca' },
                { value: 'kazakh', name: 'Қазақ' },
                { value: 'uzbek', name: 'Oʻzbek' },
                { value: 'kyrgyz', name: 'Кыргыз' },
                { value: 'tajik', name: 'Тоҷикӣ' },
                { value: 'turkmen', name: 'Türkmençe' },
                { value: 'mongolian', name: 'Монгол' },
                { value: 'tatar', name: 'Татар' },
                { value: 'uyghur', name: 'ئۇيغۇر' },
                { value: 'tamil', name: 'தமிழ்' },
                { value: 'telugu', name: 'తెలుగు' },
                { value: 'kannada', name: 'ಕನ್ನಡ' },
                { value: 'malayalam', name: 'മലയാളം' },
                { value: 'marathi', name: 'मराठी' },
                { value: 'gujarati', name: 'ગુજરાતી' },
                { value: 'punjabi', name: 'ਪੰਜਾਬੀ' },
                { value: 'oriya', name: 'ଓଡ଼ିଆ' },
                { value: 'assamese', name: 'অসমীয়া' },
                { value: 'nepali', name: 'नेपाली' },
                { value: 'sindhi', name: 'سنڌي' },
                { value: 'sinhala', name: 'සිංහල' },
                { value: 'pashto', name: 'پښتو' },
                { value: 'maithili', name: 'मैथिली' },
                { value: 'bhojpuri', name: 'भोजपुरी' },
                { value: 'sanskrit', name: 'संस्कृतम्' },
                { value: 'dhivehi', name: 'ދިވެހި' },
                { value: 'burmese', name: 'မြန်မာ' },
                { value: 'khmer', name: 'ភាសាខ្មែរ' },
                { value: 'lao', name: 'ລາວ' },
                { value: 'meitei', name: 'ꯃꯩꯇꯩꯂꯣꯟ' },
                { value: 'mizo', name: 'Mizo ṭawng' },
                { value: 'dogrid', name: 'डोगरी' },
                { value: 'tigri', name: 'ትግርኛ' },
                { value: 'amharic', name: 'አማርኛ' },
                { value: 'somali', name: 'Soomaali' },
                { value: 'swahili', name: 'Kiswahili' },
                { value: 'hausa', name: 'Hausa' },
                { value: 'yoruba', name: 'Yorùbá' },
                { value: 'igbo', name: 'Igbo' },
                { value: 'zulu', name: 'isiZulu' },
                { value: 'xhosa', name: 'isiXhosa' },
                { value: 'afrikaans', name: 'Afrikaans' },
                { value: 'sesotho', name: 'Sesotho' },
                { value: 'shona', name: 'Shona' },
                { value: 'kinyarwanda', name: 'Kinyarwanda' },
                { value: 'luganda', name: 'Luganda' },
                { value: 'lingala', name: 'Lingala' },
                { value: 'bambara', name: 'Bamanankan' },
                { value: 'ewe', name: 'Eʋegbe' },
                { value: 'twi', name: 'Twi' },
                { value: 'oromo', name: 'Oromoo' },
                { value: 'nyanja', name: 'Chinyanja' },
                { value: 'malagasy', name: 'Malagasy' },
                { value: 'sundanese', name: 'Basa Sunda' },
                { value: 'javanese', name: 'Basa Jawa' },
                { value: 'cebuano', name: 'Cebuano' },
                { value: 'ilocano', name: 'Ilokano' },
                { value: 'hmong', name: 'Hmoob' },
                { value: 'maori', name: 'Māori' },
                { value: 'samoan', name: 'Gagana Sāmoa' },
                { value: 'hawaiian', name: 'ʻŌlelo Hawaiʻi' },
                { value: 'haitian_creole', name: 'Kreyòl Ayisyen' },
                { value: 'guarani', name: 'Avañeʼẽ' },
                { value: 'quechua', name: 'Runa Simi' },
                { value: 'aymara', name: 'Aymar aru' },
                { value: 'latin', name: 'Latina' },
                { value: 'esperanto', name: 'Esperanto' },
                { value: 'welsh', name: 'Cymraeg' },
                { value: 'irish', name: 'Gaeilge' },
                { value: 'scottish_gaelic', name: 'Gàidhlig' },
                { value: 'icelandic', name: 'Íslenska' },
                { value: 'luxembourgish', name: 'Lëtzebuergesch' },
                { value: 'frisian', name: 'Frysk' },
                { value: 'catalan', name: 'Català' },
                { value: 'galician', name: 'Galego' },
                { value: 'basque', name: 'Euskara' },
                { value: 'corsican', name: 'Corsu' },
                { value: 'maltese', name: 'Malti' },
                { value: 'kurdish', name: 'Kurdî' },
                { value: 'kurdish_sorani', name: 'کوردیی سۆرانی' }
            ];
        }

        class UIManager {
            constructor(configManager, translateManager) {
                this.cm = configManager;
                this.tm = translateManager;
                this.floatBall = document.getElementById('translate-float-ball');
                this.panel = null;
                this.toast = new ToastManager();
                this.isDragging = false;
                this.dragOffset = { x: 0, y: 0 };
                this.touchStartPos = { x: 0, y: 0 };
                this.clickCount = 0;
                this.clickTimer = null;
                this.init();
            }

            init() {
                this.setupFloatBall();
                this.createPanel();
                this.bindEvents();
                if (this.cm.get('enabled')) setTimeout(() => this.tm.toggle(true), 1000);
                if (this.cm.get('enableSelectionTranslate') && !isMobile()) {
                    setTimeout(() => this.tm.startSelectionTranslate(), 1200);
                }
            }

            setupFloatBall() {
                if (!this.floatBall) return;
                const size = this.cm.get('floatBallSize');
                this.floatBall.style.setProperty('width', `${size}px`);
                this.floatBall.style.setProperty('height', `${size}px`);
                this.floatBall.style.setProperty('opacity', String(this.cm.get('floatBallOpacity')));
                this.ensureInViewport();
            }

            buildLangOptions(selected) {
                return getSupportedLanguages().map(l =>
                    `<option value="${l.value}" ${selected === l.value ? 'selected' : ''}>${l.name}</option>`
                ).join('');
            }

            createPanel() {
                const c = this.cm.config;
                const mobile = isMobile();
                const services = [
                    { value: 'client.edge', name: 'Microsoft Edge（机器翻译·无上限·73种语言）' },
                    { value: 'giteeAI', name: 'Gitee AI（大模型翻译·推荐·开源中国算力）' },
                    { value: 'siliconflow', name: 'SiliconFlow AI（大模型翻译·Qwen3）' },
                    { value: 'translate.service.public', name: '公共 translate.service 服务（免费·112+语言）' },
                    { value: 'translate.service.private', name: '私有部署 translate.service（需填接口地址）' }
                ];

                const panel = document.createElement('div');
                panel.id = 'translate-panel';
                panel.innerHTML = `
                    <div class="translate-panel-header">
                        <div class="translate-panel-title">🌐 智能翻译助手 v4</div>
                        <button class="translate-panel-close" id="tp-close">✕</button>
                    </div>
                    <div class="translate-panel-body">
                        <div class="translate-control-group">
                            <button class="translate-button" id="tp-now">🚀 立即翻译</button>
                        </div>

                        <div class="translate-section-title tt-first">基础设置</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">源语言<div class="translate-description">当前页面的语言（用于整页翻译）</div></label>
                            <select class="translate-select" id="tp-local">${this.buildLangOptions(c.localLanguage)}</select>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">目标语言<div class="translate-description">整页翻译要翻译成的语言</div></label>
                            <select class="translate-select" id="tp-target">${this.buildLangOptions(c.targetLanguage)}</select>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">启用翻译（整页翻译总开关）</label>
                            <label class="translate-switch"><input type="checkbox" id="tp-enable" ${c.enabled ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">自动翻译<div class="translate-description">页面加载时自动整页翻译</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-auto" ${c.autoTranslate ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>

                        ${!mobile ? `
                        <div class="translate-section-title">鼠标划词翻译（独立运行）</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">启用划词翻译<div class="translate-description">独立于总开关：无论整页翻译是否开启，选中文字即自动翻译（仅PC端）</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-selection" ${c.enableSelectionTranslate ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="tt-subbox">
                            <div class="translate-control-group">
                                <label class="translate-control-label">划词翻译·源语言<div class="translate-description">专用于划词翻译，独立于整页翻译的源语言</div></label>
                                <select class="translate-select" id="tp-sel-local">${this.buildLangOptions(c.selectionLocalLanguage)}</select>
                            </div>
                            <div class="translate-control-group" style="margin-bottom:0">
                                <label class="translate-control-label">划词翻译·目标语言<div class="translate-description">专用于划词翻译，选中文字将翻译成此语言</div></label>
                                <select class="translate-select" id="tp-sel-target">${this.buildLangOptions(c.selectionTargetLanguage)}</select>
                            </div>
                        </div>
                        ` : ''}

                        <div class="translate-section-title">界面设置</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">显示悬浮球</label>
                            <label class="translate-switch"><input type="checkbox" id="tp-showball" ${c.showFloatBall ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">允许悬浮球超出边缘</label>
                            <label class="translate-switch"><input type="checkbox" id="tp-half" ${c.allowHalfBall ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">双击悬浮球开关翻译<div class="translate-description">默认开启：双击悬浮球快速开/关整页翻译，单击打开设置</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-dblclick" ${c.doubleClickToggle ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球大小</label>
                            <div class="translate-slider-container"><input type="range" class="translate-slider" id="tp-ballsize" min="30" max="80" value="${c.floatBallSize}"><span class="translate-slider-value">${c.floatBallSize}px</span></div>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">悬浮球透明度</label>
                            <div class="translate-slider-container"><input type="range" class="translate-slider" id="tp-ballopacity" min="30" max="100" value="${c.floatBallOpacity * 100}"><span class="translate-slider-value">${Math.round(c.floatBallOpacity * 100)}%</span></div>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">控制面板大小</label>
                            <div class="translate-slider-container"><input type="range" class="translate-slider" id="tp-panelsize" min="50" max="120" value="${c.panelSize * 100}"><span class="translate-slider-value">${Math.round(c.panelSize * 100)}%</span></div>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">控制面板透明度</label>
                            <div class="translate-slider-container"><input type="range" class="translate-slider" id="tp-panelopacity" min="50" max="100" value="${c.panelOpacity * 100}"><span class="translate-slider-value">${Math.round(c.panelOpacity * 100)}%</span></div>
                        </div>
                        <div class="translate-button-group">
                            <button class="translate-button tt-pink" id="tp-resetball">重置悬浮球位置</button>
                            <button class="translate-button tt-orange" id="tp-resetpanel">重置面板位置</button>
                        </div>

                        <div class="translate-section-title">翻译服务</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">翻译服务通道</label>
                            <select class="translate-select" id="tp-service">
                                ${services.map(s => `<option value="${s.value}" ${c.translateService === s.value ? 'selected' : ''}>${s.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="translate-control-group ${c.translateService === 'translate.service.private' ? '' : 'tt-hidden'}" id="tp-customsvc-group">
                            <label class="translate-control-label">自定义翻译接口地址（私有部署）
                                <div class="translate-description">填写你私有部署的 translate.service 接口，多个用英文逗号分隔。部署文档：<a href="${PRIVATE_DEPLOY_DOC}" target="_blank" rel="noopener">一键部署 translate.service</a>，接口设置文档：<a href="${PRIVATE_HOST_DOC}" target="_blank" rel="noopener">指定翻译服务接口</a></div>
                            </label>
                            <input type="text" class="translate-input" id="tp-customsvc" placeholder="例如: http://121.121.121.121/,https://api2.xxx.com/" value="${c.customServiceUrls}">
                            <button class="translate-button tt-mt" id="tp-save-customsvc">保存接口地址</button>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">SSE 流式翻译<div class="translate-description">对翻译接口启用 SSE 流式能力（需服务端支持）</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-sse" ${c.enableSSE ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>

                        <div class="translate-section-title">忽略规则</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">忽略的 Class<div class="translate-description">这些 class 及其子元素不翻译，逗号分隔</div></label>
                            <input type="text" class="translate-input" id="tp-igclass" placeholder="例如: class1,class2" value="${c.ignoredClasses}">
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">忽略的 ID<div class="translate-description">这些 id 及其子元素不翻译，逗号分隔</div></label>
                            <input type="text" class="translate-input" id="tp-igid" placeholder="例如: id1,id2" value="${c.ignoredIds}">
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">忽略的标签 Tag<div class="translate-description">这些标签不翻译，逗号分隔，如 span,code,pre</div></label>
                            <input type="text" class="translate-input" id="tp-igtag" placeholder="例如: span,code,pre" value="${c.ignoredTags}">
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">忽略的文字<div class="translate-description">完全匹配的文字不翻译，每行一个</div></label>
                            <textarea class="translate-textarea" id="tp-igtext" placeholder="每行一个，如:&#10;OpenAI&#10;GitHub">${c.ignoredTexts}</textarea>
                        </div>
                        <button class="translate-button" id="tp-save-ignore">保存忽略规则</button>

                        <div class="translate-section-title">图片 / iframe / 属性</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">图片翻译规则<div class="translate-description">每行 原图src=译图url，可用 {language} 变量</div></label>
                            <textarea class="translate-textarea" id="tp-images" placeholder="/uploads/a.jpg=https://x.com/a_{language}.jpg">${c.imageRules}</textarea>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">翻译 iframe 中的页面<div class="translate-description">自动向 iframe 注入 translate.js 并翻译</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-iframe" ${c.enableIframe ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">iframe 注入的 translate.js 地址</label>
                            <input type="text" class="translate-input" id="tp-iframeurl" value="${c.iframeTranslateJsUrl}">
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">自定义标签属性翻译<div class="translate-description">每行 tag=属性1,属性2，如 input=value,data-value</div></label>
                            <textarea class="translate-textarea" id="tp-tagattr" placeholder="input=value,data-value&#10;img=data-value">${c.customTagAttributes}</textarea>
                        </div>
                        <button class="translate-button" id="tp-save-media">保存图片/iframe/属性设置</button>

                        <div class="translate-section-title">自定义术语</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">术语对照<div class="translate-description">每行一个，格式: 原文=翻译</div></label>
                            <textarea class="translate-textarea" id="tp-terms" placeholder="网市场云建站系统=wangmarket CMS&#10;国际化=i18n">${c.customTerms}</textarea>
                            <button class="translate-button tt-mt" id="tp-save-terms">保存术语设置</button>
                        </div>

                        <div class="translate-section-title">高级 / 性能</div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">整体翻译整个页面<div class="translate-description">对整页采用整体翻译（连贯性更好，流量更大）</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-whole" ${c.enableWholeAll ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">强制翻译本地语种<div class="translate-description">与源语言相同的文字也强制翻译</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-translocal" ${c.translateLocal ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">只翻译指定语种<div class="translate-description">只翻译以下语种的文字，逗号分隔，留空则不限制</div></label>
                            <input type="text" class="translate-input" id="tp-langrange" placeholder="例如: chinese_simplified,english" value="${c.translateLanguagesRange}">
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">翻译前隐藏原文<div class="translate-description">避免先显示原文再变译文的闪烁（刷新页面后生效）</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-hidetext" ${c.hideTextBeforeTranslate ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">翻译遮罩层提示<div class="translate-description">翻译进行中显示遮罩提示</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-progress" ${c.enableProgressTip ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">动态内容监听<div class="translate-description">自动翻译动态渲染的内容（Vue/React 等）</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-listener" ${c.enableListener ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">Ajax 请求触发翻译<div class="translate-description">默认开启：监听网页 ajax 请求并自动翻译新内容</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-ajax" ${c.enableAjaxListener ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">翻译排队执行<div class="translate-description">大量翻译任务时排队执行，避免拥塞</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-waiting" ${c.waitingExecute ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">缓存优化<div class="translate-description">缓存翻译结果，二次访问毫秒级响应</div></label>
                            <label class="translate-switch"><input type="checkbox" id="tp-cache" ${c.enableCache ? 'checked' : ''}><span class="translate-switch-slider"></span></label>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">请求附加参数<div class="translate-description">所有翻译请求附加的参数，每行 key=value</div></label>
                            <textarea class="translate-textarea" id="tp-params" placeholder="key1=value1">${c.appendParams}</textarea>
                        </div>
                        <div class="translate-control-group">
                            <label class="translate-control-label">请求附加 Header<div class="translate-description">所有翻译请求附加的请求头，每行 key=value</div></label>
                            <textarea class="translate-textarea" id="tp-headers" placeholder="Authorization=Bearer xxxx">${c.appendHeaders}</textarea>
                        </div>
                        <button class="translate-button" id="tp-save-advanced">保存高级设置</button>

                        <div class="translate-button-group tt-mt">
                            <button class="translate-button tt-red" id="tp-clearcache">清除翻译缓存</button>
                            <button class="translate-button tt-yellow" id="tp-resetall">重置所有设置</button>
                        </div>

                        <div class="translate-info">
                            💡 ${mobile ? '长按' : '拖动'}悬浮球或面板标题栏可调整位置，设置会自动保存<br>
                            🚀 基于 translate.js v4 引擎，支持 100+ 种语言、图片/iframe/划词翻译<br>
                            🖱️ 划词翻译拥有独立的源/目标语言，与整页翻译互不干扰<br>
                            ⚡ 多层缓存加速，二次访问极速响应
                        </div>
                    </div>`;
                document.body.appendChild(panel);
                this.panel = panel;
                this.updatePanelSize();
                this.panel.style.setProperty('opacity', String(c.panelOpacity));
                if (c.panelPosition) {
                    this.panel.style.setProperty('left', `${c.panelPosition.x}px`);
                    this.panel.style.setProperty('top', `${c.panelPosition.y}px`);
                }
            }

            updatePanelSize() {
                const mobile = isMobile();
                const size = this.cm.get('panelSize');
                const baseWidth = mobile ? window.innerWidth * 0.9 : 440;
                const baseHeight = mobile ? window.innerHeight * 0.8 : 650;
                const width = Math.min(baseWidth * size, mobile ? window.innerWidth * 0.95 : 680);
                const maxHeight = baseHeight * size;
                this.panel.style.setProperty('width', `${width}px`);
                this.panel.style.setProperty('max-height', `${maxHeight}px`);
                const body = this.panel.querySelector('.translate-panel-body');
                if (body) body.style.setProperty('max-height', `${maxHeight - 60}px`);
            }

            bindEvents() {
                if (isMobile()) this.bindMobileBall(); else this.bindDesktopBall();
                this.bindPanelDrag();
                this.bindControls();
                window.addEventListener('resize', () => { this.ensureInViewport(); this.ensurePanelInViewport(); });
                window.addEventListener('orientationchange', () => setTimeout(() => {
                    this.ensureInViewport(); this.ensurePanelInViewport(); this.updatePanelSize();
                }, 300));
            }

            bindPanelDrag() {
                const header = this.panel.querySelector('.translate-panel-header');
                const mobile = isMobile();
                let dragging = false, sx, sy, ix, iy, lpTimer = null;
                const start = (cx, cy) => { sx = cx; sy = cy; ix = this.panel.offsetLeft; iy = this.panel.offsetTop; };
                const move = (cx, cy) => {
                    let nx = ix + (cx - sx), ny = iy + (cy - sy);
                    nx = Math.max(0, Math.min(nx, window.innerWidth - this.panel.offsetWidth));
                    ny = Math.max(0, Math.min(ny, window.innerHeight - this.panel.offsetHeight));
                    this.panel.style.setProperty('left', `${nx}px`);
                    this.panel.style.setProperty('top', `${ny}px`);
                };
                const end = () => {
                    if (dragging) {
                        dragging = false; this.panel.classList.remove('dragging');
                        this.cm.set('panelPosition', { x: parseInt(this.panel.style.left), y: parseInt(this.panel.style.top) });
                    }
                };
                if (mobile) {
                    header.addEventListener('touchstart', (e) => {
                        if (e.target.id === 'tp-close') return;
                        const t = e.touches[0]; start(t.clientX, t.clientY);
                        lpTimer = setTimeout(() => { dragging = true; this.panel.classList.add('dragging'); navigator.vibrate && navigator.vibrate(50); }, 300);
                        e.preventDefault();
                    });
                    header.addEventListener('touchmove', (e) => {
                        const t = e.touches[0];
                        if (!dragging) {
                            if (lpTimer && Math.hypot(t.clientX - sx, t.clientY - sy) > 10) { clearTimeout(lpTimer); lpTimer = null; }
                            return;
                        }
                        move(t.clientX, t.clientY); e.preventDefault();
                    });
                    header.addEventListener('touchend', () => { if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; } end(); });
                } else {
                    header.addEventListener('mousedown', (e) => {
                        if (e.target.id === 'tp-close') return;
                        dragging = true; start(e.clientX, e.clientY); this.panel.classList.add('dragging'); e.preventDefault();
                    });
                    document.addEventListener('mousemove', (e) => { if (dragging) move(e.clientX, e.clientY); });
                    document.addEventListener('mouseup', end);
                }
            }

            bindMobileBall() {
                let lpTimer = null, dragging = false, moved = false;
                this.floatBall.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    const t = e.touches[0];
                    this.touchStartPos = { x: t.clientX, y: t.clientY };
                    moved = false;
                    lpTimer = setTimeout(() => { dragging = true; this.floatBall.classList.add('dragging'); navigator.vibrate && navigator.vibrate(50); }, 300);
                    this.dragOffset.x = t.clientX - this.floatBall.offsetLeft;
                    this.dragOffset.y = t.clientY - this.floatBall.offsetTop;
                });
                this.floatBall.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    const t = e.touches[0];
                    if (Math.hypot(t.clientX - this.touchStartPos.x, t.clientY - this.touchStartPos.y) > 10) {
                        moved = true; if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; }
                    }
                    if (dragging) this.moveBall(t.clientX - this.dragOffset.x, t.clientY - this.dragOffset.y);
                });
                this.floatBall.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; }
                    this.floatBall.classList.remove('dragging');
                    if (dragging) this.cm.set('floatBallPosition', { x: parseInt(this.floatBall.style.left), y: parseInt(this.floatBall.style.top) });
                    else if (!moved) this.handleBallClick();
                    dragging = false; moved = false;
                });
            }

            bindDesktopBall() {
                this.floatBall.addEventListener('click', () => { if (!this.isDragging) this.handleBallClick(); });
                this.floatBall.addEventListener('mousedown', (e) => {
                    this.isDragging = false;
                    this.dragOffset.x = e.clientX - this.floatBall.offsetLeft;
                    this.dragOffset.y = e.clientY - this.floatBall.offsetTop;
                    this.floatBall.classList.add('dragging');
                    const mm = (ev) => { this.isDragging = true; this.moveBall(ev.clientX - this.dragOffset.x, ev.clientY - this.dragOffset.y); };
                    const mu = () => {
                        document.removeEventListener('mousemove', mm);
                        document.removeEventListener('mouseup', mu);
                        this.floatBall.classList.remove('dragging');
                        if (this.isDragging) this.cm.set('floatBallPosition', { x: parseInt(this.floatBall.style.left), y: parseInt(this.floatBall.style.top) });
                        setTimeout(() => { this.isDragging = false; }, 100);
                    };
                    document.addEventListener('mousemove', mm);
                    document.addEventListener('mouseup', mu);
                });
            }

            moveBall(x, y) {
                if (!this.cm.get('allowHalfBall')) {
                    x = Math.max(0, Math.min(x, window.innerWidth - this.floatBall.offsetWidth));
                    y = Math.max(0, Math.min(y, window.innerHeight - this.floatBall.offsetHeight));
                } else {
                    const h = this.floatBall.offsetWidth / 2;
                    x = Math.max(-h, Math.min(x, window.innerWidth - h));
                    y = Math.max(-h, Math.min(y, window.innerHeight - h));
                }
                this.floatBall.style.setProperty('left', `${x}px`);
                this.floatBall.style.setProperty('top', `${y}px`);
            }

            handleBallClick() {
                if (this.cm.get('doubleClickToggle')) {
                    this.clickCount++;
                    if (this.clickCount === 1) {
                        this.clickTimer = setTimeout(() => { this.togglePanel(); this.clickCount = 0; }, 300);
                    } else if (this.clickCount === 2) {
                        clearTimeout(this.clickTimer); this.clickCount = 0;
                        const enabled = this.cm.get('enabled');
                        if (!enabled) {
                            this.cm.set('enabled', true); this.tm.toggle(true);
                            this.tm.changeLanguage(this.cm.get('targetLanguage'));
                            this.updateUI(); this.toast.show('✅ 翻译已开启');
                        } else {
                            this.cm.set('enabled', false); this.tm.toggle(false);
                            this.updateUI(); this.toast.show('❌ 翻译已关闭');
                        }
                    }
                } else {
                    this.togglePanel();
                }
            }

            bindControls() {
                const $ = (id) => document.getElementById(id);
                $('tp-close').addEventListener('click', () => this.togglePanel());
                $('tp-now').addEventListener('click', () => {
                    this.tm.changeLanguage(this.cm.get('targetLanguage'));
                    this.toast.show('🚀 正在翻译...'); this.togglePanel();
                });
                $('tp-enable').addEventListener('change', (e) => {
                    this.cm.set('enabled', e.target.checked);
                    this.tm.toggle(e.target.checked);
                    this.toast.show(e.target.checked ? '✅ 翻译已启用' : '❌ 翻译已禁用');
                });
                $('tp-auto').addEventListener('change', (e) => {
                    this.cm.set('autoTranslate', e.target.checked);
                    this.toast.show(e.target.checked ? '✅ 自动翻译已启用' : '❌ 自动翻译已禁用');
                });
                $('tp-local').addEventListener('change', (e) => {
                    this.cm.set('localLanguage', e.target.value);
                    this.toast.show('✅ 整页翻译源语言已更新');
                });
                $('tp-target').addEventListener('change', (e) => {
                    this.cm.set('targetLanguage', e.target.value);
                    this.toast.show('✅ 整页翻译目标语言已更新');
                });

                // 划词翻译开关 + 独立源/目标语言
                const sel = $('tp-selection');
                if (sel) {
                    sel.addEventListener('change', (e) => {
                        this.cm.set('enableSelectionTranslate', e.target.checked);
                        if (e.target.checked) {
                            this.tm.startSelectionTranslate();
                            this.toast.show('✅ 划词翻译已启用（独立源/目标语言）');
                        } else {
                            this.tm.stopSelectionTranslate();
                            this.toast.show('❌ 划词翻译已禁用，刷新页面完全停止', 'info', 2500);
                        }
                    });
                }
                const selLocal = $('tp-sel-local');
                if (selLocal) {
                    selLocal.addEventListener('change', (e) => {
                        this.cm.set('selectionLocalLanguage', e.target.value);
                        this.tm.enforceSelectionLanguage();
                        this.toast.show('✅ 划词翻译源语言已更新');
                    });
                }
                const selTarget = $('tp-sel-target');
                if (selTarget) {
                    selTarget.addEventListener('change', (e) => {
                        this.cm.set('selectionTargetLanguage', e.target.value);
                        this.tm.enforceSelectionLanguage();
                        this.toast.show('✅ 划词翻译目标语言已更新');
                    });
                }

                $('tp-showball').addEventListener('change', (e) => {
                    this.cm.set('showFloatBall', e.target.checked);
                    this.floatBall.classList.toggle('tt-show', e.target.checked);
                    this.floatBall.classList.toggle('tt-hide', !e.target.checked);
                    this.toast.show(e.target.checked ? '✅ 悬浮球已显示' : '❌ 悬浮球已隐藏');
                });
                $('tp-half').addEventListener('change', (e) => { this.cm.set('allowHalfBall', e.target.checked); this.ensureInViewport(); });
                $('tp-dblclick').addEventListener('change', (e) => { this.cm.set('doubleClickToggle', e.target.checked); });
                $('tp-ballsize').addEventListener('input', (e) => {
                    const s = parseInt(e.target.value);
                    this.cm.set('floatBallSize', s);
                    this.floatBall.style.setProperty('width', `${s}px`);
                    this.floatBall.style.setProperty('height', `${s}px`);
                    e.target.nextElementSibling.textContent = `${s}px`; this.ensureInViewport();
                });
                $('tp-ballopacity').addEventListener('input', (e) => {
                    const o = parseInt(e.target.value) / 100;
                    this.cm.set('floatBallOpacity', o);
                    this.floatBall.style.setProperty('opacity', String(o));
                    e.target.nextElementSibling.textContent = `${e.target.value}%`;
                });
                $('tp-panelsize').addEventListener('input', (e) => {
                    this.cm.set('panelSize', parseInt(e.target.value) / 100);
                    this.updatePanelSize(); e.target.nextElementSibling.textContent = `${e.target.value}%`;
                    this.ensurePanelInViewport();
                });
                $('tp-panelopacity').addEventListener('input', (e) => {
                    const o = parseInt(e.target.value) / 100;
                    this.cm.set('panelOpacity', o);
                    this.panel.style.setProperty('opacity', String(o));
                    e.target.nextElementSibling.textContent = `${e.target.value}%`;
                });
                $('tp-resetball').addEventListener('click', () => {
                    const p = { x: 20, y: 100 };
                    this.floatBall.style.setProperty('left', `${p.x}px`);
                    this.floatBall.style.setProperty('top', `${p.y}px`);
                    this.cm.set('floatBallPosition', p); this.toast.show('✅ 悬浮球位置已重置');
                });
                $('tp-resetpanel').addEventListener('click', () => {
                    this.cm.set('panelPosition', null); this.positionPanel(); this.toast.show('✅ 面板位置已重置');
                });

                $('tp-service').addEventListener('change', (e) => {
                    this.cm.set('translateService', e.target.value);
                    if (typeof translate !== 'undefined') { try { translate.service.use(this.cm.getRealServiceName()); } catch (err) {} }
                    $('tp-customsvc-group').classList.toggle('tt-hidden', e.target.value !== 'translate.service.private');
                    this.toast.show('✅ 翻译服务已更新，建议立即翻译以生效');
                });
                $('tp-save-customsvc').addEventListener('click', () => {
                    const v = $('tp-customsvc').value.trim();
                    this.cm.set('customServiceUrls', v);
                    if (v && typeof translate !== 'undefined' && this.cm.isPrivateService()) {
                        const urls = v.split(',').map(u => u.trim()).filter(u => u);
                        try {
                            if (translate.request.setHost) translate.request.setHost(urls.length === 1 ? urls[0] : urls);
                            else translate.request.api.host = urls.length === 1 ? urls[0] : urls;
                        } catch (err) {}
                    }
                    this.toast.show('✅ 自定义接口地址已保存');
                });
                $('tp-sse').addEventListener('change', (e) => {
                    this.cm.set('enableSSE', e.target.checked);
                    this.toast.show(e.target.checked ? '✅ SSE 已启用，下次翻译生效' : '❌ SSE 已禁用，刷新后生效', 'info');
                });

                $('tp-save-ignore').addEventListener('click', () => {
                    this.cm.set('ignoredClasses', $('tp-igclass').value.trim());
                    this.cm.set('ignoredIds', $('tp-igid').value.trim());
                    this.cm.set('ignoredTags', $('tp-igtag').value.trim());
                    this.cm.set('ignoredTexts', $('tp-igtext').value);
                    this.tm.applyIgnoreSettings();
                    this.toast.show('✅ 忽略规则已保存，立即翻译以生效');
                });

                $('tp-iframe').addEventListener('change', (e) => this.cm.set('enableIframe', e.target.checked));
                $('tp-save-media').addEventListener('click', () => {
                    this.cm.set('imageRules', $('tp-images').value);
                    this.cm.set('enableIframe', $('tp-iframe').checked);
                    this.cm.set('iframeTranslateJsUrl', $('tp-iframeurl').value.trim());
                    this.cm.set('customTagAttributes', $('tp-tagattr').value);
                    this.tm.applyImageRules();
                    this.tm.applyAttributeSettings();
                    this.toast.show('✅ 图片/iframe/属性设置已保存，立即翻译以生效');
                });

                $('tp-save-terms').addEventListener('click', () => {
                    this.cm.set('customTerms', $('tp-terms').value.trim());
                    this.tm.applyCustomTerms();
                    this.toast.show('✅ 自定义术语已保存');
                });

                $('tp-listener').addEventListener('change', (e) => {
                    this.cm.set('enableListener', e.target.checked);
                    if (e.target.checked && !this.tm.listenerStarted) this.tm.startListener();
                    this.toast.show(e.target.checked ? '✅ 动态监听已启用' : '❌ 已禁用，刷新生效', 'info');
                });
                $('tp-ajax').addEventListener('change', (e) => {
                    this.cm.set('enableAjaxListener', e.target.checked);
                    if (e.target.checked) this.tm.startListener();
                    this.toast.show(e.target.checked ? '✅ Ajax 触发翻译已启用' : '❌ 已禁用，刷新生效', 'info');
                });
                $('tp-cache').addEventListener('change', (e) => {
                    this.cm.set('enableCache', e.target.checked);
                    if (typeof translate !== 'undefined' && translate.storage) {
                        try { e.target.checked ? (translate.storage.enable && translate.storage.enable()) : (translate.storage.disable && translate.storage.disable()); } catch (err) {}
                    }
                });
                $('tp-whole').addEventListener('change', (e) => this.cm.set('enableWholeAll', e.target.checked));
                $('tp-translocal').addEventListener('change', (e) => this.cm.set('translateLocal', e.target.checked));
                $('tp-hidetext').addEventListener('change', (e) => this.cm.set('hideTextBeforeTranslate', e.target.checked));
                $('tp-progress').addEventListener('change', (e) => this.cm.set('enableProgressTip', e.target.checked));
                $('tp-waiting').addEventListener('change', (e) => this.cm.set('waitingExecute', e.target.checked));
                $('tp-save-advanced').addEventListener('click', () => {
                    this.cm.set('translateLanguagesRange', $('tp-langrange').value.trim());
                    this.cm.set('appendParams', $('tp-params').value);
                    this.cm.set('appendHeaders', $('tp-headers').value);
                    this.tm.applyAdvancedSettings();
                    this.tm.applyRequestParams();
                    this.toast.show('✅ 高级设置已保存，部分项需刷新或重新翻译生效', 'info', 2500);
                });

                $('tp-clearcache').addEventListener('click', () => {
                    const n = this.cm.clearCache();
                    this.toast.show(`✅ 已清除 ${n} 个翻译缓存项`);
                });
                $('tp-resetall').addEventListener('click', () => {
                    if (confirm('确定要重置所有设置吗？此操作不可撤销。')) {
                        this.cm.reset();
                        this.toast.show('✅ 已重置，即将刷新...', 'success', 1500);
                        setTimeout(() => location.reload(), 1500);
                    }
                });
            }

            updateUI() {
                const cb = document.getElementById('tp-enable');
                if (cb) cb.checked = this.cm.get('enabled');
            }

            togglePanel() {
                if (this.panel.classList.contains('show')) {
                    this.panel.classList.remove('show');
                } else {
                    this.panel.classList.add('show');
                    if (!this.cm.get('panelPosition')) this.positionPanel();
                    else this.ensurePanelInViewport();
                }
            }

            positionPanel() {
                const mobile = isMobile();
                if (mobile) {
                    this.panel.style.setProperty('left', `${(window.innerWidth - this.panel.offsetWidth) / 2}px`);
                    this.panel.style.setProperty('top', `${(window.innerHeight - this.panel.offsetHeight) / 2}px`);
                } else {
                    const r = this.floatBall.getBoundingClientRect();
                    const pw = this.panel.offsetWidth, ph = this.panel.offsetHeight;
                    let left = r.right + 10, top = r.top;
                    if (left + pw > window.innerWidth) left = r.left - pw - 10;
                    if (left < 0) left = (window.innerWidth - pw) / 2;
                    if (top < 10) top = 10;
                    if (top + ph > window.innerHeight - 10) top = window.innerHeight - ph - 10;
                    this.panel.style.setProperty('left', `${left}px`);
                    this.panel.style.setProperty('top', `${top}px`);
                }
            }

            ensureInViewport() {
                const p = this.cm.get('floatBallPosition');
                const size = this.cm.get('floatBallSize');
                let x = p.x, y = p.y;
                if (this.cm.get('allowHalfBall')) {
                    const h = size / 2;
                    x = Math.max(-h, Math.min(x, window.innerWidth - h));
                    y = Math.max(-h, Math.min(y, window.innerHeight - h));
                } else {
                    x = Math.max(0, Math.min(x, window.innerWidth - size));
                    y = Math.max(0, Math.min(y, window.innerHeight - size));
                }
                this.floatBall.style.setProperty('left', `${x}px`);
                this.floatBall.style.setProperty('top', `${y}px`);
                if (x !== p.x || y !== p.y) this.cm.set('floatBallPosition', { x, y });
            }

            ensurePanelInViewport() {
                if (!this.panel.classList.contains('show')) return;
                const p = this.cm.get('panelPosition');
                if (!p) return;
                let x = Math.max(0, Math.min(p.x, window.innerWidth - this.panel.offsetWidth));
                let y = Math.max(0, Math.min(p.y, window.innerHeight - this.panel.offsetHeight));
                this.panel.style.setProperty('left', `${x}px`);
                this.panel.style.setProperty('top', `${y}px`);
                if (x !== p.x || y !== p.y) this.cm.set('panelPosition', { x, y });
            }
        }

        (function applyHideTextEarly() {
            try {
                const cfg = loadCfg();
                if (cfg.hideTextBeforeTranslate && typeof translate !== 'undefined') {
                    translate.language.setLocal(cfg.localLanguage);
                    const real = (cfg.translateService === 'translate.service.public' || cfg.translateService === 'translate.service.private') ? 'translate.service' : cfg.translateService;
                    try { translate.service.use(real); } catch (e) {}
                    if (translate.visual && translate.visual.webPageLoadTranslateBeforeHiddenText) {
                        translate.visual.webPageLoadTranslateBeforeHiddenText();
                    }
                }
            } catch (e) {}
        })();

        async function init() {
            if (document.readyState === 'loading') {
                await new Promise(r => document.addEventListener('DOMContentLoaded', r));
            }
            try {
                if (typeof translate === 'undefined') {
                    console.error('translate.js 未加载，请检查 @require 配置');
                    return;
                }
                const cm = new ConfigManager();
                const tm = new TranslateManager(cm);
                const ui = new UIManager(cm, tm);

                GM_registerMenuCommand('打开翻译设置', () => ui.togglePanel());
                GM_registerMenuCommand('立即翻译', () => tm.changeLanguage(cm.get('targetLanguage')));
                GM_registerMenuCommand('还原为原文', () => { try { translate.reset(); } catch (e) {} });

                (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).translateHelper = { config: cm, translate: tm, ui };
                console.log('智能翻译助手 v1.5.0 已加载，translate.js 版本: ' + (translate.version || '未知'));
            } catch (e) { console.error('翻译脚本初始化失败:', e); }
        }
        setTimeout(init, 100);
    })();
})();
