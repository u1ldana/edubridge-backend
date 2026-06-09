// === PATH HELPER ===
// uni/ немесе specialties/ ішінен дұрыс жол табу
function getPath(page) {
  const path = window.location.pathname;
  const inSubfolder = path.includes("/uni/") || path.includes("/specialties/");
  return inSubfolder ? "../" + page : page;
}
// ===================
 
const translations = {
    kz: {
      "nav-home": "Басты бет",
      "nav-specialties": "Мамандықтар",
      "nav-universities": "Университеттер",
      "nav-preparation": "Дайындық",
      "nav-feed": "Лента",
      "nav-language": "Тіл",
      "nav-login": "Кіру",
      "nav-profile": "Профиль",
      "nav-admin": "Админ",
  
      "footer-text": "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
      "footer-contact": "Байланыс",
  
      "login-label": "Кіру",
      "login-title": "Жеке кабинетке кіру",
      "login-desc": "Университеттерді сақтау, өтініш барысын бақылау және құжаттарды басқару үшін аккаунтыңызға кіріңіз.",
      "login-email": "Email",
      "login-password": "Құпиясөз",
      "login-btn-main": "Кіру",
      "login-forgot": "Құпиясөзді ұмыттыңыз ба?",
      "login-register": "Тіркелу",
      "login-note": "Бұл бет әзірге demo нұсқа. Кейін backend-пен байланыстырып, толық авторизация жасауға болады.",
      "login-email-placeholder": "example@mail.com",
      "login-password-placeholder": "********",
  
      "register-label": "Тіркелу",
      "register-title": "Жаңа аккаунт ашу",
      "register-desc": "Жеке кабинет ашу үшін мәліметтеріңізді толтырыңыз.",
      "register-name": "Аты-жөні",
      "register-email": "Email",
      "register-password": "Құпиясөз",
      "register-btn-main": "Тіркелу",
      "register-login-link": "Аккаунтыңыз бар ма? Кіру",
      "register-note": "Бұл бет әзірге demo нұсқа. Кейін backend-пен байланыстырып, толық тіркелу жүйесін жасауға болады.",
      "register-name-placeholder": "Аты-жөніңіз",
      "register-email-placeholder": "example@mail.com",
      "register-password-placeholder": "********",
  
      "profile-label": "Профиль",
      "profile-title": "Жеке кабинет",
      "profile-desc": "Қош келдіңіз! Бұл сіздің жеке кабинетіңіз.",
      "profile-name-label": "Аты:",
      "profile-role-label": "Рөл:",
      "profile-role-user": "Қолданушы",
      "profile-universities-btn": "Университеттерді қарау",
            
      "feed-open": "Ашу",
      "feed-tab-all": "Барлығы",
      "feed-tab-scholarship": "Гранттар",
      "feed-tab-life": "Студент өмірі",
      "feed-tab-interview": "Сұхбат",
      "feed-tab-stories": "Жетістіктер",
      "feed-saved-posts": "Сақталған посттар",
      "feed-faq": "Жиі сұрақтар",
      "feed-ai-suggest": "AI ұсынысы",
      "feed-trending": "Трендтер",
      "feed-save-post": "♡ Сақтау",
      "feed-close": "Жабу",
      "feed-saved-desc": "Сақталған пайдалы посттар саны.",
      "feed-ai-text": "Scholarship және interview посттарын жиі қарайсың. Дайындыққа өт.",
      "nav-logout": "Шығу",
      "feed-label": "Лента",
      "pro-acc-plan": "Жоспар",
      "pro-field-major": "Мамандық",
      "uni-search-btn": "Іздеу",
      "prep-title": "Дайындық орталығы",
      "prep-checklist": "Чек-лист",
      "prep-uploads": "Файл жүктеу",
      "prep-interview": "Сұхбат",
      "prep-deadlines": "Дедлайндар",
      "prep-notes": "Жазбалар",
      "prep-grants": "Грант жолы",
      "prep-dashboard": "Бақылау панелі",
      "calc-title": "Түркияда өмір сүру бюджеті",
      "calc-city": "Қала",
      "calc-housing": "Тұрғын үй типі",
      "calc-result": "Есептеу нәтижесі",
      "calc-total": "Жылдық жалпы шығын",
      "calc-monthly": "Айлық орташа",
      "chat-title": "AI Кеңесші",
      "chat-placeholder": "Сұрағыңды жаз...",
      "mentor-students": "Студенттерім",
      "mentor-consults": "Консультациялар",
      "mentor-dashboard": "Бақылау панелі",
      "profile-save": "Сақтау",
      "profile-password": "Парольді өзгерту",
      "doc-upload": "Жүктеу",
      "doc-approve": "Дұрыс",
      "doc-reject": "Дұрыс емес",
      "profile-logout-btn": "Шығу",
  
      "hero-badge": "Түркия университеттеріне түсу платформасы",
      "hero-big": "ТҮРКИЯДА ОҚУ",
      "hero-sub1": "бакалавриат, магистратура және докторантура",
      "hero-sub2": "гранттар мен жеңілдіктер мүмкіндігімен",
      "hero-desc": "Өзіңе сәйкес университетті таңда, түсу шарттарын салыстыр және барлық процесті бір жерден басқар.",
      "btn-universities": "Университеттерді қарау",
      "btn-specialties": "Мамандықтарды көру",
      "stat-1": "университет",
      "stat-3": "ыңғайлы қолжетімділік",
      "panel-title": "Негізгі мүмкіндіктер",
      "mini-1": "Қала бойынша іздеу",
      "mini-2": "Құжат чек-листі",
      "mini-3": "Дедлайндарды бақылау",
      "mini-4": "Гранттар мен жеңілдіктер",
  
      "sections-label": "Негізгі бағыттар",
      "sections-title": "Сайттың негізгі бөлімдері",
      "sections-desc": "Қажетті ақпаратқа бірден өтетіндей етіп жасалған негізгі модульдер.",
      "card-1-title": "Мамандықтар",
      "card-1-desc": "Қызығатын бағыт бойынша университеттерді табу.",
      "card-2-title": "Университеттер",
      "card-2-desc": "Қала, рейтинг және оқу түрі бойынша таңдау.",
      "card-3-title": "Дайындық",
      "card-3-desc": "Құжаттар, дедлайндар және түсу кезеңдері.",
      "card-4-title": "Лента",
      "card-4-desc": "Жаңалықтар, гранттар және пайдалы ақпарат.",
  
      "steps-label": "Қысқа жол",
      "steps-title": "Қалай жұмыс істейді?",
      "steps-desc": "Барлық процесс бірнеше қарапайым қадамнан тұрады.",
      "step-1-title": "Мамандықты таңда",
      "step-1-desc": "Өзіңе қызық бағытты белгілейсің.",
      "step-2-title": "Университетті таңда",
      "step-2-desc": "Шарттар мен мүмкіндіктерді салыстырасың.",
      "step-3-title": "Құжаттарды дайында",
      "step-3-desc": "Қажетті тізім бойынша дайындаласың.",
      "step-4-title": "Оқуға түс",
      "step-4-desc": "Өтініш беріп, процесті бақылайсың.",
  
      "prep-label": "Дайындық",
      "prep-title": "Не дайындау керек?",
      "prep-desc": "Түсу процесінде қажет негізгі құжаттар мен кезеңдер бір жерде жиналған.",
      "prep-btn": "Толық чек-лист көру",
      "check-1": "Паспорт",
      "check-2": "Аттестат / диплом",
      "check-3": "Transcript",
      "check-5": "Мотивациялық хат",
      "check-6": "Recommendation letter",
  
      "cta-label": "Бастау",
      "cta-title": "Бастауға дайынсың ба?",
      "cta-desc": "Өзіңе сәйкес университетті тауып, Түркияда оқу жолын бүгін баста.",
      "cta-btn-1": "Университеттерді қарау",
      "cta-btn-2": "Кіру",
  
      "uni-label": "Университеттер",
      "uni-title": "Түркия университеттері",
      "uni-desc": "Университетті атауы, қала немесе оқу бағыты бойынша ізде.",
      "search-btn": "Іздеу",
      "search-placeholder": "Университетті іздеу...",
      "tag-private": "Жеке университет",
      "sabanci-short-desc": "Стамбұлдағы беделді private university. Engineering, Business, Arts and Social Sciences бағыттары бар.",
      "meta-language": "Оқыту тілі:",
      "meta-programs": "Бағдарламалар:",
      "view-details": "Толық ақпарат",
      "empty-search": "Ештеңе табылмады.",
  
      "sabanci-label": "Sabancı University",
      "sabanci-title": "Sabancı University",
      "sabanci-subtitle": "Istanbul, Türkiye · Private University · Көптеген undergraduate programs 100% English",
      "sabanci-about": "Sabancı University — Стамбұлдағы заманауи және беделді университеттердің бірі. Университет interdisciplinary білім беру моделін ұсынады және Engineering, Arts and Social Sciences, Business бағыттарымен танымал.",
      "sabanci-faculty-engineering": "Инженерия және жаратылыстану факультеті",
      "sabanci-faculty-arts": "Өнер және әлеуметтік ғылымдар факультеті",
      "sabanci-business-school": "Sabancı бизнес мектебі",
      "sabanci-major-cse": "Computer Science and Engineering",
      "sabanci-major-dsa": "Data Science and Analytics",
      "sabanci-major-ee": "Electronics Engineering",
      "sabanci-major-ie": "Industrial Engineering",
      "sabanci-major-msne": "Materials Science and Nano Engineering",
      "sabanci-major-mechatronics": "Mechatronics Engineering",
      "sabanci-major-mbgb": "Molecular Biology, Genetics and Bioengineering",
      "sabanci-major-econ": "Economics",
      "sabanci-major-psych": "Psychology",
      "sabanci-major-psir": "Political Science and International Relations",
      "sabanci-major-vavcd": "Visual Arts and Visual Communication Design",
      "sabanci-major-management": "Management",
  
      "apply-btn": "Кіру / Apply",
      "back-btn": "Артқа қайту",
      "save-university-btn": "Таңдаулыға сақтау",
      "saved-university-btn": "Таңдаулыда",
      "remove-university-btn": "Таңдаулыдан өшіру",
  
      "info-location-title": "Орналасуы",
      "info-location-desc": "Istanbul, Tuzla",
      "info-type-title": "Түрі",
      "info-type-desc": "Private Foundation University",
      "info-language-title": "Оқыту тілі",
      "info-language-desc": "English",
      "info-levels-title": "Деңгейлер",
      "info-levels-desc": "Bachelor, Master, PhD",
      "why-title": "Неге осы университет?",
      "why-1": "Interdisciplinary academic model",
      "why-2": "Engineering және Business бағдарламалары мықты",
      "why-3": "International student admissions support",
      "why-4": "Шетелдік студенттерге scholarship мүмкіндіктері",
      "why-5": "Заманауи campus және белсенді student life",
      "req-title": "Admission requirements",
      "req-1": "Passport copy",
      "req-2": "High school diploma / certificate",
      "req-3": "Transcript",
      "req-4": "Қажет болса accepted exam немесе diploma results",
      "req-5": "English proficiency document немесе university language exam",
      "req-6": "Online application form",
      "majors-title": "Мамандықтар",
      "scholarship-title": "Scholarships",
      "scholarship-desc": "International applicants admission scholarships үшін автоматты түрде қарастырылуы мүмкін. Scholarship саны шектеулі және бәсекесі жоғары.",
      "accommodation-title": "Accommodation",
      "accommodation-desc": "Campus ішінде accommodation нұсқалары бар. Студенттер Istanbul бойынша жеке тұрғын үйді де таңдай алады.",
      "quick-info-title": "Қысқаша ақпарат",
      "quick-1": "Қала:",
      "quick-2": "Түрі:",
      "quick-3": "Тілі:",
      "quick-4": "Оқу форматы:",
      "quick-city-value": "Istanbul",
      "quick-type-value": "Private",
      "quick-language-value": "English",
      "quick-study-value": "Full-time",
      "actions-title": "Әрекеттер",
      "all-universities-btn": "Барлық университеттер",
  
      "profile-nav-overview": "Шолу",
      "profile-nav-consultations": "Консультациялар",
      "profile-nav-purchases": "Сатып алынған материалдар",
      "profile-nav-documents": "Құжаттар",
      "profile-nav-universities": "Сақталған университеттер",
      "profile-nav-deadlines": "Дедлайндар",
      "profile-account-status": "Аккаунт статусы",
      "profile-plan": "Тариф",
      "profile-plan-value": "Student Dashboard",
      "profile-welcome-label": "Dashboard",
      "profile-welcome-title": "Қайта қош келдіңіз,",
      "profile-welcome-desc": "Мұнда консультацияларыңыз, сатып алынған материалдарыңыз, құжат статусы және университеттеріңіз бір жерде жиналған.",
      "profile-stat-saved": "Сақталған университет",
      "profile-stat-purchases": "Сатып алынған материал",
      "profile-stat-consultations": "Консультация",
      "profile-stat-progress": "Жалпы прогресс",
      "profile-consultations-title": "Консультациялар",
      "profile-view-all": "Барлығын көру",
      "profile-consultation-1-title": "Admission Consultation",
      "profile-consultation-1-desc": "12 April 2026 · 18:00 · Online",
      "profile-consultation-2-title": "Document Review",
      "profile-consultation-2-desc": "18 April 2026 · 15:00 · Zoom",
      "profile-status-confirmed": "Бекітілді",
      "profile-status-pending": "Күтуде",
      "profile-purchases-title": "Сатып алынған материалдар",
      "profile-open": "Ашу",
      "profile-purchase-1-title": "Turkey Admission Checklist",
      "profile-purchase-1-desc": "Сатып алынған · Толық қолжетімділік",
      "profile-purchase-2-title": "University Guide",
      "profile-purchase-2-desc": "Сатып алынған · Толық қолжетімділік",
      "profile-status-active": "Белсенді",
      "profile-progress-block-title": "Түсу прогресі",
      "profile-progress-profile": "Профильді толтыру",
      "profile-progress-docs": "Құжаттарды жүктеу",
      "profile-progress-uni": "Университет таңдау",
      "profile-progress-apply": "Өтініш беру",
      "profile-documents-title": "Құжаттар",
      "profile-manage": "Басқару",
      "profile-doc-passport": "Паспорт",
      "profile-doc-transcript": "Transcript",
      "profile-doc-motivation": "Motivation Letter",
      "profile-doc-recommendation": "Recommendation Letter",
      "profile-doc-ready": "Дайын",
      "profile-doc-progress": "Жасалуда",
      "profile-doc-pending": "Күтуде",
      "profile-deadlines-title": "Алдағы дедлайндар",
      "profile-calendar": "Күнтізбе",
      "profile-deadline-1-title": "Sabancı University",
      "profile-deadline-1-desc": "Өтініш беру дедлайны",
      "profile-deadline-2-title": "Құжаттарды жүктеу",
      "profile-deadline-2-desc": "Файлдарды соңғы тапсыру",
      "profile-saved-title": "Сақталған университеттер",
      "profile-add-more": "Тағы қосу",
      "profile-saved-uni-desc": "Engineering, Business және Social Sciences бағыттары күшті.",
      "profile-view-details": "Толық ақпарат",
      "profile-add-card-title": "+ Тағы университет қосу",
      "profile-add-card-desc": "Университеттерді кейін салыстыру үшін сақтап қойыңыз.",
      "profile-go-list": "Тізімге өту",
      "profile-quick-actions-title": "Жылдам әрекеттер",
      "profile-quick-universities": "Университеттер",
      "profile-quick-checklist": "Checklist",
      "profile-quick-consultation": "Консультация",
      "profile-quick-documents": "Құжаттар",
      "profile-status-text": "Белсенді",
      "saved-empty-title": "+ Тағы университет қосу",
      "saved-empty-desc": "Университеттерді кейін салыстыру үшін сақтап қойыңыз.",
      "saved-empty-link": "Тізімге өту",
      "specialties-label": "Мамандықтар",
"specialties-title": "Түркиядағы сұраныстағы мамандықтар",
"specialties-desc": "Қызықтырған мамандығыңызды таңдап, сол бағыт бойынша ақпаратты және бұл мамандық бар университеттерді көре аласыз.",
"specialties-search-placeholder": "Мамандықты іздеу...",
"specialties-popular-label": "Бағыттар",
"specialties-popular-title": "Ең танымал мамандықтар",
"specialties-popular-desc": "Әр мамандықтың ішінде қысқаша сипаттама және осы бағыт бар университеттер тізімі болады.",
 
"specialty-category-it": "IT & Engineering",
"specialty-category-business": "Business",
"specialty-category-social": "Social Sciences",
 
"specialty-cs-title": "Computer Science",
"specialty-cs-desc": "Бағдарламалау, алгоритмдер, жасанды интеллект, database және software development бағыттарын қамтиды.",
 
"specialty-ds-title": "Data Science",
"specialty-ds-desc": "Data analysis, machine learning, statistics және business intelligence бағыттарын біріктіреді.",
 
"specialty-ba-title": "Business Administration",
"specialty-ba-desc": "Менеджмент, маркетинг, finance, entrepreneurship және company strategy бағыттарын оқытады.",
 
"specialty-econ-title": "Economics",
"specialty-econ-desc": "Экономикалық жүйелер, macro/microeconomics, research және policy analysis бағыттарына негізделген.",
 
"specialty-psych-title": "Psychology",
"specialty-psych-desc": "Адам психикасы, behavior, development, research methods және counseling негіздерін қамтиды.",
 
"specialty-ir-title": "International Relations",
"specialty-ir-desc": "Дипломатия, international politics, foreign policy және global institutions бағыттарын зерттейді.",
 
"specialty-degree-bachelor-master": "Bachelor / Master",
"specialty-language-note": "Оқыту тілі университетке байланысты",
"specialty-view-btn": "Толық ақпарат",
      "pro-menu-overview": "Шолу",
      "pro-menu-edit": "Профильді өзгерту",
      "pro-menu-consult": "Консультациялар",
      "pro-menu-docs": "Құжаттар",
      "pro-menu-unis": "Таңдаулы университеттер",
      "pro-menu-deadlines": "Дедлайндар",
      "pro-menu-notes": "Жазбалар",
      "pro-dashboard": "Dashboard",
      "pro-welcome-desc": "Таңдаулы университеттер, құжаттар және прогресс.",
      "pro-stat-unis": "Таңдаулы университет",
      "pro-stat-docs": "Құжат прогресі",
      "pro-stat-consult": "Консультация",
      "pro-stat-progress": "Жалпы прогресс",
      "pro-edit-title": "Профиль ақпаратын өзгерту",
      "pro-field-name": "Атыңыз",
      "pro-field-city": "Қала",
      "pro-field-goal": "Мақсат",
      "pro-save": "Сақтау",
      "pro-reset": "Тазалау",
      "pro-reset-full": "Профильді тазалау",
      "pro-acc-status": "Account status",
      "pro-acc-plan-val": "Student Dashboard",
      "pro-docs-title": "Құжаттар",
      "pro-consult-title": "Консультациялар",
      "pro-deadlines-title": "Дедлайндар",
      "pro-notes-title": "Жеке жазбалар",
      "pro-unis-title": "Таңдаулы университеттер",
      "pro-app-progress": "Application Progress",
      "pro-quick-actions": "Quick Actions",
 
      "feed-hero-title": "Контент, жаңалық және студент life",
      "feed-hero-desc": "Scholarship news, FAQ, success stories және Түркиядағы студент өмірі туралы пайдалы контент.",
      "pro-prep-progress": "📋 Дайындық прогресі",
      "pro-prep-link": "Дайындыққа өту →",
      "pro-save-btn": "💾 Сақтау",
      "pro-clear-btn": "Тазалау",
      "pro-deadline-add": "Дедлайн қосу",
      "pro-prep-nav": "Дайындық",
      "feed-save-btn": "♡ Сақтау",
      "feed-open-btn": "Ашу",
      "card-ai-title": "AI Кеңесші",
      "card-ai-desc": "Университет пен грант туралы сұрағыңды AI-ға қой — бірден жауап аласың.",
      "card-ai-btn": "Сұрақ қою →",
      "card-calc-title": "Бюджет Калькуляторы",
      "card-calc-desc": "Түркияда оқу неше тұрады? Қала мен университет типіне қарай есептеп алыңыз.",
      "pro-welcome-title": "Қайта қош келдіңіз,",
 
      "pro-editable": "Өзгертуге болады",
 
      "back-btn-alt": "Артқа қайту",
 
      "spec-field-label": "Бағыт",
 
      "spec-level-label": "Оқу деңгейі",
 
      "spec-lang-label": "Оқыту тілі",
 
      "spec-who-label": "Кімге сай?",
 
      "spec-about-title": "Бұл мамандық не туралы?",
 
      "spec-who-title": "Кімдерге сай келеді?",
 
      "spec-subjects-title": "Негізгі пәндер",
 
      "spec-skills-title": "Қандай skills керек?",
 
      "spec-careers-title": "Болашақ профессиялар",
 
      "spec-unis-title": "Осы бағытқа сай университеттер",
 
      "spec-career-title": "Career Match",
 
      "spec-check-btn": "Маған сай ма екенін тексеру",
 
      "spec-unis-btn": "Университеттерді көру",
 
      "all-specs-btn": "Барлық мамандықтар",
 
      "spec-rec-btn": "Recommendation алу",
 
      "spec-profile-btn": "Профильге өту",
 
      "spec-test-btn": "Тесттен өту",
 
      "back-to-unis": "← Университеттерге қайту",
 
      "back-to-specs": "← Мамандықтарға қайту",
    },
  
    ru: {
      "nav-home": "Главная",
      "nav-specialties": "Специальности",
      "nav-universities": "Университеты",
      "nav-preparation": "Подготовка",
      "nav-feed": "Лента",
      "nav-language": "Язык",
      "nav-login": "Войти",
      "nav-profile": "Профиль",
      "nav-admin": "Админ",
  
      "footer-text": "© 2026 EduBridge Türkiye. Все права защищены.",
      "footer-contact": "Контакты",
  
      "login-label": "Вход",
      "login-title": "Вход в личный кабинет",
      "login-desc": "Войдите, чтобы сохранять университеты, отслеживать заявки и управлять документами.",
      "login-email": "Email",
      "login-password": "Пароль",
      "login-btn-main": "Войти",
      "login-forgot": "Забыли пароль?",
      "login-register": "Регистрация",
      "login-note": "Эта страница пока demo-версия. Позже можно подключить backend и сделать полную авторизацию.",
      "login-email-placeholder": "example@mail.com",
      "login-password-placeholder": "********",
  
      "register-label": "Регистрация",
      "register-title": "Создать новый аккаунт",
      "register-desc": "Заполните данные, чтобы создать личный кабинет.",
      "register-name": "Полное имя",
      "register-email": "Email",
      "register-password": "Пароль",
      "register-btn-main": "Зарегистрироваться",
      "register-login-link": "Уже есть аккаунт? Войти",
      "register-note": "Эта страница пока demo-версия. Позже можно подключить backend и сделать полноценную регистрацию.",
      "register-name-placeholder": "Ваше имя",
      "register-email-placeholder": "example@mail.com",
      "register-password-placeholder": "********",
  
      "profile-label": "Профиль",
      "profile-title": "Личный кабинет",
      "profile-desc": "Добро пожаловать! Это ваш личный кабинет.",
      "profile-name-label": "Имя:",
      "profile-role-label": "Роль:",
      "profile-role-user": "Пользователь",
      "profile-universities-btn": "Смотреть университеты",
            
      "feed-open": "Открыть",
      "feed-tab-all": "Все",
      "feed-tab-scholarship": "Гранты",
      "feed-tab-life": "Студ. жизнь",
      "feed-tab-interview": "Интервью",
      "feed-tab-stories": "Истории",
      "feed-saved-posts": "Сохранённые посты",
      "feed-faq": "Частые вопросы",
      "feed-ai-suggest": "AI рекомендация",
      "feed-trending": "Тренды",
      "feed-save-post": "♡ Сохранить",
      "feed-close": "Закрыть",
      "feed-saved-desc": "Количество сохранённых постов.",
      "feed-ai-text": "Вы часто смотрите scholarship и interview посты. Перейди к подготовке.",
      "nav-logout": "Выйти",
      "feed-label": "Лента",
      "pro-acc-plan": "План",
      "pro-field-major": "Специальность",
      "uni-search-btn": "Поиск",
      "prep-title": "Центр подготовки",
      "prep-checklist": "Чек-лист",
      "prep-uploads": "Загрузка файлов",
      "prep-interview": "Собеседование",
      "prep-deadlines": "Дедлайны",
      "prep-notes": "Заметки",
      "prep-grants": "Путь к гранту",
      "prep-dashboard": "Панель управления",
      "calc-title": "Бюджет проживания в Турции",
      "calc-city": "Город",
      "calc-housing": "Тип жилья",
      "calc-result": "Результат расчёта",
      "calc-total": "Годовые расходы",
      "calc-monthly": "В месяц",
      "chat-title": "AI Советник",
      "chat-placeholder": "Напиши вопрос...",
      "mentor-students": "Мои студенты",
      "mentor-consults": "Консультации",
      "mentor-dashboard": "Панель управления",
      "profile-save": "Сохранить",
      "profile-password": "Изменить пароль",
      "doc-upload": "Загрузить",
      "doc-approve": "Правильно",
      "doc-reject": "Неправильно",
      "profile-logout-btn": "Выйти",
  
      "hero-badge": "Платформа для поступления в университеты Турции",
      "hero-big": "ОБУЧЕНИЕ В ТУРЦИИ",
      "hero-sub1": "бакалавриат, магистратура и докторантура",
      "hero-sub2": "с возможностью грантов и скидок",
      "hero-desc": "Выбери подходящий университет, сравни условия поступления и управляй всем процессом в одном месте.",
      "btn-universities": "Смотреть университеты",
      "btn-specialties": "Смотреть специальности",
      "stat-1": "университетов",
      "stat-3": "удобный доступ",
      "panel-title": "Основные возможности",
      "mini-1": "Поиск по городу",
      "mini-2": "Чек-лист документов",
      "mini-3": "Контроль дедлайнов",
      "mini-4": "Гранты и скидки",
  
      "sections-label": "Основные направления",
      "sections-title": "Основные разделы сайта",
      "sections-desc": "Ключевые модули, чтобы быстро перейти к нужной информации.",
      "card-1-title": "Специальности",
      "card-1-desc": "Поиск университетов по интересующему направлению.",
      "card-2-title": "Университеты",
      "card-2-desc": "Выбор по городу, рейтингу и типу обучения.",
      "card-3-title": "Подготовка",
      "card-3-desc": "Документы, дедлайны и этапы поступления.",
      "card-4-title": "Лента",
      "card-4-desc": "Новости, гранты и полезная информация.",
  
      "steps-label": "Короткий путь",
      "steps-title": "Как это работает?",
      "steps-desc": "Весь процесс состоит из нескольких простых шагов.",
      "step-1-title": "Выбери специальность",
      "step-1-desc": "Отметь интересующее направление.",
      "step-2-title": "Выбери университет",
      "step-2-desc": "Сравни условия и возможности.",
      "step-3-title": "Подготовь документы",
      "step-3-desc": "Собери всё по нужному списку.",
      "step-4-title": "Поступи",
      "step-4-desc": "Подай заявку и отслеживай процесс.",
  
      "prep-label": "Подготовка",
      "prep-title": "Что нужно подготовить?",
      "prep-desc": "Основные документы и этапы поступления собраны в одном месте.",
      "prep-btn": "Открыть полный чек-лист",
      "check-1": "Паспорт",
      "check-2": "Аттестат / диплом",
      "check-3": "Транскрипт",
      "check-5": "Мотивационное письмо",
      "check-6": "Рекомендательное письмо",
  
      "cta-label": "Старт",
      "cta-title": "Готов(а) начать?",
      "cta-desc": "Найди подходящий университет и начни путь к обучению в Турции уже сегодня.",
      "cta-btn-1": "Смотреть университеты",
      "cta-btn-2": "Войти",
  
      "uni-label": "Университеты",
      "uni-title": "Университеты Турции",
      "uni-desc": "Ищи университет по названию, городу или направлению обучения.",
      "search-btn": "Поиск",
      "search-placeholder": "Поиск университета...",
      "tag-private": "Частный университет",
      "sabanci-short-desc": "Престижный private university в Стамбуле. Есть направления Engineering, Business, Arts and Social Sciences.",
      "meta-language": "Язык обучения:",
      "meta-programs": "Программы:",
      "view-details": "Полная информация",
      "empty-search": "Ничего не найдено.",
  
      "sabanci-label": "Sabancı University",
      "sabanci-title": "Sabancı University",
      "sabanci-subtitle": "Istanbul, Türkiye · Private University · Большинство undergraduate programs на 100% English",
      "sabanci-about": "Sabancı University — один из современных и престижных университетов Стамбула. Университет предлагает interdisciplinary модель образования и известен направлениями Engineering, Arts and Social Sciences, Business.",
      "sabanci-faculty-engineering": "Факультет инженерии и естественных наук",
      "sabanci-faculty-arts": "Факультет искусств и социальных наук",
      "sabanci-business-school": "Бизнес-школа Сабанджи",
      "sabanci-major-cse": "Computer Science and Engineering",
      "sabanci-major-dsa": "Data Science and Analytics",
      "sabanci-major-ee": "Electronics Engineering",
      "sabanci-major-ie": "Industrial Engineering",
      "sabanci-major-msne": "Materials Science and Nano Engineering",
      "sabanci-major-mechatronics": "Mechatronics Engineering",
      "sabanci-major-mbgb": "Molecular Biology, Genetics and Bioengineering",
      "sabanci-major-econ": "Economics",
      "sabanci-major-psych": "Psychology",
      "sabanci-major-psir": "Political Science and International Relations",
      "sabanci-major-vavcd": "Visual Arts and Visual Communication Design",
      "sabanci-major-management": "Management",
  
      "apply-btn": "Войти / Apply",
      "back-btn": "Назад",
      "save-university-btn": "Сохранить",
      "saved-university-btn": "Сохранено",
      "remove-university-btn": "Удалить из избранного",
  
      "info-location-title": "Расположение",
      "info-location-desc": "Istanbul, Tuzla",
      "info-type-title": "Тип",
      "info-type-desc": "Private Foundation University",
      "info-language-title": "Язык обучения",
      "info-language-desc": "English",
      "info-levels-title": "Уровни",
      "info-levels-desc": "Bachelor, Master, PhD",
      "why-title": "Почему этот университет?",
      "why-1": "Interdisciplinary academic model",
      "why-2": "Сильные программы в Engineering и Business",
      "why-3": "Поддержка international student admissions",
      "why-4": "Возможности scholarships для иностранных студентов",
      "why-5": "Современный campus и active student life",
      "req-title": "Admission requirements",
      "req-1": "Passport copy",
      "req-2": "High school diploma / certificate",
      "req-3": "Transcript",
      "req-4": "При необходимости accepted exam или diploma results",
      "req-5": "English proficiency document или university language exam",
      "req-6": "Online application form",
      "majors-title": "Специальности",
      "scholarship-title": "Scholarships",
      "scholarship-desc": "International applicants могут автоматически рассматриваться на admission scholarships. Количество scholarships ограничено, конкурс высокий.",
      "accommodation-title": "Accommodation",
      "accommodation-desc": "Доступны варианты проживания на campus. Также студенты могут выбрать частное жильё в Istanbul.",
      "quick-info-title": "Краткая информация",
      "quick-1": "Город:",
      "quick-2": "Тип:",
      "quick-3": "Язык:",
      "quick-4": "Формат обучения:",
      "quick-city-value": "Istanbul",
      "quick-type-value": "Private",
      "quick-language-value": "English",
      "quick-study-value": "Full-time",
      "actions-title": "Действия",
      "all-universities-btn": "Все университеты",
  
      "profile-nav-overview": "Обзор",
      "profile-nav-consultations": "Консультации",
      "profile-nav-purchases": "Купленные материалы",
      "profile-nav-documents": "Документы",
      "profile-nav-universities": "Сохранённые университеты",
      "profile-nav-deadlines": "Дедлайны",
      "profile-account-status": "Статус аккаунта",
      "profile-plan": "Тариф",
      "profile-plan-value": "Student Dashboard",
      "profile-welcome-label": "Dashboard",
      "profile-welcome-title": "С возвращением,",
      "profile-welcome-desc": "Здесь собраны ваши консультации, купленные материалы, статус документов и университеты в одном месте.",
      "profile-stat-saved": "Сохранённый университет",
      "profile-stat-purchases": "Купленный материал",
      "profile-stat-consultations": "Консультации",
      "profile-stat-progress": "Общий прогресс",
      "profile-consultations-title": "Консультации",
      "profile-view-all": "Смотреть все",
      "profile-consultation-1-title": "Admission Consultation",
      "profile-consultation-1-desc": "12 April 2026 · 18:00 · Online",
      "profile-consultation-2-title": "Document Review",
      "profile-consultation-2-desc": "18 April 2026 · 15:00 · Zoom",
      "profile-status-confirmed": "Подтверждено",
      "profile-status-pending": "В ожидании",
      "profile-purchases-title": "Купленные материалы",
      "profile-open": "Открыть",
      "profile-purchase-1-title": "Turkey Admission Checklist",
      "profile-purchase-1-desc": "Куплено · Полный доступ",
      "profile-purchase-2-title": "University Guide",
      "profile-purchase-2-desc": "Куплено · Полный доступ",
      "profile-status-active": "Активно",
      "profile-progress-block-title": "Прогресс поступления",
      "profile-progress-profile": "Заполнение профиля",
      "profile-progress-docs": "Загрузка документов",
      "profile-progress-uni": "Выбор университета",
      "profile-progress-apply": "Подача заявки",
      "profile-documents-title": "Документы",
      "profile-manage": "Управлять",
      "profile-doc-passport": "Паспорт",
      "profile-doc-transcript": "Транскрипт",
      "profile-doc-motivation": "Motivation Letter",
      "profile-doc-recommendation": "Recommendation Letter",
      "profile-doc-ready": "Готово",
      "profile-doc-progress": "В процессе",
      "profile-doc-pending": "Ожидается",
      "profile-deadlines-title": "Ближайшие дедлайны",
      "profile-calendar": "Календарь",
      "profile-deadline-1-title": "Sabancı University",
      "profile-deadline-1-desc": "Дедлайн подачи заявки",
      "profile-deadline-2-title": "Загрузка документов",
      "profile-deadline-2-desc": "Финальная отправка файлов",
      "profile-saved-title": "Сохранённые университеты",
      "profile-add-more": "Добавить ещё",
      "profile-saved-uni-desc": "Сильные направления: Engineering, Business и Social Sciences.",
      "profile-view-details": "Подробнее",
      "profile-add-card-title": "+ Добавить ещё университет",
      "profile-add-card-desc": "Сохраняйте университеты, чтобы потом их сравнить.",
      "profile-go-list": "Перейти к списку",
      "profile-quick-actions-title": "Быстрые действия",
      "profile-quick-universities": "Университеты",
      "profile-quick-checklist": "Checklist",
      "profile-quick-consultation": "Консультация",
      "profile-quick-documents": "Документы",
      "profile-status-text": "Активен",
      "saved-empty-title": "+ Добавить ещё университет",
      "saved-empty-desc": "Сохраняйте университеты, чтобы потом их сравнить.",
      "saved-empty-link": "Перейти к списку",
      "specialties-label": "Специальности",
"specialties-title": "Востребованные специальности в Турции",
"specialties-desc": "Выберите интересующую специальность и посмотрите информацию по направлению и список университетов, где она есть.",
"specialties-search-placeholder": "Поиск специальности...",
"specialties-popular-label": "Направления",
"specialties-popular-title": "Самые популярные специальности",
"specialties-popular-desc": "Внутри каждой специальности будет краткое описание и список университетов с этим направлением.",
 
"specialty-category-it": "IT & Engineering",
"specialty-category-business": "Business",
"specialty-category-social": "Social Sciences",
 
"specialty-cs-title": "Computer Science",
"specialty-cs-desc": "Охватывает программирование, алгоритмы, искусственный интеллект, базы данных и software development.",
 
"specialty-ds-title": "Data Science",
"specialty-ds-desc": "Объединяет data analysis, machine learning, statistics и business intelligence.",
 
"specialty-ba-title": "Business Administration",
"specialty-ba-desc": "Включает менеджмент, маркетинг, finance, entrepreneurship и company strategy.",
 
"specialty-econ-title": "Economics",
"specialty-econ-desc": "Основана на изучении экономических систем, macro/microeconomics, research и policy analysis.",
 
"specialty-psych-title": "Psychology",
"specialty-psych-desc": "Охватывает психику человека, behavior, development, research methods и основы counseling.",
 
"specialty-ir-title": "International Relations",
"specialty-ir-desc": "Изучает дипломатию, international politics, foreign policy и global institutions.",
 
"specialty-degree-bachelor-master": "Bachelor / Master",
"specialty-language-note": "Язык обучения зависит от университета",
"specialty-view-btn": "Подробнее",
      "pro-menu-overview": "Обзор",
      "pro-menu-edit": "Редактировать",
      "pro-menu-consult": "Консультации",
      "pro-menu-docs": "Документы",
      "pro-menu-unis": "Избранные вузы",
      "pro-menu-deadlines": "Дедлайны",
      "pro-menu-notes": "Заметки",
      "pro-dashboard": "Dashboard",
      "pro-welcome-desc": "Избранные вузы, документы и прогресс.",
      "pro-stat-unis": "Избранный вуз",
      "pro-stat-docs": "Прогресс документов",
      "pro-stat-consult": "Консультация",
      "pro-stat-progress": "Общий прогресс",
      "pro-edit-title": "Редактирование профиля",
      "pro-field-name": "Ваше имя",
      "pro-field-city": "Город",
      "pro-field-goal": "Цель",
      "pro-save": "Сохранить",
      "pro-reset": "Очистить",
      "pro-reset-full": "Очистить профиль",
      "pro-acc-status": "Account status",
      "pro-acc-plan-val": "Student Dashboard",
      "pro-docs-title": "Документы",
      "pro-consult-title": "Консультации",
      "pro-deadlines-title": "Дедлайны",
      "pro-notes-title": "Личные заметки",
      "pro-unis-title": "Избранные вузы",
      "pro-app-progress": "Прогресс заявки",
      "pro-quick-actions": "Быстрые действия",
 
      "feed-hero-title": "Контент, новости и студенческая жизнь",
      "feed-hero-desc": "Новости о стипендиях, FAQ, истории успеха и полезный контент о студенческой жизни в Турции.",
      "pro-prep-progress": "📋 Прогресс подготовки",
      "pro-prep-link": "Перейти к подготовке →",
      "pro-save-btn": "💾 Сохранить",
      "pro-clear-btn": "Очистить",
      "pro-deadline-add": "Добавить дедлайн",
      "pro-prep-nav": "Подготовка",
      "feed-save-btn": "♡ Сохранить",
      "feed-open-btn": "Открыть",
      "card-ai-title": "AI Советник",
      "card-ai-desc": "Задай вопрос об университете и гранте AI — получи ответ сразу.",
      "card-ai-btn": "Задать вопрос →",
      "card-calc-title": "Калькулятор бюджета",
      "card-calc-desc": "Сколько стоит учёба в Турции? Рассчитайте по городу и типу университета.",    },
  
    en: {
      "nav-home": "Home",
      "nav-specialties": "Specialties",
      "nav-universities": "Universities",
      "nav-preparation": "Preparation",
      "nav-feed": "Feed",
      "nav-language": "Language",
      "nav-login": "Login",
      "nav-profile": "Profile",
      "nav-admin": "Admin",
  
      "footer-text": "© 2026 EduBridge Türkiye. All rights reserved.",
      "footer-contact": "Contact",
  
      "login-label": "Login",
      "login-title": "Login to your account",
      "login-desc": "Sign in to save universities, track applications, and manage documents.",
      "login-email": "Email",
      "login-password": "Password",
      "login-btn-main": "Login",
      "login-forgot": "Forgot password?",
      "login-register": "Register",
      "login-note": "This page is currently a demo version. Later, it can be connected to a backend for full authentication.",
      "login-email-placeholder": "example@mail.com",
      "login-password-placeholder": "********",
  
      "register-label": "Register",
      "register-title": "Create a new account",
      "register-desc": "Fill in your details to create a personal account.",
      "register-name": "Full name",
      "register-email": "Email",
      "register-password": "Password",
      "register-btn-main": "Register",
      "register-login-link": "Already have an account? Login",
      "register-note": "This page is currently a demo version. Later, it can be connected to a backend for full registration.",
      "register-name-placeholder": "Your full name",
      "register-email-placeholder": "example@mail.com",
      "register-password-placeholder": "********",
  
      "profile-label": "Profile",
      "profile-title": "Personal account",
      "profile-desc": "Welcome! This is your personal account.",
      "profile-name-label": "Name:",
      "profile-role-label": "Role:",
      "profile-role-user": "User",
      "profile-universities-btn": "View universities",
            
      "feed-open": "Open",
      "feed-tab-all": "For You",
      "feed-tab-scholarship": "Scholarships",
      "feed-tab-life": "Student Life",
      "feed-tab-interview": "Interview",
      "feed-tab-stories": "Stories",
      "feed-saved-posts": "Saved Posts",
      "feed-faq": "Quick FAQ",
      "feed-ai-suggest": "AI Suggestion",
      "feed-trending": "Trending",
      "feed-save-post": "♡ Save",
      "feed-close": "Close",
      "feed-saved-desc": "Number of saved posts.",
      "feed-ai-text": "You often read scholarship and interview posts. Start your prep roadmap.",
      "nav-logout": "Logout",
      "feed-label": "Feed",
      "pro-acc-plan": "Plan",
      "pro-field-major": "Major",
      "uni-search-btn": "Search",
      "prep-title": "Preparation Center",
      "prep-checklist": "Checklist",
      "prep-uploads": "File Upload",
      "prep-interview": "Interview Prep",
      "prep-deadlines": "Deadlines",
      "prep-notes": "Notes",
      "prep-grants": "Grant Path",
      "prep-dashboard": "Dashboard",
      "calc-title": "Living Budget in Turkey",
      "calc-city": "City",
      "calc-housing": "Housing Type",
      "calc-result": "Calculation Result",
      "calc-total": "Annual Total",
      "calc-monthly": "Monthly Average",
      "chat-title": "AI Advisor",
      "chat-placeholder": "Type your question...",
      "mentor-students": "My Students",
      "mentor-consults": "Consultations",
      "mentor-dashboard": "Dashboard",
      "profile-save": "Save",
      "profile-password": "Change Password",
      "doc-upload": "Upload",
      "doc-approve": "Correct",
      "doc-reject": "Incorrect",
      "profile-logout-btn": "Logout",
  
      "hero-badge": "Platform for admission to Turkish universities",
      "hero-big": "STUDY IN TÜRKİYE",
      "hero-sub1": "bachelor's, master's and doctoral programs",
      "hero-sub2": "with scholarship and discount opportunities",
      "hero-desc": "Choose a university that fits you, compare admission requirements, and manage the whole process in one place.",
      "btn-universities": "View universities",
      "btn-specialties": "View majors",
      "stat-1": "universities",
      "stat-3": "easy access",
      "panel-title": "Main features",
      "mini-1": "Search by city",
      "mini-2": "Document checklist",
      "mini-3": "Deadline tracking",
      "mini-4": "Scholarships and discounts",
  
      "sections-label": "Core sections",
      "sections-title": "Main sections of the platform",
      "sections-desc": "Core modules designed for quick access to the information you need.",
      "card-1-title": "Majors",
      "card-1-desc": "Find universities by your academic interests.",
      "card-2-title": "Universities",
      "card-2-desc": "Choose by city, ranking and type of study.",
      "card-3-title": "Preparation",
      "card-3-desc": "Documents, deadlines and admission stages.",
      "card-4-title": "Feed",
      "card-4-desc": "News, scholarships and useful updates.",
  
      "steps-label": "Simple path",
      "steps-title": "How does it work?",
      "steps-desc": "The whole process consists of a few simple steps.",
      "step-1-title": "Choose a major",
      "step-1-desc": "Select the field you are interested in.",
      "step-2-title": "Choose a university",
      "step-2-desc": "Compare conditions and opportunities.",
      "step-3-title": "Prepare documents",
      "step-3-desc": "Collect everything according to the checklist.",
      "step-4-title": "Get admitted",
      "step-4-desc": "Submit your application and track the process.",
  
      "prep-label": "Preparation",
      "prep-title": "What do you need to prepare?",
      "prep-desc": "Key documents and admission steps are gathered in one place.",
      "prep-btn": "View full checklist",
      "check-1": "Passport",
      "check-2": "High school diploma / degree",
      "check-3": "Transcript",
      "check-5": "Motivation letter",
      "check-6": "Recommendation letter",
  
      "cta-label": "Start",
      "cta-title": "Ready to begin?",
      "cta-desc": "Find the right university and start your study journey in Türkiye today.",
      "cta-btn-1": "View universities",
      "cta-btn-2": "Login",
  
      "uni-label": "Universities",
      "uni-title": "Universities in Türkiye",
      "uni-desc": "Search for a university by name, city, or study direction.",
      "search-btn": "Search",
      "search-placeholder": "Search universities...",
      "tag-private": "Private university",
      "sabanci-short-desc": "A prestigious private university in Istanbul with Engineering, Business, and Arts & Social Sciences programs.",
      "meta-language": "Language:",
      "meta-programs": "Programs:",
      "view-details": "View details",
      "empty-search": "No results found.",
  
      "sabanci-label": "Sabancı University",
      "sabanci-title": "Sabancı University",
      "sabanci-subtitle": "Istanbul, Türkiye · Private University · Most undergraduate programs are in English",
      "sabanci-about": "Sabancı University is one of the modern and prestigious universities in Istanbul. It offers an interdisciplinary education model and is known for Engineering, Arts and Social Sciences, and Business.",
      "sabanci-faculty-engineering": "Faculty of Engineering and Natural Sciences",
      "sabanci-faculty-arts": "Faculty of Arts and Social Sciences",
      "sabanci-business-school": "Sabanci Business School",
      "sabanci-major-cse": "Computer Science and Engineering",
      "sabanci-major-dsa": "Data Science and Analytics",
      "sabanci-major-ee": "Electronics Engineering",
      "sabanci-major-ie": "Industrial Engineering",
      "sabanci-major-msne": "Materials Science and Nano Engineering",
      "sabanci-major-mechatronics": "Mechatronics Engineering",
      "sabanci-major-mbgb": "Molecular Biology, Genetics and Bioengineering",
      "sabanci-major-econ": "Economics",
      "sabanci-major-psych": "Psychology",
      "sabanci-major-psir": "Political Science and International Relations",
      "sabanci-major-vavcd": "Visual Arts and Visual Communication Design",
      "sabanci-major-management": "Management",
  
      "apply-btn": "Apply / Login",
      "back-btn": "Go back",
      "save-university-btn": "Save university",
      "saved-university-btn": "Saved",
      "remove-university-btn": "Remove from saved",
  
      "info-location-title": "Location",
      "info-location-desc": "Istanbul, Tuzla",
      "info-type-title": "Type",
      "info-type-desc": "Private Foundation University",
      "info-language-title": "Language of instruction",
      "info-language-desc": "English",
      "info-levels-title": "Levels",
      "info-levels-desc": "Bachelor, Master, PhD",
      "why-title": "Why this university?",
      "why-1": "Interdisciplinary academic model",
      "why-2": "Strong engineering and business programs",
      "why-3": "International student admissions support",
      "why-4": "Scholarship opportunities for international applicants",
      "why-5": "Modern campus and active student life",
      "req-title": "Admission requirements",
      "req-1": "Passport copy",
      "req-2": "High school diploma / certificate",
      "req-3": "Transcript",
      "req-4": "Accepted exam or diploma results if required",
      "req-5": "English proficiency document or university language exam",
      "req-6": "Online application form",
      "majors-title": "Majors",
      "scholarship-title": "Scholarships",
      "scholarship-desc": "International applicants may be automatically considered for admission scholarships. Scholarships are limited and highly competitive.",
      "accommodation-title": "Accommodation",
      "accommodation-desc": "On-campus accommodation options are available. Students may also choose private housing in Istanbul.",
      "quick-info-title": "Quick info",
      "quick-1": "City:",
      "quick-2": "Type:",
      "quick-3": "Language:",
      "quick-4": "Study mode:",
      "quick-city-value": "Istanbul",
      "quick-type-value": "Private",
      "quick-language-value": "English",
      "quick-study-value": "Full-time",
      "actions-title": "Actions",
      "all-universities-btn": "All universities",
  
      "profile-nav-overview": "Overview",
      "profile-nav-consultations": "Consultations",
      "profile-nav-purchases": "Purchased Materials",
      "profile-nav-documents": "Documents",
      "profile-nav-universities": "Saved Universities",
      "profile-nav-deadlines": "Deadlines",
      "profile-account-status": "Account status",
      "profile-plan": "Plan",
      "profile-plan-value": "Student Dashboard",
      "profile-welcome-label": "Dashboard",
      "profile-welcome-title": "Welcome back,",
      "profile-welcome-desc": "Here you can see your consultations, purchased materials, document status, and universities in one place.",
      "profile-stat-saved": "Saved university",
      "profile-stat-purchases": "Purchased material",
      "profile-stat-consultations": "Consultations",
      "profile-stat-progress": "Overall progress",
      "profile-consultations-title": "Consultations",
      "profile-view-all": "View all",
      "profile-consultation-1-title": "Admission Consultation",
      "profile-consultation-1-desc": "12 April 2026 · 18:00 · Online",
      "profile-consultation-2-title": "Document Review",
      "profile-consultation-2-desc": "18 April 2026 · 15:00 · Zoom",
      "profile-status-confirmed": "Confirmed",
      "profile-status-pending": "Pending",
      "profile-purchases-title": "Purchased Materials",
      "profile-open": "Open",
      "profile-purchase-1-title": "Turkey Admission Checklist",
      "profile-purchase-1-desc": "Purchased · Full access",
      "profile-purchase-2-title": "University Guide",
      "profile-purchase-2-desc": "Purchased · Full access",
      "profile-status-active": "Active",
      "profile-progress-block-title": "Application Progress",
      "profile-progress-profile": "Profile completion",
      "profile-progress-docs": "Documents uploaded",
      "profile-progress-uni": "University selection",
      "profile-progress-apply": "Application submission",
      "profile-documents-title": "Documents",
      "profile-manage": "Manage",
      "profile-doc-passport": "Passport",
      "profile-doc-transcript": "Transcript",
      "profile-doc-motivation": "Motivation Letter",
      "profile-doc-recommendation": "Recommendation Letter",
      "profile-doc-ready": "Ready",
      "profile-doc-progress": "In progress",
      "profile-doc-pending": "Pending",
      "profile-deadlines-title": "Upcoming Deadlines",
      "profile-calendar": "Calendar",
      "profile-deadline-1-title": "Sabancı University",
      "profile-deadline-1-desc": "Application deadline",
      "profile-deadline-2-title": "Document upload",
      "profile-deadline-2-desc": "Final file submission",
      "profile-saved-title": "Saved Universities",
      "profile-add-more": "Add more",
      "profile-saved-uni-desc": "Strong in Engineering, Business and Social Sciences.",
      "profile-view-details": "View details",
      "profile-add-card-title": "+ Add another university",
      "profile-add-card-desc": "Save universities to compare them later.",
      "profile-go-list": "Go to list",
      "profile-quick-actions-title": "Quick Actions",
      "profile-quick-universities": "Universities",
      "profile-quick-checklist": "Checklist",
      "profile-quick-consultation": "Consultation",
      "profile-quick-documents": "Documents",
      "profile-status-text": "Active",
      "saved-empty-title": "+ Add another university",
      "saved-empty-desc": "Save universities to compare them later.",
      "saved-empty-link": "Go to list",
      "specialties-label": "Specialties",
"specialties-title": "Popular majors in Türkiye",
"specialties-desc": "Choose a major you are interested in and view details and universities offering this program.",
"specialties-search-placeholder": "Search a major...",
"specialties-popular-label": "Directions",
"specialties-popular-title": "Most popular majors",
"specialties-popular-desc": "Each major includes a short description and a list of universities offering it.",
 
"specialty-category-it": "IT & Engineering",
"specialty-category-business": "Business",
"specialty-category-social": "Social Sciences",
 
"specialty-cs-title": "Computer Science",
"specialty-cs-desc": "Covers programming, algorithms, artificial intelligence, databases, and software development.",
 
"specialty-ds-title": "Data Science",
"specialty-ds-desc": "Combines data analysis, machine learning, statistics, and business intelligence.",
 
"specialty-ba-title": "Business Administration",
"specialty-ba-desc": "Includes management, marketing, finance, entrepreneurship, and company strategy.",
 
"specialty-econ-title": "Economics",
"specialty-econ-desc": "Focused on economic systems, macro/microeconomics, research, and policy analysis.",
 
"specialty-psych-title": "Psychology",
"specialty-psych-desc": "Covers human psychology, behavior, development, research methods, and counseling basics.",
 
"specialty-ir-title": "International Relations",
"specialty-ir-desc": "Studies diplomacy, international politics, foreign policy, and global institutions.",
 
"specialty-degree-bachelor-master": "Bachelor / Master",
"specialty-language-note": "Language of instruction depends on the university",
"specialty-view-btn": "View details",
      "nav-logout": "Logout",
      "pro-menu-overview": "Overview",
      "pro-menu-edit": "Edit Profile",
      "pro-menu-consult": "Consultations",
      "pro-menu-docs": "Documents",
      "pro-menu-unis": "Saved Universities",
      "pro-menu-deadlines": "Deadlines",
      "pro-menu-notes": "Notes",
      "pro-acc-status": "Account Status",
      "pro-acc-plan": "Plan",
      "pro-acc-plan-val": "Student Dashboard",
      "pro-reset-full": "Clear Profile",
      "pro-dashboard": "Dashboard",
      "pro-welcome-desc": "Here you can find your saved universities, documents, deadlines, consultations, and preparation progress all in one place.",
      "pro-stat-unis": "Saved University",
      "pro-stat-docs": "Document Readiness",
      "pro-stat-consult": "Consultation",
      "pro-stat-progress": "Overall Progress",
      "pro-edit-title": "Edit Profile Info",
      "pro-field-name": "Name",
      "pro-field-city": "City",
      "pro-field-major": "Field of Interest",
      "pro-field-goal": "Goal",
      "pro-save": "Save",
      "pro-fill-example": "Fill with Example",
      "pro-reset": "Clear",
      "pro-consult-title": "Consultations",
      "pro-deadlines-title": "Deadlines",
      "pro-app-progress": "Application Progress",
      "pro-docs-title": "Documents",
      "pro-notes-title": "Personal Notes",
      "pro-unis-title": "Saved Universities",
      "pro-quick-actions": "Quick Actions",
      "uni-label": "Universities",
      "uni-desc": "Search for a university by name, city, or field of study.",
      "uni-search-placeholder": "Search university...",
      "uni-search-btn": "Search",
      "feed-label": "Student Feed",
      "prep-center-title": "Preparation Center",
      "prep-center-desc": "Documents, deadlines, interview prep, and notes in one place.",
      "notif-title": "Notifications",
      "tasks-title": "Tasks",
      "match-score-label": "Match Score (%)",
      "readiness-label": "Readiness Level",
 
 
      "feed-hero-title": "Content, news and student life",
      "feed-hero-desc": "Scholarship news, FAQ, success stories and useful content about student life in Turkey.",
      "pro-prep-progress": "📋 Preparation Progress",
      "pro-prep-link": "Go to Preparation →",
      "pro-save-btn": "💾 Save",
      "pro-clear-btn": "Clear",
      "pro-deadline-add": "Add Deadline",
      "pro-prep-nav": "Preparation",
      "feed-save-btn": "♡ Save",
      "feed-open-btn": "Open",
      "card-ai-title": "AI Advisor",
      "card-ai-desc": "Ask AI about universities and grants — get instant answers.",
      "card-ai-btn": "Ask a question →",
      "card-calc-title": "Budget Calculator",
      "card-calc-desc": "How much does studying in Turkey cost? Calculate by city and university type.",    },
 
    tr: {
      "nav-home": "Ana Sayfa",
      "nav-specialties": "Bölümler",
      "nav-universities": "Üniversiteler",
      "nav-preparation": "Hazırlık",
      "nav-feed": "Haber Akışı",
      "nav-language": "Dil",
      "nav-login": "Giriş",
      "nav-profile": "Profil",
      "nav-admin": "Yönetici",
      "nav-logout": "Çıkış",
      "footer-text": "© 2026 EduBridge Türkiye. Tüm hakları saklıdır.",
      "footer-contact": "İletişim",
      "login-label": "Giriş",
      "login-title": "Kişisel Kabine Giriş",
      "login-desc": "Üniversiteleri kaydetmek, başvuru sürecini takip etmek ve belgeleri yönetmek için hesabınıza giriş yapın.",
      "login-email": "E-posta",
      "login-password": "Şifre",
      "login-btn-main": "Giriş Yap",
      "login-forgot": "Şifrenizi unuttunuz mu?",
      "login-register": "Kayıt Ol",
      "login-note": "Demo sürüm. Daha sonra backend ile bağlanacak.",
      "login-email-placeholder": "ornek@mail.com",
      "login-password-placeholder": "********",
      "register-label": "Kayıt Ol",
      "register-title": "Yeni Hesap Aç",
      "register-desc": "Kişisel kabine açmak için bilgilerinizi doldurun.",
      "register-name": "Ad Soyad",
      "register-email": "E-posta",
      "register-password": "Şifre",
      "register-btn-main": "Kayıt Ol",
      "register-login-link": "Hesabınız var mı? Giriş Yapın",
      "register-note": "Demo sürüm. Daha sonra tam kayıt sistemi eklenecek.",
      "register-name-placeholder": "Adınız Soyadınız",
      "register-email-placeholder": "ornek@mail.com",
      "register-password-placeholder": "********",
      "profile-label": "Profil",
      "profile-title": "Kişisel Kabine",
      "profile-desc": "Hoş geldiniz! Burası kişisel kabinenizdır.",
      "profile-name-label": "Ad:",
      "profile-role-label": "Rol:",
      "profile-role-user": "Kullanıcı",
      "profile-universities-btn": "Üniversitelere Git",
      "feed-open": "Aç",
      "feed-tab-all": "Tümü",
      "feed-tab-scholarship": "Burslar",
      "feed-tab-life": "Öğrenci Hayatı",
      "feed-tab-interview": "Röportaj",
      "feed-tab-stories": "Başarılar",
      "feed-saved-posts": "Kaydedilen Gönderiler",
      "feed-faq": "Sık Sorulan Sorular",
      "feed-ai-suggest": "AI Önerisi",
      "feed-trending": "Trendler",
      "feed-save-post": "♡ Kaydet",
      "feed-close": "Kapat",
      "feed-saved-desc": "Kaydedilen gönderilerin sayısı.",
      "feed-ai-text": "Burs ve mülakat gönderilerini sık görüntülüyorsunuz. Hazırlığa geçin.",
      "feed-label": "Haber Akışı",
      "pro-acc-plan": "Plan",
      "pro-field-major": "Bölüm",
      "uni-search-btn": "Ara",
      "prep-title": "Hazırlık Merkezi",
      "prep-checklist": "Kontrol Listesi",
      "prep-uploads": "Dosya Yükle",
      "prep-interview": "Röportaj",
      "prep-deadlines": "Son Tarihler",
      "prep-notes": "Notlar",
      "prep-grants": "Burs Yolu",
      "prep-dashboard": "Kontrol Paneli",
      "calc-title": "Türkiye'de Yaşam Bütçesi",
      "calc-city": "Şehir",
      "calc-housing": "Konut Tipi",
      "calc-result": "Hesaplama Sonucu",
      "calc-total": "Yıllık Toplam Gider",
      "calc-monthly": "Aylık Ortalama",
      "chat-title": "AI Danışman",
      "chat-placeholder": "Sorunuzu yazın...",
      "mentor-students": "Öğrencilerim",
      "mentor-consults": "Danışmanlıklar",
      "mentor-dashboard": "Kontrol Paneli",
      "profile-save": "Kaydet",
      "profile-password": "Şifreyi Değiştir",
      "doc-upload": "Yükle",
      "doc-approve": "Onayla",
      "doc-reject": "Reddet",
      "profile-logout-btn": "Çıkış",
      "hero-badge": "Türkiye Üniversitelerine Giriş Platformu",
      "hero-big": "TÜRKİYE'DE OKU",
      "hero-sub1": "lisans, yüksek lisans ve doktora",
      "hero-sub2": "burs ve indirim imkânlarıyla",
      "hero-desc": "Kendine uygun üniversiteyi seç, kabul şartlarını karşılaştır ve tüm süreci tek yerden yönet.",
      "btn-universities": "Üniversiteleri İncele",
      "btn-specialties": "Bölümlere Bak",
      "stat-1": "üniversite",
      "stat-3": "kolay erişim",
      "panel-title": "Temel Özellikler",
      "mini-1": "Şehre Göre Arama",
      "mini-2": "Belge Kontrol Listesi",
      "mini-3": "Son Tarihleri Takip Et",
      "mini-4": "Burslar ve İndirimler",
      "sections-label": "Ana Bölümler",
      "sections-title": "Sitenin Ana Bölümleri",
      "sections-desc": "İhtiyacınız olan bilgiye doğrudan ulaşabileceğiniz temel modüller.",
      "card-1-title": "Bölümler",
      "card-1-desc": "İlgilendiğiniz alana göre üniversiteleri bulun.",
      "card-2-title": "Üniversiteler",
      "card-2-desc": "Şehir, sıralama ve öğrenim türüne göre seçin.",
      "card-3-title": "Hazırlık",
      "card-3-desc": "Belgeler, son tarihler ve başvuru aşamaları.",
      "card-4-title": "Haber Akışı",
      "card-4-desc": "Haberler, burslar ve faydalı bilgiler.",
      "steps-label": "Kısa Yol",
      "steps-title": "Nasıl Çalışır?",
      "steps-desc": "Tüm süreç birkaç basit adımdan oluşur.",
      "step-1-title": "Bölümünü Seç",
      "step-1-desc": "İlgilendiğin alanı belirle.",
      "step-2-title": "Üniversiteyi Seç",
      "step-2-desc": "Şartları ve imkânları karşılaştır.",
      "step-3-title": "Belgeleri Hazırla",
      "step-3-desc": "Gerekli listeye göre hazırlan.",
      "step-4-title": "Üniversiteye Kaydol",
      "step-4-desc": "Başvuru yap, süreci takip et.",
      "prep-label": "Hazırlık",
      "prep-desc": "Başvuru sürecinde gerekli temel belgeler ve aşamalar tek yerde.",
      "prep-btn": "Tam Kontrol Listesini Gör",
      "check-1": "Pasaport",
      "check-2": "Lise Diploması / Sertifikası",
      "check-3": "Transkript",
      "check-5": "Motivasyon Mektubu",
      "check-6": "Tavsiye Mektubu",
      "cta-label": "Başlangıç",
      "cta-title": "Başlamaya Hazır mısınız?",
      "cta-desc": "Kendinize uygun üniversiteyi bulun ve Türkiye'de okuma yolculuğunuza bugün başlayın.",
      "cta-btn-1": "Üniversiteleri İncele",
      "cta-btn-2": "Giriş Yap",
      "uni-label": "Üniversiteler",
      "uni-title": "Türkiye Üniversiteleri",
      "uni-desc": "Üniversiteyi adına, şehrine veya bölümüne göre ara.",
      "search-btn": "Ara",
      "search-placeholder": "Üniversite ara...",
      "tag-private": "Özel Üniversite",
      "meta-language": "Öğretim Dili:",
      "meta-programs": "Programlar:",
      "view-details": "Detaylı Bilgi",
      "empty-search": "Sonuç bulunamadı.",
      "apply-btn": "Giriş / Başvur",
      "back-btn": "Geri Dön",
      "save-university-btn": "Favorilere Kaydet",
      "saved-university-btn": "Favorilerde",
      "remove-university-btn": "Favorilerden Kaldır",
      "info-location-title": "Konum",
      "info-location-desc": "Istanbul, Tuzla",
      "info-type-title": "Tür",
      "info-type-desc": "Özel Vakıf Üniversitesi",
      "info-language-title": "Öğretim Dili",
      "info-language-desc": "İngilizce",
      "info-levels-title": "Seviyeler",
      "info-levels-desc": "Lisans, Yüksek Lisans, Doktora",
      "why-title": "Neden Bu Üniversite?",
      "why-1": "Disiplinlerarası akademik model",
      "why-2": "Güçlü Mühendislik ve İşletme programları",
      "why-3": "Uluslararası öğrenci başvuru desteği",
      "why-4": "Yabancı öğrenciler için burs imkânları",
      "why-5": "Modern kampüs ve aktif öğrenci yaşamı",
      "req-title": "Kabul Şartları",
      "req-1": "Pasaport fotokopisi",
      "req-2": "Lise diploması / sertifikası",
      "req-3": "Transkript",
      "req-4": "Gerekirse sınav veya diploma sonuçları",
      "req-5": "İngilizce yeterlilik belgesi veya üniversite dil sınavı",
      "req-6": "Online başvuru formu",
      "majors-title": "Bölümler",
      "scholarship-title": "Burslar",
      "scholarship-desc": "Uluslararası başvuru sahipleri otomatik olarak kabul bursu için değerlendirilebilir. Burs sayısı sınırlı ve rekabetlidir.",
      "accommodation-title": "Konaklama",
      "accommodation-desc": "Kampüs içinde konaklama seçenekleri mevcuttur. Öğrenciler İstanbul genelinde özel konut da seçebilir.",
      "quick-info-title": "Kısa Bilgi",
      "quick-1": "Şehir:",
      "quick-2": "Tür:",
      "quick-3": "Dil:",
      "quick-4": "Öğrenim Formatı:",
      "quick-city-value": "İstanbul",
      "quick-type-value": "Özel",
      "quick-language-value": "İngilizce",
      "quick-study-value": "Tam zamanlı",
      "actions-title": "İşlemler",
      "all-universities-btn": "Tüm Üniversiteler",
      "profile-nav-overview": "Genel Bakış",
      "profile-nav-consultations": "Danışmanlıklar",
      "profile-nav-purchases": "Satın Alınanlar",
      "profile-nav-documents": "Belgeler",
      "profile-nav-universities": "Kaydedilen Üniversiteler",
      "profile-nav-deadlines": "Son Tarihler",
      "profile-account-status": "Hesap Durumu",
      "profile-plan": "Tarife",
      "profile-plan-value": "Öğrenci Paneli",
      "profile-welcome-label": "Panel",
      "profile-welcome-title": "Tekrar Hoş Geldiniz,",
      "profile-welcome-desc": "Danışmanlıklarınız, satın aldıklarınız, belge durumunuz ve üniversiteleriniz tek yerde.",
      "profile-stat-saved": "Kaydedilen Üniversite",
      "profile-stat-purchases": "Satın Alınan Materyal",
      "profile-stat-consultations": "Danışmanlık",
      "profile-stat-progress": "Genel İlerleme",
      "profile-consultations-title": "Danışmanlıklar",
      "profile-view-all": "Tümünü Gör",
      "profile-status-confirmed": "Onaylandı",
      "profile-status-pending": "Bekliyor",
      "profile-purchases-title": "Satın Alınan Materyaller",
      "profile-open": "Aç",
      "profile-status-active": "Aktif",
      "profile-progress-block-title": "Başvuru İlerlemesi",
      "profile-progress-profile": "Profili Doldur",
      "profile-progress-docs": "Belgeleri Yükle",
      "profile-progress-uni": "Üniversite Seç",
      "profile-progress-apply": "Başvuru Yap",
      "profile-documents-title": "Belgeler",
      "profile-manage": "Yönet",
      "profile-doc-passport": "Pasaport",
      "profile-doc-transcript": "Transkript",
      "profile-doc-motivation": "Motivasyon Mektubu",
      "profile-doc-recommendation": "Tavsiye Mektubu",
      "profile-doc-ready": "Hazır",
      "profile-doc-progress": "Hazırlanıyor",
      "profile-doc-pending": "Bekliyor",
      "profile-deadlines-title": "Yaklaşan Son Tarihler",
      "profile-calendar": "Takvim",
      "profile-saved-title": "Kaydedilen Üniversiteler",
      "profile-add-more": "Daha Fazla Ekle",
      "profile-view-details": "Detaylı Bilgi",
      "profile-add-card-title": "+ Üniversite Ekle",
      "profile-add-card-desc": "Üniversiteleri karşılaştırmak için kaydedin.",
      "profile-go-list": "Listeye Git",
      "profile-quick-actions-title": "Hızlı İşlemler",
      "profile-quick-universities": "Üniversiteler",
      "profile-quick-checklist": "Kontrol Listesi",
      "profile-quick-consultation": "Danışmanlık",
      "profile-quick-documents": "Belgeler",
      "profile-status-text": "Aktif",
      "saved-empty-title": "+ Üniversite Ekle",
      "saved-empty-desc": "Daha sonra karşılaştırmak için üniversiteleri kaydedin.",
      "saved-empty-link": "Listeye Git",
      "specialties-label": "Bölümler",
      "specialties-title": "Türkiye'de Talep Gören Bölümler",
      "specialties-desc": "İlgilendiğiniz bölümü seçin ve o alana ait bilgileri ile bu bölümü sunan üniversiteleri görün.",
      "specialties-search-placeholder": "Bölüm ara...",
      "specialties-popular-label": "Alanlar",
      "specialties-popular-title": "En Popüler Bölümler",
      "specialties-popular-desc": "Her bölümde kısa açıklama ve bu alanı sunan üniversitelerin listesi bulunur.",
      "specialty-category-it": "BT & Mühendislik",
      "specialty-category-business": "İşletme",
      "specialty-category-social": "Sosyal Bilimler",
      "specialty-cs-title": "Bilgisayar Bilimleri",
      "specialty-cs-desc": "Programlama, algoritmalar, yapay zeka, veritabanı ve yazılım geliştirme alanlarını kapsar.",
      "specialty-ds-title": "Veri Bilimi",
      "specialty-ds-desc": "Veri analizi, makine öğrenimi, istatistik ve iş zekası alanlarını birleştirir.",
      "specialty-ba-title": "İşletme Yönetimi",
      "specialty-ba-desc": "Yönetim, pazarlama, finans, girişimcilik ve şirket stratejisi öğretilir.",
      "specialty-econ-title": "Ekonomi",
      "specialty-econ-desc": "Ekonomik sistemler, makro/mikro ekonomi, araştırma ve politika analizine odaklanır.",
      "specialty-psych-title": "Psikoloji",
      "specialty-psych-desc": "İnsan psikolojisi, davranış, gelişim, araştırma yöntemleri ve psikolojik danışmanlık temellerini kapsar.",
      "specialty-ir-title": "Uluslararası İlişkiler",
      "specialty-ir-desc": "Diplomasi, uluslararası politika, dış politika ve küresel kurumlar alanlarını inceler.",
      "specialty-degree-bachelor-master": "Lisans / Yüksek Lisans",
      "specialty-language-note": "Öğretim dili üniversiteye göre değişir",
      "specialty-view-btn": "Detaylı Bilgi",
      "pro-menu-overview": "Genel Bakış",
      "pro-menu-edit": "Profili Düzenle",
      "pro-menu-consult": "Danışmanlıklar",
      "pro-menu-docs": "Belgeler",
      "pro-menu-unis": "Favori Üniversiteler",
      "pro-menu-deadlines": "Son Tarihler",
      "pro-menu-notes": "Notlar",
      "pro-dashboard": "Panel",
      "pro-welcome-desc": "Favori üniversiteler, belgeler ve ilerleme.",
      "pro-stat-unis": "Favori Üniversite",
      "pro-stat-docs": "Belge İlerlemesi",
      "pro-stat-consult": "Danışmanlık",
      "pro-stat-progress": "Genel İlerleme",
      "pro-edit-title": "Profil Bilgilerini Düzenle",
      "pro-field-name": "Adınız",
      "pro-field-city": "Şehir",
      "pro-field-goal": "Hedef",
      "pro-save": "Kaydet",
      "pro-reset": "Temizle",
      "pro-reset-full": "Profili Sıfırla",
      "pro-acc-status": "Hesap Durumu",
      "pro-acc-plan-val": "Öğrenci Paneli",
      "pro-docs-title": "Belgeler",
      "pro-consult-title": "Danışmanlıklar",
      "pro-deadlines-title": "Son Tarihler",
      "pro-notes-title": "Kişisel Notlar",
      "pro-unis-title": "Favori Üniversiteler",
      "pro-app-progress": "Başvuru İlerlemesi",
      "pro-quick-actions": "Hızlı İşlemler",
 
      "feed-hero-title": "İçerik, haberler ve öğrenci yaşamı",
      "feed-hero-desc": "Burs haberleri, SSS, başarı hikayeleri ve Türkiye'de öğrenci yaşamı hakkında faydalı içerik.",
      "pro-prep-progress": "📋 Hazırlık İlerlemesi",
      "pro-prep-link": "Hazırlığa Git →",
      "pro-save-btn": "💾 Kaydet",
      "pro-clear-btn": "Temizle",
      "pro-deadline-add": "Son Tarih Ekle",
      "pro-prep-nav": "Hazırlık",
      "feed-save-btn": "♡ Kaydet",
      "feed-open-btn": "Aç",
      "card-ai-title": "AI Danışman",
      "card-ai-desc": "Üniversite ve burs hakkında AI\'ya sor — anında cevap al.",
      "card-ai-btn": "Soru sor →",
      "card-calc-title": "Bütçe Hesaplayıcı",
      "card-calc-desc": "Türkiye\'de okumak ne kadar? Şehir ve üniversite tipine göre hesaplayın.",
      "prep-clear-all-btn": "🗑️ Tümünü Temizle",
 
      "prep-reset-btn": "🗑️ Sıfırla",
    },
 
  };
  
  const ADMIN_EMAIL = "admin@edubridge.com";
  const ADMIN_PASSWORD = "admin123";
  
  const universitiesData = {
    sabanci: {
      id: "sabanci",
      name: "Sabancı University",
      city: "Istanbul",
      type: "Private",
      description: {
        kz: "Engineering, Business және Social Sciences бағыттары күшті.",
        ru: "Сильные направления: Engineering, Business и Social Sciences.",
        en: "Strong in Engineering, Business and Social Sciences."
      },
      url: "sabanci.html"
    },
  
    acibadem: {
      id: "acibadem",
      name: "Acıbadem University",
      city: "Istanbul",
      type: "Private Medical University",
      description: {
        kz: "Медицина және health sciences бойынша жетекші университет.",
        ru: "Один из ведущих университетов в сфере медицины и health sciences.",
        en: "Leading university in medicine and health sciences."
      },
      url: "uni/acibadem.html"
    },
 
    "antalya-bilim": {
      id: "antalya-bilim",
      name: "Antalya Bilim University",
      city: "Antalya",
      type: "Private University",
      description: {
        kz: "Ағылшын тіліндегі бағдарламалары бар халықаралық университет.",
        ru: "Международный университет с программами на английском языке.",
        en: "International university with English-medium programs."
      },
      url: "uni/antalya-bilim.html"
    },
    aydin: {
      id: "aydin",
      name: "Istanbul Aydın University",
      city: "Istanbul",
      type: "Private University",
      description: {
        kz: "Стамбұлдағы халықаралық private university.",
        ru: "Международный частный университет в Стамбуле.",
        en: "International private university in Istanbul."
      },
      url: "uni/aydin.html"
    },
    bahcesehir: {
      id: "bahcesehir",
      name: "Bahçeşehir University",
      city: "Istanbul",
      type: "Private University",
      description: {
        kz: "Стамбұлдың орталығындағы халықаралық private university.",
        ru: "Международный частный университет в центре Стамбула.",
        en: "International private university in the heart of Istanbul."
      },
      url: "uni/bahcesehir.html"
    },
    "kadir-has": {
      id: "kadir-has",
      name: "Kadir Has University",
      city: "Istanbul",
      type: "Private University",
      description: {
        kz: "Стамбұл орталығындағы халықаралық private university.",
        ru: "Международный частный университет в центре Стамбула.",
        en: "International private university in central Istanbul."
      },
      url: "uni/kadir-has.html"
    },
    ozyegin: {
      id: "ozyegin",
      name: "Özyeğin University",
      city: "Istanbul",
      type: "Private University",
      description: {
        kz: "Entrepreneurship және innovation бағытындағы top private university.",
        ru: "Топовый частный университет в сфере entrepreneurship и innovation.",
        en: "Top private university focused on entrepreneurship and innovation."
      },
      url: "uni/ozyegin.html"
    },
    ted: {
      id: "ted",
      name: "TED University",
      city: "Ankara",
      type: "Private University",
      description: {
        kz: "Ankara қаласындағы English-medium private university.",
        ru: "Частный англоязычный университет в Анкаре.",
        en: "English-medium private university in Ankara."
      },
      url: "uni/ted.html"
    },uskudar: {
      id: "uskudar",
      name: "Üsküdar University",
      city: "Istanbul",
      type: "Private University",
      description: {
        kz: "Psychology және health sciences бағытындағы университет.",
        ru: "Университет в сфере психологии и health sciences.",
        en: "University focused on psychology and health sciences."
      },
      url: "uni/uskudar.html"
    },
    yasar: {
      id: "yasar",
      name: "Yaşar University",
      city: "Izmir",
      type: "Private University",
      description: {
        kz: "Измирдегі international private university.",
        ru: "Международный частный университет в Измире.",
        en: "International private university in Izmir."
      },
      url: "uni/yasar.html"
    },
  };
  
  function toggleLanguageMenu() {
    const menu = document.getElementById("languageMenu");
    if (menu) {
      menu.classList.toggle("show");
    }
  }
  
  function applyTranslations(lang) {
    const currentLang = translations[lang] || translations.kz;
    document.documentElement.lang = lang === "kz" ? "kk" : lang;
  
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (currentLang[key] !== undefined) {
        el.textContent = currentLang[key];
      }
    });
  
    document.querySelectorAll("[data-placeholder-i18n]").forEach((el) => {
      const key = el.getAttribute("data-placeholder-i18n");
      if (currentLang[key] !== undefined) {
        el.placeholder = currentLang[key];
      }
    });
  
    localStorage.setItem("lang", lang);
    renderSavedUniversities();
    updateFavoriteButtons();
  }
  
  function updateAuthButton() {
    const role = localStorage.getItem("role");
    const lang = localStorage.getItem("lang") || "kz";
    const authBtns = document.querySelectorAll(".login-btn");
  
    const logoutLabels = { kz: "Шығу", ru: "Выйти", en: "Logout", tr: "Çıkış" };
    const logoutLabel = logoutLabels[lang] || "Шығу";
 
    authBtns.forEach((btn) => {
      if (role === "user") {
        btn.href = getPath("profile.html");
        btn.setAttribute("data-i18n", "nav-profile");
        btn.textContent = translations[lang]["nav-profile"];
      } else if (role === "admin") {
        btn.href = getPath("admin.html");
        btn.setAttribute("data-i18n", "nav-admin");
        btn.textContent = translations[lang]["nav-admin"];
      } else if (role === "mentor") {
        btn.href = getPath("mentor.html");
        btn.textContent = "Ментор кабинеті";
      } else {
        btn.href = getPath("login.html");
        btn.setAttribute("data-i18n", "nav-login");
        btn.textContent = translations[lang]["nav-login"];
      }
 
      // Кіргеннен кейін "Шығу" батырмасын қос
      const existingLogout = btn.parentElement.querySelector(".logout-header-btn");
      if (role && !existingLogout) {
        const logoutBtn = document.createElement("button");
        logoutBtn.className = "logout-header-btn";
        logoutBtn.textContent = logoutLabel;
        logoutBtn.onclick = logout;
        btn.parentElement.appendChild(logoutBtn);
      } else if (!role && existingLogout) {
        existingLogout.remove();
      } else if (role && existingLogout) {
        existingLogout.textContent = logoutLabel;
      }
    });
  
    const ctaBtn2 = document.getElementById("cta-btn-2");
    if (ctaBtn2) {
      if (role === "user") {
        ctaBtn2.href = getPath("profile.html");
        ctaBtn2.textContent = translations[lang]["nav-profile"];
      } else if (role === "admin") {
        ctaBtn2.href = getPath("admin.html");
        ctaBtn2.textContent = translations[lang]["nav-admin"];
      } else {
        ctaBtn2.href = getPath("login.html");
        ctaBtn2.textContent = translations[lang]["nav-login"];
      }
    }
  
    const applyBtns = document.querySelectorAll(".apply-auth-btn");
    applyBtns.forEach((btn) => {
      if (role === "user") {
        btn.href = getPath("profile.html");
        btn.textContent = translations[lang]["nav-profile"];
      } else if (role === "admin") {
        btn.href = getPath("admin.html");
        btn.textContent = translations[lang]["nav-admin"];
      } else {
        btn.href = getPath("login.html");
        btn.textContent = translations[lang]["apply-btn"];
      }
    });
  }
  
  function setLang(lang) {
    applyTranslations(lang);
    updateAuthButton();
  
    const menu = document.getElementById("languageMenu");
    if (menu) {
      menu.classList.remove("show");
    }
  }
  
  function logout() {
    // FIX: __REAL_LOGOUT__ флагы алынды (i18n-core override жойылды)
    window.__REAL_LOGOUT__ = true;
    ["role","userRole","edu_user_role","username","userDisplayName","currentUserEmail","currentUser","edu_current_user","edu_auth","isLoggedIn","isAdmin","user"].forEach(function(k){
      localStorage.removeItem(k);
    });
    window.location.href = getPath("login.html");
  }
  
  function setupRegister() {
    const registerForm = document.getElementById("registerForm");
    if (!registerForm) return;
  
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("regName")?.value.trim();
      const email = document.getElementById("regEmail")?.value.trim();
      const password = document.getElementById("regPassword")?.value.trim();
      const message = document.getElementById("registerMessage");
  
      if (!name || !email || !password) {
        if (message) { message.textContent = "Барлық өрістерді толтырыңыз"; message.style.color = "tomato"; }
        return;
      }
 
      // Email validation
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        if (message) { message.textContent = "Email дұрыс емес"; message.style.color = "tomato"; }
        return;
      }
 
      if (password.length < 6) {
        if (message) { message.textContent = "Құпиясөз кемінде 6 таңба болуы керек"; message.style.color = "tomato"; }
        return;
      }
  
      // Multi-user: users массивін алу
      let users = JSON.parse(localStorage.getItem("edu_users") || "[]");
 
      // Email бұрын тіркелген бе?
      if (users.find(u => u.email === email)) {
        if (message) { message.textContent = "Бұл email бұрын тіркелген"; message.style.color = "tomato"; }
        return;
      }
 
      const user = { name, email, password, role: "user", createdAt: new Date().toISOString() };
      users.push(user);
      localStorage.setItem("edu_users", JSON.stringify(users));
 
      // Save to Supabase PostgreSQL if connected
      if (window.DB && window.USE_SUPABASE) {
        window.DB.students.create({
          fullname: name,
          email: email,
          password: password,
          role: "user",
          country: "Қазақстан",
          created_at: new Date().toISOString()
        }).then(function() {
          console.log("✅ Student saved to PostgreSQL:", email);
        }).catch(function(err) {
          console.warn("⚠️ PostgreSQL save failed, localStorage used:", err.message);
        });
      }
  
      if (message) { message.textContent = "Тіркелу сәтті! Енді кіре аласыз"; message.style.color = "lightgreen"; }
  
      setTimeout(() => { window.location.href = getPath("login.html"); }, 1200);
    });
  }
  
  function setupLogin() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;
 
    function cleanAuthSession() {
      ["role","userRole","edu_user_role","username","userDisplayName","currentUserEmail","currentUser","edu_current_user","edu_auth","isLoggedIn","isAdmin","user"].forEach(function(k){
        try { localStorage.removeItem(k); } catch(e){}
      });
    }

    function saveSession(role, user) {
      role = role || user.role || "user";
      const fixed = Object.assign({}, user, {
        role: role,
        name: user.name || user.fullname || user.email || "User",
        fullname: user.fullname || user.name || user.email || "User"
      });
      localStorage.setItem("role", role);
      localStorage.setItem("userRole", role);
      localStorage.setItem("edu_user_role", role);
      localStorage.setItem("currentUserEmail", fixed.email || "");
      localStorage.setItem("username", fixed.name || "");
      localStorage.setItem("userDisplayName", fixed.name || "");
      localStorage.setItem("isLoggedIn", "true");
      if (role === "admin") localStorage.setItem("isAdmin", "true");
      localStorage.setItem("currentUser", JSON.stringify(fixed));
      localStorage.setItem("edu_current_user", JSON.stringify(fixed));
      localStorage.setItem("user", JSON.stringify(fixed));
      localStorage.setItem("edu_auth", JSON.stringify({ loggedIn:true, role:role, email:fixed.email || "" }));

      if (role === "user" || role === "student") {
        const users = JSON.parse(localStorage.getItem("edu_users") || "[]");
        const i = users.findIndex(function(u) { return (u.email||"").toLowerCase() === (fixed.email||"").toLowerCase(); });
        if (i === -1) users.push(fixed); else users[i] = Object.assign({}, users[i], fixed);
        localStorage.setItem("edu_users", JSON.stringify(users));
      }
    }

    async function tryBackendLogin(email, password) {
      const API = window.BACKEND_URL || "http://localhost:3000";
      try {
        const res = await fetch(API + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password })
        });
        const data = await res.json().catch(function() { return { ok: false }; });
        if (data.ok && data.role && data.user) {
          return { ok: true, role: data.role, user: data.user };
        }
        return { ok: false, message: data.message || "Email немесе құпиясөз қате" };
      } catch (err) {
        return { ok: false, offline: true };
      }
    }
 
    loginForm.addEventListener("submit", async function(e) {
      e.preventDefault();
 
      const email    = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
      const password = (document.getElementById("loginPassword")?.value || "").trim();
      const message  = document.getElementById("loginMessage");
 
      if (message) { message.textContent = ""; }
 
      if (!email || !password) {
        if (message) { message.textContent = "Email мен құпиясөзді толтырыңыз"; message.style.color = "tomato"; }
        return;
      }

      cleanAuthSession();
 
      // 1. Admin тексеру (hardcode, backend-сіз жұмыс істейді)
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", "Admin");
        localStorage.setItem("currentUserEmail", ADMIN_EMAIL);
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("edu_user_role", "admin");
        localStorage.setItem("currentUser", JSON.stringify({id:"admin", name:"Admin", fullname:"Admin", email:ADMIN_EMAIL, role:"admin"}));
        localStorage.setItem("edu_current_user", JSON.stringify({id:"admin", name:"Admin", fullname:"Admin", email:ADMIN_EMAIL, role:"admin"}));
        localStorage.setItem("edu_auth", JSON.stringify({loggedIn:true, role:"admin", email:ADMIN_EMAIL}));
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = getPath("admin.html");
        return;
      }
 
      // 2. Backend /api/login
      const btn = loginForm.querySelector("button[type=submit]") || loginForm.querySelector(".login-main-btn");
      if (btn) { btn.disabled = true; btn.textContent = "⏳..."; }
 
      const backendResult = await tryBackendLogin(email, password);
 
      if (btn) { btn.disabled = false; btn.textContent = translations[localStorage.getItem("lang") || "kz"]["login-btn-main"] || "Кіру"; }
 
      if (backendResult.ok) {
        saveSession(backendResult.role, backendResult.user);
        if (backendResult.role === "admin") {
          window.location.href = getPath("admin.html");
        } else if (backendResult.role === "mentor") {
          window.location.href = getPath("mentor.html");
        } else {
          window.location.href = getPath("profile.html");
        }
        return;
      }
 
      // 3. Backend offline → localStorage fallback
      if (backendResult.offline) {
        const users = JSON.parse(localStorage.getItem("edu_users") || "[]");
        const mentorsRaw = JSON.parse(localStorage.getItem("edu_mentors") || "[]");
        const mentorPasswords = JSON.parse(localStorage.getItem("edu_mentor_passwords") || "{}");
        const deletedMentors = JSON.parse(localStorage.getItem("edu_deleted_mentors") || "[]").map(function(x){ return String(x||"").toLowerCase(); });
        const mentors = mentorsRaw
          .filter(function(m){ return !deletedMentors.includes(String(m.email||"").toLowerCase()); })
          .map(function(m){
            const mp = mentorPasswords[String(m.email||"").toLowerCase()] || m.plainPassword || m.password || "";
            return Object.assign({}, m, {role:"mentor", password:mp, plainPassword:mp});
          });
        const allLoginUsers = users.concat(mentors);
        const foundUser = allLoginUsers.find(function(u) {
          const pass = (u.role === "mentor") ? (u.plainPassword || u.password || "") : (u.password || u.plainPassword || "");
          return (u.email || "").toLowerCase() === email && String(pass) === String(password);
        });
        if (foundUser) {
          const foundRole = foundUser.role || "user";
          saveSession(foundRole, foundUser);
          if (foundRole === "mentor") {
            window.location.href = getPath("mentor.html");
          } else if (foundRole === "admin") {
            window.location.href = getPath("admin.html");
          } else {
            window.location.href = getPath("profile.html");
          }
          return;
        }
        if (message) {
          message.textContent = "⚠️ Backend қосылмаған. Email немесе пароль қате.";
          message.style.color = "tomato";
        }
        return;
      }
 
      // 4. Backend қатесі
      if (message) {
        message.textContent = backendResult.message || "Email немесе құпиясөз қате";
        message.style.color = "tomato";
      }
    });
  }
  function fillProfileData() {
    const profileName = document.getElementById("profileName");
    const savedUsername = localStorage.getItem("username");
    const currentEmail = localStorage.getItem("currentUserEmail") || "guest";
  
    if (profileName && savedUsername) profileName.textContent = savedUsername;
  
    const profileWelcomeName = document.getElementById("profileWelcomeName");
    if (profileWelcomeName && savedUsername) profileWelcomeName.textContent = savedUsername;
  
    const profileAvatar = document.getElementById("profileAvatar");
    if (profileAvatar && savedUsername) profileAvatar.textContent = savedUsername.charAt(0).toUpperCase();
  
    // Email: multi-user-дан
    const profileEmail = document.getElementById("profileEmail");
    if (profileEmail && currentEmail && currentEmail !== "guest") {
      profileEmail.textContent = currentEmail;
    }
 
    // Career test нәтижесі
    const ukey = "u_" + currentEmail + "_careerTestResult";
    const testResult = JSON.parse(localStorage.getItem(ukey) || "null");
    const resultBox = document.getElementById("careerTestResult");
    if (resultBox && testResult) {
      resultBox.style.display = "block";
      const rt = document.getElementById("careerResultText");
      const rd = document.getElementById("careerResultDate");
      if (rt) rt.textContent = testResult.pattern + " — " + testResult.description;
      if (rd) rd.textContent = testResult.date;
    }
  }
  
  function protectPages() {
    const path = window.location.pathname;
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
 
    // Егер role бар бірақ username жоқ болса — тек user рөлінде тазала
    // Admin/mentor username жоқ болса да рөлі сақталуы керек
    if (role === "user" && !username) {
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
    }
  
    if (path.includes("profile.html") && role !== "user" && role !== "student") {
      window.location.href = getPath("login.html");
    }
  
    if (path.includes("admin.html") && role !== "admin") {
      window.location.href = getPath("login.html");
    }
    if (path.includes("mentor.html") && role !== "mentor") {
      window.location.href = getPath("login.html");
    }
  }
  
  function setupSearch() {
    const input = document.getElementById("universitySearch");
    const button = document.getElementById("searchBtn");
    const cards = document.querySelectorAll(".university-card");
    const emptyState = document.getElementById("emptyState");
  
    if (!input || !button || !cards.length) return;
  
    function runSearch() {
      const value = input.value.toLowerCase().trim();
      let visibleCount = 0;
  
      cards.forEach((card) => {
        const searchText = (card.dataset.search || "").toLowerCase();
        const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
  
        if (value === "" || searchText.includes(value) || title.includes(value)) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });
  
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    }
  
    button.addEventListener("click", runSearch);
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        runSearch();
      }
    });
  }
  
  function getFavoriteUniversities() {
    const fkey = getUserKey("favoriteUniversities"); return JSON.parse(localStorage.getItem(fkey) || "[]");
  }
  
  function saveFavoriteUniversities(list) {
    const fkey = getUserKey("favoriteUniversities"); localStorage.setItem(fkey, JSON.stringify(list));
  }
  
  function isUniversityFavorite(universityId) {
    const favorites = getFavoriteUniversities();
    return favorites.some((item) => item.id === universityId);
  }
  
  function toggleFavoriteUniversity(universityId) {
    const role = localStorage.getItem("role");
    const lang = localStorage.getItem("lang") || "kz";
  
    if (role !== "user") {
      const msgs = {
        kz: "Университетті сақтау үшін аккаунтқа кіру керек. Кіру бетіне өту?",
        ru: "Нужно войти в аккаунт. Перейти?",
        en: "You need to log in. Go to login page?",
        tr: "Giriş yapmalısınız."
      };
      if (confirm(msgs[lang] || msgs.kz)) {
        window.location.href = typeof getPath === "function" ? getPath("login.html") : "login.html";
      }
      return;
    }
  
    const university = universitiesData[universityId];
    const fkey = getUserKey("favoriteUniversities");
    let list = [];
    try { list = JSON.parse(localStorage.getItem(fkey) || "[]"); } catch(e) {}
    if (!Array.isArray(list)) list = [];
  
    const exists = list.some(function(item) { return String(item.id) === String(universityId); });
  
    if (exists) {
      list = list.filter(function(item) { return String(item.id) !== String(universityId); });
      localStorage.setItem(fkey, JSON.stringify(list));
      alert("❌ Университет таңдаулыдан өшірілді!");
    } else {
      list.push({
        id: universityId,
        name: university ? university.name : universityId,
        city: university ? (university.city || "Türkiye") : "Türkiye",
        type: university ? (university.type || "") : "",
        description: university ? (university.description || {}) : {},
        url: university ? (university.url || "uni/" + universityId + ".html") : "uni/" + universityId + ".html",
        note: "Таңдаулыға сақталған",
        savedAt: new Date().toISOString()
      });
      localStorage.setItem(fkey, JSON.stringify(list));
      alert("✅ Университет сақталды!");
    }
  
    // Кнопканы бірден жаңарт
    const isFav = list.some(function(item) { return String(item.id) === String(universityId); });
    const t = translations[lang] || translations.kz;
    document.querySelectorAll('[onclick="toggleFavoriteUniversity(\'' + universityId + '\')"]').forEach(function(btn) {
      btn.innerHTML = isFav
        ? "❤️ " + (t["saved-university-btn"] || "Таңдаулыда")
        : (t["save-university-btn"] || "🤍 Сақтау");
    });
  
    if (typeof renderSavedUniversities === "function") renderSavedUniversities();
    if (typeof renderProfileUniversities === "function") renderProfileUniversities();
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  }
  
  function updateFavoriteButtons() {
    const lang = localStorage.getItem("lang") || "kz";
    const role = localStorage.getItem("role");
 
    const saveLabels = { kz: "🤍 Сақтау", ru: "🤍 Сохранить", en: "🤍 Save" };
    const loginLabels = { kz: "Кіру қажет", ru: "Войдите", en: "Login required" };
 
    Object.keys(universitiesData).forEach((universityId) => {
      const buttons = document.querySelectorAll(
        `[onclick="toggleFavoriteUniversity('${universityId}')"]`
      );
 
      buttons.forEach((btn) => {
        if (role !== "user") {
          // Кірмеген пайдаланушыға "Сақтау" деп тұрады
          btn.textContent = saveLabels[lang] || saveLabels.kz;
          btn.style.opacity = "1";
          return;
        }
 
        const isFavorite = isUniversityFavorite(universityId);
        if (isFavorite) {
          btn.textContent = "❤️ " + translations[lang]["saved-university-btn"];
        } else {
          btn.textContent = translations[lang]["save-university-btn"];
        }
      });
    });
  }
  
  function renderSavedUniversities() {
    const container = document.getElementById("savedUniversitiesContainer");
    const countEl = document.getElementById("savedUniversitiesCount");
    const lang = localStorage.getItem("lang") || "kz";
  
    if (!container) return;
  
    const favorites = getFavoriteUniversities();
  
    if (countEl) {
      countEl.textContent = favorites.length;
    }
  
    if (!favorites.length) {
      container.innerHTML = `
        <div class="university-mini-card add-card">
          <h4>${translations[lang]["saved-empty-title"]}</h4>
          <p>${translations[lang]["saved-empty-desc"]}</p>
          <a href="universities.html" class="text-action">${translations[lang]["saved-empty-link"]}</a>
        </div>
      `;
      return;
    }
  
    container.innerHTML = favorites.map((uni) => {
      const description =
        uni.description?.[lang] ||
        uni.description?.kz ||
        "";
  
      return `
        <div class="university-mini-card">
          <div class="uni-mini-top">
            <span class="mini-badge">${uni.type}</span>
            <span class="mini-city">${uni.city}</span>
          </div>
          <h4>${uni.name}</h4>
          <p>${description}</p>
          <a href="${uni.url}" class="text-action">${translations[lang]["profile-view-details"]}</a>
        </div>
      `;
    }).join("");
  }
  
  document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".language-dropdown");
    const menu = document.getElementById("languageMenu");
  
    if (dropdown && menu && !dropdown.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Session integrity check: role бар бірақ email жоқ болса тазала
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("currentUserEmail");
    // Restore username from edu_users if missing (prevents logout on refresh)
    const username = localStorage.getItem("username");
    if (role && !username) {
      if (email === "admin" || role === "admin") {
        localStorage.setItem("username", "Admin");
      } else if (email) {
        try {
          const users = JSON.parse(localStorage.getItem("edu_users") || "[]");
          const u = users.find(u => u.email === email);
          if (u) localStorage.setItem("username", u.name || email);
        } catch(e){}
      }
    }
 
    const savedLang = localStorage.getItem("lang") || "kz";
  
    applyTranslations(savedLang);
    protectPages();
    updateAuthButton();
    setupRegister();
    setupLogin();
    setupSearch();
    fillProfileData();
    renderSavedUniversities();
    updateFavoriteButtons();
    checkDeadlineNotifications();
  });
 
  function setupSpecialtyFilters() {
    const searchInput = document.getElementById("specialtySearch");
    const searchBtn = document.getElementById("specialtySearchBtn");
    const categoryFilter = document.getElementById("categoryFilter");
    const languageFilter = document.getElementById("languageFilter");
    const cards = document.querySelectorAll(".specialty-card");
    const emptyState = document.getElementById("specialtiesEmptyState");
  
    if (!cards.length) return;
  
    function filterSpecialties() {
      const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";
      const selectedCategory = categoryFilter ? categoryFilter.value : "all";
      const selectedLanguage = languageFilter ? languageFilter.value : "all";
  
      let visibleCount = 0;
  
      cards.forEach((card) => {
        const searchText = (card.dataset.search || "").toLowerCase();
        const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
        const category = card.dataset.category || "";
        const language = card.dataset.language || "";
  
        const matchesSearch =
          searchValue === "" ||
          searchText.includes(searchValue) ||
          title.includes(searchValue);
  
        const matchesCategory =
          selectedCategory === "all" || category === selectedCategory;
  
        const matchesLanguage =
          selectedLanguage === "all" ||
          language === selectedLanguage ||
          language === "both";
  
        if (matchesSearch && matchesCategory && matchesLanguage) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });
  
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    }
  
    if (searchBtn) searchBtn.addEventListener("click", filterSpecialties);
    if (searchInput) searchInput.addEventListener("input", filterSpecialties);
    if (categoryFilter) categoryFilter.addEventListener("change", filterSpecialties);
    if (languageFilter) languageFilter.addEventListener("change", filterSpecialties);
  }
  
  function recommendSpecialties() {
    const categoryFilter = document.getElementById("categoryFilter");
    const recommendationBox = document.getElementById("recommendationBox");
  
    if (!recommendationBox) return;
  
    const category = categoryFilter ? categoryFilter.value : "all";
  
    const recommendations = {
      it: {
        title: "Саған IT & Engineering бағыты сай келеді",
        text: "Computer Science және Data Science мамандықтарын қара. Ұсынылатын университеттер: Sabancı, Özyeğin, Aydın, Yaşar."
      },
      business: {
        title: "Саған Business бағыты сай келеді",
        text: "Business Administration және Economics мамандықтарын қара. Ұсынылатын университеттер: Bahçeşehir, Özyeğin, Aydın, Kadir Has."
      },
      health: {
        title: "Саған Medicine & Health бағыты сай келеді",
        text: "Medicine, Dentistry және Psychology бағыттарын қара. Ұсынылатын университеттер: Acıbadem, Üsküdar, Aydın, Bahçeşehir."
      },
      social: {
        title: "Саған Social Sciences бағыты сай келеді",
        text: "Psychology және International Relations мамандықтарын қара. Ұсынылатын университеттер: Üsküdar, Sabancı, Kadir Has, TED."
      },
      design: {
        title: "Саған Architecture & Design бағыты сай келеді",
        text: "Architecture және Design бағыттарын қара. Ұсынылатын университеттер: Bahçeşehir, Aydın, Yaşar, TED, Özyeğin."
      },
      all: {
        title: "Алдымен қызығатын бағытыңды таңда",
        text: "Filter арқылы IT, Business, Health, Social Sciences немесе Design таңдасаң, жүйе саған нақты recommendation береді."
      }
    };
  
    const result = recommendations[category] || recommendations.all;
  
    recommendationBox.style.display = "block";
    recommendationBox.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.text}</p>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    setupSpecialtyFilters();
  });
 
  /* recommendation.html өзінің script тегінде updateProgress бар, мұнда қажет емес */
 
