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
      "Istanbul, Türkiye · Health & Psychology Focused University": {
        kz:"Istanbul, Türkiye · Денсаулық және психологияға бағытталған университет",
        ru:"Стамбул, Турция · Университет, ориентированный на здоровье и психологию",
        en:"Istanbul, Türkiye · Health & Psychology Focused University",
        tr:"İstanbul, Türkiye · Sağlık ve Psikoloji Odaklı Üniversite"
      },
      "Üsküdar University — Түркиядағы health sciences, psychology және neuroscience бағыттарына маманданған ең танымал университеттердің бірі.": {
        kz:"Üsküdar University — Түркиядағы health sciences, psychology және neuroscience бағыттарына маманданған ең танымал университеттердің бірі.",
        ru:"Üsküdar University — один из самых известных университетов Турции, специализирующихся на медицинских науках, психологии и нейронауках.",
        en:"Üsküdar University is one of Türkiye's most renowned universities specialising in health sciences, psychology and neuroscience.",
        tr:"Üsküdar University, sağlık bilimleri, psikoloji ve nörobilim alanlarında uzmanlaşmış Türkiye'nin en tanınmış üniversitelerinden biridir."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "Бағыты":  {kz:"Бағыты",   ru:"Направление",   en:"Focus",    tr:"Odak"},
      "Exchange":{kz:"Алмасу",   ru:"Обмен",         en:"Exchange", tr:"Değişim"},
      "Health & Psychology":    {kz:"Денсаулық және Психология",    ru:"Здоровье и Психология",         en:"Health & Psychology",    tr:"Sağlık ve Psikoloji"},
      "412 Erasmus Partners":   {kz:"412 Erasmus серіктесі",        ru:"412 партнёров Erasmus",          en:"412 Erasmus Partners",   tr:"412 Erasmus Ortağı"},
      "Private University":     {kz:"Жеке университет",             ru:"Частный университет",           en:"Private University",     tr:"Özel Üniversite"},
      "Istanbul, Üsküdar":      {kz:"Стамбул, Üsküdar",             ru:"Стамбул, Ускюдар",              en:"Istanbul, Üsküdar",      tr:"İstanbul, Üsküdar"},
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "Üsküdar University туралы": {
        kz:"Üsküdar University туралы",
        ru:"Об Üsküdar University",
        en:"About Üsküdar University",
        tr:"Üsküdar University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Üsküdar University?": {
        kz:"Неге Üsküdar University?",
        ru:"Почему Üsküdar University?",
        en:"Why Üsküdar University?",
        tr:"Neden Üsküdar University?"
      },
      "Founder: Nevzat Tarhan": {
        kz:"Founder: Nevzat Tarhan",
        ru:"Основатель: Nevzat Tarhan",
        en:"Founder: Nevzat Tarhan",
        tr:"Kurucu: Nevzat Tarhan"
      },
      "Аккредитациялар": {
        kz:"Аккредитациялар",
        ru:"Аккредитации",
        en:"Accreditations",
        tr:"Akreditasyonlar"
      },
      "Partner Institutions": {
        kz:"Серіктес мекемелер",
        ru:"Организации-партнёры",
        en:"Partner Institutions",
        tr:"Ortak Kurumlar"
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
      "Campus & Labs": {
        kz:"Кампус және Зертханалар",
        ru:"Кампус и Лаборатории",
        en:"Campus & Labs",
        tr:"Kampüs ve Laboratuvarlar"
      },
   
      // ── SUBHEADINGS ────────────────────────────────────────────────
      "Psychology & Social Sciences": {
        kz:"Психология және Әлеуметтік ғылымдар",
        ru:"Психология и Социальные науки",
        en:"Psychology & Social Sciences",
        tr:"Psikoloji ve Sosyal Bilimler"
      },
      "Engineering & Natural Sciences": {
        kz:"Инженерия және Жаратылыстану ғылымдары",
        ru:"Инженерия и Естественные науки",
        en:"Engineering & Natural Sciences",
        tr:"Mühendislik ve Doğa Bilimleri"
      },
      "Health Sciences": {
        kz:"Денсаулық ғылымдары",
        ru:"Науки о здоровье",
        en:"Health Sciences",
        tr:"Sağlık Bilimleri"
      },
      "Communication": {
        kz:"Коммуникация",
        ru:"Коммуникации",
        en:"Communication",
        tr:"İletişim"
      },
      "Medicine & Dentistry": {
        kz:"Медицина және Стоматология",
        ru:"Медицина и Стоматология",
        en:"Medicine & Dentistry",
        tr:"Tıp ve Diş Hekimliği"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Üsküdar University — neuroscience, psychology, медицина және әлеуметтік ғылымдарға бағытталған modern private university.": {
        kz:"Üsküdar University — neuroscience, psychology, медицина және әлеуметтік ғылымдарға бағытталған modern private university.",
        ru:"Üsküdar University — современный частный университет, ориентированный на нейронауки, психологию, медицину и социальные науки.",
        en:"Üsküdar University is a modern private university focused on neuroscience, psychology, medicine and social sciences.",
        tr:"Üsküdar University, nörobilim, psikoloji, tıp ve sosyal bilimlere odaklanan modern bir özel üniversitedir."
      },
      "Университеттің clinical base ретінде NPİSTANBUL Neuropsychiatry Hospital қолданылады.": {
        kz:"Университеттің clinical base ретінде NPİSTANBUL Neuropsychiatry Hospital қолданылады.",
        ru:"В качестве клинической базы университета используется NPİSTANBUL Neuropsychiatry Hospital.",
        en:"NPİSTANBUL Neuropsychiatry Hospital is used as the university's clinical base.",
        tr:"Üniversitenin klinik tabanı olarak NPİSTANBUL Nöropsikiyatri Hastanesi kullanılmaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Psychology оқығысы келетіндерге": {
        kz:"Psychology оқығысы келетіндерге",
        ru:"Желающим изучать психологию",
        en:"Those who want to study psychology",
        tr:"Psikoloji okumak isteyen öğrencilere"
      },
      "Health sciences қызықтыратын студенттерге": {
        kz:"Health sciences қызықтыратын студенттерге",
        ru:"Студентам, интересующимся медицинскими науками",
        en:"Students interested in health sciences",
        tr:"Sağlık bilimleriyle ilgilenen öğrencilere"
      },
      "Практика маңызды студенттерге": {
        kz:"Практика маңызды студенттерге",
        ru:"Студентам, для которых важна практика",
        en:"Students for whom practical experience matters",
        tr:"Uygulama eğitimini önemseyen öğrencilere"
      },
      "Erasmus exchange армандайтындарға": {
        kz:"Erasmus алмасуын армандайтындарға",
        ru:"Мечтающим об обмене по Erasmus",
        en:"Those dreaming of Erasmus exchange",
        tr:"Erasmus değişimini hayal edenlere"
      },
      "Research projects қызықтыратындарға": {
        kz:"Research projects қызықтыратындарға",
        ru:"Интересующимся исследовательскими проектами",
        en:"Those interested in research projects",
        tr:"Araştırma projelerine ilgi duyanlar için"
      },
   
      // ── WHY ÜSKÜDAR — LIST ─────────────────────────────────────────
      "Turkey's first neuroscience-focused university": {
        kz:"Түркиядағы нейробиологияға бағытталған алғашқы университет",
        ru:"Первый в Турции университет с акцентом на нейронауки",
        en:"Türkiye's first neuroscience-focused university",
        tr:"Türkiye'nin nörobilime odaklanan ilk üniversitesi"
      },
      "86 laboratories & 39 research centers": {
        kz:"86 зертхана және 39 зерттеу орталығы",
        ru:"86 лабораторий и 39 исследовательских центров",
        en:"86 laboratories & 39 research centers",
        tr:"86 laboratuvar ve 39 araştırma merkezi"
      },
      "Mandatory medical internships": {
        kz:"Міндетті медициналық тағылымдамалар",
        ru:"Обязательные медицинские стажировки",
        en:"Mandatory medical internships",
        tr:"Zorunlu tıbbi stajlar"
      },
      "NPİSTANBUL clinical practice": {
        kz:"NPİSTANBUL клиникалық практика",
        ru:"Клиническая практика в NPİSTANBUL",
        en:"NPİSTANBUL clinical practice",
        tr:"NPİSTANBUL klinik uygulama"
      },
      "412 Erasmus agreements": {
        kz:"412 Erasmus келісімі",
        ru:"412 соглашений Erasmus",
        en:"412 Erasmus agreements",
        tr:"412 Erasmus anlaşması"
      },
      "TÜBİTAK research projects": {
        kz:"TÜBİTAK зерттеу жобалары",
        ru:"Исследовательские проекты TÜBİTAK",
        en:"TÜBİTAK research projects",
        tr:"TÜBİTAK araştırma projeleri"
      },
      "Strong psychology programs": {
        kz:"Күшті психология бағдарламалары",
        ru:"Сильные психологические программы",
        en:"Strong psychology programs",
        tr:"Güçlü psikoloji programları"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Professor Nevzat Tarhan — Түркиядағы ең танымал psychiatrists және neuroscience researchers қатарында.": {
        kz:"Professor Nevzat Tarhan — Түркиядағы ең танымал psychiatrists және neuroscience researchers қатарында.",
        ru:"Профессор Невзат Тархан входит в число самых известных психиатров и исследователей в области нейронаук Турции.",
        en:"Professor Nevzat Tarhan is among Türkiye's most prominent psychiatrists and neuroscience researchers.",
        tr:"Prof. Nevzat Tarhan, Türkiye'nin en tanınmış psikiyatristleri ve nörobilim araştırmacıları arasında yer almaktadır."
      },
      "Ол NPİSTANBUL Hospital негізін қалаған және 40+ кітап пен 1000+ ғылыми мақаланың авторы.": {
        kz:"Ол NPİSTANBUL Hospital негізін қалаған және 40+ кітап пен 1000+ ғылыми мақаланың авторы.",
        ru:"Он основал NPİSTANBUL Hospital и является автором 40+ книг и 1000+ научных статей.",
        en:"He founded NPİSTANBUL Hospital and is the author of 40+ books and 1,000+ scientific articles.",
        tr:"NPİSTANBUL Hastanesi'ni kurmuş ve 40'tan fazla kitap ile 1.000'den fazla bilimsel makalenin yazarıdır."
      },
   
      // ── PARTNER INSTITUTIONS ───────────────────────────────────────
      "NPİSTANBUL Hospital": {kz:"NPİSTANBUL ауруханасы", ru:"Больница NPİSTANBUL", en:"NPİSTANBUL Hospital", tr:"NPİSTANBUL Hastanesi"},
      "ASELSAN":             {kz:"ASELSAN",               ru:"ASELSAN",             en:"ASELSAN",            tr:"ASELSAN"},
      "TÜBİTAK":             {kz:"TÜBİTAK",               ru:"TÜBİTAK",             en:"TÜBİTAK",            tr:"TÜBİTAK"},
      "Habertürk TV":        {kz:"Habertürk TV",           ru:"Habertürk TV",        en:"Habertürk TV",       tr:"Habertürk TV"},
      "İSMEK":               {kz:"İSMEK",                 ru:"İSMEK",               en:"İSMEK",              tr:"İSMEK"},
   
      // ── EXCHANGE PARTNERS ──────────────────────────────────────────
      "University of Bologna": {kz:"Болонья университеті",  ru:"Болонский университет",       en:"University of Bologna",  tr:"Bologna Üniversitesi"},
      "University of Warsaw":  {kz:"Варшава университеті",  ru:"Варшавский университет",      en:"University of Warsaw",   tr:"Varşova Üniversitesi"},
      "Utrecht University":    {kz:"Утрехт университеті",   ru:"Утрехтский университет",      en:"Utrecht University",     tr:"Utrecht Üniversitesi"},
      "University of Valencia":{kz:"Валенсия университеті", ru:"Университет Валенсии",        en:"University of Valencia", tr:"Valencia Üniversitesi"},
      "Kyungdong University":  {kz:"Kyungdong университеті",ru:"Университет Кёндон",          en:"Kyungdong University",   tr:"Kyungdong Üniversitesi"},
      "University of Malaya":  {kz:"Малайя университеті",   ru:"Университет Малайи",          en:"University of Malaya",   tr:"Malaya Üniversitesi"},
   
      // ── PSYCHOLOGY & SOCIAL SCIENCES PROGRAMS ─────────────────────
      "Psychology":            {kz:"Психология",              ru:"Психология",             en:"Psychology",            tr:"Psikoloji"},
      "Sociology":             {kz:"Социология",              ru:"Социология",             en:"Sociology",             tr:"Sosyoloji"},
      "Political Science":     {kz:"Саяси ғылымдар",         ru:"Политология",            en:"Political Science",     tr:"Siyaset Bilimi"},
      "Philosophy":            {kz:"Философия",               ru:"Философия",              en:"Philosophy",            tr:"Felsefe"},
      "International Relations":{kz:"Халықаралық қатынастар", ru:"Международные отношения",en:"International Relations",tr:"Uluslararası İlişkiler"},
   
      // ── ENGINEERING & NATURAL SCIENCES ────────────────────────────
      "Computer Engineering":          {kz:"Компьютерлік инженерия",    ru:"Компьютерная инженерия",      en:"Computer Engineering",          tr:"Bilgisayar Mühendisliği"},
      "Software Engineering":          {kz:"Бағдарламалық инженерия",   ru:"Программная инженерия",       en:"Software Engineering",          tr:"Yazılım Mühendisliği"},
      "Bioengineering":                {kz:"Биоинженерия",               ru:"Биоинженерия",                en:"Bioengineering",                tr:"Biyomühendislik"},
      "Molecular Biology & Genetics":  {kz:"Молекулалық биология және генетика", ru:"Молекулярная биология и генетика", en:"Molecular Biology & Genetics",  tr:"Moleküler Biyoloji ve Genetik"},
      "Industrial Engineering":        {kz:"Өнеркәсіптік инженерия",   ru:"Промышленная инженерия",      en:"Industrial Engineering",        tr:"Endüstri Mühendisliği"},
   
      // ── HEALTH SCIENCES PROGRAMS ───────────────────────────────────
      "Nursing":              {kz:"Мейірбикелік іс",     ru:"Сестринское дело",       en:"Nursing",              tr:"Hemşirelik"},
      "Physiotherapy":        {kz:"Физиотерапия",         ru:"Физиотерапия",           en:"Physiotherapy",        tr:"Fizyoterapi"},
      "Nutrition & Dietetics":{kz:"Тамақтану және диетология", ru:"Нутрициология и диетология", en:"Nutrition & Dietetics", tr:"Beslenme ve Diyetetik"},
      "Audiology":            {kz:"Аудиология",           ru:"Аудиология",             en:"Audiology",            tr:"Odyoloji"},
      "Speech Therapy":       {kz:"Тіл терапиясы",        ru:"Логопедия",              en:"Speech Therapy",       tr:"Dil ve Konuşma Terapisi"},
      "Occupational Therapy": {kz:"Еңбек терапиясы",      ru:"Эрготерапия",            en:"Occupational Therapy", tr:"Ergoterapi"},
   
      // ── COMMUNICATION PROGRAMS ─────────────────────────────────────
      "Cinema & Television":  {kz:"Кино және теледидар", ru:"Кино и телевидение",  en:"Cinema & Television",  tr:"Sinema ve Televizyon"},
      "Journalism":           {kz:"Журналистика",         ru:"Журналистика",         en:"Journalism",           tr:"Gazetecilik"},
      "New Media":            {kz:"Жаңа медиа",           ru:"Новые медиа",          en:"New Media",            tr:"Yeni Medya"},
      "Animation":            {kz:"Анимация",             ru:"Анимация",             en:"Animation",            tr:"Animasyon"},
   
      // ── MEDICINE & DENTISTRY ───────────────────────────────────────
      "Medicine":   {kz:"Медицина",     ru:"Медицина",      en:"Medicine",  tr:"Tıp"},
      "Dentistry":  {kz:"Стоматология", ru:"Стоматология",  en:"Dentistry", tr:"Diş Hekimliği"},
   
      // ── CAMPUS & LABS ──────────────────────────────────────────────
      "Университетте neuroscience labs, psychology research centers және modern medical laboratories бар.": {
        kz:"Университетте neuroscience labs, psychology research centers және modern medical laboratories бар.",
        ru:"В университете есть нейронаучные лаборатории, психологические исследовательские центры и современные медицинские лаборатории.",
        en:"The university has neuroscience labs, psychology research centers and modern medical laboratories.",
        tr:"Üniversitede nörobilim laboratuvarları, psikoloji araştırma merkezleri ve modern tıp laboratuvarları bulunmaktadır."
      },
      "Neuroscience Labs":   {kz:"Нейробиология зертханалары", ru:"Нейронаучные лаборатории",  en:"Neuroscience Labs",   tr:"Nörobilim Laboratuvarları"},
      "Psychology Labs":     {kz:"Психология зертханалары",    ru:"Психологические лаборатории",en:"Psychology Labs",     tr:"Psikoloji Laboratuvarları"},
      "Research Centers":    {kz:"Зерттеу орталықтары",        ru:"Исследовательские центры",   en:"Research Centers",    tr:"Araştırma Merkezleri"},
      "Medical Simulation":  {kz:"Медициналық симуляция",      ru:"Медицинская симуляция",       en:"Medical Simulation",  tr:"Tıbbi Simülasyon"},
      "Student Clubs":       {kz:"Студенттік клубтар",         ru:"Студенческие клубы",         en:"Student Clubs",       tr:"Öğrenci Kulüpleri"},
      "Career Center":       {kz:"Карьера орталығы",           ru:"Карьерный центр",            en:"Career Center",       tr:"Kariyer Merkezi"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":     {kz:"Қала:",     ru:"Город:",         en:"City:",       tr:"Şehir:"},
      "Түрі:":     {kz:"Түрі:",     ru:"Тип:",           en:"Type:",       tr:"Tür:"},
      "Бағыты:":   {kz:"Бағыты:",   ru:"Направление:",   en:"Focus:",      tr:"Odak:"},
      "Erasmus:":  {kz:"Erasmus:",   ru:"Erasmus:",       en:"Erasmus:",    tr:"Erasmus:"},
   
      // Sidebar values
      "Istanbul":       {kz:"Стамбул",                    ru:"Стамбул",                    en:"Istanbul",        tr:"İstanbul"},
      "Private":        {kz:"Жеке",                       ru:"Частный",                    en:"Private",         tr:"Özel"},
      "Health Sciences":{kz:"Денсаулық ғылымдары",        ru:"Науки о здоровье",           en:"Health Sciences", tr:"Sağlık Bilimleri"},
      "412 Universities":{kz:"412 университет",           ru:"412 университетов",          en:"412 universities",tr:"412 üniversite"},
   
      // Sidebar advantages
      "NPİSTANBUL Practice":     {kz:"NPİSTANBUL практикасы",          ru:"Практика в NPİSTANBUL",        en:"NPİSTANBUL Practice",     tr:"NPİSTANBUL Pratiği"},
      "Strong Psychology Programs":{kz:"Күшті психология бағдарламалары",ru:"Сильные программы по психологии",en:"Strong Psychology Programs",tr:"Güçlü Psikoloji Programları"},
      "Research Opportunities":  {kz:"Зерттеу мүмкіндіктері",          ru:"Исследовательские возможности", en:"Research Opportunities",  tr:"Araştırma İmkânları"},
      "Modern Laboratories":     {kz:"Заманауи зертханалар",            ru:"Современные лаборатории",      en:"Modern Laboratories",     tr:"Modern Laboratuvarlar"},
      "International Exchange":  {kz:"Халықаралық алмасу",             ru:"Международный обмен",          en:"International Exchange",  tr:"Uluslararası Değişim"},
   
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
   
    EduI18n.registerPage("uskudar", D, function(lang){
      applyText(lang);
    });
  })();