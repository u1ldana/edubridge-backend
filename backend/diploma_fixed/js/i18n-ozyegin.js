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
      "Istanbul, Türkiye · Private Research University · English Education": {
        kz:"Istanbul, Türkiye · Жеке ғылыми-зерттеу университеті · Ағылшын тілінде",
        ru:"Стамбул, Турция · Частный исследовательский университет · Обучение на английском",
        en:"Istanbul, Türkiye · Private Research University · English Education",
        tr:"İstanbul, Türkiye · Özel Araştırma Üniversitesi · İngilizce eğitim"
      },
      "Özyeğin University — Түркиядағы student satisfaction бойынша ең мықты private university-лердің бірі. Университет innovation, entrepreneurship және career development бағыттарымен танымал.": {
        kz:"Özyeğin University — Түркиядағы student satisfaction бойынша ең мықты private university-лердің бірі. Университет innovation, entrepreneurship және career development бағыттарымен танымал.",
        ru:"Özyeğin University — один из лучших частных университетов Турции по удовлетворённости студентов. Университет известен направлениями инноваций, предпринимательства и карьерного развития.",
        en:"Özyeğin University is one of Türkiye's strongest private universities in student satisfaction. The university is known for innovation, entrepreneurship and career development.",
        tr:"Özyeğin University, öğrenci memnuniyeti açısından Türkiye'nin en güçlü özel üniversitelerinden biridir. Üniversite; inovasyon, girişimcilik ve kariyer gelişimi alanlarıyla tanınmaktadır."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "Кампус": {kz:"Кампус", ru:"Кампус", en:"Campus", tr:"Kampüs"},
      "280 Acre Modern Campus": {
        kz:"280 Acre заманауи кампус",
        ru:"Современный кампус 280 акров",
        en:"280 Acre Modern Campus",
        tr:"280 Dönümlük Modern Kampüs"
      },
      "Private Research University": {
        kz:"Жеке ғылыми-зерттеу университеті",
        ru:"Частный исследовательский университет",
        en:"Private Research University",
        tr:"Özel Araştırma Üniversitesi"
      },
      "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
      "Istanbul, Çekmeköy": {
        kz:"Стамбул, Çekmeköy",
        ru:"Стамбул, Чекмекёй",
        en:"Istanbul, Çekmeköy",
        tr:"İstanbul, Çekmeköy"
      },
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "Özyeğin University туралы": {
        kz:"Özyeğin University туралы",
        ru:"Об Özyeğin University",
        en:"About Özyeğin University",
        tr:"Özyeğin University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Özyeğin University?": {
        kz:"Неге Özyeğin University?",
        ru:"Почему Özyeğin University?",
        en:"Why Özyeğin University?",
        tr:"Neden Özyeğin University?"
      },
      "Founder: Hüsnü Özyeğin": {
        kz:"Founder: Hüsnü Özyeğin",
        ru:"Основатель: Hüsnü Özyeğin",
        en:"Founder: Hüsnü Özyeğin",
        tr:"Kurucu: Hüsnü Özyeğin"
      },
      "Exchange Programs": {
        kz:"Алмасу бағдарламалары",
        ru:"Программы обмена",
        en:"Exchange Programs",
        tr:"Değişim Programları"
      },
      "International Partners": {
        kz:"Халықаралық серіктестер",
        ru:"Международные партнёры",
        en:"International Partners",
        tr:"Uluslararası Ortaklar"
      },
      "Факультеттер": {
        kz:"Факультеттер",
        ru:"Факультеты",
        en:"Faculties",
        tr:"Fakülteler"
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
      "Business": {
        kz:"Бизнес",
        ru:"Бизнес",
        en:"Business",
        tr:"İşletme"
      },
      "Social Sciences": {
        kz:"Әлеуметтік ғылымдар",
        ru:"Социальные науки",
        en:"Social Sciences",
        tr:"Sosyal Bilimler"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Aviation": {
        kz:"Авиация",
        ru:"Авиация",
        en:"Aviation",
        tr:"Havacılık"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Özyeğin University — entrepreneurial research university моделін қолданатын заманауи private university.": {
        kz:"Özyeğin University — entrepreneurial research university моделін қолданатын заманауи private university.",
        ru:"Özyeğin University — современный частный университет, работающий по модели предпринимательского исследовательского университета.",
        en:"Özyeğin University is a modern private university operating under the entrepreneurial research university model.",
        tr:"Özyeğin University, girişimci araştırma üniversitesi modelini benimseyen modern bir özel üniversitedir."
      },
      "Университет innovation, startup culture және international education бағытына ерекше көңіл бөледі.": {
        kz:"Университет innovation, startup culture және international education бағытына ерекше көңіл бөледі.",
        ru:"Университет уделяет особое внимание инновациям, стартап-культуре и международному образованию.",
        en:"The university places special emphasis on innovation, startup culture and international education.",
        tr:"Üniversite; inovasyon, girişimcilik kültürü ve uluslararası eğitime özel önem vermektedir."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Student life маңызды студенттерге": {
        kz:"Student life маңызды студенттерге",
        ru:"Студентам, для которых важна студенческая жизнь",
        en:"Students for whom student life matters",
        tr:"Öğrenci yaşamına önem veren öğrencilere"
      },
      "Top university-де оқығысы келетіндерге": {
        kz:"Top university-де оқығысы келетіндерге",
        ru:"Желающим учиться в топ-университете",
        en:"Those who want to study at a top university",
        tr:"Üst düzey bir üniversitede okumak isteyenler için"
      },
      "International career қалайтындарға": {
        kz:"Халықаралық карьера қалайтындарға",
        ru:"Желающим построить международную карьеру",
        en:"Those who want an international career",
        tr:"Uluslararası kariyer hedefleyenler için"
      },
      "Startup және entrepreneurship қызықтыратындарға": {
        kz:"Startup және entrepreneurship қызықтыратындарға",
        ru:"Интересующимся стартапами и предпринимательством",
        en:"Those interested in startups and entrepreneurship",
        tr:"Girişimcilik ve start-up ile ilgilenenler için"
      },
      "Campus life және спорт маңызды студенттерге": {
        kz:"Campus life және спорт маңызды студенттерге",
        ru:"Студентам, для которых важны жизнь в кампусе и спорт",
        en:"Students for whom campus life and sports matter",
        tr:"Kampüs yaşamı ve sporu önemseyen öğrencilere"
      },
   
      // ── WHY ÖZYEĞIN — LIST ─────────────────────────────────────────
      "Student satisfaction бойынша top university": {
        kz:"Student satisfaction бойынша top university",
        ru:"Лучший университет по удовлетворённости студентов",
        en:"Top university by student satisfaction",
        tr:"Öğrenci memnuniyetinde üst düzey üniversite"
      },
      "Career support excellence": {
        kz:"Карьераны қолдаудың үздік деңгейі",
        ru:"Отличная поддержка в сфере карьеры",
        en:"Career support excellence",
        tr:"Mükemmel kariyer desteği"
      },
      "Fast employment success": {
        kz:"Жылдам жұмысқа орналасу нәтижесі",
        ru:"Высокий уровень трудоустройства",
        en:"Fast employment success",
        tr:"Hızlı istihdam başarısı"
      },
      "International exchange programs": {
        kz:"Халықаралық алмасу бағдарламалары",
        ru:"Международные программы обмена",
        en:"International exchange programs",
        tr:"Uluslararası değişim programları"
      },
      "Entrepreneurship ecosystem": {
        kz:"Кәсіпкерлік экожүйесі",
        ru:"Предпринимательская экосистема",
        en:"Entrepreneurship ecosystem",
        tr:"Girişimcilik ekosistemi"
      },
      "Modern large campus": {
        kz:"Заманауи үлкен кампус",
        ru:"Большой современный кампус",
        en:"Modern large campus",
        tr:"Modern geniş kampüs"
      },
      "650+ халықаралық академиялық байланыс": {
        kz:"650+ халықаралық академиялық байланыс",
        ru:"650+ международных академических связей",
        en:"650+ international academic connections",
        tr:"650'den fazla uluslararası akademik bağlantı"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Hüsnü Özyeğin — Түркияның ең табысты businessman және philanthropist тұлғаларының бірі.": {
        kz:"Hüsnü Özyeğin — Түркияның ең табысты businessman және philanthropist тұлғаларының бірі.",
        ru:"Hüsnü Özyeğin — один из самых успешных предпринимателей и филантропов Турции.",
        en:"Hüsnü Özyeğin is one of Türkiye's most successful businessmen and philanthropists.",
        tr:"Hüsnü Özyeğin, Türkiye'nin en başarılı iş insanlarından ve hayırseverlerinden biridir."
      },
      "Ол Harvard Business School түлегі және Fiba Group негізін қалаушы.": {
        kz:"Ол Harvard Business School түлегі және Fiba Group негізін қалаушы.",
        ru:"Он является выпускником Harvard Business School и основателем Fiba Group.",
        en:"He is a Harvard Business School graduate and the founder of Fiba Group.",
        tr:"Harvard Business School mezunu ve Fiba Group'un kurucusudur."
      },
   
      // ── EXCHANGE PROGRAM PILLS ─────────────────────────────────────
      "Erasmus+":           {kz:"Erasmus+",                      ru:"Erasmus+",                       en:"Erasmus+",              tr:"Erasmus+"},
      "Global Exchange":    {kz:"Жаһандық алмасу",               ru:"Глобальный обмен",               en:"Global Exchange",        tr:"Küresel Değişim"},
      "SEMP":               {kz:"SEMP",                          ru:"SEMP",                           en:"SEMP",                  tr:"SEMP"},
      "Summer/Winter Schools":{kz:"Жазғы/Қысқы мектептер",      ru:"Летние/зимние школы",            en:"Summer/Winter Schools",  tr:"Yaz/Kış Okulları"},
   
      // ── INTERNATIONAL PARTNERS ─────────────────────────────────────
      "University of Texas Dallas": {kz:"Техас Даллас университеті",  ru:"Университет Техаса в Далласе", en:"University of Texas Dallas", tr:"Texas Dallas Üniversitesi"},
      "Maastricht University":      {kz:"Маастрихт университеті",     ru:"Маастрихтский университет",    en:"Maastricht University",      tr:"Maastricht Üniversitesi"},
      "Yokohama University":        {kz:"Иокогама университеті",      ru:"Университет Йокогамы",         en:"Yokohama University",        tr:"Yokohama Üniversitesi"},
      "Sejong University":          {kz:"Сежонг университеті",        ru:"Университет Сечжон",           en:"Sejong University",          tr:"Sejong Üniversitesi"},
      "University of Fribourg":     {kz:"Фрибург университеті",       ru:"Университет Фрибура",          en:"University of Fribourg",     tr:"Fribourg Üniversitesi"},
      "Audencia Business School":   {kz:"Audencia бизнес мектебі",    ru:"Бизнес-школа Audencia",        en:"Audencia Business School",   tr:"Audencia İşletme Okulu"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Artificial Intelligence": {kz:"Жасанды интеллект",          ru:"Искусственный интеллект",     en:"Artificial Intelligence",    tr:"Yapay Zeka"},
      "Computer Science":        {kz:"Компьютерлік ғылым",         ru:"Компьютерные науки",          en:"Computer Science",           tr:"Bilgisayar Bilimleri"},
      "Electrical Engineering":  {kz:"Электротехникалық инженерия",ru:"Электротехническая инженерия",en:"Electrical Engineering",     tr:"Elektrik-Elektronik Mühendisliği"},
      "Industrial Engineering":  {kz:"Өнеркәсіптік инженерия",    ru:"Промышленная инженерия",      en:"Industrial Engineering",     tr:"Endüstri Mühendisliği"},
      "Mechanical Engineering":  {kz:"Механикалық инженерия",      ru:"Механическая инженерия",      en:"Mechanical Engineering",     tr:"Makine Mühendisliği"},
      "Civil Engineering":       {kz:"Азаматтық инженерия",        ru:"Гражданское строительство",   en:"Civil Engineering",          tr:"İnşaat Mühendisliği"},
   
      // ── BUSINESS PROGRAMS ──────────────────────────────────────────
      "Business Administration":      {kz:"Бизнесті басқару",           ru:"Управление бизнесом",         en:"Business Administration",      tr:"İşletme Yönetimi"},
      "Entrepreneurship":             {kz:"Кәсіпкерлік",                ru:"Предпринимательство",         en:"Entrepreneurship",             tr:"Girişimcilik"},
      "International Finance":        {kz:"Халықаралық қаржы",          ru:"Международные финансы",       en:"International Finance",        tr:"Uluslararası Finans"},
      "Economics":                    {kz:"Экономика",                   ru:"Экономика",                   en:"Economics",                    tr:"Ekonomi"},
      "Management Information Systems":{kz:"Басқару ақпараттық жүйелері",ru:"Управленческие информационные системы",en:"Management Information Systems",tr:"Yönetim Bilişim Sistemleri"},
   
      // ── SOCIAL SCIENCES PROGRAMS ───────────────────────────────────
      "Psychology":      {kz:"Психология",        ru:"Психология",    en:"Psychology",      tr:"Psikoloji"},
      "Political Science":{kz:"Саяси ғылымдар",   ru:"Политология",   en:"Political Science",tr:"Siyaset Bilimi"},
      "Anthropology":    {kz:"Антропология",       ru:"Антропология",  en:"Anthropology",    tr:"Antropoloji"},
   
      // ── ARCHITECTURE & DESIGN PROGRAMS ────────────────────────────
      "Architecture":         {kz:"Архитектура",          ru:"Архитектура",              en:"Architecture",          tr:"Mimarlık"},
      "Industrial Design":    {kz:"Өнеркәсіптік дизайн",  ru:"Промышленный дизайн",     en:"Industrial Design",     tr:"Endüstriyel Tasarım"},
      "Communication Design": {kz:"Коммуникация дизайны",  ru:"Дизайн коммуникаций",     en:"Communication Design",  tr:"İletişim Tasarımı"},
      "Interior Architecture":{kz:"Интерьер дизайны",     ru:"Интерьерная архитектура",  en:"Interior Architecture", tr:"İç Mimarlık"},
   
      // ── AVIATION PROGRAMS ──────────────────────────────────────────
      "Professional Piloting": {kz:"Кәсіби ұшқыш",        ru:"Профессиональный пилот",  en:"Professional Piloting",  tr:"Profesyonel Pilotaj"},
      "Aviation Management":   {kz:"Авиациялық менеджмент",ru:"Авиационный менеджмент",  en:"Aviation Management",    tr:"Havacılık Yönetimi"},
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "Özyeğin campus — Түркиядағы ең modern student campuses-тің бірі.": {
        kz:"Özyeğin campus — Түркиядағы ең modern student campuses-тің бірі.",
        ru:"Кампус Özyeğin — один из самых современных студенческих кампусов Турции.",
        en:"Özyeğin campus is one of the most modern student campuses in Türkiye.",
        tr:"Özyeğin kampüsü, Türkiye'nin en modern öğrenci kampüslerinden biridir."
      },
      "Swimming":           {kz:"Жүзу",              ru:"Бассейн",               en:"Swimming",           tr:"Yüzme"},
      "Football":           {kz:"Футбол",             ru:"Футбол",                en:"Football",           tr:"Futbol"},
      "Basketball":         {kz:"Баскетбол",          ru:"Баскетбол",             en:"Basketball",         tr:"Basketbol"},
      "American Football":  {kz:"Американдық футбол", ru:"Американский футбол",   en:"American Football",  tr:"Amerikan Futbolu"},
      "Cinema":             {kz:"Кинозал",            ru:"Кинозал",               en:"Cinema",             tr:"Sinema"},
      "Food Court":         {kz:"Тамақ орталығы",     ru:"Фудкорт",               en:"Food Court",         tr:"Yemek Alanı"},
      "Gym":                {kz:"Спортзал",           ru:"Спортзал",              en:"Gym",                tr:"Spor Salonu"},
      "Psychological Support":{kz:"Психологиялық қолдау",ru:"Психологическая поддержка",en:"Psychological Support",tr:"Psikolojik Destek"},
      "Student Dormitories":{kz:"Студент жатақханалары",ru:"Студенческие общежития",en:"Student Dormitories",tr:"Öğrenci Yurtları"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":    {kz:"Қала:",    ru:"Город:",       en:"City:",        tr:"Şehir:"},
      "Түрі:":    {kz:"Түрі:",    ru:"Тип:",         en:"Type:",        tr:"Tür:"},
      "Тілі:":    {kz:"Тілі:",    ru:"Язык:",        en:"Language:",    tr:"Dil:"},
      "Бағыты:":  {kz:"Бағыты:", ru:"Направление:", en:"Focus:",       tr:"Odak:"},
   
      // Sidebar values
      "Istanbul":        {kz:"Стамбул",      ru:"Стамбул",              en:"Istanbul",        tr:"İstanbul"},
      "Private":         {kz:"Жеке",         ru:"Частный",              en:"Private",         tr:"Özel"},
      "English":         {kz:"Ағылшын",      ru:"Английский",           en:"English",         tr:"İngilizce"},
      "Entrepreneurship":{kz:"Кәсіпкерлік", ru:"Предпринимательство",  en:"Entrepreneurship",tr:"Girişimcilik"},
   
      // Sidebar advantages
      "Top Student Satisfaction": {kz:"Студент қанағаттанушылығы TOP",  ru:"Высший рейтинг по удовлетворённости студентов", en:"Top Student Satisfaction", tr:"En Yüksek Öğrenci Memnuniyeti"},
      "Startup Ecosystem":        {kz:"Startup экожүйесі",               ru:"Стартап-экосистема",                            en:"Startup Ecosystem",        tr:"Girişimcilik Ekosistemi"},
      "International Programs":   {kz:"Халықаралық бағдарламалар",       ru:"Международные программы",                       en:"International Programs",   tr:"Uluslararası Programlar"},
      "Modern Campus":            {kz:"Заманауи кампус",                 ru:"Современный кампус",                            en:"Modern Campus",            tr:"Modern Kampüs"},
      "Strong Career Support":    {kz:"Күшті карьера қолдауы",           ru:"Сильная поддержка карьеры",                     en:"Strong Career Support",    tr:"Güçlü Kariyer Desteği"},
   
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
   
    EduI18n.registerPage("ozyegin", D, function(lang){
      applyText(lang);
    });
  })();