function generateAdvancedRecommendation() {
 
  const interest =
    document.querySelector('input[name="interest"]:checked');
 
  if (!interest) {
    alert("Барлық сұраққа жауап беріңіз");
    return;
  }
 
  const result =
    document.getElementById("recommendationResult");
 
  const major =
    document.getElementById("recommendedMajor");
 
  const desc =
    document.getElementById("recommendedDesc");
 
  const career =
    document.getElementById("careerText");
 
  const universities =
    document.getElementById("recommendedUniversities");
 
  const paths =
    document.getElementById("careerPaths");
 
  const btn =
    document.getElementById("majorPageBtn");
 
  let uniHTML = "";
  let careerHTML = "";
 
  if (interest.value === "it") {
 
    major.innerText = "Computer Science";
 
    desc.innerText =
      "Сенің profile technology, AI және analytical бағыттарға өте жақсы сәйкес келеді.";
 
    career.innerText =
      "Сен problem-solving және future technologies бағыттарына бейімсің.";
 
    btn.href =
      "specialties/computer-science.html";
 
    uniHTML = `
      <a href="uni/sabanci.html" class="program-pill">Sabancı</a>
      <a href="uni/ozyegin.html" class="program-pill">Özyeğin</a>
      <a href="uni/bahcesehir.html" class="program-pill">Bahçeşehir</a>
    `;
 
    careerHTML = `
      <div class="program-pill">AI Engineer</div>
      <div class="program-pill">Software Developer</div>
      <div class="program-pill">Data Scientist</div>
    `;
  }
 
  else if (interest.value === "medicine") {
 
    major.innerText = "Medicine";
 
    desc.innerText =
      "Сен healthcare, медицина және адамдарға көмектесу бағыттарына жақынсың.";
 
    career.innerText =
      "Сен patient-oriented және responsible бағытқа бейімсің.";
 
    btn.href =
      "specialties/medicine.html";
 
    uniHTML = `
      <a href="uni/acibadem.html" class="program-pill">Acıbadem</a>
      <a href="uni/uskudar.html" class="program-pill">Üsküdar</a>
      <a href="uni/aydin.html" class="program-pill">Aydın</a>
    `;
 
    careerHTML = `
      <div class="program-pill">Doctor</div>
      <div class="program-pill">Surgeon</div>
      <div class="program-pill">Researcher</div>
    `;
  }
 
  else if (interest.value === "business") {
 
    major.innerText = "Business Administration";
 
    desc.innerText =
      "Сен leadership, finance және entrepreneurship бағыттарына бейімсің.";
 
    career.innerText =
      "Management және startup ecosystem саған сәйкес келеді.";
 
    btn.href =
      "specialties/business.html";
 
    uniHTML = `
      <a href="uni/bahcesehir.html" class="program-pill">Bahçeşehir</a>
      <a href="uni/aydin.html" class="program-pill">Aydın</a>
      <a href="uni/yasar.html" class="program-pill">Yaşar</a>
    `;
 
    careerHTML = `
      <div class="program-pill">Manager</div>
      <div class="program-pill">Entrepreneur</div>
      <div class="program-pill">Marketing Specialist</div>
    `;
  }
 
  else if (interest.value === "social") {
 
    major.innerText = "Psychology";
 
    desc.innerText =
      "Сен human behavior, communication және social sciences бағыттарына жақынсың.";
 
    career.innerText =
      "People-oriented careers саған өте жақсы сәйкес келеді.";
 
    btn.href =
      "specialties/psychology.html";
 
    uniHTML = `
      <a href="uni/uskudar.html" class="program-pill">Üsküdar</a>
      <a href="uni/sabanci.html" class="program-pill">Sabancı</a>
      <a href="uni/yasar.html" class="program-pill">Yaşar</a>
    `;
 
    careerHTML = `
      <div class="program-pill">Psychologist</div>
      <div class="program-pill">Counselor</div>
      <div class="program-pill">HR Specialist</div>
    `;
  }
 
  else if (interest.value === "design") {
 
    major.innerText = "Architecture";
 
    desc.innerText =
      "Сен creative thinking және design бағыттарына бейімсің.";
 
    career.innerText =
      "Creative industry және architecture ecosystem саған сәйкес.";
 
    btn.href =
      "specialties/architecture.html";
 
    uniHTML = `
      <a href="uni/bahcesehir.html" class="program-pill">Bahçeşehir</a>
      <a href="uni/ozyegin.html" class="program-pill">Özyeğin</a>
      <a href="uni/ted.html" class="program-pill">TED</a>
    `;
 
    careerHTML = `
      <div class="program-pill">Architect</div>
      <div class="program-pill">Interior Designer</div>
      <div class="program-pill">Urban Planner</div>
    `;
  }
 
  universities.innerHTML = uniHTML;
  paths.innerHTML = careerHTML;
 
  result.style.display = "block";
 
  result.scrollIntoView({
    behavior: "smooth"
  });
}
/* ===== ДАЙЫНДЫҚ БЕТІ ===== */
 
