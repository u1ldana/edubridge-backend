(function(){
    const D = {
   
      // ── NAV ────────────────────────────────────────────────────────
      "nav-home":         {kz:"Басты бет",      ru:"Главная",       en:"Home",          tr:"Ana sayfa"},
      "nav-specialties":  {kz:"Мамандықтар",    ru:"Специальности", en:"Specialties",   tr:"Bölümler"},
      "nav-universities": {kz:"Университеттер", ru:"Университеты",  en:"Universities",  tr:"Üniversiteler"},
      "nav-preparation":  {kz:"Дайындық",       ru:"Подготовка",    en:"Preparation",   tr:"Hazırlık"},
      "nav-feed":         {kz:"Лента",          ru:"Лента",         en:"Feed",          tr:"Akış"},
      "nav-language":     {kz:"Тіл",            ru:"Язык",          en:"Language",      tr:"Dil"},
      "nav-profile":      {kz:"Профиль",        ru:"Профиль",       en:"Profile",       tr:"Profil"},
   
      // ── FOOTER ─────────────────────────────────────────────────────
      "footer-contact": {kz:"Байланыс", ru:"Контакты", en:"Contact", tr:"İletişim"},
      "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.": {
        kz:"© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
        ru:"© 2026 EduBridge Türkiye. Все права защищены.",
        en:"© 2026 EduBridge Türkiye. All rights reserved.",
        tr:"© 2026 EduBridge Türkiye. Tüm hakları saklıdır."
      },
   
      // ── HERO BUTTONS ───────────────────────────────────────────────
      "back-btn": {
        kz:"← Университеттерге қайту",
        ru:"← Назад к университетам",
        en:"← Back to universities",
        tr:"← Üniversitelere dön"
      },
      "apply-btn": {
        kz:"Профиль / Apply",
        ru:"Профиль / Подать заявку",
        en:"Profile / Apply",
        tr:"Profil / Başvur"
      },
      "back-btn-alt": {
        kz:"Артқа қайту",
        ru:"Назад",
        en:"Go back",
        tr:"Geri dön"
      },
      "save-university-btn": {
        kz:"Таңдаулыға сақтау",
        ru:"Сохранить в избранное",
        en:"Save to favourites",
        tr:"Favorilere ekle"
      },
      "all-universities-btn": {
        kz:"Барлық университеттер",
        ru:"Все университеты",
        en:"All universities",
        tr:"Tüm üniversiteler"
      },
   
      // ── HERO SUBTITLE & DESCRIPTION ────────────────────────────────
      "Ankara, Türkiye · Private University · English Education": {
        kz:"Ankara, Türkiye · Жеке университет · Ағылшын тілінде",
        ru:"Анкара, Турция · Частный университет · Обучение на английском",
        en:"Ankara, Türkiye · Private University · English Education",
        tr:"Ankara, Türkiye · Özel üniversite · İngilizce eğitim"
      },
      "TED University — Түркияның алғашқы президенті Mustafa Kemal Atatürk қолдауымен құрылған Türk Eğitim Derneği негізіндегі prestigious university.": {
        kz:"TED University — Түркияның алғашқы президенті Mustafa Kemal Atatürk қолдауымен құрылған Türk Eğitim Derneği негізіндегі prestigious university.",
        ru:"TED University — престижный университет, основанный на базе Türk Eğitim Derneği при поддержке первого президента Турции Мустафы Кемаля Ататюрка.",
        en:"TED University is a prestigious university founded on the basis of Türk Eğitim Derneği with the support of Türkiye's first president Mustafa Kemal Atatürk.",
        tr:"TED University, Türkiye'nin ilk Cumhurbaşkanı Mustafa Kemal Atatürk'ün desteğiyle kurulan Türk Eğitim Derneği bünyesinde yer alan prestijli bir üniversitedir."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "Кампус": {kz:"Кампус", ru:"Кампус", en:"Campus", tr:"Kampüs"},
      "Central Ankara Campus": {
        kz:"Анкара орталығындағы кампус",
        ru:"Кампус в центре Анкары",
        en:"Central Ankara Campus",
        tr:"Merkezi Ankara Kampüsü"
      },
      "Private Foundation University": {
        kz:"Жеке қор университеті",
        ru:"Частный фондовый университет",
        en:"Private Foundation University",
        tr:"Özel Vakıf Üniversitesi"
      },
      "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
      "Ankara, Türkiye": {
        kz:"Анкара, Түркия",
        ru:"Анкара, Турция",
        en:"Ankara, Türkiye",
        tr:"Ankara, Türkiye"
      },
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "TED University туралы": {
        kz:"TED University туралы",
        ru:"О TED University",
        en:"About TED University",
        tr:"TED University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге TED University?": {
        kz:"Неге TED University?",
        ru:"Почему TED University?",
        en:"Why TED University?",
        tr:"Neden TED University?"
      },
      "Founder: Türk Eğitim Derneği": {
        kz:"Founder: Türk Eğitim Derneği",
        ru:"Основатель: Türk Eğitim Derneği",
        en:"Founder: Türk Eğitim Derneği",
        tr:"Kurucu: Türk Eğitim Derneği"
      },
      "Аккредитациялар": {
        kz:"Аккредитациялар",
        ru:"Аккредитации",
        en:"Accreditations",
        tr:"Akreditasyonlar"
      },
      "Exchange Programs": {
        kz:"Алмасу бағдарламалары",
        ru:"Программы обмена",
        en:"Exchange Programs",
        tr:"Değişim Programları"
      },
      "Факультеттер": {
        kz:"Факультеттер",
        ru:"Факультеты",
        en:"Faculties",
        tr:"Fakülteler"
      },
      "Неге Ankara?": {
        kz:"Неге Ankara?",
        ru:"Почему Анкара?",
        en:"Why Ankara?",
        tr:"Neden Ankara?"
      },
      "Campus Life": {
        kz:"Кампус өмірі",
        ru:"Жизнь в кампусе",
        en:"Campus Life",
        tr:"Kampüs Yaşamı"
      },
   
      // ── SUBHEADINGS ────────────────────────────────────────────────
      "Engineering": {
        kz:"Инженерия",
        ru:"Инженерия",
        en:"Engineering",
        tr:"Mühendislik"
      },
      "Business & Economics": {
        kz:"Бизнес және Экономика",
        ru:"Бизнес и Экономика",
        en:"Business & Economics",
        tr:"İşletme ve Ekonomi"
      },
      "Education": {
        kz:"Білім беру",
        ru:"Педагогика",
        en:"Education",
        tr:"Eğitim"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Arts & Sciences": {
        kz:"Өнер және ғылымдар",
        ru:"Искусство и науки",
        en:"Arts & Sciences",
        tr:"Sanat ve Bilimler"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "TED University (TEDU) — Türk Eğitim Derneği ұйымы негізін қалаған заманауи private university.": {
        kz:"TED University (TEDU) — Türk Eğitim Derneği ұйымы негізін қалаған заманауи private university.",
        ru:"TED University (TEDU) — современный частный университет, основанный организацией Türk Eğitim Derneği.",
        en:"TED University (TEDU) is a modern private university founded by the Türk Eğitim Derneği organisation.",
        tr:"TED University (TEDU), Türk Eğitim Derneği tarafından kurulan modern bir özel üniversitedir."
      },
      "Университет Түркиядағы English-medium education жүйесінің pioneer educational institutions қатарында.": {
        kz:"Университет Түркиядағы English-medium education жүйесінің pioneer educational institutions қатарында.",
        ru:"Университет входит в число пионеров системы обучения на английском языке в Турции.",
        en:"The university is among the pioneer educational institutions in Türkiye's English-medium education system.",
        tr:"Üniversite, Türkiye'de İngilizce eğitim sisteminin öncü kurumları arasında yer almaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Ankara орталығында оқығысы келетіндерге": {
        kz:"Ankara орталығында оқығысы келетіндерге",
        ru:"Желающим учиться в центре Анкары",
        en:"Those who want to study in central Ankara",
        tr:"Ankara merkezinde okumak isteyen öğrencilere"
      },
      "European accreditation маңызды студенттерге": {
        kz:"Еуропалық аккредитация маңызды студенттерге",
        ru:"Студентам, для которых важна европейская аккредитация",
        en:"Students for whom European accreditation matters",
        tr:"Avrupa akreditasyonunu önemseyen öğrencilere"
      },
      "Erasmus exchange армандайтындарға": {
        kz:"Erasmus алмасуын армандайтындарға",
        ru:"Мечтающим об обмене по Erasmus",
        en:"Those dreaming of Erasmus exchange",
        tr:"Erasmus değişimini hayal edenlere"
      },
      "Safe student city іздейтіндерге": {
        kz:"Қауіпсіз студенттік қала іздейтіндерге",
        ru:"Ищущим безопасный студенческий город",
        en:"Those seeking a safe student city",
        tr:"Güvenli bir öğrenci şehri arayanlar için"
      },
      "Academic quality маңызды студенттерге": {
        kz:"Академиялық сапа маңызды студенттерге",
        ru:"Студентам, для которых важно академическое качество",
        en:"Students for whom academic quality matters",
        tr:"Akademik kaliteyi önemseyen öğrencilere"
      },
   
      // ── WHY TED — LIST ─────────────────────────────────────────────
      "#1 student satisfaction in Ankara": {
        kz:"Анкарадағы №1 студент қанағаттанушылығы",
        ru:"№1 по удовлетворённости студентов в Анкаре",
        en:"#1 student satisfaction in Ankara",
        tr:"Ankara'da #1 öğrenci memnuniyeti"
      },
      "Top 5 in Türkiye": {
        kz:"Түркияда TOP-5",
        ru:"TOP-5 в Турции",
        en:"Top 5 in Türkiye",
        tr:"Türkiye'de TOP-5"
      },
      "Central Ankara location": {
        kz:"Анкара орталығындағы орналасуы",
        ru:"Расположение в центре Анкары",
        en:"Central Ankara location",
        tr:"Ankara merkezi konumu"
      },
      "100+ exchange universities": {
        kz:"100+ алмасу университеттері",
        ru:"100+ партнёрских университетов для обмена",
        en:"100+ exchange universities",
        tr:"100'den fazla değişim üniversitesi"
      },
      "Modern laboratories & campus": {
        kz:"Заманауи зертханалар және кампус",
        ru:"Современные лаборатории и кампус",
        en:"Modern laboratories & campus",
        tr:"Modern laboratuvarlar ve kampüs"
      },
      "Strong academic reputation": {
        kz:"Күшті академиялық беделі",
        ru:"Сильная академическая репутация",
        en:"Strong academic reputation",
        tr:"Güçlü akademik itibar"
      },
      "Part of TED Education Network": {
        kz:"TED Білім желісінің бөлігі",
        ru:"Часть образовательной сети TED",
        en:"Part of TED Education Network",
        tr:"TED Eğitim Ağı'nın bir parçası"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "TED (Türk Eğitim Derneği) — 1928 жылы Atatürk бастамасымен құрылған Түркиядағы ең беделді educational organizations-тің бірі.": {
        kz:"TED (Türk Eğitim Derneği) — 1928 жылы Atatürk бастамасымен құрылған Түркиядағы ең беделді educational organizations-тің бірі.",
        ru:"TED (Türk Eğitim Derneği) — одна из самых авторитетных образовательных организаций Турции, основанная в 1928 году по инициативе Ататюрка.",
        en:"TED (Türk Eğitim Derneği) is one of Türkiye's most prestigious educational organisations, founded in 1928 at the initiative of Atatürk.",
        tr:"TED (Türk Eğitim Derneği), 1928 yılında Atatürk'ün girişimiyle kurulan Türkiye'nin en köklü eğitim kuruluşlarından biridir."
      },
      "Ұйым 40+ elite schools және мыңдаған scholarship programs арқылы Түркия білім жүйесіне үлкен үлес қосады.": {
        kz:"Ұйым 40+ elite schools және мыңдаған scholarship programs арқылы Түркия білім жүйесіне үлкен үлес қосады.",
        ru:"Организация вносит огромный вклад в систему образования Турции через 40+ элитных школ и тысячи стипендиальных программ.",
        en:"The organisation makes a major contribution to Türkiye's education system through 40+ elite schools and thousands of scholarship programs.",
        tr:"Kuruluş, 40'tan fazla elit okul ve binlerce burs programı aracılığıyla Türkiye eğitim sistemine büyük katkı sağlamaktadır."
      },
   
      // ── EXCHANGE PARTNER PILLS ─────────────────────────────────────
      "Erasmus+":              {kz:"Erasmus+",                    ru:"Erasmus+",                         en:"Erasmus+",              tr:"Erasmus+"},
      "Bilateral Exchange":    {kz:"Екіжақты алмасу",             ru:"Двусторонний обмен",               en:"Bilateral Exchange",    tr:"İkili Değişim"},
      "TU Dortmund":           {kz:"TU Dortmund",                 ru:"Дортмундский технический ун-т",    en:"TU Dortmund",           tr:"TU Dortmund"},
      "University College Cork":{kz:"University College Cork",    ru:"Университетский колледж Корка",    en:"University College Cork",tr:"University College Cork"},
      "San Francisco State":   {kz:"San Francisco State",         ru:"Государственный ун-т Сан-Франциско",en:"San Francisco State",  tr:"San Francisco State"},
      "Florida International": {kz:"Florida International",       ru:"Международный ун-т Флориды",       en:"Florida International", tr:"Florida International"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Engineering":   {kz:"Компьютерлік инженерия",     ru:"Компьютерная инженерия",   en:"Computer Engineering",   tr:"Bilgisayar Mühendisliği"},
      "Software Engineering":   {kz:"Бағдарламалық инженерия",    ru:"Программная инженерия",    en:"Software Engineering",   tr:"Yazılım Mühendisliği"},
      "Electrical Engineering": {kz:"Электротехникалық инженерия",ru:"Электротехника",            en:"Electrical Engineering", tr:"Elektrik-Elektronik Mühendisliği"},
      "Industrial Engineering": {kz:"Өнеркәсіптік инженерия",    ru:"Промышленная инженерия",   en:"Industrial Engineering",  tr:"Endüstri Mühendisliği"},
      "Mechatronics":           {kz:"Мехатроника",                ru:"Мехатроника",              en:"Mechatronics",            tr:"Mekatronik"},
      "Civil Engineering":      {kz:"Азаматтық инженерия",        ru:"Гражданское строительство", en:"Civil Engineering",      tr:"İnşaat Mühendisliği"},
   
      // ── BUSINESS PROGRAMS ──────────────────────────────────────────
      "Business Administration": {kz:"Бизнесті басқару",    ru:"Управление бизнесом",    en:"Business Administration", tr:"İşletme Yönetimi"},
      "Economics":               {kz:"Экономика",            ru:"Экономика",              en:"Economics",               tr:"Ekonomi"},
      "Political Science":       {kz:"Саяси ғылымдар",      ru:"Политология",            en:"Political Science",       tr:"Siyaset Bilimi"},
   
      // ── EDUCATION PROGRAMS ─────────────────────────────────────────
      "English Language Teaching": {kz:"Ағылшын тілін оқыту",    ru:"Преподавание английского языка", en:"English Language Teaching", tr:"İngilizce Öğretmenliği"},
      "Preschool Education":       {kz:"Мектепке дейінгі білім", ru:"Дошкольное образование",         en:"Preschool Education",       tr:"Okul Öncesi Eğitimi"},
      "Mathematics Education":     {kz:"Математика білімі",      ru:"Математическое образование",     en:"Mathematics Education",     tr:"Matematik Öğretmenliği"},
      "Primary Education":         {kz:"Бастауыш білім",         ru:"Начальное образование",          en:"Primary Education",         tr:"Sınıf Öğretmenliği"},
   
      // ── ARCHITECTURE & DESIGN PROGRAMS ────────────────────────────
      "Architecture":                 {kz:"Архитектура",          ru:"Архитектура",              en:"Architecture",               tr:"Mimarlık"},
      "Industrial Design":            {kz:"Өнеркәсіптік дизайн",  ru:"Промышленный дизайн",     en:"Industrial Design",          tr:"Endüstriyel Tasarım"},
      "Interior Architecture":        {kz:"Интерьер дизайны",     ru:"Интерьерная архитектура",  en:"Interior Architecture",      tr:"İç Mimarlık"},
      "Visual Communication Design":  {kz:"Визуалды коммуникация дизайны", ru:"Дизайн визуальных коммуникаций", en:"Visual Communication Design", tr:"Görsel İletişim Tasarımı"},
   
      // ── ARTS & SCIENCES PROGRAMS ───────────────────────────────────
      "Psychology":       {kz:"Психология",      ru:"Психология",      en:"Psychology",      tr:"Psikoloji"},
      "Sociology":        {kz:"Социология",      ru:"Социология",      en:"Sociology",       tr:"Sosyoloji"},
      "English Literature":{kz:"Ағылшын әдебиеті",ru:"Английская литература",en:"English Literature",tr:"İngiliz Dili ve Edebiyatı"},
      "Mathematics":      {kz:"Математика",      ru:"Математика",      en:"Mathematics",     tr:"Matematik"},
   
      // ── WHY ANKARA — LIST ──────────────────────────────────────────
      "Safe city for international students": {
        kz:"Халықаралық студенттер үшін қауіпсіз қала",
        ru:"Безопасный город для иностранных студентов",
        en:"Safe city for international students",
        tr:"Uluslararası öğrenciler için güvenli şehir"
      },
      "Affordable student life": {
        kz:"Қолжетімді студенттік өмір",
        ru:"Доступная студенческая жизнь",
        en:"Affordable student life",
        tr:"Uygun fiyatlı öğrenci yaşamı"
      },
      "Modern transportation system": {
        kz:"Заманауи көліктік жүйе",
        ru:"Современная транспортная система",
        en:"Modern transportation system",
        tr:"Modern ulaşım sistemi"
      },
      "Embassies & international organizations": {
        kz:"Елшіліктер және халықаралық ұйымдар",
        ru:"Посольства и международные организации",
        en:"Embassies & international organizations",
        tr:"Büyükelçilikler ve uluslararası kuruluşlar"
      },
      "Academic atmosphere": {
        kz:"Академиялық атмосфера",
        ru:"Академическая атмосфера",
        en:"Academic atmosphere",
        tr:"Akademik atmosfer"
      },
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "TED University campus — Ankara орталығындағы modern city campus.": {
        kz:"TED University campus — Ankara орталығындағы modern city campus.",
        ru:"Кампус TED University — современный городской кампус в центре Анкары.",
        en:"TED University campus is a modern city campus in central Ankara.",
        tr:"TED University kampüsü, Ankara merkezinde modern bir şehir kampüsüdür."
      },
      "Modern Labs":    {kz:"Заманауи зертханалар",   ru:"Современные лаборатории", en:"Modern Labs",    tr:"Modern Laboratuvarlar"},
      "Library":        {kz:"Кітапхана",               ru:"Библиотека",              en:"Library",        tr:"Kütüphane"},
      "Sports Halls":   {kz:"Спорт залдары",           ru:"Спортивные залы",         en:"Sports Halls",   tr:"Spor Salonları"},
      "Student Clubs":  {kz:"Студенттік клубтар",      ru:"Студенческие клубы",      en:"Student Clubs",  tr:"Öğrenci Kulüpleri"},
      "Study Areas":    {kz:"Оқу аймақтары",           ru:"Учебные зоны",            en:"Study Areas",    tr:"Çalışma Alanları"},
      "Career Center":  {kz:"Карьера орталығы",         ru:"Карьерный центр",         en:"Career Center",  tr:"Kariyer Merkezi"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":     {kz:"Қала:",     ru:"Город:",    en:"City:",       tr:"Şehir:"},
      "Түрі:":     {kz:"Түрі:",     ru:"Тип:",      en:"Type:",       tr:"Tür:"},
      "Тілі:":     {kz:"Тілі:",     ru:"Язык:",     en:"Language:",   tr:"Dil:"},
      "Рейтинг:":  {kz:"Рейтинг:", ru:"Рейтинг:",  en:"Rating:",     tr:"Sıralama:"},
   
      // Sidebar values
      "Ankara":  {kz:"Анкара",  ru:"Анкара",    en:"Ankara",  tr:"Ankara"},
      "Private": {kz:"Жеке",    ru:"Частный",   en:"Private", tr:"Özel"},
      "English": {kz:"Ағылшын", ru:"Английский",en:"English", tr:"İngilizce"},
      "Top Student Satisfaction": {
        kz:"TOP студент қанағаттанушылығы",
        ru:"Лучший рейтинг по удовлетворённости студентов",
        en:"Top Student Satisfaction",
        tr:"En Yüksek Öğrenci Memnuniyeti"
      },
   
      // Sidebar advantages
      "Central Ankara Campus":    {kz:"Анкара орталығындағы кампус",   ru:"Кампус в центре Анкары",        en:"Central Ankara Campus",    tr:"Merkezi Ankara Kampüsü"},
      "European Accreditations":  {kz:"Еуропалық аккредитациялар",     ru:"Европейские аккредитации",      en:"European Accreditations",  tr:"Avrupa Akreditasyonları"},
      "International Exchange":   {kz:"Халықаралық алмасу",            ru:"Международный обмен",           en:"International Exchange",   tr:"Uluslararası Değişim"},
      "Safe Student City":        {kz:"Қауіпсіз студенттік қала",      ru:"Безопасный студенческий город", en:"Safe Student City",        tr:"Güvenli Öğrenci Şehri"},
   
      // ── AI CHAT BUBBLE ─────────────────────────────────────────────
      "EduBridge AI": {kz:"EduBridge AI", ru:"EduBridge AI", en:"EduBridge AI", tr:"EduBridge AI"},
      "Онлайн · Жауап береді": {
        kz:"Онлайн · Жауап береді",
        ru:"Онлайн · Отвечает",
        en:"Online · Responding",
        tr:"Çevrimiçi · Yanıtlıyor"
      },
      "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋": {
        kz:"Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋",
        ru:"Привет! Я AI-консультант EduBridge. Задай любой вопрос об университетах Турции 👋",
        en:"Hello! I'm EduBridge AI advisor. Ask me anything about Turkish universities 👋",
        tr:"Merhaba! Ben EduBridge AI danışmanıyım. Türk üniversiteleri hakkında her şeyi sorabilirsiniz 👋"
      },
      "Сұрағыңды жаз...": {
        kz:"Сұрағыңды жаз...",
        ru:"Напишите вопрос...",
        en:"Type your question...",
        tr:"Sorunuzu yazın..."
      },
      "AI Кеңесші": {
        kz:"AI Кеңесші",
        ru:"AI Советник",
        en:"AI Advisor",
        tr:"AI Danışman"
      },
    };
   
    function trText(key, lang){
      return D[key] && D[key][lang] ? D[key][lang] : key;
    }
   
    function norm(s){
      return (s || "").trim().replace(/\s+/g, " ");
    }
   
    function applyText(lang){
      // 1. data-i18n attributes
      document.querySelectorAll("[data-i18n]").forEach(function(el){
        var key = el.getAttribute("data-i18n");
        if(D[key]) el.textContent = trText(key, lang);
      });
   
      // 2. placeholder attributes
      document.querySelectorAll("[placeholder]").forEach(function(el){
        var key = el.getAttribute("placeholder");
        if(D[key]) el.setAttribute("placeholder", trText(key, lang));
      });
   
      // 3. title attributes
      document.querySelectorAll("[title]").forEach(function(el){
        var key = el.getAttribute("title");
        if(D[key]) el.setAttribute("title", trText(key, lang));
      });
   
      // 4. Inline text nodes in leaf elements
      document.querySelectorAll("h1,h2,h3,h4,p,span,a,button,li,strong,small,label,div").forEach(function(el){
        if(el.children.length > 0) return;
        var key = norm(el.textContent);
        if(D[key]) el.textContent = trText(key, lang);
      });
    }
   
    EduI18n.registerPage("ted", D, function(lang){
      applyText(lang);
    });
  })();