const prepItems = {
  private: [
    ["private-passport", "Паспорт көшірмесі", "Жарамды паспорт сканы.", "Паспорт анық көрінуі керек. PDF немесе JPG формат жарайды."],
    ["private-diploma", "Аттестат", "Мектеп бітіргенін растайтын құжат.", "Егер әлі бітірмесең, мектептен анықтама қолдануға болады."],
    ["private-transcript", "Бағалар тізімі", "9–11 сынып немесе толық transcript.", "Кей университеттер аударма сұрауы мүмкін."],
    ["private-photo", "Биометриялық фото", "Application үшін фото.", "Фон ашық, сапасы жақсы болғаны дұрыс."],
    ["private-application", "Application form", "Университеттің онлайн формасы.", "Аты-жөнің паспортпен бірдей жазылуы керек."],
    ["private-language", "Тіл сертификаты", "Кей университетте қажет болуы мүмкін.", "IELTS болмаса, internal exam немесе дайындық жылы болуы мүмкін."]
  ],
 
  scholarship: [
    ["sch-passport", "Паспорт көшірмесі", "Грант платформасына тіркеу үшін.", "Паспорт деректері form-мен сәйкес болуы керек."],
    ["sch-diploma", "Аттестат / анықтама", "Оқу деңгейін растайтын құжат.", "Диплом дайын болмаса, мектептен анықтама керек болуы мүмкін."],
    ["sch-transcript", "Transcript", "GPA және бағалар.", "Грант үшін академиялық көрсеткіш маңызды."],
    ["sch-motivation", "Мотивациялық хат", "Неге Түркия, неге осы мамандық.", "Нақты мақсат пен future contribution жазу керек."],
    ["sch-recommendation", "Ұсыныс хат", "Мұғалімнен немесе mentor-дан.", "Ұсыныс хат нақты әрі жеке болуы керек."],
    ["sch-cv", "CV / Resume", "Education, projects, languages.", "CV қысқа әрі таза болуы керек."],
    ["sch-certificates", "Сертификаттар", "Жетістік, volunteer, курс, project.", "Грантта extracurricular маңызды болуы мүмкін."],
    ["sch-interview", "Сұхбатқа дайындық", "Self introduction және common questions.", "Interview — гранттағы маңызды кезең."]
  ],
 
  visa: [
    ["visa-acceptance", "Қабылдау хаты", "Университеттен ресми acceptance letter.", "Виза процесі осы құжаттан басталады."],
    ["visa-form", "Виза анкетасы", "Консулдыққа тапсыратын форма.", "Барлық ақпарат құжаттармен сәйкес болуы керек."],
    ["visa-insurance", "Сақтандыру", "Студенттік health insurance.", "Виза және ikamet үшін қажет болуы мүмкін."],
    ["visa-housing", "Жатақхана / мекенжай", "Тұратын жер дәлелі.", "Алғашқы мекенжайды алдын ала дайында."],
    ["visa-ticket", "Ұшақ билеті", "Келу уақытын жоспарлау.", "Orientation date бойынша алған дұрыс."],
    ["visa-residence", "Residence permit", "Түркияға келген соң ikamet.", "Университет support office көмектесуі мүмкін."]
  ]
};
 
let currentPath = "private";
 
function getStore(key, fallback) {
  try {
    const email = localStorage.getItem("currentUserEmail") || "guest";
    const ukey = "u_" + email + "_" + key;
    const item = localStorage.getItem(ukey);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}
 
function setStore(key, value) {
  const email = localStorage.getItem("currentUserEmail") || "guest";
  const ukey = "u_" + email + "_" + key;
  localStorage.setItem(ukey, JSON.stringify(value));
}
 
function initPrepPage() {
  // preparation.html has its own self-contained IIFE — never run legacy code
  return;
 
  document.querySelectorAll(".side-btn").forEach(btn => {
    btn.addEventListener("click", () => openPrepSection(btn.dataset.section));
  });
 
  document.querySelectorAll(".path-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentPath = btn.dataset.path;
 
      document.querySelectorAll(".path-tab").forEach(item => item.classList.remove("active"));
      btn.classList.add("active");
 
      renderChecklist();
    });
  });
 
  renderChecklist();
  loadInterviewAnswers();
  renderDeadlines();
  renderNotes();
  updateProgress();
}
 
function openPrepSection(sectionId) {
  document.querySelectorAll(".prep-section").forEach(section => {
    section.classList.remove("active");
  });
 
  document.getElementById(sectionId).classList.add("active");
 
  document.querySelectorAll(".side-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.section === sectionId);
  });
}
 
function renderChecklist() {
  const area = document.getElementById("checklistArea");
  if (!area) return;
 
  const saved = getStore("prepChecklist", {});
  const items = prepItems[currentPath];
 
  area.innerHTML = items.map(item => {
    const [id, title, desc, info] = item;
    const checked = saved[id] ? "checked" : "";
 
    return `
      <div class="check-item">
        <input type="checkbox" id="${id}" ${checked} onchange="toggleCheck('${id}', this.checked)" />
 
        <label for="${id}">
          <strong>${title}</strong>
          <small>${desc}</small>
        </label>
 
        <button class="info-btn" onclick="openInfoModal('${title}', '${info}')">
          Ақпарат
        </button>
      </div>
    `;
  }).join("");
 
  updateProgress();
}
 
function toggleCheck(id, checked) {
  const saved = getStore("prepChecklist", {});
  saved[id] = checked;
  setStore("prepChecklist", saved);
 
  updateProgress();
  showToast(checked ? "Белгіленді" : "Белгі алынды");
}
 
function updateProgress() {
  const saved = getStore("prepChecklist", {});
  const all = Object.values(prepItems).flat();
  const done = all.filter(item => saved[item[0]]).length;
  const percent = Math.round((done / all.length) * 100);
 
  const circle = document.getElementById("progressCircle");
  const number = document.getElementById("progressNumber");
 
  if (circle) {
    circle.style.background = `conic-gradient(#701930 ${percent * 3.6}deg, #ead8de 0deg)`;
  }
 
  if (number) {
    number.innerText = percent + "%";
  }
 
  const aiTitle = document.getElementById("aiTitle");
  const aiText = document.getElementById("aiText");
 
  if (aiTitle && aiText) {
    if (percent < 25) {
      aiTitle.innerText = "Құжаттардан баста";
      aiText.innerText = "Алдымен паспорт, аттестат және transcript дайында.";
    } else if (percent < 60) {
      aiTitle.innerText = "Профильді күшейт";
      aiText.innerText = "Motivation letter, CV және сертификаттарды дайында.";
    } else if (percent < 90) {
      aiTitle.innerText = "Сұхбат пен дедлайн";
      aiText.innerText = "Енді interview answers және deadline tracker толтыр.";
    } else {
      aiTitle.innerText = "Дайындық өте жақсы";
      aiText.innerText = "Admission package дайынға жақын. Mentor review алуға болады.";
    }
  }
}
 
function resetChecklist() {
  if (!confirm("Барлық checklist reset жасалсын ба?")) return;
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepChecklist");
  renderChecklist();
  showToast("Checklist reset жасалды");
}
 
function uncheckCurrentPath() {
  const saved = getStore("prepChecklist", {});
 
  prepItems[currentPath].forEach(item => {
    saved[item[0]] = false;
  });
 
  setStore("prepChecklist", saved);
  renderChecklist();
  showToast("Осы бөлім тазаланды");
}
 
function saveInterviewAnswers() {
  const data = {
    whyTurkey: document.getElementById("answerWhyTurkey").value,
    major: document.getElementById("answerMajor").value,
    future: document.getElementById("answerFuture").value,
    contribution: document.getElementById("answerContribution").value
  };
 
  setStore("prepInterviewAnswers", data);
  showToast("Жауаптар сақталды");
}
 
function loadInterviewAnswers() {
  const data = getStore("prepInterviewAnswers", {});
 
  if (!document.getElementById("answerWhyTurkey")) return;
 
  document.getElementById("answerWhyTurkey").value = data.whyTurkey || "";
  document.getElementById("answerMajor").value = data.major || "";
  document.getElementById("answerFuture").value = data.future || "";
  document.getElementById("answerContribution").value = data.contribution || "";
}
 
function fillInterviewExample() {
  document.getElementById("answerWhyTurkey").value =
    "Түркия сапалы білім, халықаралық орта және Қазақстан студенттері үшін қолайлы мүмкіндік ұсынады.";
 
  document.getElementById("answerMajor").value =
    "Бұл мамандық менің қызығушылығым, қабілетім және болашақ мақсаттарыммен сәйкес келеді.";
 
  document.getElementById("answerFuture").value =
    "5 жылдан кейін өз саламда тәжірибелі маман болып, Қазақстанға пайдалы жобалар жасағым келеді.";
 
  document.getElementById("answerContribution").value =
    "Алған білімімді Қазақстандағы жастарға мүмкіндік ашатын білім беру және әлеуметтік жобаларға қолданғым келеді.";
 
  saveInterviewAnswers();
}
 
function clearInterviewAnswers() {
  if (!confirm("Сұхбат жауаптарын тазалаймыз ба?")) return;
 
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepInterviewAnswers");
 
  document.getElementById("answerWhyTurkey").value = "";
  document.getElementById("answerMajor").value = "";
  document.getElementById("answerFuture").value = "";
  document.getElementById("answerContribution").value = "";
 
  showToast("Жауаптар тазаланды");
}
 
function addDeadline() {
  const title = document.getElementById("deadlineTitle").value.trim();
  const date = document.getElementById("deadlineDate").value;
  const note = document.getElementById("deadlineNote").value.trim();
 
  if (!title || !date) {
    showToast("Атауы мен күнін толтыр");
    return;
  }
 
  const deadlines = getStore("prepDeadlines", []);
 
  deadlines.push({
    id: Date.now(),
    title,
    date,
    note
  });
 
  setStore("prepDeadlines", deadlines);
 
  document.getElementById("deadlineTitle").value = "";
  document.getElementById("deadlineDate").value = "";
  document.getElementById("deadlineNote").value = "";
 
  renderDeadlines();
  showToast("Дедлайн қосылды");
}
 
function renderDeadlines() {
  const list = document.getElementById("deadlineList");
  const mini = document.getElementById("miniDeadlines");
  const deadlines = getStore("prepDeadlines", []);
 
  const html = deadlines.length
    ? deadlines.map(item => `
      <div class="deadline-item">
        <strong>${item.title}</strong>
        <span>${item.date}${item.note ? " · " + item.note : ""}</span>
        <div style="margin-top:10px;">
          <button class="delete-btn" onclick="deleteDeadline('${item.id}')">Өшіру</button>
        </div>
      </div>
    `).join("")
    : `<div class="deadline-item"><strong>Дедлайн жоқ</strong><span>Дедлайн қоссаң, осы жерде шығады.</span></div>`;
 
  if (list) list.innerHTML = html;
 
  if (mini) {
    mini.innerHTML = deadlines.slice(0, 3).map(item => `
      <div class="deadline-item">
        <strong>${item.title}</strong>
        <span>${item.date}</span>
      </div>
    `).join("") || `<div class="deadline-item"><strong>Әзірге жоқ</strong><span>Дедлайн бөлімінен қос.</span></div>`;
  }
}
 
function deleteDeadline(id) {
  const deadlines = getStore("prepDeadlines", []).filter(item => item.id !== id);
  setStore("prepDeadlines", deadlines);
  renderDeadlines();
  showToast("Дедлайн өшірілді");
}
 
function clearDeadlines() {
  if (!confirm("Барлық дедлайн өшірілсін бе?")) return;
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepDeadlines");
  renderDeadlines();
  showToast("Дедлайндар тазаланды");
}
 
function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const category = document.getElementById("noteCategory").value;
  const text = document.getElementById("noteText").value.trim();
 
  if (!title || !text) {
    showToast("Жазба атауы мен мәтінін толтыр");
    return;
  }
 
  const notes = getStore("prepNotes", []);
 
  notes.unshift({
    id: Date.now(),
    title,
    category,
    text
  });
 
  setStore("prepNotes", notes);
 
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteText").value = "";
 
  renderNotes();
  showToast("Жазба сақталды");
}
 
function renderNotes() {
  const list = document.getElementById("notesList");
  if (!list) return;
 
  const notes = getStore("prepNotes", []);
 
  list.innerHTML = notes.length
    ? notes.map(note => `
      <div class="note-card">
        <strong>${note.title} · ${note.category}</strong>
        <p>${note.text}</p>
        <button class="delete-btn" onclick="deleteNote(${note.id})">Өшіру</button>
      </div>
    `).join("")
    : `<div class="note-card"><strong>Жазба жоқ</strong><p>Өзіңнің application notes осы жерде сақталады.</p></div>`;
}
 
function deleteNote(id) {
  const notes = getStore("prepNotes", []).filter(note => note.id !== id);
  setStore("prepNotes", notes);
  renderNotes();
  showToast("Жазба өшірілді");
}
 
function clearNotes() {
  if (!confirm("Барлық жазба өшірілсін бе?")) return;
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepNotes");
  renderNotes();
  showToast("Жазбалар тазаланды");
}
 
function resetAllPrep() {
  if (!confirm("Барлық дайындық деректері reset жасалсын ба?")) return;
 
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepChecklist");
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepInterviewAnswers");
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepDeadlines");
  localStorage.removeItem("u_" + (localStorage.getItem("currentUserEmail") || "guest") + "_prepNotes");
 
  renderChecklist();
  loadInterviewAnswers();
  renderDeadlines();
  renderNotes();
  updateProgress();
 
  showToast("Барлығы reset жасалды");
}
 
function openInfoModal(title, text) {
  const modal = document.getElementById("infoModal");
  if (!modal) return;
 
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  modal.style.display = "flex";
}
 
function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
}
 
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
 
  toast.innerText = message;
  toast.style.display = "block";
 
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
 
document.addEventListener("DOMContentLoaded", initPrepPage);
 
/* ===== PROFILE PAGE WORKING LOGIC ===== */
 
const profileDocuments = [
  ["passport", "Паспорт", "Жарамды паспорт көшірмесі"],
  ["diploma", "Аттестат", "Мектеп бітіргенін растайтын құжат"],
  ["transcript", "Бағалар тізімі", "Transcript немесе бағалар тізімі"],
  ["motivation", "Мотивациялық хат", "Грант/университет үшін мотивациялық хат"],
  ["recommendation", "Ұсыныс хат", "Мұғалім немесе mentor recommendation"],
  ["cv", "CV / Resume", "Жетістік, тіл, тәжірибе, жобалар"]
];
 
function getUserKey(key) {
  const email = localStorage.getItem("currentUserEmail") || "guest";
  return "u_" + email + "_" + key;
}
 
function prGet(key, fallback){
  try{
    const ukey = getUserKey(key);
    const value = localStorage.getItem(ukey);
    return value ? JSON.parse(value) : fallback;
  }catch{
    return fallback;
  }
}
 
function prSet(key, value){
  const ukey = getUserKey(key);
  localStorage.setItem(ukey, JSON.stringify(value));
}
 
 
function renderPrepProgressOnProfile(){
  const box = document.getElementById("profilePrepProgressBox");
  if(!box) return;
 
  const lang = localStorage.getItem("lang") || "kz";
  const txt = {
    checklist:    { kz:"Чек-лист",        ru:"Чек-лист",         en:"Checklist",       tr:"Kontrol Listesi" },
    uploaded:     { kz:"Жүктелген файл",  ru:"Загруженных файл", en:"Uploaded files",  tr:"Yüklenen dosya" },
    adminApproved:{ kz:"Admin растады",   ru:"Подтверждено",     en:"Admin approved",  tr:"Admin onayladı" },
    checklistProg:{ kz:"Чек-лист прогресі", ru:"Прогресс чек-листа", en:"Checklist progress", tr:"Kontrol listesi ilerlemesi" },
    uploadedFiles:{ kz:"Жүктелген файлдар", ru:"Загруженные файлы",  en:"Uploaded files",     tr:"Yüklenen dosyalar" },
    prepLink:     { kz:"Дайындық бетіне", ru:"На страницу подготовки", en:"Preparation page", tr:"Hazırlık sayfasına" },
    uploadHint:   { kz:"өтіп, файлдарыңызды жүктеңіз.", ru:"перейдите и загрузите файлы.", en:"go and upload your files.", tr:"gidin ve dosyalarınızı yükleyin." },
  };
  const T = (k) => txt[k][lang] || txt[k].kz;
 
  const email = localStorage.getItem("currentUserEmail") || "guest";
  const prepChecklist = {};
  try { const raw = localStorage.getItem("u_" + email + "_prepChecklist"); if(raw) Object.assign(prepChecklist, JSON.parse(raw)); } catch{}
 
  const allDocIds = ["priv-passport","priv-diploma","priv-transcript","priv-photo",
    "priv-english","priv-motivation","priv-cv","priv-recommendation",
    "sch-passport","sch-diploma","sch-transcript","sch-language",
    "sch-motivation","sch-recommendation","sch-photo","sch-health",
    "visa-passport","visa-admission","visa-photo","visa-bank",
    "visa-insurance","visa-accommodation","visa-application"];
  const checkedCount = allDocIds.filter(id => prepChecklist[id]).length;
  const checklistPct = Math.round(checkedCount / allDocIds.length * 100);
 
  const uploads = prGet("prepUploads", {});
  const uploadCount = Object.keys(uploads).length;
  const totalUploadSlots = 10;
  const uploadPct = Math.round(uploadCount / totalUploadSlots * 100);
 
  const adminDocs = JSON.parse(localStorage.getItem("adminUserDocs") || "{}");
  const myAdminDocs = adminDocs[email] || {};
  const confirmedCount = Object.values(myAdminDocs).filter(d => d.status === "Расталды").length;
 
  box.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
      <div style="padding:14px;background:rgba(255,255,255,.05);border-radius:14px;text-align:center;">
        <div style="font-size:24px;font-weight:900;color:#ffd6de;">${checklistPct}%</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">${T('checklist')}</div>
      </div>
      <div style="padding:14px;background:rgba(255,255,255,.05);border-radius:14px;text-align:center;">
        <div style="font-size:24px;font-weight:900;color:#ffd6de;">${uploadCount}/${totalUploadSlots}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">${T('uploaded')}</div>
      </div>
      <div style="padding:14px;background:rgba(5,150,105,.15);border-radius:14px;text-align:center;border:1px solid rgba(5,150,105,.3);">
        <div style="font-size:24px;font-weight:900;color:#34d399;">${confirmedCount}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">${T('adminApproved')}</div>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:5px;">
        <span>${T('checklistProg')}</span><span>${checklistPct}%</span>
      </div>
      <div style="height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;">
        <div style="height:100%;width:${checklistPct}%;background:linear-gradient(90deg,#a60f2d,#d4365c);border-radius:4px;transition:.4s;"></div>
      </div>
    </div>
    <div style="margin-top:8px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:5px;">
        <span>${T('uploadedFiles')}</span><span>${uploadPct}%</span>
      </div>
      <div style="height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;">
        <div style="height:100%;width:${uploadPct}%;background:linear-gradient(90deg,#059669,#34d399);border-radius:4px;transition:.4s;"></div>
      </div>
    </div>
    ${uploadCount === 0 ? `<p style="font-size:12px;color:var(--muted);margin-top:8px;">💡 <a href="preparation.html" style="color:#ffd6de;">${T('prepLink')}</a> ${T('uploadHint')}</p>` : ""}
  `;
}
 
 
function saveProfileInfo(){
  const name    = document.getElementById("profileNameInput")?.value.trim();
  const city    = document.getElementById("profileCityInput")?.value.trim();
  const major   = document.getElementById("profileMajorInput")?.value;
  const goal    = document.getElementById("profileGoalInput")?.value.trim();
  const phone   = document.getElementById("profilePhone")?.value.trim();
  const country = document.getElementById("profileCountry")?.value.trim();
  const english = document.getElementById("profileEnglish")?.value;
  const budget  = document.getElementById("profileBudget")?.value;
  if (!name) { showToast("Атыңызды жазыңыз!"); return; }
  const email = localStorage.getItem("currentUserEmail") || "guest";
  const users = JSON.parse(localStorage.getItem("edu_users") || "[]");
  const idx = users.findIndex(u => u.email === email);
  if (idx !== -1) {
    Object.assign(users[idx], {name, city, major, phone, country, english_level:english, budget});
    localStorage.setItem("edu_users", JSON.stringify(users));
  }
  localStorage.setItem("username", name);
  prSet("profileData", {name, city, major, goal, phone, country, english, budget});
  loadProfileData();
  showToast("✅ Профиль сақталды!");
}
 
function changePassword(){
  const oldPass  = document.getElementById("oldPassword")?.value;
  const newPass  = document.getElementById("newPassword")?.value;
  const confPass = document.getElementById("confirmPassword")?.value;
  if (!oldPass||!newPass||!confPass){showToast("Барлық өрістерді толтырыңыз!");return;}
  if (newPass!==confPass){showToast("❌ Парольдер сәйкес емес!");return;}
  if (newPass.length<6){showToast("❌ Пароль кемінде 6 символ!");return;}
  const email = localStorage.getItem("currentUserEmail")||"guest";
  const users = JSON.parse(localStorage.getItem("edu_users")||"[]");
  const idx = users.findIndex(u=>u.email===email);
  if(idx===-1){showToast("❌ Аккаунт табылмады!");return;}
  if(users[idx].password!==oldPass){showToast("❌ Ескі пароль қате!");return;}
  users[idx].password=newPass;
  localStorage.setItem("edu_users",JSON.stringify(users));
  ["oldPassword","newPassword","confirmPassword"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
  showToast("✅ Пароль сәтті өзгертілді!");
}
 
function initProfilePage(){
  const dateInput = document.getElementById("cReqDate");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = yyyy + "-" + mm + "-" + dd;
  }
  if(!document.body || document.body.dataset.page !== "profile") return;
 
  // Тілді қолдан
  const savedLang = localStorage.getItem("lang") || "kz";
  applyTranslations(savedLang);
 
  loadProfileData();
  renderProfileDocuments();
  renderPrepProgressOnProfile();
  renderConsultationHistory();
  renderProfileUniversities();
  renderProfileDeadlines();
  renderConsultations();
  renderProfileNotes();
  renderTasksSection();
  renderNotificationsPanel();
  updateProfileDashboard();
  renderNotificationBadge();
}
 
function renderNotificationsPanel() {
  const box = document.getElementById("notificationsList");
  if (!box) return;
  const lang = localStorage.getItem("lang") || "kz";
  const notifs = getNotifications();
  
  if (!notifs.length) {
    box.innerHTML = `<div class="profile-empty">Ескертулер жоқ.</div>`;
    return;
  }
  box.innerHTML = notifs.map(n => `
    <div class="profile-check-row" style="${n.read ? 'opacity:.6' : ''}">
      <div class="profile-check-left">
        <span style="font-size:20px">${n.type==='deadline'?'🔔':n.type==='task'?'✅':'📢'}</span>
        <div>
          <strong>${n.message}</strong>
          <p>${n.date}</p>
        </div>
      </div>
      <span class="badge ${n.read ? '' : 'success'}">${n.read ? '' : 'Жаңа'}</span>
    </div>
  `).join("");
  markAllNotificationsRead();
}
 
function saveProfileData(){
  const data = {
    name: document.getElementById("profileNameInput").value.trim(),
    email: document.getElementById("profileEmailInput").value.trim(),
    city: document.getElementById("profileCityInput").value.trim(),
    major: document.getElementById("profileMajorInput").value,
    goal: document.getElementById("profileGoalInput").value.trim()
  };
 
  prSet("profileData", data);
  loadProfileData();
  showProfileToast("Профиль сақталды");
}
 
function loadProfileData(){
  const data = prGet("profileData", {
    name: "Студент",
    email: "email@example.com",
    city: "",
    major: "Computer Science",
    goal: ""
  });
 
  const initial = (data.name || "S").charAt(0).toUpperCase();
 
  document.getElementById("profileAvatar").innerText = initial;
  document.getElementById("profileName").innerText = data.name || "Студент";
  document.getElementById("profileEmail").innerText = data.email || "email@example.com";
  document.getElementById("profileWelcomeName").innerText = data.name || "студент";
 
  document.getElementById("profileNameInput").value = data.name || "";
  document.getElementById("profileEmailInput").value = data.email || "";
  document.getElementById("profileCityInput").value = data.city || "";
  document.getElementById("profileMajorInput").value = data.major || "Computer Science";
  document.getElementById("profileGoalInput").value = data.goal || "";
 
  updateProfileDashboard();
}
 
function fillProfileExample(){
  document.getElementById("profileNameInput").value = "Меруерт";
  document.getElementById("profileEmailInput").value = "meruert@example.com";
  document.getElementById("profileCityInput").value = "Алматы";
  document.getElementById("profileMajorInput").value = "Business";
  document.getElementById("profileGoalInput").value = "Түркиядағы жақсы университетке түсіп, грант немесе scholarship мүмкіндігін қарастыру.";
  saveProfileData();
}
 
function resetProfileData(){
  if(!confirm("Профиль ақпаратын тазалаймыз ба?")) return;
  localStorage.removeItem("profileData");
  loadProfileData();
  showProfileToast("Профиль тазаланды");
}
 
function renderProfileDocuments(){
  const box = document.getElementById("profileDocumentsList");
  if(!box) return;
 
  const saved = prGet("profileDocs", {});
  const uploads = prGet("prepUploads", {});
 
  box.innerHTML = profileDocuments.map(([id,title,desc]) => {
    const checked = saved[id];
    const uploaded = uploads[id];
    const status = uploaded ? "uploaded" : checked ? "checked" : "missing";
    const badgeClass = uploaded ? "success" : checked ? "success" : "warning";
    const badgeText = uploaded ? ("📎 " + uploaded.name.substring(0,20) + (uploaded.name.length>20?"...":"")) : checked ? "✓ Дайын" : "Күтілуде";
 
    return `
      <div class="profile-check-row" style="${uploaded ? 'border-left:3px solid #059669' : ''}">
        <div class="profile-check-left">
          <input type="checkbox" id="doc-${id}" ${(checked||uploaded) ? "checked" : ""} onchange="toggleProfileDocument('${id}', this.checked)" />
          <label for="doc-${id}">
            <strong>${title}</strong>
            <p>${desc}</p>
          </label>
        </div>
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
    `;
  }).join("");
 
  updateProfileDashboard();
}
 
function toggleProfileDocument(id, checked){
  const saved = prGet("profileDocs", {});
  saved[id] = checked;
  prSet("profileDocs", saved);
  renderProfileDocuments();
  showProfileToast(checked ? "Құжат дайын деп белгіленді" : "Белгі алынды");
}
 
function resetProfileDocuments(){
  if(!confirm("Құжат белгілерін reset жасаймыз ба?")) return;
  localStorage.removeItem("profileDocs");
  renderProfileDocuments();
}
 
function addProfileUniversity(){
  const name = document.getElementById("uniNameInput").value.trim();
  const city = document.getElementById("uniCityInput").value.trim();
  const note = document.getElementById("uniNoteInput").value.trim();
 
  if(!name){
    showProfileToast("Университет атауын жаз");
    return;
  }
 
  const list = prGet("profileUniversities", []);
 
  list.unshift({
    id: Date.now(),
    name,
    city,
    note
  });
 
  prSet("profileUniversities", list);
 
  document.getElementById("uniNameInput").value = "";
  document.getElementById("uniCityInput").value = "";
  document.getElementById("uniNoteInput").value = "";
 
  renderProfileUniversities();
  showProfileToast("Университет қосылды");
}
 
function renderProfileUniversities() {
  const box = document.getElementById("savedUniversitiesContainer");
  if (!box) return;
  const lang = localStorage.getItem("lang") || "kz";
  const t = translations[lang] || translations.kz;

  // ── ТЕК favoriteUniversities key, profileUniversities оқымайды ──
  const fkey = getUserKey("favoriteUniversities");
  let list = [];
  try { list = JSON.parse(localStorage.getItem(fkey) || "[]"); } catch(e) {}
  if (!Array.isArray(list)) list = [];

  if (!list.length) {
    box.innerHTML = '<div class="profile-empty">Әзірге университет сақталмаған.</div>';
  } else {
    box.innerHTML = list.map(function(item) {
      const desc = (item.description && (item.description[lang] || item.description.kz)) || item.note || "";
      const link = item.url || item.link || "";
      const safeId = String(item.id || "").replace(/'/g, "\\'");
      return '<div class="dashboard-row-card">' +
        '<div><strong>' + (item.name || "") + '</strong>' +
        '<p>' + (item.city || "Türkiye") + (desc ? ' · ' + desc : '') + '</p></div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
        (link ? '<a href="' + link + '" class="profile-mini-btn secondary">' + (t["profile-view-details"] || "Ашу") + '</a>' : '') +
`<button class="profile-mini-btn danger" onclick="deleteProfileUniversity('${item.id}')">Өшіру</button>`
    }).join("");
  }
  updateProfileDashboard();
}
 
function deleteProfileUniversity(id) {
  id = String(id);
  const fkey = getUserKey("favoriteUniversities");
  let list = [];
  try { list = JSON.parse(localStorage.getItem(fkey) || "[]"); } catch(e) {}
  list = list.filter(function(item) { return String(item.id) !== id; });
  localStorage.setItem(fkey, JSON.stringify(list));
  renderProfileUniversities();
  updateProfileDashboard();
  showProfileToast("Университет өшірілді");
}
 
function addProfileDeadline(){
  const title = document.getElementById("profileDeadlineTitle").value.trim();
  const date = document.getElementById("profileDeadlineDate").value;
  const note = document.getElementById("profileDeadlineNote").value.trim();
 
  if(!title || !date){
    showProfileToast("Атауы мен күнін толтыр");
    return;
  }
 
  const list = prGet("profileDeadlines", []);
 
  list.unshift({
    id: Date.now(),
    title,
    date,
    note
  });
 
  prSet("profileDeadlines", list);
 
  document.getElementById("profileDeadlineTitle").value = "";
  document.getElementById("profileDeadlineDate").value = "";
  document.getElementById("profileDeadlineNote").value = "";
 
  renderProfileDeadlines();
  showProfileToast("Дедлайн қосылды");
}
 
function renderProfileDeadlines(){
  const box = document.getElementById("profileDeadlinesList");
  if(!box) return;
 
  const list = prGet("profileDeadlines", []);
 
  if(!list.length){
    box.innerHTML = `<div class="profile-empty">Әзірге дедлайн жоқ.</div>`;
  }else{
    box.innerHTML = list.map(item => `
      <div class="dashboard-row-card">
        <div>
          <strong>${item.title}</strong>
          <p>${item.date}${item.note ? " · " + item.note : ""}</p>
        </div>
        <button class="profile-mini-btn danger" onclick="deleteProfileDeadline('${item.id}')">Өшіру</button>
      </div>
    `).join("");
  }
 
  updateProfileDashboard();
}
 
function deleteProfileDeadline(id){
  const list = prGet("profileDeadlines", []).filter(item => item.id !== id);
  prSet("profileDeadlines", list);
  renderProfileDeadlines();
}
 
function clearProfileDeadlines(){
  if(!confirm("Барлық дедлайн өшірілсін бе?")) return;
  localStorage.removeItem("profileDeadlines");
  renderProfileDeadlines();
}
 
function bookConsultation(){
  const topic = document.getElementById("consultTopic").value;
  const date = document.getElementById("consultDate").value;
  const question = document.getElementById("consultQuestion").value.trim();
 
  if(!date || !question){
    showProfileToast("Күні мен сұрағыңды толтыр");
    return;
  }
 
  const list = prGet("profileConsultations", []);
 
  list.unshift({
    id: Date.now(),
    topic,
    date,
    question
  });
 
  prSet("profileConsultations", list);
 
  document.getElementById("consultDate").value = "";
  document.getElementById("consultQuestion").value = "";
 
  renderConsultations();
  showProfileToast("Консультация сақталды");
}
 
function addConsultationExample(){
  const list = prGet("profileConsultations", []);
 
  list.unshift({
    id: Date.now(),
    topic: "Университет таңдау",
    date: "2026-05-20",
    question: "Маған Istanbul private universities бойынша кеңес керек."
  });
 
  prSet("profileConsultations", list);
  renderConsultations();
}
 
function renderConsultations(){
  renderConsultationHistory();
  updateProfileDashboard();
}
 
/* ────────────────────────────────
   PAYMENT MODAL (Consultation)
──────────────────────────────── */
function openPaymentModal(){
  const topic    = document.getElementById("cReqTopic")?.value;
  const date     = document.getElementById("cReqDate")?.value;
  const question = document.getElementById("cReqQuestion")?.value.trim();
  if (!question) { showToast("⚠️ Алдымен сұрағыңды жаз!"); return; }
 
  // Өткен күнді тексеру
  if (date) {
    const chosen = new Date(date);
    const today  = new Date(); today.setHours(0,0,0,0);
    if (chosen < today) {
      showToast("⚠️ Өткен күнді таңдауға болмайды! Болашақ күнді таңда.");
      return;
    }
  }
 
  const modal = document.getElementById("paymentModal");
  if (modal) { modal.style.display = "flex"; }
}
 
function closePaymentModal(){
  const modal = document.getElementById("paymentModal");
  if (modal) modal.style.display = "none";
  const err = document.getElementById("payError");
  if (err) { err.style.display = "none"; err.textContent = ""; }
  // Clear fields
  ["payCard","payExpiry","payCVV"].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = "";
  });
}
 
function processPayment(){
  // v43-profile-backend-fixes.js арқылы толық нұсқасы іске қосылады
  // Бұл функция window.processPayment = v43 нұсқасымен алмастырылады
  const card   = (document.getElementById("payCard")?.value || "").replace(/\s/g,"");
  const expiry = document.getElementById("payExpiry")?.value || "";
  const cvv    = document.getElementById("payCVV")?.value || "";
  const errEl  = document.getElementById("payError");
 
  if (card.length < 16) {
    if (errEl) { errEl.textContent = "❌ Карта нөмірі дұрыс емес (16 сан)"; errEl.style.display = "block"; } return;
  }
  if (!expiry.match(/^\d{2}\/\d{2}$/)) {
    if (errEl) { errEl.textContent = "❌ Мерзімі дұрыс емес (MM/YY форматы)"; errEl.style.display = "block"; } return;
  }
  if (cvv.length < 3) {
    if (errEl) { errEl.textContent = "❌ CVV 3 сан болу керек"; errEl.style.display = "block"; } return;
  }
  if (errEl) { errEl.style.display = "none"; }
 
  const email = (localStorage.getItem("currentUserEmail") || "guest").toLowerCase().trim();
  const key   = "u_" + email + "_consult_requests";
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
 
  // Белсенді (күтілуде) консультация шегі
  const hasActive = existing.some(function(r){
    return r.status === "paid_pending" || r.status === "pending" || r.status === "assigned";
  });
  if (hasActive) {
    if (errEl) { errEl.style.display = "none"; }
    closePaymentModal();
    showToast("⚠️ Сізде күтілуде тұрған консультация бар. Алдыңғысы аяқталған соң жаңасын сұратыңыз.");
    return;
  }
 
  const payBtn = document.getElementById("payBtn");
  if (payBtn) { payBtn.textContent = "⏳ Өңделуде..."; payBtn.disabled = true; }
 
  setTimeout(function(){
    const topic    = document.getElementById("cReqTopic")?.value || "Консультация";
    const date     = document.getElementById("cReqDate")?.value || "";
    const question = document.getElementById("cReqQuestion")?.value.trim() || "";
 
    const newReq = {
      id: "cr_" + Date.now(),
      topic, question,
      preferredDate: date,
      status: "paid_pending",
      paid: true,
      amount: 5000,
      cardLast4: "****" + card.slice(-4),
      createdAt: new Date().toISOString()
    };
    existing.unshift(newReq);
    localStorage.setItem(key, JSON.stringify(existing));
 
    closePaymentModal();
    if (document.getElementById("cReqQuestion")) document.getElementById("cReqQuestion").value = "";
    if (document.getElementById("cReqDate")) document.getElementById("cReqDate").value = "";
    if (typeof renderConsultationHistory === "function") renderConsultationHistory();
    if (payBtn) { payBtn.textContent = "✅ 5 000 ₸ Төлеу"; payBtn.disabled = false; }
    showToast("✅ Төлем қабылданды! Консультация сұранымы жіберілді.");
  }, 1500);
}
 
function sendConsultRequest(paymentInfo){
  const topic    = document.getElementById("cReqTopic")?.value;
  const date     = document.getElementById("cReqDate")?.value;
  const question = document.getElementById("cReqQuestion")?.value.trim();
  if (!question) { showToast("Сұрақты жазыңыз!"); return; }
 
  const email = (localStorage.getItem("currentUserEmail") || "guest").toLowerCase().trim();
  const key   = "u_" + email + "_consult_requests";
  const list  = JSON.parse(localStorage.getItem(key) || "[]");
 
  // Тек нақты белсенді (күтілуде) консультация болса тоқтат
  // approved / rejected / cancelled — аяқталған, жаңасын алуға болады
  const hasActive = list.some(function(r){
    return r.status === "paid_pending" || r.status === "pending" || r.status === "assigned";
  });
  if (hasActive) {
    showToast("⚠️ Сізде күтілуде тұрған консультация бар. Алдыңғысы аяқталған соң жаңасын сұратыңыз.");
    closePaymentModal();
    return;
  }
 
  const req = {
    id: "cr_" + Date.now(),
    topic, question,
    preferredDate: date,
    status: paymentInfo && paymentInfo.paid ? "paid_pending" : "pending",
    paid: !!(paymentInfo && paymentInfo.paid),
    amount: paymentInfo ? paymentInfo.amount : 0,
    cardLast4: paymentInfo ? paymentInfo.card : null,
    createdAt: new Date().toISOString()
  };
  list.unshift(req);
  localStorage.setItem(key, JSON.stringify(list));
 
  const el = document.getElementById("cReqQuestion");
  if (el) el.value = "";
  const dt = document.getElementById("cReqDate");
  if (dt) dt.value = "";
 
  renderConsultationHistory();
  if (!paymentInfo) showToast("✅ Консультация сұранымы жіберілді!");
}
 
function renderConsultationHistory(){
  const box = document.getElementById("consultationList");
  if (!box) return;
  const email = (localStorage.getItem("currentUserEmail") || "guest").toLowerCase().trim();
  const list  = JSON.parse(localStorage.getItem("u_" + email + "_consult_requests") || "[]");
 
  if (!list.length){
    box.innerHTML = '<div class="profile-empty">Консультация сұранымы жоқ. Жоғарыдан сұратыңыз.</div>';
    return;
  }
 
  box.innerHTML = list.map(r => {
    const isApproved   = r.status === "approved";
    const isRejected   = r.status === "rejected";
    const isCancelled  = r.status === "cancelled";
    const isCompleted  = r.status === "completed";
    const isPaidPending = r.status === "paid_pending";
    const isAssigned   = r.status === "assigned";
    const canCancel    = isPaidPending || r.status === "pending" || !r.status;
 
    const badge = isApproved
      ? '<span style="background:rgba(5,150,105,.2);color:#34d399;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">✅ Расталды</span>'
      : isCompleted
      ? '<span style="background:rgba(139,92,246,.2);color:#c4b5fd;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">✔️ Өтілді</span>'
      : isRejected
      ? '<span style="background:rgba(239,68,68,.2);color:#f87171;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">❌ Қабылданбады</span>'
      : isCancelled
      ? '<span style="background:rgba(156,163,175,.15);color:#9ca3af;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">🚫 Бас тартылды</span>'
      : isAssigned
      ? '<span style="background:rgba(37,99,235,.2);color:#93c5fd;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">👨‍🏫 Ментор тағайындалды</span>'
      : isPaidPending
      ? '<span style="background:rgba(59,130,246,.2);color:#93c5fd;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">💳 Төленді · Күтілуде</span>'
      : '<span style="background:rgba(251,191,36,.15);color:#fbbf24;padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">⏳ Күтілуде</span>';
 
    const meetBlock = (isApproved || isCompleted) ? `
      <div style="margin-top:10px;padding:13px;background:${isCompleted ? 'rgba(139,92,246,.08)' : 'rgba(5,150,105,.1)'};border:1px solid ${isCompleted ? 'rgba(139,92,246,.25)' : 'rgba(5,150,105,.25)'};border-radius:13px;">
        ${isCompleted ? '<p style="font-size:11px;color:#c4b5fd;margin:0 0 8px;">✔️ Консультация өтілді · ' + (r.completedAt ? new Date(r.completedAt).toLocaleDateString("kk-KZ") : "") + '</p>' : ''}
        <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:6px;">
          <div><span style="font-size:11px;color:var(--muted);">📅 Уақыт:</span><br>
            <strong style="font-size:13px;">${r.meetingTime ? new Date(r.meetingTime).toLocaleString("kk-KZ") : "—"}</strong></div>
          <div><span style="font-size:11px;color:var(--muted);">🔗 Сілтеме:</span><br>
            <a href="${r.meetingLink}" target="_blank"
              style="font-size:13px;font-weight:800;color:${isCompleted ? '#a78bfa' : '#34d399'};text-decoration:none;">
              ${r.meetingLink ? "Кездесуге қосылу →" : "—"}
            </a>
          </div>
        </div>
        ${r.mentorMessage ? `<p style="font-size:12px;color:rgba(255,255,255,.6);margin-top:4px;">💬 ${r.mentorMessage}</p>` : ""}
      </div>` : "";
 
    const cancelBlock = canCancel ? `
      <div style="margin-top:10px;">
        <button onclick="cancelConsultation('${r.id}')"
          style="padding:7px 14px;border:1px solid rgba(239,68,68,.35);border-radius:9px;background:rgba(239,68,68,.08);color:#f87171;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;">
          🚫 Бас тарту
        </button>
      </div>` : "";
 
    const cancelledBlock = isCancelled ? `
      <div style="margin-top:10px;padding:10px 14px;background:rgba(107,114,128,.08);border:1px solid rgba(107,114,128,.2);border-radius:10px;">
        <p style="font-size:12px;color:#9ca3af;margin:0;">
          🚫 ${r.cancelledBy === 'admin' ? 'Admin бас тартты' : 'Бас тартылды'}
          ${r.cancelReason ? ' · Себеп: ' + r.cancelReason : ''}
        </p>
        <p style="font-size:11px;color:rgba(156,163,175,.6);margin:4px 0 0;">Жаңа консультация сұрата аласыз</p>
      </div>` : "";
 
    const borderColor = isApproved ? "border-left:3px solid #34d399"
      : isCompleted ? "border-left:3px solid #a78bfa"
      : isCancelled ? "border-left:3px solid #6b7280"
      : isRejected  ? "border-left:3px solid #f87171" : "";
 
    const rejectedBlock = isRejected ? `
      <div style="margin-top:10px;padding:10px 14px;background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.15);border-radius:10px;">
        <p style="font-size:12px;color:#f87171;margin:0;">❌ Өтінім қабылданбады</p>
        <p style="font-size:11px;color:rgba(239,68,68,.6);margin:4px 0 0;">Жаңа консультация сұрата аласыз</p>
      </div>` : "";
 
    const questionHtml = r.question ? '<p style="font-size:13px;color:rgba(255,255,255,.7);line-height:1.6;margin-bottom:4px;">' + r.question + '</p>' : '';
    const paidHtml = r.paid ? '<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(5,150,105,.12);border:1px solid rgba(5,150,105,.2);border-radius:8px;padding:4px 11px;font-size:11px;font-weight:700;color:#34d399;margin-top:4px;">💳 ' + (r.amount ? r.amount.toLocaleString() : '5 000') + ' ₸ төленді · ' + (r.cardLast4 || '') + '</div>' : '';
 
    return `
      <div style="padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);margin-bottom:8px;${borderColor}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:6px;">
          <div>
            <strong style="font-size:13px;display:block;margin-bottom:3px;">📌 ${r.topic}</strong>
            <span style="font-size:11px;color:var(--muted);">${new Date(r.createdAt).toLocaleDateString("kk-KZ")}${r.preferredDate ? " · 🗓 " + r.preferredDate : ""}</span>
          </div>
          ${badge}
        </div>
        ${questionHtml}
        ${paidHtml}
        ${meetBlock}
        ${cancelledBlock}
        ${rejectedBlock}
        ${cancelBlock}
      </div>`;
  }).join("");
}
 
function cancelConsultation(reqId){
  if (!confirm("Консультациядан бас тартасыз ба?")) return;
  const email = (localStorage.getItem("currentUserEmail") || "guest").toLowerCase().trim();
  const key   = "u_" + email + "_consult_requests";
  const list  = JSON.parse(localStorage.getItem(key) || "[]");
  const idx   = list.findIndex(r => r.id === reqId);
  if (idx !== -1) {
    list[idx].status = "cancelled";
    list[idx].cancelledAt = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(list));
  }
  renderConsultationHistory();
  showToast("🚫 Консультациядан бас тартылды.");
}
 
 
function deleteConsultation(id){
  const list = prGet("profileConsultations", []).filter(item => item.id !== id);
  prSet("profileConsultations", list);
  renderConsultations();
}
 
function addProfileNote(){
  const title = document.getElementById("profileNoteTitle").value.trim();
  const category = document.getElementById("profileNoteCategory").value;
  const text = document.getElementById("profileNoteText").value.trim();
 
  if(!title || !text){
    showProfileToast("Тақырып пен мәтінді толтыр");
    return;
  }
 
  const list = prGet("profileNotes", []);
 
  list.unshift({
    id: Date.now(),
    title,
    category,
    text
  });
 
  prSet("profileNotes", list);
 
  document.getElementById("profileNoteTitle").value = "";
  document.getElementById("profileNoteText").value = "";
 
  renderProfileNotes();
  showProfileToast("Жазба сақталды");
}
 
function renderProfileNotes(){
  const box = document.getElementById("profileNotesList");
  if(!box) return;
 
  const list = prGet("profileNotes", []);
 
  if(!list.length){
    box.innerHTML = `<div class="profile-empty">Әзірге жазба жоқ.</div>`;
  }else{
    box.innerHTML = list.map(item => `
      <div class="dashboard-row-card">
        <div>
          <strong>${item.title} · ${item.category}</strong>
          <p>${item.text}</p>
        </div>
        <button class="profile-mini-btn danger" onclick="deleteProfileNote('${item.id}')">Өшіру</button>
      </div>
    `).join("");
  }
 
  updateProfileDashboard();
}
 
function deleteProfileNote(id){
  const list = prGet("profileNotes", []).filter(item => item.id !== id);
  prSet("profileNotes", list);
  renderProfileNotes();
}
 
function clearProfileNotes(){
  if(!confirm("Барлық жазба өшірілсін бе?")) return;
  localStorage.removeItem("profileNotes");
  renderProfileNotes();
}
 
function updateProfileDashboard(){
  if(!document.body || document.body.dataset.page !== "profile") return;

  const profile = prGet("profileData", {});
  const docs    = prGet("profileDocs",  {});
  const uploads = prGet("prepUploads",  {});

  // ── Тек бір canonical key, duplicate жоқ ──
  const fkey = getUserKey("favoriteUniversities");
  let favorites = [];
  try { favorites = JSON.parse(localStorage.getItem(fkey) || "[]"); } catch(e) {}
  if (!Array.isArray(favorites)) favorites = [];

  const manual = prGet("profileUniversities", []);
  const seen = {}, universities = [];
  favorites.concat(manual).forEach(function(item) {
    const k = String(item.id || item.name || "");
    if (!seen[k]) { seen[k] = true; universities.push(item); }
  });

  const deadlines     = prGet("profileDeadlines",     []);
  const consultations = prGet("profileConsultations", []);
  const tasks         = typeof getTasks === "function" ? getTasks() : [];
  const doneTasks     = tasks.filter(function(t){ return t.status === "done"; }).length;
  const taskProgress  = tasks.length > 0 ? Math.round(doneTasks / tasks.length * 100) : 0;
  const docsDone      = profileDocuments.filter(function(d){ return docs[d[0]] || uploads[d[0]]; }).length;
  const docsPercent   = profileDocuments.length ? Math.round(docsDone / profileDocuments.length * 100) : 0;

  let profileCompletion = 0;
  ["name","email","city","goal"].forEach(function(key){
    if(profile[key]) profileCompletion += 25;
  });

  const uniProgress      = Math.min(100, universities.length * 50);
  const deadlineProgress = Math.min(100, deadlines.length * 50);
  const overall = Math.round(
    profileCompletion * 0.25 +
    docsPercent       * 0.30 +
    uniProgress       * 0.20 +
    deadlineProgress  * 0.15 +
    taskProgress      * 0.10
  );

  setText("savedUniversitiesCount",  universities.length);
  setText("profileDocsPercent",      docsPercent + "%");
  setText("consultationsCount",      consultations.length);
  setText("overallProfileProgress",  overall + "%");
  setText("progressTotalText",       overall + "%");
  setText("tasksCount",              tasks.length);
  setText("tasksDoneCount",          doneTasks);
  setText("profileCompletionText",   profileCompletion + "%");
  setText("docsCompletionText",      docsPercent + "%");
  setText("uniCompletionText",       uniProgress + "%");
  setText("deadlineCompletionText",  deadlineProgress + "%");
  setText("taskCompletionText",      taskProgress + "%");
  setWidth("profileCompletionBar",   profileCompletion + "%");
  setWidth("docsCompletionBar",      docsPercent + "%");
  setWidth("uniCompletionBar",       uniProgress + "%");
  setWidth("deadlineCompletionBar",  deadlineProgress + "%");
  setWidth("taskCompletionBar",      taskProgress + "%");
}
const EXTRA_RESULT_I18N = {
  "Өмір — мереке!": {
    kz: "Өмір — мереке!",
    ru: "Жизнь — праздник!",
    en: "Life is a celebration!",
    tr: "Hayat bir kutlamadır!"
  },

  "Спонтанды, энергиялы, адамдарды жақсы көретін. Сахнада жарқырайды. Практикалық, икемді, мейірімді.": {
    kz: "Спонтанды, энергиялы, адамдарды жақсы көретін. Сахнада жарқырайды. Практикалық, икемді, мейірімді.",
    ru: "Спонтанный, энергичный и любит людей. Ярко проявляет себя на сцене. Практичный, гибкий и добрый.",
    en: "Spontaneous, energetic, and people-loving. Shines on stage. Practical, flexible, and kind.",
    tr: "Spontane, enerjik ve insanları seven biridir. Sahne ortamında parlar. Pratik, esnek ve naziktir."
  },

  "Серпінді, адамдармен толы ортада дамиды. Монотонды жұмысты жатсынады. Ынтымақтастықта жарқырайды.": {
    kz: "Серпінді, адамдармен толы ортада дамиды. Монотонды жұмысты жатсынады. Ынтымақтастықта жарқырайды.",
    ru: "Лучше развивается в динамичной среде с людьми. Не любит монотонную работу. Сильно проявляет себя в сотрудничестве.",
    en: "Thrives in dynamic, people-filled environments. Dislikes monotonous work. Shines in collaboration.",
    tr: "Dinamik ve insanlarla dolu ortamlarda gelişir. Monoton işleri sevmez. İş birliğinde parlar."
  },

  "Актер": { kz: "Актер", ru: "Актёр", en: "Actor", tr: "Oyuncu" },
  "Тренер": { kz: "Тренер", ru: "Тренер", en: "Trainer", tr: "Eğitmen" },
  "Мұғалім": { kz: "Мұғалім", ru: "Учитель", en: "Teacher", tr: "Öğretmen" },
  "Турагент": { kz: "Турагент", ru: "Турагент", en: "Travel agent", tr: "Turizm danışmanı" },

  "Энергия": { kz: "Энергия", ru: "Энергия", en: "Energy", tr: "Enerji" },
  "Спонтанды": { kz: "Спонтанды", ru: "Спонтанность", en: "Spontaneity", tr: "Spontanelik" },
  "Мейірімділік": { kz: "Мейірімділік", ru: "Доброта", en: "Kindness", tr: "Nezaket" },
  "Практикалық": { kz: "Практикалық", ru: "Практичность", en: "Practicality", tr: "Pratiklik" },

  "Ұзақ мерзімді жоспар жоқ": {
    kz: "Ұзақ мерзімді жоспар жоқ",
    ru: "Нет долгосрочного плана",
    en: "Lack of long-term planning",
    tr: "Uzun vadeli plan eksikliği"
  },
  "Шегара жоқ": {
    kz: "Шегара жоқ",
    ru: "Слабые границы",
    en: "Weak boundaries",
    tr: "Sınır koymada zorluk"
  },
  "Фокус кем": {
    kz: "Фокус кем",
    ru: "Недостаток фокуса",
    en: "Lack of focus",
    tr: "Odak eksikliği"
  }
};

const TYPE_DATA = {
  INTJ:{
    desc:{
      kz:"Сирек кездесетін, бірақ ерекше стратегиялық ақылдың иесі. Ұзақ мерзімді жоспарлар мен кешенді жүйелерді жасауда тең жоқ. Тәуелсіз, сыни, мақсатқа бағытталған.",
      ru:"Редкий, но обладающий уникальным стратегическим умом. Непревзойдён в долгосрочном планировании и создании сложных систем. Независимый, критичный, целеустремлённый.",
      en:"Rare but uniquely strategic. Unmatched in long-term planning and complex systems. Independent, critical, goal-oriented.",
      tr:"Nadir ama benzersiz stratejik zekaya sahip. Uzun vadeli planlama ve karmaşık sistemler oluşturmada eşsiz. Bağımsız, eleştirel, hedef odaklı."
    },
    work:{
      kz:"Жалғыз немесе кішкентай командада жақсы жұмыс жасайды. Нақты мақсаты болса өте тиімді. Рутина мен микроменеджментті ұнатпайды.",
      ru:"Хорошо работает в одиночку или в небольшой команде. Очень эффективен при наличии чёткой цели. Не любит рутину и микроменеджмент.",
      en:"Works well alone or in small teams. Highly effective with a clear goal. Dislikes routine and micromanagement.",
      tr:"Yalnız veya küçük ekipte iyi çalışır. Net bir hedef olduğunda çok verimli. Rutin ve mikro yönetimden hoşlanmaz."
    },
    careers:{
      kz:["Стратегиялық аналитик","Программист","Зерттеуші","Инвестициялық аналитик","Заңгер"],
      ru:["Стратегический аналитик","Программист","Исследователь","Инвестиционный аналитик","Юрист"],
      en:["Strategic Analyst","Programmer","Researcher","Investment Analyst","Lawyer"],
      tr:["Stratejik Analist","Programcı","Araştırmacı","Yatırım Analisti","Avukat"]
    },
    famous:{
      kz:["Илон Маск","Стивен Хокинг","Никола Тесла"],
      ru:["Илон Маск","Стивен Хокинг","Никола Тесла"],
      en:["Elon Musk","Stephen Hawking","Nikola Tesla"],
      tr:["Elon Musk","Stephen Hawking","Nikola Tesla"]
    },
    str:{
      kz:["Стратегиялық ойлау","Тәуелсіздік","Жоғары стандарт","Аналитика"],
      ru:["Стратегическое мышление","Независимость","Высокий стандарт","Аналитика"],
      en:["Strategic thinking","Independence","High standards","Analytics"],
      tr:["Stratejik düşünce","Bağımsızlık","Yüksek standart","Analitik"]
    },
    weak:{
      kz:["Эмоциялық байланыс аз","Кейде тым сыни","Жалғыз жұмыс тенденциясы"],
      ru:["Мало эмоциональной связи","Иногда слишком критичен","Склонность работать в одиночку"],
      en:["Low emotional connection","Sometimes too critical","Tendency to work alone"],
      tr:["Az duygusal bağ","Bazen çok eleştirel","Yalnız çalışma eğilimi"]
    }
  },
  INTP:{
    desc:{
      kz:"Шексіз интеллектуалдық қызығушылықтың иесі. Теориялар мен мүмкіндіктерді зерттейді. Ашық ойлы, объективті, икемді.",
      ru:"Обладает безграничным интеллектуальным любопытством. Исследует теории и возможности. Открытый, объективный, гибкий.",
      en:"Boundless intellectual curiosity. Explores theories and possibilities. Open-minded, objective, flexible.",
      tr:"Sonsuz entelektüel merak. Teorileri ve olasılıkları araştırır. Açık fikirli, objektif, esnek."
    },
    work:{
      kz:"Зерттеу мен талдауда жарқырайды. Структура емес, ой еркіндігін қалайды. Дедлайнды ұнатпаса да нәтижеге жетеді.",
      ru:"Блестит в исследованиях и анализе. Предпочитает свободу мысли, а не структуру. Достигает результата, даже не любя дедлайны.",
      en:"Shines in research and analysis. Prefers freedom of thought over structure. Achieves results despite disliking deadlines.",
      tr:"Araştırma ve analizde parlar. Yapıdan çok düşünce özgürlüğünü tercih eder. Son teslim tarihlerinden hoşlanmasa da sonuç alır."
    },
    careers:{
      kz:["Data Scientist","Математик","Программист","Зерттеуші","Философ"],
      ru:["Data Scientist","Математик","Программист","Исследователь","Философ"],
      en:["Data Scientist","Mathematician","Programmer","Researcher","Philosopher"],
      tr:["Veri Bilimcisi","Matematikçi","Programcı","Araştırmacı","Filozof"]
    },
    famous:{
      kz:["Альберт Эйнштейн","Билл Гейтс","Чарльз Дарвин"],
      ru:["Альберт Эйнштейн","Билл Гейтс","Чарльз Дарвин"],
      en:["Albert Einstein","Bill Gates","Charles Darwin"],
      tr:["Albert Einstein","Bill Gates","Charles Darwin"]
    },
    str:{
      kz:["Логикалық талдау","Объективтілік","Шығармашыл ойлау","Теориялық база"],
      ru:["Логический анализ","Объективность","Творческое мышление","Теоретическая база"],
      en:["Logical analysis","Objectivity","Creative thinking","Theoretical base"],
      tr:["Mantıksal analiz","Nesnellik","Yaratıcı düşünce","Teorik temel"]
    },
    weak:{
      kz:["Прокрастинация","Қарым-қатынас","Эмоцияны жасырады"],
      ru:["Прокрастинация","Коммуникация","Скрывает эмоции"],
      en:["Procrastination","Communication","Hides emotions"],
      tr:["Erteleme","İletişim","Duygularını gizler"]
    }
  },
  ENTJ:{
    desc:{
      kz:"Табиғи туа лидер. Стратегиялық жоспарлайды, тиімді шешім қабылдайды, командасын жетектейді.",
      ru:"Прирождённый лидер. Стратегически планирует, принимает эффективные решения, ведёт команду.",
      en:"Natural-born leader. Plans strategically, makes effective decisions, leads teams.",
      tr:"Doğuştan lider. Stratejik planlar, etkili kararlar alır, ekibini yönetir."
    },
    work:{
      kz:"Үлкен жобалар мен командаларды жетектеуде тамаша. Жоспарлы жұмыс жасайды. Некомпетенттілікке шыдамсыз.",
      ru:"Отлично руководит крупными проектами и командами. Работает планомерно. Нетерпим к некомпетентности.",
      en:"Excellent at leading large projects and teams. Works methodically. Intolerant of incompetence.",
      tr:"Büyük projeleri ve ekipleri yönetmede mükemmel. Planlı çalışır. Yetersizliğe tahammülü yoktur."
    },
    careers:{
      kz:["CEO","Топ менеджер","Заңгер","Саясаткер","Кәсіпкер"],
      ru:["CEO","Топ-менеджер","Юрист","Политик","Предприниматель"],
      en:["CEO","Top Manager","Lawyer","Politician","Entrepreneur"],
      tr:["CEO","Üst Yönetici","Avukat","Politikacı","Girişimci"]
    },
    famous:{
      kz:["Стив Джобс","Маргарет Тэтчер","Гордон Рамзи"],
      ru:["Стив Джобс","Маргарет Тэтчер","Гордон Рамзи"],
      en:["Steve Jobs","Margaret Thatcher","Gordon Ramsay"],
      tr:["Steve Jobs","Margaret Thatcher","Gordon Ramsay"]
    },
    str:{
      kz:["Лидерлік","Стратегия","Шешімділік","Тиімділік"],
      ru:["Лидерство","Стратегия","Решительность","Эффективность"],
      en:["Leadership","Strategy","Decisiveness","Efficiency"],
      tr:["Liderlik","Strateji","Kararlılık","Verimlilik"]
    },
    weak:{
      kz:["Эмоцияны ескермейді","Кейде доминантты","Сыннан ашуланады"],
      ru:["Игнорирует эмоции","Иногда доминирует","Злится на критику"],
      en:["Ignores emotions","Sometimes dominant","Gets angry at criticism"],
      tr:["Duyguları görmezden gelir","Bazen baskın","Eleştiriye kızar"]
    }
  },
  ENTP:{
    desc:{
      kz:"Интеллектуалды жарысты сүйетін батыл новатор. Шаблонды бұзып, жаңашыл шешімдер ұсынады.",
      ru:"Смелый новатор, любящий интеллектуальное соперничество. Ломает шаблоны, предлагает инновационные решения.",
      en:"Bold innovator who loves intellectual competition. Breaks molds and offers innovative solutions.",
      tr:"Entelektüel rekabeti seven cesur yenilikçi. Kalıpları kırar, yenilikçi çözümler sunar."
    },
    work:{
      kz:"Бастамаларда күшті, аяқтауда кемшін. Жылдам ойлайды. Рутина жұмысына жарамайды.",
      ru:"Силён в начинаниях, слаб в завершении. Думает быстро. Не подходит для рутинной работы.",
      en:"Strong at starting, weak at finishing. Thinks fast. Not suited for routine work.",
      tr:"Başlamada güçlü, bitirmede zayıf. Hızlı düşünür. Rutin çalışmaya uygun değil."
    },
    careers:{
      kz:["Стартап негізін қалаушы","Маркетолог","Консультант","Заңгер","Дизайнер"],
      ru:["Основатель стартапа","Маркетолог","Консультант","Юрист","Дизайнер"],
      en:["Startup Founder","Marketer","Consultant","Lawyer","Designer"],
      tr:["Startup Kurucusu","Pazarlamacı","Danışman","Avukat","Tasarımcı"]
    },
    famous:{
      kz:["Томас Эдисон","Никола Тесла","Марк Твен"],
      ru:["Томас Эдисон","Никола Тесла","Марк Твен"],
      en:["Thomas Edison","Nikola Tesla","Mark Twain"],
      tr:["Thomas Edison","Nikola Tesla","Mark Twain"]
    },
    str:{
      kz:["Жаңашылдық","Харизма","Пікірсайыс","Икемділік"],
      ru:["Инновационность","Харизма","Дебаты","Гибкость"],
      en:["Innovation","Charisma","Debate","Flexibility"],
      tr:["Yenilikçilik","Karizmatik","Tartışma","Esneklik"]
    },
    weak:{
      kz:["Фокус кем","Рутина жоқ","Аяқтамайды"],
      ru:["Мало фокуса","Нет рутины","Не доводит до конца"],
      en:["Lacks focus","No routine","Doesn't finish"],
      tr:["Odak eksikliği","Rutin yok","Tamamlamaz"]
    }
  },
  INFJ:{
    desc:{
      kz:"Ең сирек кездесетін тип. Адамдарды терең түсінеді, болашақты алдын ала сезінеді. Принципті, эмпатиялы идеалист.",
      ru:"Самый редкий тип. Глубоко понимает людей, предчувствует будущее. Принципиальный, эмпатичный идеалист.",
      en:"The rarest type. Deeply understands people, senses the future. Principled, empathetic idealist.",
      tr:"En nadir tip. İnsanları derinden anlar, geleceği önceden hisseder. İlkeli, empatik idealist."
    },
    work:{
      kz:"Адамдарға нақты көмек беретін мамандықтарда жарқырайды. Мағыналы жұмыс керек, жай ақша емес.",
      ru:"Блестит в профессиях, дающих реальную помощь людям. Нужна осмысленная работа, а не просто деньги.",
      en:"Shines in professions that genuinely help people. Needs meaningful work, not just money.",
      tr:"İnsanlara gerçekten yardım eden mesleklerde parlar. Anlamlı iş ister, sadece para değil."
    },
    careers:{
      kz:["Психолог","Дәрігер","Мұғалім","Жазушы","Терапевт"],
      ru:["Психолог","Врач","Учитель","Писатель","Терапевт"],
      en:["Psychologist","Doctor","Teacher","Writer","Therapist"],
      tr:["Psikolog","Doktor","Öğretmen","Yazar","Terapist"]
    },
    famous:{
      kz:["Мартин Лютер Кинг","Мать Тереза","Нельсон Мандела"],
      ru:["Мартин Лютер Кинг","Мать Тереза","Нельсон Мандела"],
      en:["Martin Luther King","Mother Teresa","Nelson Mandela"],
      tr:["Martin Luther King","Madre Teresa","Nelson Mandela"]
    },
    str:{
      kz:["Эмпатия","Болжампаздық","Принциптілік","Шығармашылық"],
      ru:["Эмпатия","Проницательность","Принципиальность","Творчество"],
      en:["Empathy","Insight","Principles","Creativity"],
      tr:["Empati","Öngörü","İlkelilik","Yaratıcılık"]
    },
    weak:{
      kz:["Перфекционизм","Burnout","Шегара қоя алмайды"],
      ru:["Перфекционизм","Выгорание","Не умеет ставить границы"],
      en:["Perfectionism","Burnout","Can't set boundaries"],
      tr:["Mükemmeliyetçilik","Tükenme","Sınır koyamaz"]
    }
  },
  INFP:{
    desc:{
      kz:"Өзінің ішкі дүниесінде өмір сүретін идеалист. Жеке құндылықтары бойынша шешім қабылдайды. Шығармашыл, эмпатиялы, ашық жүректі.",
      ru:"Идеалист, живущий в своём внутреннем мире. Принимает решения согласно личным ценностям. Творческий, эмпатичный, открытый.",
      en:"An idealist living in their inner world. Makes decisions based on personal values. Creative, empathetic, open-hearted.",
      tr:"İç dünyasında yaşayan idealist. Kişisel değerlere göre karar verir. Yaratıcı, empatik, açık yürekli."
    },
    work:{
      kz:"Творчестволық бостандық болса дамиды. Конфликтті жатсынады. Мағыналы жұмысты ақшалы жұмыстан жоғары қояды.",
      ru:"Расцветает при творческой свободе. Избегает конфликтов. Ставит смысл работы выше зарплаты.",
      en:"Thrives with creative freedom. Avoids conflict. Values meaningful work over money.",
      tr:"Yaratıcı özgürlükle gelişir. Çatışmadan kaçınır. Anlamlı işi paradan üstün tutar."
    },
    careers:{
      kz:["Жазушы","Психолог","Педагог","Суретші","Журналист"],
      ru:["Писатель","Психолог","Педагог","Художник","Журналист"],
      en:["Writer","Psychologist","Teacher","Artist","Journalist"],
      tr:["Yazar","Psikolog","Eğitimci","Sanatçı","Gazeteci"]
    },
    famous:{
      kz:["Уильям Шекспир","Дж.Р.Р. Толкин","Фрэнк Оушен"],
      ru:["Уильям Шекспир","Дж.Р.Р. Толкин","Фрэнк Оушен"],
      en:["William Shakespeare","J.R.R. Tolkien","Frank Ocean"],
      tr:["William Shakespeare","J.R.R. Tolkien","Frank Ocean"]
    },
    str:{
      kz:["Шығармашылық","Эмпатия","Идеализм","Ашықтық"],
      ru:["Творчество","Эмпатия","Идеализм","Открытость"],
      en:["Creativity","Empathy","Idealism","Openness"],
      tr:["Yaratıcılık","Empati","İdealizm","Açıklık"]
    },
    weak:{
      kz:["Практикалық емес","Сынды қабылдау қиын","Шешімсіздік"],
      ru:["Непрактичность","Трудно принимать критику","Нерешительность"],
      en:["Impractical","Hard to accept criticism","Indecisiveness"],
      tr:["Pratik değil","Eleştiriyi kabullenmek zor","Kararsızlık"]
    }
  },
  ENFJ:{
    desc:{
      kz:"Харизматикалық, шабыттандырушы лидер. Адамдарды дамытады, топты жетектейді. Эмпатиялы, ұйымшыл, адал.",
      ru:"Харизматичный, вдохновляющий лидер. Развивает людей, ведёт команду. Эмпатичный, организованный, преданный.",
      en:"Charismatic, inspiring leader. Develops people and leads teams. Empathetic, organized, devoted.",
      tr:"Karizmatik, ilham veren lider. İnsanları geliştirir, ekibi yönetir. Empatik, organize, sadık."
    },
    work:{
      kz:"Адамдармен тікелей жұмыс жасауды жақсы көреді. Конфликтті шешуде шебер. Топ жетекшісі рөліне туа сай.",
      ru:"Любит работать напрямую с людьми. Мастер в разрешении конфликтов. Рождён для роли лидера команды.",
      en:"Loves working directly with people. Expert at resolving conflicts. Born for a team leader role.",
      tr:"İnsanlarla doğrudan çalışmayı sever. Çatışma çözmede ustadır. Ekip lideri rolü için doğmuş."
    },
    careers:{
      kz:["Мұғалім","HR менеджер","Саясаткер","Коуч","Консультант"],
      ru:["Учитель","HR-менеджер","Политик","Коуч","Консультант"],
      en:["Teacher","HR Manager","Politician","Coach","Consultant"],
      tr:["Öğretmen","İK Yöneticisi","Politikacı","Koç","Danışman"]
    },
    famous:{
      kz:["Барак Обама","Опра Уинфри","Малала Юсуфзай"],
      ru:["Барак Обама","Опра Уинфри","Малала Юсуфзай"],
      en:["Barack Obama","Oprah Winfrey","Malala Yousafzai"],
      tr:["Barack Obama","Oprah Winfrey","Malala Yousafzai"]
    },
    str:{
      kz:["Лидерлік","Эмпатия","Коммуникация","Шабыттандыру"],
      ru:["Лидерство","Эмпатия","Коммуникация","Вдохновение"],
      en:["Leadership","Empathy","Communication","Inspiration"],
      tr:["Liderlik","Empati","İletişim","İlham verme"]
    },
    weak:{
      kz:["Өзін ұмытады","Сынға сезімтал","Артық сенімді"],
      ru:["Забывает о себе","Чувствителен к критике","Чрезмерно доверчив"],
      en:["Forgets self","Sensitive to criticism","Overly trusting"],
      tr:["Kendini unutur","Eleştiriye duyarlı","Aşırı güvenen"]
    }
  },
  ENFP:{
    desc:{
      kz:"Энергиялы, шабытты, адамдарды жақсы көретін. Жаңа мүмкіндіктерді іздейді. Спонтанды, оптимист, шығармашыл.",
      ru:"Энергичный, вдохновлённый, любящий людей. Ищет новые возможности. Спонтанный, оптимист, творческий.",
      en:"Energetic, inspired, people-loving. Seeks new opportunities. Spontaneous, optimistic, creative.",
      tr:"Enerjik, ilham dolu, insanları seven. Yeni fırsatlar arar. Kendiliğinden, iyimser, yaratıcı."
    },
    work:{
      kz:"Творчестволық еркіндік берілгенде жарқырайды. Монотонды жұмысқа жарамайды. Командада шабыт береді.",
      ru:"Блестит при творческой свободе. Не подходит для монотонной работы. Вдохновляет команду.",
      en:"Shines with creative freedom. Not suited for monotonous work. Inspires the team.",
      tr:"Yaratıcı özgürlükle parlar. Monoton işe uygun değil. Ekibe ilham verir."
    },
    careers:{
      kz:["Маркетолог","Дизайнер","PR маман","Психолог","Кәсіпкер"],
      ru:["Маркетолог","Дизайнер","PR-специалист","Психолог","Предприниматель"],
      en:["Marketer","Designer","PR Specialist","Psychologist","Entrepreneur"],
      tr:["Pazarlamacı","Tasarımcı","PR Uzmanı","Psikolog","Girişimci"]
    },
    famous:{
      kz:["Робин Уильямс","Эллен Дедженерес","Фарида Хайдари"],
      ru:["Робин Уильямс","Эллен Дедженерес","Фарида Хайдари"],
      en:["Robin Williams","Ellen DeGeneres","Farida Haidari"],
      tr:["Robin Williams","Ellen DeGeneres","Farida Haidari"]
    },
    str:{
      kz:["Энергия","Шығармашылық","Коммуникация","Оптимизм"],
      ru:["Энергия","Творчество","Коммуникация","Оптимизм"],
      en:["Energy","Creativity","Communication","Optimism"],
      tr:["Enerji","Yaratıcılık","İletişim","İyimserlik"]
    },
    weak:{
      kz:["Фокус кем","Аяқтамайды","Гиперактивтілік"],
      ru:["Мало фокуса","Не доводит до конца","Гиперактивность"],
      en:["Lacks focus","Doesn't finish","Hyperactivity"],
      tr:["Odak eksikliği","Tamamlamaz","Hiperaktivite"]
    }
  },
  ISTJ:{
    desc:{
      kz:"Сенімді, жауапты, практикалық. Дәстүр мен тәртіпті бағалайды. Ережелерді сақтайды, детальдарға назар аударады.",
      ru:"Надёжный, ответственный, практичный. Ценит традиции и порядок. Соблюдает правила, внимателен к деталям.",
      en:"Reliable, responsible, practical. Values tradition and order. Follows rules, attentive to detail.",
      tr:"Güvenilir, sorumlu, pratik. Gelenek ve düzene değer verir. Kurallara uyar, detaylara dikkat eder."
    },
    work:{
      kz:"Нақты жауапкершілік пен анықталған рөлде жақсы жұмыс жасайды. Дедлайнды ерте орындайды.",
      ru:"Хорошо работает с чёткой ответственностью и определённой ролью. Выполняет задачи раньше срока.",
      en:"Works well with clear responsibility and defined roles. Completes tasks ahead of deadlines.",
      tr:"Net sorumluluk ve tanımlı rol ile iyi çalışır. Görevleri son tarihten önce tamamlar."
    },
    careers:{
      kz:["Бухгалтер","Заңгер","Инженер","Дәрігер","IT маман"],
      ru:["Бухгалтер","Юрист","Инженер","Врач","IT-специалист"],
      en:["Accountant","Lawyer","Engineer","Doctor","IT Specialist"],
      tr:["Muhasebeci","Avukat","Mühendis","Doktor","BT Uzmanı"]
    },
    famous:{
      kz:["Джефф Безос","Кондолиза Райс","Ангела Меркель"],
      ru:["Джефф Безос","Кондолиза Райс","Ангела Меркель"],
      en:["Jeff Bezos","Condoleezza Rice","Angela Merkel"],
      tr:["Jeff Bezos","Condoleezza Rice","Angela Merkel"]
    },
    str:{
      kz:["Жауапкершілік","Тиянақтылық","Ұйымшылдық","Сенімділік"],
      ru:["Ответственность","Тщательность","Организованность","Надёжность"],
      en:["Responsibility","Thoroughness","Organization","Reliability"],
      tr:["Sorumluluk","Titizlik","Organizasyon","Güvenilirlik"]
    },
    weak:{
      kz:["Икемсіздік","Жаңалықтан қорқу","Эмоцияны білдірмейді"],
      ru:["Негибкость","Боязнь нового","Не проявляет эмоций"],
      en:["Inflexibility","Fear of novelty","Doesn't express emotions"],
      tr:["Esneksizlik","Yenilikten korku","Duygularını göstermez"]
    }
  },
  ISFJ:{
    desc:{
      kz:"Жылы жүректі, жауапты, өзгелерге қамқор. Адал, мейірімді, дәстүрді ұстанады.",
      ru:"Тёплый, ответственный, заботливый. Преданный, добрый, придерживается традиций.",
      en:"Warm-hearted, responsible, caring. Loyal, kind, upholds traditions.",
      tr:"Sıcak kalpli, sorumlu, ilgi gösteren. Sadık, nazik, geleneklere bağlı."
    },
    work:{
      kz:"Адамдарға тікелей көмек беретін ортада дамиды. Структуралы жұмысты жақсы көреді.",
      ru:"Расцветает в среде, дающей прямую помощь людям. Любит структурированную работу.",
      en:"Thrives in environments that directly help people. Loves structured work.",
      tr:"İnsanlara doğrudan yardım eden ortamlarda gelişir. Yapılandırılmış çalışmayı sever."
    },
    careers:{
      kz:["Медбике","Мұғалім","Психолог","Фармацевт","Әлеуметтік жұмысшы"],
      ru:["Медсестра","Учитель","Психолог","Фармацевт","Социальный работник"],
      en:["Nurse","Teacher","Psychologist","Pharmacist","Social Worker"],
      tr:["Hemşire","Öğretmen","Psikolog","Eczacı","Sosyal Çalışan"]
    },
    famous:{
      kz:["Мать Тереза","Бейонсе","Кейт Миддлтон"],
      ru:["Мать Тереза","Бейонсе","Кейт Миддлтон"],
      en:["Mother Teresa","Beyoncé","Kate Middleton"],
      tr:["Madre Teresa","Beyoncé","Kate Middleton"]
    },
    str:{
      kz:["Мейірімділік","Жауапкершілік","Сенімділік","Практикалық"],
      ru:["Доброта","Ответственность","Надёжность","Практичность"],
      en:["Kindness","Responsibility","Reliability","Practicality"],
      tr:["İyilik","Sorumluluk","Güvenilirlik","Pratiklik"]
    },
    weak:{
      kz:["Шегара қоя алмайды","Өзін ұмытады","Өзгеріске қарсы"],
      ru:["Не умеет ставить границы","Забывает о себе","Сопротивляется переменам"],
      en:["Can't set boundaries","Forgets self","Resistant to change"],
      tr:["Sınır koyamaz","Kendini unutur","Değişime direnir"]
    }
  },
  ESTJ:{
    desc:{
      kz:"Ұйымдасқан, шешімді, нәтижеге бағытталған. Тәртіп пен жүйені ұнатады.",
      ru:"Организованный, решительный, нацеленный на результат. Любит порядок и систему.",
      en:"Organized, decisive, results-oriented. Loves order and structure.",
      tr:"Organize, kararlı, sonuç odaklı. Düzen ve sistemi sever."
    },
    work:{
      kz:"Анықталған иерархиямен жұмыс жасайды. Командасын нақты мақсатқа жетелейді.",
      ru:"Работает в чётко определённой иерархии. Ведёт команду к конкретной цели.",
      en:"Works within a defined hierarchy. Leads team toward a concrete goal.",
      tr:"Belirlenmiş hiyerarşiyle çalışır. Ekibini somut bir hedefe yönlendirir."
    },
    careers:{
      kz:["Менеджер","Заңгер","Мемлекеттік қызметші","Инженер","Банкир"],
      ru:["Менеджер","Юрист","Государственный служащий","Инженер","Банкир"],
      en:["Manager","Lawyer","Civil Servant","Engineer","Banker"],
      tr:["Yönetici","Avukat","Devlet Memuru","Mühendis","Bankacı"]
    },
    famous:{
      kz:["Хиллари Клинтон","Сония Сотомайор","Линдон Джонсон"],
      ru:["Хиллари Клинтон","Соня Сотомайор","Линдон Джонсон"],
      en:["Hillary Clinton","Sonia Sotomayor","Lyndon Johnson"],
      tr:["Hillary Clinton","Sonia Sotomayor","Lyndon Johnson"]
    },
    str:{
      kz:["Ұйымдастыру","Лидерлік","Шешімділік","Сенімділік"],
      ru:["Организация","Лидерство","Решительность","Надёжность"],
      en:["Organization","Leadership","Decisiveness","Reliability"],
      tr:["Organizasyon","Liderlik","Kararlılık","Güvenilirlik"]
    },
    weak:{
      kz:["Иілмеу","Эмпатия кем","Кейде қатал"],
      ru:["Негибкость","Мало эмпатии","Иногда жёсткий"],
      en:["Inflexibility","Low empathy","Sometimes harsh"],
      tr:["Esneksizlik","Az empati","Bazen katı"]
    }
  },
  ESFJ:{
    desc:{
      kz:"Адамдарды жақсы көретін, қоғамдастықты бағалайтын. Топта гармония жасайды. Адал, жауапты, практикалық.",
      ru:"Любящий людей, ценящий общество. Создаёт гармонию в команде. Преданный, ответственный, практичный.",
      en:"People-loving, community-valuing. Creates harmony in teams. Loyal, responsible, practical.",
      tr:"İnsanları seven, toplumu değerli bulan. Ekipte uyum oluşturur. Sadık, sorumlu, pratik."
    },
    work:{
      kz:"Адамдармен тікелей жұмыс ортасында дамиды. Командалық жобаларда жарқырайды.",
      ru:"Расцветает в среде прямого общения с людьми. Блестит в командных проектах.",
      en:"Thrives in direct people-facing environments. Shines in team projects.",
      tr:"Doğrudan insan etkileşimi ortamında gelişir. Ekip projelerinde parlar."
    },
    careers:{
      kz:["Мұғалім","Медбике","HR маман","Event Manager","Туризм"],
      ru:["Учитель","Медсестра","HR-специалист","Ивент-менеджер","Туризм"],
      en:["Teacher","Nurse","HR Specialist","Event Manager","Tourism"],
      tr:["Öğretmen","Hemşire","İK Uzmanı","Etkinlik Yöneticisi","Turizm"]
    },
    famous:{
      kz:["Тейлор Свифт","Билл Клинтон","Хью Джекман"],
      ru:["Тейлор Свифт","Билл Клинтон","Хью Джекман"],
      en:["Taylor Swift","Bill Clinton","Hugh Jackman"],
      tr:["Taylor Swift","Bill Clinton","Hugh Jackman"]
    },
    str:{
      kz:["Коммуникация","Командалық рух","Жауапкершілік","Эмпатия"],
      ru:["Коммуникация","Командный дух","Ответственность","Эмпатия"],
      en:["Communication","Team spirit","Responsibility","Empathy"],
      tr:["İletişim","Takım ruhu","Sorumluluk","Empati"]
    },
    weak:{
      kz:["Сынға қарсылық","Тым тәуелді","Шегара жоқ"],
      ru:["Сопротивление критике","Слишком зависимый","Нет границ"],
      en:["Resistance to criticism","Too dependent","No boundaries"],
      tr:["Eleştiriye direnç","Çok bağımlı","Sınır yok"]
    }
  },
  ISTP:{
    desc:{
      kz:"Бақылаушы және практикалық. Механизмдер мен жүйелерді зерттейді. Тез үйренеді, тәуелсіз, икемді.",
      ru:"Наблюдательный и практичный. Исследует механизмы и системы. Быстро учится, независимый, гибкий.",
      en:"Observant and practical. Explores mechanisms and systems. Fast learner, independent, flexible.",
      tr:"Gözlemci ve pratik. Mekanizmaları ve sistemleri araştırır. Hızlı öğrenir, bağımsız, esnek."
    },
    work:{
      kz:"Нақты, практикалық жұмысты ұнатады. Дағдарыс кезінде сабырлы. Рутина тез жалықтырады.",
      ru:"Любит конкретную, практическую работу. Спокоен в кризисных ситуациях. Рутина быстро надоедает.",
      en:"Loves concrete, practical work. Calm in crises. Gets bored quickly with routine.",
      tr:"Somut, pratik çalışmayı sever. Kriz anında sakin. Rutin çabuk sıkar."
    },
    careers:{
      kz:["Инженер","Программист","Техник","Сот сарапшысы","Архитектор"],
      ru:["Инженер","Программист","Техник","Судебный эксперт","Архитектор"],
      en:["Engineer","Programmer","Technician","Forensic Expert","Architect"],
      tr:["Mühendis","Programcı","Teknisyen","Adli Uzman","Mimar"]
    },
    famous:{
      kz:["Майкл Джордан","Брюс Ли","Стив Возняк"],
      ru:["Майкл Джордан","Брюс Ли","Стив Возняк"],
      en:["Michael Jordan","Bruce Lee","Steve Wozniak"],
      tr:["Michael Jordan","Bruce Lee","Steve Wozniak"]
    },
    str:{
      kz:["Практикалық","Логика","Дағдарыс кезінде сабырлы","Икемді"],
      ru:["Практичность","Логика","Спокойствие в кризисе","Гибкость"],
      en:["Practicality","Logic","Calm in crisis","Flexibility"],
      tr:["Pratiklik","Mantık","Krizde sakinlik","Esneklik"]
    },
    weak:{
      kz:["Эмоцияны жасырады","Ұзақ мерзімді жоспар жоқ","Бейтарап"],
      ru:["Скрывает эмоции","Нет долгосрочного плана","Безразличный"],
      en:["Hides emotions","No long-term plan","Detached"],
      tr:["Duygularını gizler","Uzun vadeli plan yok","İlgisiz"]
    }
  },
  ISFP:{
    desc:{
      kz:"Жайдары, эстетикалық сезімі дамыған, шығармашыл. Бостандықты ұнатады. Өнер мен дизайнда табиғи дарын.",
      ru:"Жизнерадостный, с развитым эстетическим чувством, творческий. Любит свободу. Природный талант в искусстве и дизайне.",
      en:"Cheerful, aesthetically gifted, creative. Loves freedom. Natural talent in art and design.",
      tr:"Neşeli, gelişmiş estetik duyguya sahip, yaratıcı. Özgürlüğü sever. Sanat ve tasarımda doğal yetenek."
    },
    work:{
      kz:"Шығармашылық еркіндігі бар ортада дамиды. Адамдармен тікелей байланыс ыңғайлы. Иерархияны жатсынады.",
      ru:"Расцветает в среде с творческой свободой. Предпочитает прямой контакт с людьми. Отвергает иерархию.",
      en:"Thrives in environments with creative freedom. Prefers direct contact with people. Rejects hierarchy.",
      tr:"Yaratıcı özgürlüğü olan ortamlarda gelişir. İnsanlarla doğrudan temas tercih eder. Hiyerarşiyi reddeder."
    },
    careers:{
      kz:["Дизайнер","Суретші","Фотограф","Музыкант","Модельер"],
      ru:["Дизайнер","Художник","Фотограф","Музыкант","Модельер"],
      en:["Designer","Artist","Photographer","Musician","Fashion Designer"],
      tr:["Tasarımcı","Sanatçı","Fotoğrafçı","Müzisyen","Moda Tasarımcısı"]
    },
    famous:{
      kz:["Майкл Джексон","Бритни Спирс","Фрида Кало"],
      ru:["Майкл Джексон","Бритни Спирс","Фрида Кало"],
      en:["Michael Jackson","Britney Spears","Frida Kahlo"],
      tr:["Michael Jackson","Britney Spears","Frida Kahlo"]
    },
    str:{
      kz:["Эстетика","Эмпатия","Икемділік","Спонтанды"],
      ru:["Эстетика","Эмпатия","Гибкость","Спонтанность"],
      en:["Aesthetics","Empathy","Flexibility","Spontaneity"],
      tr:["Estetik","Empati","Esneklik","Kendiliğindenlik"]
    },
    weak:{
      kz:["Ұйымшылдық кем","Мақсатсыздық","Шегара жоқ"],
      ru:["Мало организованности","Отсутствие цели","Нет границ"],
      en:["Lacks organization","Aimlessness","No boundaries"],
      tr:["Organizasyon eksikliği","Amaçsızlık","Sınır yok"]
    }
  },
  ESTP:{
    desc:{
      kz:"Энергиялы, практикалық, тәуекелге дайын. Қазіргі сәтті бағалайды. Бизнес пен спортта табысты. Харизматикалық.",
      ru:"Энергичный, практичный, готовый к риску. Ценит настоящий момент. Успешен в бизнесе и спорте. Харизматичный.",
      en:"Energetic, practical, risk-ready. Values the present moment. Successful in business and sports. Charismatic.",
      tr:"Enerjik, pratik, riske hazır. Anı değerli bulur. İş ve sporda başarılı. Karizmatik."
    },
    work:{
      kz:"Жылдам нәтиже беретін ортада жарқырайды. Ережелерді бұзуға дайын. Теориядан гөрі практика ұнайды.",
      ru:"Блестит в среде с быстрыми результатами. Готов нарушать правила. Практика важнее теории.",
      en:"Shines in fast-result environments. Ready to break rules. Prefers practice over theory.",
      tr:"Hızlı sonuç veren ortamlarda parlar. Kuralları çiğnemeye hazır. Teoriden çok pratiği sever."
    },
    careers:{
      kz:["Сатушы","Кәсіпкер","Спорт тренері","Маркетолог","Брокер"],
      ru:["Продавец","Предприниматель","Спортивный тренер","Маркетолог","Брокер"],
      en:["Salesperson","Entrepreneur","Sports Coach","Marketer","Broker"],
      tr:["Satıcı","Girişimci","Spor Antrenörü","Pazarlamacı","Broker"]
    },
    famous:{
      kz:["Дональд Трамп","Эрнест Хемингуэй","Мадонна"],
      ru:["Дональд Трамп","Эрнест Хемингуэй","Мадонна"],
      en:["Donald Trump","Ernest Hemingway","Madonna"],
      tr:["Donald Trump","Ernest Hemingway","Madonna"]
    },
    str:{
      kz:["Энергия","Практикалық","Тәуекел","Харизма"],
      ru:["Энергия","Практичность","Риск","Харизма"],
      en:["Energy","Practicality","Risk-taking","Charisma"],
      tr:["Enerji","Pratiklik","Risk alma","Karizmatik"]
    },
    weak:{
      kz:["Ұзақ мерзімді жоспар жоқ","Импульсивті","Рутина жатсынады"],
      ru:["Нет долгосрочного плана","Импульсивный","Избегает рутины"],
      en:["No long-term plan","Impulsive","Avoids routine"],
      tr:["Uzun vadeli plan yok","Dürtüsel","Rutinden kaçınır"]
    }
  },
  ESFP:{
    desc:{
      kz:"Спонтанды, энергиялы, адамдарды жақсы көретін. Сахнада жарқырайды. Практикалық, икемді, мейірімді.",
      ru:"Спонтанный, энергичный, любящий людей. Блестит на сцене. Практичный, гибкий, добрый.",
      en:"Spontaneous, energetic, people-loving. Shines on stage. Practical, flexible, kind.",
      tr:"Kendiliğinden, enerjik, insanları seven. Sahnede parlar. Pratik, esnek, nazik."
    },
    work:{
      kz:"Серпінді, адамдармен толы ортада дамиды. Монотонды жұмысты жатсынады. Ынтымақтастықта жарқырайды.",
      ru:"Расцветает в динамичной, насыщенной людьми среде. Избегает монотонной работы. Блестит в сотрудничестве.",
      en:"Thrives in dynamic, people-filled environments. Avoids monotonous work. Shines in collaboration.",
      tr:"Dinamik, insan dolu ortamlarda gelişir. Monoton çalışmadan kaçınır. İşbirliğinde parlar."
    },
    careers:{
      kz:["Актер","Тренер","Event manager","Мұғалім","Турагент"],
      ru:["Актёр","Тренер","Ивент-менеджер","Учитель","Турагент"],
      en:["Actor","Coach","Event Manager","Teacher","Travel Agent"],
      tr:["Aktör","Koç","Etkinlik Yöneticisi","Öğretmen","Turizm Acentesi"]
    },
    famous:{
      kz:["Адель","Уилл Смит","Мэрилин Монро"],
      ru:["Адель","Уилл Смит","Мэрилин Монро"],
      en:["Adele","Will Smith","Marilyn Monroe"],
      tr:["Adele","Will Smith","Marilyn Monroe"]
    },
    str:{
      kz:["Энергия","Спонтанды","Мейірімділік","Практикалық"],
      ru:["Энергия","Спонтанность","Доброта","Практичность"],
      en:["Energy","Spontaneity","Kindness","Practicality"],
      tr:["Enerji","Kendiliğindenlik","İyilik","Pratiklik"]
    },
    weak:{
      kz:["Ұзақ мерзімді жоспар жоқ","Шегара жоқ","Фокус кем"],
      ru:["Нет долгосрочного плана","Нет границ","Мало фокуса"],
      en:["No long-term plan","No boundaries","Lacks focus"],
      tr:["Uzun vadeli plan yok","Sınır yok","Odak eksikliği"]
    }
  }
};


const TYPE_SLOGANS = {
  INTJ:{kz:'"Білім — ең үлкен күш"', ru:'"Знание — величайшая сила"', en:'"Knowledge is the greatest power"', tr:'"Bilgi en büyük güçtür"'},
  INTP:{kz:'"Теория — барлық нәрсенің астауы"', ru:'"Теория — основа всего"', en:'"Theory is the foundation of all"', tr:'"Teori her şeyin temelidir"'},
  ENTJ:{kz:'"Жетекшілік — менің табиғатым"', ru:'"Лидерство — моя природа"', en:'"Leadership is my nature"', tr:'"Liderlik benim doğamdır"'},
  ENTP:{kz:'"Жаңаша ойла — жаңаша жаса"', ru:'"Думай иначе — действуй иначе"', en:'"Think differently — act differently"', tr:'"Farklı düşün — farklı yap"'},
  INFJ:{kz:'"Адамзат үшін өзгеріс жасаймын"', ru:'"Меняю мир ради людей"', en:'"I create change for humanity"', tr:'"İnsanlık için değişim yaratırım"'},
  INFP:{kz:'"Арманда шындық бар"', ru:'"В мечте есть правда"', en:'"There is truth in dreams"', tr:'"Hayallerde gerçek vardır"'},
  ENFJ:{kz:'"Адамдарды шабыттандырамын"', ru:'"Я вдохновляю людей"', en:'"I inspire people"', tr:'"İnsanlara ilham veririm"'},
  ENFP:{kz:'"Мүмкіндік бәрінде бар"', ru:'"Возможности есть везде"', en:'"There is possibility in everything"', tr:'"Her şeyde olasılık vardır"'},
  ISTJ:{kz:'"Уәде беріп, ұстаймын"', ru:'"Обещаю и держу слово"', en:'"I promise and keep my word"', tr:'"Söz verir ve tutarım"'},
  ISFJ:{kz:'"Сенің жайлылығың — менің мақсатым"', ru:'"Твой комфорт — моя цель"', en:'"Your comfort is my goal"', tr:'"Senin rahatlığın benim hedefim"'},
  ESTJ:{kz:'"Ереже — тәртіптің негізі"', ru:'"Правила — основа порядка"', en:'"Rules are the foundation of order"', tr:'"Kurallar düzenin temelidir"'},
  ESFJ:{kz:'"Бірге күштіміз"', ru:'"Вместе мы сильнее"', en:'"Together we are stronger"', tr:'"Birlikte daha güçlüyüz"'},
  ISTP:{kz:'"Жаса, талда, жетілдір"', ru:'"Делай, анализируй, совершенствуй"', en:'"Do, analyze, improve"', tr:'"Yap, analiz et, geliştir"'},
  ISFP:{kz:'"Сезім — ең жақсы бағдар"', ru:'"Чувство — лучший ориентир"', en:'"Feeling is the best guide"', tr:'"Duygu en iyi rehberdir"'},
  ESTP:{kz:'"Тез жүр, жылдам ойла"', ru:'"Двигайся быстро, думай быстро"', en:'"Move fast, think fast"', tr:'"Hızlı git, hızlı düşün"'},
  ESFP:{kz:'"Өмір — мереке!"', ru:'"Жизнь — праздник!"', en:'"Life is a celebration!"', tr:'"Hayat bir kutlamadır!"'},
};

const BLOCK_TEXTS = {
  EI: {
    title: { kz: "Энергия бағыты", ru: "Направление энергии", en: "Energy direction", tr: "Enerji yönü" },
    sub: { kz: "Экстраверт (E) пе — Интроверт (I) пе?", ru: "Экстраверт (E) или Интроверт (I)?", en: "Extravert (E) or Introvert (I)?", tr: "Dışadönük (E) mü — İçedönük (I) mü?" }
  },
  SN: {
    title: { kz: "Ақпарат қабылдау", ru: "Восприятие информации", en: "Information processing", tr: "Bilgi algılama" },
    sub: { kz: "Сенсорлық (S) па — Интуитивті (N) ме?", ru: "Сенсорик (S) или Интуит (N)?", en: "Sensing (S) or Intuitive (N)?", tr: "Duyusal (S) mı — Sezgisel (N) mi?" }
  },
  TF: {
    title: { kz: "Шешім қабылдау", ru: "Принятие решений", en: "Decision making", tr: "Karar verme" },
    sub: { kz: "Ойлаушы (T) па — Сезімдік (F) пе?", ru: "Мышление (T) или Чувства (F)?", en: "Thinking (T) or Feeling (F)?", tr: "Düşünen (T) mi — Hisseden (F) mi?" }
  },
  JP: {
    title: { kz: "Өмір стилі", ru: "Стиль жизни", en: "Lifestyle", tr: "Yaşam tarzı" },
    sub: { kz: "Жоспарлаушы (J) па — Икемді (P) пе?", ru: "Планирующий (J) или Гибкий (P)?", en: "Judging (J) or Prospecting (P)?", tr: "Planlı (J) mı — Esnek (P) mi?" }
  },
  AT: {
    title: { kz: "Сәйкестік (Identity)", ru: "Идентичность", en: "Identity", tr: "Kimlik" },
    sub: { kz: "Сенімді (A) пе — Толқымалы (T) пе?", ru: "Уверенный (A) или Турбулентный (T)?", en: "Assertive (A) or Turbulent (T)?", tr: "Kendinden emin (A) mi — Kaygılı (T) mi?" }
  }
};


// Career test нәтижесі
const ukey = "u_" + currentEmail + "_careerTestResult";
const testResult = JSON.parse(localStorage.getItem(ukey) || "null");
const resultBox = document.getElementById("careerTestResult");

if (resultBox && testResult) {
  resultBox.style.display = "block";

  const rt = document.getElementById("careerResultText");
  const rd = document.getElementById("careerResultDate");

  const lang = (localStorage.getItem("lang") || "kz").toLowerCase();

  const typeNames = {
    INTJ:{kz:"Стратег",ru:"Стратег",en:"Strategist",tr:"Stratejist"},
    INTP:{kz:"Логик",ru:"Логик",en:"Logician",tr:"Mantıkçı"},
    ENTJ:{kz:"Командир",ru:"Командир",en:"Commander",tr:"Komutan"},
    ENTP:{kz:"Полемист",ru:"Полемист",en:"Debater",tr:"Tartışmacı"},
    INFJ:{kz:"Қорғаушы",ru:"Поборник",en:"Advocate",tr:"Savunucu"},
    INFP:{kz:"Медиатор",ru:"Медиатор",en:"Mediator",tr:"Arabulucu"},
    ENFJ:{kz:"Протагонист",ru:"Протагонист",en:"Protagonist",tr:"Protagonist"},
    ENFP:{kz:"Белсенді",ru:"Активист",en:"Campaigner",tr:"Kampanyacı"},
    ISTJ:{kz:"Логист",ru:"Логист",en:"Logistician",tr:"Lojistikçi"},
    ISFJ:{kz:"Қорғаушы",ru:"Защитник",en:"Defender",tr:"Savunucu"},
    ESTJ:{kz:"Басшы",ru:"Руководитель",en:"Executive",tr:"Yönetici"},
    ESFJ:{kz:"Консул",ru:"Консул",en:"Consul",tr:"Konsül"},
    ISTP:{kz:"Шебер",ru:"Виртуоз",en:"Virtuoso",tr:"Virtüöz"},
    ISFP:{kz:"Авантюрист",ru:"Авантюрист",en:"Adventurer",tr:"Maceraperest"},
    ESTP:{kz:"Кәсіпкер",ru:"Делец",en:"Entrepreneur",tr:"Girişimci"},
    ESFP:{kz:"Ойын-сауық шебері",ru:"Развлекатель",en:"Entertainer",tr:"Eğlendirici"}
  };

  const resultWords = {
    kz: { result: "Нәтиже", date: "Тест тапсырылған күн" },
    ru: { result: "Результат", date: "Дата прохождения теста" },
    en: { result: "Result", date: "Test date" },
    tr: { result: "Sonuç", date: "Test tarihi" }
  };

  const type = testResult.type || testResult.pattern || "";
  const name = typeNames[type]?.[lang] || type;

  if (rt) rt.textContent = `${resultWords[lang].result}: ${type} — ${name}`;
  if (rd) rd.textContent = `${resultWords[lang].date}: ${testResult.date || ""}`;
}

function getLang() {
  return localStorage.getItem("lang") || "kz";
}

function tObj(obj) {
  const lang = getLang();
  return obj?.[lang] || obj?.kz || "";
}

function renderMbtiResult(type) {
  const lang = getLang();
  const data = TYPE_DATA[type];

  if (!data) return;

  const title = document.getElementById("resultTitle");
  const slogan = document.getElementById("resultSlogan");
  const desc = document.getElementById("resultDesc");
  const work = document.getElementById("resultWork");
  const careers = document.getElementById("resultCareers");
  const famous = document.getElementById("resultFamous");
  const strengths = document.getElementById("resultStrengths");
  const weaknesses = document.getElementById("resultWeaknesses");

  if (title) title.textContent = type;
  if (slogan) slogan.textContent = tObj(TYPE_SLOGANS[type]);
  if (desc) desc.textContent = tObj(data.desc);
  if (work) work.textContent = tObj(data.work);

  if (careers) {
    careers.innerHTML = data.careers[lang].map(x => `<li>${x}</li>`).join("");
  }

  if (famous) {
    famous.innerHTML = data.famous[lang].map(x => `<li>${x}</li>`).join("");
  }

  if (strengths) {
    strengths.innerHTML = data.str[lang].map(x => `<li>${x}</li>`).join("");
  }

  if (weaknesses) {
    weaknesses.innerHTML = data.weak[lang].map(x => `<li>${x}</li>`).join("");
  }
}

function setText(id, value){
  const el = document.getElementById(id);
  if(el) el.innerText = value;
}
 
function setWidth(id, value){
  const el = document.getElementById(id);
  if(el) el.style.width = value;
}
 
function resetFullProfile(){
  if(!confirm("Профильдегі барлық дерек reset жасалсын ба?")) return;
 
  [
    "profileData",
    "profileDocs",
    "profileUniversities",
    "profileDeadlines",
    "profileConsultations",
    "profileNotes"
  ].forEach(key => localStorage.removeItem(key));
 
  loadProfileData();
  renderProfileDocuments();
  renderProfileUniversities();
  renderProfileDeadlines();
  renderConsultations();
  renderProfileNotes();
  updateProfileDashboard();
 
  showProfileToast("Профиль reset жасалды");
}
 
function showProfileToast(message){
  const toast = document.getElementById("profileToast");
  if(!toast) return;
 
  toast.innerText = message;
  toast.style.display = "block";
 
  clearTimeout(window.profileToastTimer);
  window.profileToastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
 
document.addEventListener("DOMContentLoaded", initProfilePage);
 
function getFavoriteUniversitiesFromStorage(){
  // User-specific key арқылы оқу
  return getFavoriteUniversities();
}
 
function renderProfileUniversities(){
  const box = document.getElementById("savedUniversitiesContainer");
  if(!box) return;
 
  const universityMap = {
    sabanci: {
      name: "Sabancı University",
      city: "Istanbul",
      link: "uni/sabanci.html"
    },
    acibadem: {
      name: "Acıbadem University",
      city: "Istanbul",
      link: "uni/acibadem.html"
    },
    "antalya-bilim": {
      name: "Antalya Bilim University",
      city: "Antalya",
      link: "uni/antalya-bilim.html"
    },
    aydin: {
      name: "Istanbul Aydın University",
      city: "Istanbul",
      link: "uni/aydin.html"
    },
    bahcesehir: {
      name: "Bahçeşehir University",
      city: "Istanbul",
      link: "uni/bahcesehir.html"
    },
    "kadir-has": {
      name: "Kadir Has University",
      city: "Istanbul",
      link: "uni/kadir-has.html"
    },
    ozyegin: {
      name: "Özyeğin University",
      city: "Istanbul",
      link: "uni/ozyegin.html"
    },
    ted: {
      name: "TED University",
      city: "Ankara",
      link: "uni/ted.html"
    },
    uskudar: {
      name: "Üsküdar University",
      city: "Istanbul",
      link: "uni/uskudar.html"
    },
    yasar: {
      name: "Yaşar University",
      city: "Izmir",
      link: "uni/yasar.html"
    }
  };
 
  const favoriteIds = getFavoriteUniversitiesFromStorage();
 
  const favoriteList = favoriteIds
    .map(id => {
      if(typeof id === "object"){
        return id;
      }
 
      const uni = universityMap[id];
 
      if(!uni) return null;
 
      return {
        id: id,
        name: uni.name,
        city: uni.city,
        note: "Таңдаулыға сақталған",
        link: uni.link,
        source: "favorite"
      };
    })
    .filter(Boolean);
 
  const manualList = JSON.parse(localStorage.getItem("profileUniversities")) || [];
 
  const list = [...favoriteList, ...manualList];
 
  if(!list.length){
    box.innerHTML = `
      <div class="profile-empty">
        Әзірге университет сақталмаған.
      </div>
    `;
  } else {
    box.innerHTML = list.map(item => `
      <div class="dashboard-row-card">
        <div>
          <strong>${item.name}</strong>
          <p>${item.city || "Қала көрсетілмеген"}${item.note ? " · " + item.note : ""}</p>
        </div>
 
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${item.link ? `<a href="${item.link}" class="profile-mini-btn secondary">Ашу</a>` : ""}
          <button class="profile-mini-btn danger" onclick="deleteProfileUniversity('${item.id}')">
            Өшіру
          </button>
        </div>
      </div>
    `).join("");
  }
 
  updateProfileDashboard();
}
 
function logout(){
  // FIX: __REAL_LOGOUT__ флагы алынды (i18n-core override жойылды)
  window.__REAL_LOGOUT__ = true;
  ["role","userRole","edu_user_role","username","userDisplayName","currentUserEmail","currentUser","edu_current_user","edu_auth","isLoggedIn","isAdmin","user"].forEach(function(k){
    localStorage.removeItem(k);
  });
  window.location.href = getPath("login.html");
}
 
// ===== NOTIFICATION SYSTEM =====
function checkDeadlineNotifications() {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return;
 
  const lang = localStorage.getItem("lang") || "kz";
  const today = new Date();
  today.setHours(0,0,0,0);
 
  const deadlines = prGet ? prGet("profileDeadlines", []) : [];
  const notifKey = "u_" + email + "_notifications";
  let notifs = JSON.parse(localStorage.getItem(notifKey) || "[]");
 
  const msgs = {
    kz: (title, days) => days === 0 ? `⚠️ Бүгін дедлайн: ${title}` : `🔔 ${title} дедлайнына ${days} күн қалды`,
    ru: (title, days) => days === 0 ? `⚠️ Сегодня дедлайн: ${title}` : `🔔 До дедлайна ${title} осталось ${days} дней`,
    en: (title, days) => days === 0 ? `⚠️ Deadline today: ${title}` : `🔔 ${days} days left for: ${title}`
  };
 
  deadlines.forEach(dl => {
    if (!dl.date) return;
    const dlDate = new Date(dl.date);
    dlDate.setHours(0,0,0,0);
    const diffMs = dlDate - today;
    const diffDays = Math.round(diffMs / (1000*60*60*24));
 
    if ([0,1,3,7].includes(diffDays)) {
      const notifId = "deadline-" + dl.id + "-" + diffDays;
      if (!notifs.find(n => n.id === notifId)) {
        notifs.unshift({
          id: notifId,
          type: "deadline",
          message: (msgs[lang] || msgs.kz)(dl.title, diffDays),
          date: new Date().toLocaleDateString("kk-KZ"),
          read: false
        });
      }
    }
  });
 
  localStorage.setItem(notifKey, JSON.stringify(notifs.slice(0, 50)));
  renderNotificationBadge();
}
 
function renderNotificationBadge() {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return;
  const notifKey = "u_" + email + "_notifications";
  const notifs = JSON.parse(localStorage.getItem(notifKey) || "[]");
  const unread = notifs.filter(n => !n.read).length;
  const badge = document.getElementById("notifBadge");
  if (badge) {
    badge.textContent = unread > 0 ? unread : "";
    badge.style.display = unread > 0 ? "inline-flex" : "none";
  }
}
 
function getNotifications() {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return [];
  const notifKey = "u_" + email + "_notifications";
  return JSON.parse(localStorage.getItem(notifKey) || "[]");
}
 
function addNotificationToUser(type, message) {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return;
  const notifKey = "u_" + email + "_notifications";
  const notifs = JSON.parse(localStorage.getItem(notifKey) || "[]");
  notifs.unshift({
    id: type + "-" + Date.now(),
    type,
    message,
    date: new Date().toLocaleDateString("kk-KZ"),
    read: false
  });
  localStorage.setItem(notifKey, JSON.stringify(notifs.slice(0, 50)));
  renderNotificationBadge();
}
 
function markAllNotificationsRead() {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return;
  const notifKey = "u_" + email + "_notifications";
  const notifs = JSON.parse(localStorage.getItem(notifKey) || "[]");
  notifs.forEach(n => n.read = true);
  localStorage.setItem(notifKey, JSON.stringify(notifs));
  renderNotificationBadge();
}
// ===== END NOTIFICATION SYSTEM =====
 
// ===== TASKS SYSTEM =====
function getTasks() {
  return prGet ? prGet("tasks", []) : [];
}
 
function addTask(title, dueDate, priority) {
  const tasks = getTasks();
  tasks.unshift({
    id: Date.now(),
    title,
    dueDate: dueDate || "",
    priority: priority || "normal",
    status: "todo",
    createdAt: new Date().toISOString()
  });
  if (prSet) prSet("tasks", tasks);
  return tasks;
}
 
function updateTaskStatus(taskId, status) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.status = status;
    if (prSet) prSet("tasks", tasks);
  }
  return tasks;
}
 
function deleteTask(taskId) {
  let tasks = getTasks().filter(t => t.id !== taskId);
  if (prSet) prSet("tasks", tasks);
  return tasks;
}
 
function renderTasksSection() {
  const box = document.getElementById("tasksListContainer");
  if (!box) return;
  const lang = localStorage.getItem("lang") || "kz";
  const tasks = getTasks();
  
  const labels = {
    kz: { todo: "Орындалмаған", done: "Орындалды", high: "Жоғары", normal: "Орта", low: "Төмен" },
    ru: { todo: "Не сделано", done: "Выполнено", high: "Высокий", normal: "Средний", low: "Низкий" },
    en: { todo: "To do", done: "Done", high: "High", normal: "Normal", low: "Low" }
  };
  const L = labels[lang] || labels.kz;
 
  if (!tasks.length) {
    box.innerHTML = `<div class="profile-empty">Тапсырмалар жоқ. Жаңа тапсырма қос.</div>`;
    return;
  }
  box.innerHTML = tasks.map(task => `
    <div class="profile-check-row" style="border-left: 4px solid ${task.priority==='high'?'#ef4444':task.priority==='low'?'#22c55e':'#f59e0b'}">
      <div class="profile-check-left">
        <input type="checkbox" ${task.status==='done'?'checked':''} onchange="toggleTaskDone(${task.id}, this.checked)" />
        <div>
          <strong style="${task.status==='done'?'text-decoration:line-through;opacity:.6':''}">
            ${task.title}
          </strong>
          <p>${task.dueDate ? '📅 ' + task.dueDate : ''} · <span class="badge ${task.priority==='high'?'danger':task.priority==='low'?'success':'warning'}">${L[task.priority]}</span></p>
        </div>
      </div>
      <button class="profile-mini-btn danger" onclick="deleteTaskItem(${task.id})">✕</button>
    </div>
  `).join("");
}
 
function toggleTaskDone(taskId, done) {
  updateTaskStatus(taskId, done ? "done" : "todo");
  renderTasksSection();
  updateProfileDashboard();
}
 
function deleteTaskItem(taskId) {
  deleteTask(taskId);
  renderTasksSection();
  updateProfileDashboard();
}
 
function addTaskFromForm() {
  const title = document.getElementById("taskTitleInput")?.value.trim();
  const dueDate = document.getElementById("taskDueDateInput")?.value;
  const priority = document.getElementById("taskPriorityInput")?.value || "normal";
  if (!title) { showProfileToast("Тапсырма атауын жаз"); return; }
  addTask(title, dueDate, priority);
  if (document.getElementById("taskTitleInput")) document.getElementById("taskTitleInput").value = "";
  if (document.getElementById("taskDueDateInput")) document.getElementById("taskDueDateInput").value = "";
  renderTasksSection();
  updateProfileDashboard();
  showProfileToast("Тапсырма қосылды");
  addNotificationToUser("task", "Жаңа тапсырма қосылды: " + title);
}
// ===== END TASKS SYSTEM =====
 
// ===== MATCH SCORE (AI University Recommendation) =====
function calculateMatchScore(userProfile, university) {
  let score = 50; // Base score
 
  // Major match
  const majorMap = {
    "Computer Science": ["TECH", "sabanci", "ozyegin", "bahcesehir", "aydin", "kadir-has"],
    "Data Science": ["TECH", "sabanci", "ozyegin", "antalya-bilim"],
    "Medicine": ["SCIENCE", "acibadem", "uskudar", "aydin", "bahcesehir"],
    "Dentistry": ["SCIENCE", "acibadem", "aydin"],
    "Business": ["BUSINESS", "bahcesehir", "aydin", "yasar", "kadir-has", "ozyegin"],
    "Psychology": ["SOCIAL", "uskudar", "sabanci", "yasar"],
    "Architecture": ["CREATIVE", "bahcesehir", "ozyegin", "ted"],
    "International Relations": ["GLOBAL", "kadir-has", "sabanci", "ted", "yasar"]
  };
 
  const userMajor = userProfile.major || "";
  const uniId = university.id || "";
 
  if (majorMap[userMajor]) {
    if (majorMap[userMajor].includes(uniId)) score += 30;
    else score -= 10;
  }
 
  // Language preference
  if (userProfile.lang === "English" && university.language === "English") score += 10;
  if (userProfile.lang === "Turkish" && university.language === "Turkish") score += 10;
 
  // University type preference
  if (userProfile.uniType === university.type) score += 10;
 
  // Cap between 0-100
  return Math.min(100, Math.max(0, score));
}
 
function renderUniversityMatchScores() {
  const email = localStorage.getItem("currentUserEmail");
  if (!email || email === "guest") return;
  const profile = prGet ? prGet("profileData", {}) : {};
  
  document.querySelectorAll("[data-uni-id]").forEach(card => {
    const uniId = card.getAttribute("data-uni-id");
    const uni = { id: uniId, language: "English", type: "Private" };
    const score = calculateMatchScore(profile, uni);
    
    let badge = card.querySelector(".match-score-badge");
    if (!badge) {
      badge = document.createElement("div");
      badge.className = "match-score-badge";
      badge.style.cssText = "position:absolute;top:12px;right:12px;background:linear-gradient(135deg,#b3123c,#701930);color:white;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:800;";
      card.style.position = "relative";
      card.appendChild(badge);
    }
    badge.textContent = score + "% match";
  });
}
// ===== END MATCH SCORE =====
 

/* FIX_SAVE_UNIVERSITY_TO_PROFILE: robust save from university detail pages */

