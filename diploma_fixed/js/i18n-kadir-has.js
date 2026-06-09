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
      "Istanbul, Türkiye · Private University · 100% English Education": {
        kz:"Istanbul, Türkiye · Жеке университет · 100% ағылшын тілінде",
        ru:"Стамбул, Турция · Частный университет · 100% обучение на английском",
        en:"Istanbul, Türkiye · Private University · 100% English Education",
        tr:"İstanbul, Türkiye · Özel üniversite · %100 İngilizce eğitim"
      },
      "Kadir Has University — Стамбұлдың дәл орталығында орналасқан, халықаралық рейтингтерге кіретін беделді private university. Университет academic quality, халықаралық байланыстар және English-medium education арқылы танымал.": {
        kz:"Kadir Has University — Стамбұлдың дәл орталығында орналасқан, халықаралық рейтингтерге кіретін беделді private university. Университет academic quality, халықаралық байланыстар және English-medium education арқылы танымал.",
        ru:"Kadir Has University — престижный частный университет в самом центре Стамбула, входящий в международные рейтинги. Университет известен академическим качеством, международными связями и обучением на английском языке.",
        en:"Kadir Has University is a prestigious private university located in the heart of Istanbul, featured in international rankings. The university is known for academic quality, international connections and English-medium education.",
        tr:"Kadir Has University, uluslararası sıralamalarda yer alan ve İstanbul'un tam merkezinde konumlanan prestijli bir özel üniversitedir. Üniversite; akademik kalitesi, uluslararası bağlantıları ve İngilizce eğitimiyle tanınmaktadır."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "Рейтинг": {kz:"Рейтинг", ru:"Рейтинг", en:"Rating", tr:"Sıralama"},
      "Top 7 Private Universities": {
        kz:"TOP-7 жеке университеттер",
        ru:"TOP-7 частных университетов",
        en:"Top 7 Private Universities",
        tr:"Özel Üniversiteler TOP-7"
      },
      "Private Foundation University": {
        kz:"Жеке қор университеті",
        ru:"Частный фондовый университет",
        en:"Private Foundation University",
        tr:"Özel Vakıf Üniversitesi"
      },
      "100% English": {
        kz:"100% ағылшын тілінде",
        ru:"100% на английском",
        en:"100% English",
        tr:"%100 İngilizce"
      },
      "Istanbul, Cibali": {
        kz:"Стамбул, Cibali",
        ru:"Стамбул, Джибали",
        en:"Istanbul, Cibali",
        tr:"İstanbul, Cibali"
      },
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "Kadir Has University туралы": {
        kz:"Kadir Has University туралы",
        ru:"О Kadir Has University",
        en:"About Kadir Has University",
        tr:"Kadir Has University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Kadir Has University?": {
        kz:"Неге Kadir Has University?",
        ru:"Почему Kadir Has University?",
        en:"Why Kadir Has University?",
        tr:"Neden Kadir Has University?"
      },
      "Founder: Kadir Has": {
        kz:"Founder: Kadir Has",
        ru:"Основатель: Kadir Has",
        en:"Founder: Kadir Has",
        tr:"Kurucu: Kadir Has"
      },
      "Global Rankings": {
        kz:"Жаһандық рейтингтер",
        ru:"Мировые рейтинги",
        en:"Global Rankings",
        tr:"Küresel Sıralamalar"
      },
      "Exchange Programs": {
        kz:"Алмасу бағдарламалары",
        ru:"Программы обмена",
        en:"Exchange Programs",
        tr:"Değişim Programları"
      },
      "Partner Companies": {
        kz:"Серіктес компаниялар",
        ru:"Компании-партнёры",
        en:"Partner Companies",
        tr:"Ortak Şirketler"
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
      "Economics & Social Sciences": {
        kz:"Экономика және Әлеуметтік ғылымдар",
        ru:"Экономика и Социальные науки",
        en:"Economics & Social Sciences",
        tr:"Ekonomi ve Sosyal Bilimler"
      },
      "Communication": {
        kz:"Коммуникация",
        ru:"Коммуникации",
        en:"Communication",
        tr:"İletişim"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Kadir Has University (KHAS) — 1997 жылы құрылған prestigious private university.": {
        kz:"Kadir Has University (KHAS) — 1997 жылы құрылған prestigious private university.",
        ru:"Kadir Has University (KHAS) — престижный частный университет, основанный в 1997 году.",
        en:"Kadir Has University (KHAS) is a prestigious private university founded in 1997.",
        tr:"Kadir Has University (KHAS), 1997 yılında kurulan prestijli bir özel üniversitedir."
      },
      "Университет academic quality-ге ерекше көңіл бөледі: limited student intake, strong faculty және compact campus арқылы жоғары деңгейдегі білім береді.": {
        kz:"Университет academic quality-ге ерекше көңіл бөледі: limited student intake, strong faculty және compact campus арқылы жоғары деңгейдегі білім береді.",
        ru:"Университет уделяет особое внимание академическому качеству: обеспечивает высокий уровень образования благодаря ограниченному набору студентов, сильному преподавательскому составу и компактному кампусу.",
        en:"The university places special emphasis on academic quality: it delivers high-level education through a limited student intake, a strong faculty and a compact campus.",
        tr:"Üniversite, akademik kaliteye özel önem vermektedir: sınırlı öğrenci alımı, güçlü öğretim kadrosu ve kompakt kampüsü sayesinde yüksek düzeyde eğitim sunmaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Стамбұлдың орталығында оқығысы келетіндерге": {
        kz:"Стамбұлдың орталығында оқығысы келетіндерге",
        ru:"Студентам, желающим учиться в центре Стамбула",
        en:"Students who want to study in the heart of Istanbul",
        tr:"İstanbul'un merkezinde okumak isteyen öğrencilere"
      },
      "International career армандайтын студенттерге": {
        kz:"Халықаралық карьера армандайтын студенттерге",
        ru:"Студентам, мечтающим о международной карьере",
        en:"Students dreaming of an international career",
        tr:"Uluslararası kariyer hayal eden öğrencilere"
      },
      "100% English education қалайтындарға": {
        kz:"100% ағылшын тілінде білім алғысы келетіндерге",
        ru:"Желающим получить образование полностью на английском",
        en:"Those who prefer 100% English education",
        tr:"%100 İngilizce eğitim almak isteyenler için"
      },
      "Double major / double diploma қызықтыратындарға": {
        kz:"Қос мамандық / қос диплом қызықтыратындарға",
        ru:"Интересующимся двойной специализацией / двойным дипломом",
        en:"Those interested in double major / double diploma",
        tr:"Çift ana dal / çift diploma ile ilgilenenler için"
      },
      "Global rankings маңызды студенттерге": {
        kz:"Жаһандық рейтингтер маңызды студенттерге",
        ru:"Студентам, для которых важны мировые рейтинги",
        en:"Students for whom global rankings matter",
        tr:"Küresel sıralamalar önemseyen öğrencilere"
      },
   
      // ── WHY KHAS — LIST ────────────────────────────────────────────
      "Top 800 universities worldwide": {
        kz:"Әлемдік TOP-800 университеттер",
        ru:"TOP-800 университетов мира",
        en:"Top 800 universities worldwide",
        tr:"Dünya'nın TOP-800 üniversitesi"
      },
      "Top 7 private universities in Türkiye": {
        kz:"Түркиядағы TOP-7 жеке университет",
        ru:"TOP-7 частных университетов Турции",
        en:"Top 7 private universities in Türkiye",
        tr:"Türkiye'nin TOP-7 özel üniversitesi"
      },
      "129 Erasmus partnerships": {
        kz:"129 Erasmus серіктестіктері",
        ru:"129 партнёрств Erasmus",
        en:"129 Erasmus partnerships",
        tr:"129 Erasmus ortaklığı"
      },
      "100% English programs": {
        kz:"100% ағылшын тіліндегі бағдарламалар",
        ru:"100% программ на английском",
        en:"100% English programs",
        tr:"%100 İngilizce programlar"
      },
      "Compact modern campus": {
        kz:"Компактты заманауи кампус",
        ru:"Компактный современный кампус",
        en:"Compact modern campus",
        tr:"Kompakt modern kampüs"
      },
      "High faculty-to-student ratio": {
        kz:"Жоғары оқытушы-студент қатынасы",
        ru:"Высокое соотношение преподавателей к студентам",
        en:"High faculty-to-student ratio",
        tr:"Yüksek öğretim üyesi / öğrenci oranı"
      },
      "Strong international reputation": {
        kz:"Күшті халықаралық беделі",
        ru:"Сильная международная репутация",
        en:"Strong international reputation",
        tr:"Güçlü uluslararası itibar"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Kadir Has — Түркияның ең танымал philanthropist және industrialist тұлғаларының бірі.": {
        kz:"Kadir Has — Түркияның ең танымал philanthropist және industrialist тұлғаларының бірі.",
        ru:"Kadir Has — один из самых известных филантропов и промышленников Турции.",
        en:"Kadir Has is one of Türkiye's most renowned philanthropists and industrialists.",
        tr:"Kadir Has, Türkiye'nin en tanınmış hayırseverlerinden ve sanayicilerinden biridir."
      },
      "Ол Mercedes автобус және жүк көлігі зауытын, Coca-Cola factory және Akbank инвестицияларын басқарған.": {
        kz:"Ол Mercedes автобус және жүк көлігі зауытын, Coca-Cola factory және Akbank инвестицияларын басқарған.",
        ru:"Он управлял заводом автобусов и грузовых автомобилей Mercedes, фабрикой Coca-Cola и инвестициями в Akbank.",
        en:"He managed the Mercedes bus and truck factory, a Coca-Cola factory and investments in Akbank.",
        tr:"Mercedes otobüs ve kamyon fabrikasını, Coca-Cola fabrikasını ve Akbank yatırımlarını yönetti."
      },
   
      // ── GLOBAL RANKINGS PILLS ──────────────────────────────────────
      "THE World Rankings": {kz:"THE Әлемдік рейтингі",  ru:"THE Мировой рейтинг",    en:"THE World Rankings",  tr:"THE Dünya Sıralaması"},
      "QS Rankings":        {kz:"QS рейтингі",            ru:"QS рейтинг",             en:"QS Rankings",         tr:"QS Sıralaması"},
      "URAP Türkiye":       {kz:"URAP Түркия",             ru:"URAP Турция",            en:"URAP Türkiye",        tr:"URAP Türkiye"},
      "Top 800 Worldwide":  {kz:"Әлемдік TOP-800",        ru:"TOP-800 в мире",         en:"Top 800 Worldwide",   tr:"Dünya TOP-800"},
   
      // ── EXCHANGE PARTNERS ──────────────────────────────────────────
      "Trinity College Dublin": {kz:"Trinity College Dublin", ru:"Тринити Колледж Дублин", en:"Trinity College Dublin", tr:"Trinity College Dublin"},
      "Humboldt Berlin":        {kz:"Humboldt Berlin",        ru:"Берлинский университет Гумбольдта", en:"Humboldt Berlin", tr:"Humboldt Berlin"},
      "Sciences Po Lille":      {kz:"Sciences Po Lille",      ru:"Sciences Po Лилль",      en:"Sciences Po Lille",      tr:"Sciences Po Lille"},
      "Yonsei University":      {kz:"Yonsei университеті",    ru:"Университет Ёнсе",       en:"Yonsei University",      tr:"Yonsei Üniversitesi"},
      "Coventry University":    {kz:"Coventry университеті",  ru:"Университет Ковентри",   en:"Coventry University",    tr:"Coventry Üniversitesi"},
      "Roosevelt University":   {kz:"Roosevelt университеті", ru:"Университет Рузвельта",  en:"Roosevelt University",   tr:"Roosevelt Üniversitesi"},
      "Erasmus+":               {kz:"Erasmus+",               ru:"Erasmus+",               en:"Erasmus+",               tr:"Erasmus+"},
   
      // ── PARTNER COMPANIES ──────────────────────────────────────────
      "Ford Otosan": {kz:"Ford Otosan", ru:"Ford Otosan", en:"Ford Otosan", tr:"Ford Otosan"},
      "Arçelik":     {kz:"Arçelik",    ru:"Arçelik",     en:"Arçelik",     tr:"Arçelik"},
      "TÜBİTAK":     {kz:"TÜBİTAK",   ru:"TÜBİTAK",     en:"TÜBİTAK",     tr:"TÜBİTAK"},
      "Mastercard":  {kz:"Mastercard", ru:"Mastercard",  en:"Mastercard",  tr:"Mastercard"},
      "VISA":        {kz:"VISA",       ru:"VISA",        en:"VISA",        tr:"VISA"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Engineering":         {kz:"Компьютерлік инженерия",    ru:"Компьютерная инженерия",          en:"Computer Engineering",          tr:"Bilgisayar Mühendisliği"},
      "Electrical Engineering":       {kz:"Электротехникалық инженерия",ru:"Электротехническая инженерия",    en:"Electrical Engineering",        tr:"Elektrik-Elektronik Mühendisliği"},
      "Industrial Engineering":       {kz:"Өнеркәсіптік инженерия",    ru:"Промышленная инженерия",          en:"Industrial Engineering",        tr:"Endüstri Mühendisliği"},
      "Mechatronics":                 {kz:"Мехатроника",               ru:"Мехатроника",                     en:"Mechatronics",                  tr:"Mekatronik"},
      "Civil Engineering":            {kz:"Азаматтық инженерия",       ru:"Гражданское строительство",       en:"Civil Engineering",             tr:"İnşaat Mühendisliği"},
      "Molecular Biology & Genetics": {kz:"Молекулалық биология және генетика", ru:"Молекулярная биология и генетика", en:"Molecular Biology & Genetics", tr:"Moleküler Biyoloji ve Genetik"},
   
      // ── ECONOMICS & SOCIAL SCIENCE PROGRAMS ───────────────────────
      "Business Administration": {kz:"Бизнесті басқару",    ru:"Управление бизнесом",    en:"Business Administration", tr:"İşletme Yönetimi"},
      "Economics":               {kz:"Экономика",            ru:"Экономика",              en:"Economics",               tr:"Ekonomi"},
      "Psychology":              {kz:"Психология",           ru:"Психология",             en:"Psychology",              tr:"Psikoloji"},
      "Political Science":       {kz:"Саяси ғылымдар",      ru:"Политология",            en:"Political Science",       tr:"Siyaset Bilimi"},
      "International Trade":     {kz:"Халықаралық сауда",   ru:"Международная торговля", en:"International Trade",     tr:"Uluslararası Ticaret"},
   
      // ── COMMUNICATION PROGRAMS ─────────────────────────────────────
      "Radio & Television":         {kz:"Радио және теледидар",    ru:"Радио и телевидение",       en:"Radio & Television",         tr:"Radyo ve Televizyon"},
      "New Media":                  {kz:"Жаңа медиа",              ru:"Новые медиа",               en:"New Media",                  tr:"Yeni Medya"},
      "Public Relations":           {kz:"Қоғаммен байланыс",       ru:"Связи с общественностью",  en:"Public Relations",           tr:"Halkla İlişkiler"},
      "Visual Communication Design":{kz:"Визуалды коммуникация дизайны",ru:"Дизайн визуальных коммуникаций",en:"Visual Communication Design",tr:"Görsel İletişim Tasarımı"},
   
      // ── ARCHITECTURE PROGRAMS ──────────────────────────────────────
      "Architecture":          {kz:"Архитектура",        ru:"Архитектура",              en:"Architecture",          tr:"Mimarlık"},
      "Industrial Design":     {kz:"Өнеркәсіптік дизайн",ru:"Промышленный дизайн",     en:"Industrial Design",     tr:"Endüstriyel Tasarım"},
      "Interior Architecture": {kz:"Интерьер дизайны",   ru:"Интерьерная архитектура",  en:"Interior Architecture", tr:"İç Mimarlık"},
      "Theatre":               {kz:"Театр өнері",         ru:"Театральное искусство",    en:"Theatre",               tr:"Tiyatro"},
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "KHAS кампусы Golden Horn жағалауында орналасқан. Кампуста engineering labs, VR/AR labs, cinema studios, production rooms және modern library бар.": {
        kz:"KHAS кампусы Golden Horn жағалауында орналасқан. Кампуста engineering labs, VR/AR labs, cinema studios, production rooms және modern library бар.",
        ru:"Кампус KHAS расположен на берегу Золотого Рога. На кампусе есть инженерные лаборатории, VR/AR лаборатории, киностудии, производственные комнаты и современная библиотека.",
        en:"KHAS campus is located on the Golden Horn waterfront. The campus has engineering labs, VR/AR labs, cinema studios, production rooms and a modern library.",
        tr:"KHAS kampüsü Haliç kıyısında yer almaktadır. Kampüste mühendislik laboratuvarları, VR/AR laboratuvarları, sinema stüdyoları, prodüksiyon odaları ve modern bir kütüphane bulunmaktadır."
      },
      "VR/AR Labs":        {kz:"VR/AR зертханалары",     ru:"VR/AR лаборатории",         en:"VR/AR Labs",        tr:"VR/AR Laboratuvarları"},
      "Film Studios":      {kz:"Кино студиялары",         ru:"Киностудии",                en:"Film Studios",      tr:"Film Stüdyoları"},
      "Engineering Labs":  {kz:"Инженерлік зертханалар",  ru:"Инженерные лаборатории",    en:"Engineering Labs",  tr:"Mühendislik Laboratuvarları"},
      "Production Rooms":  {kz:"Продукциялық бөлмелер",   ru:"Производственные комнаты",  en:"Production Rooms",  tr:"Prodüksiyon Odaları"},
      "Library":           {kz:"Кітапхана",               ru:"Библиотека",                en:"Library",           tr:"Kütüphane"},
      "Research Centers":  {kz:"Зерттеу орталықтары",     ru:"Исследовательские центры",  en:"Research Centers",  tr:"Araştırma Merkezleri"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":    {kz:"Қала:",    ru:"Город:",    en:"City:",      tr:"Şehir:"},
      "Түрі:":    {kz:"Түрі:",    ru:"Тип:",      en:"Type:",      tr:"Tür:"},
      "Тілі:":    {kz:"Тілі:",    ru:"Язык:",     en:"Language:",  tr:"Dil:"},
      "Кампус:":  {kz:"Кампус:",  ru:"Кампус:",   en:"Campus:",    tr:"Kampüs:"},
   
      // Sidebar values
      "Istanbul": {kz:"Стамбул", ru:"Стамбул",  en:"Istanbul", tr:"İstanbul"},
      "Private":  {kz:"Жеке",    ru:"Частный",  en:"Private",  tr:"Özel"},
      "English":  {kz:"Ағылшын", ru:"Английский",en:"English", tr:"İngilizce"},
      "Cibali":   {kz:"Cibali",  ru:"Джибали",  en:"Cibali",   tr:"Cibali"},
   
      // Sidebar advantages
      "Top Global Rankings":     {kz:"Жоғары жаһандық рейтинг",   ru:"Высокие мировые рейтинги",      en:"Top Global Rankings",     tr:"En Yüksek Küresel Sıralamalar"},
      "International Exchange":  {kz:"Халықаралық алмасу",         ru:"Международный обмен",           en:"International Exchange",  tr:"Uluslararası Değişim"},
      "English Education":       {kz:"Ағылшын тіліндегі білім",    ru:"Образование на английском",     en:"English Education",       tr:"İngilizce Eğitim"},
      "Modern Labs":             {kz:"Заманауи зертханалар",        ru:"Современные лаборатории",       en:"Modern Labs",             tr:"Modern Laboratuvarlar"},
      "Central Istanbul Campus": {kz:"Стамбұл орталығындағы кампус",ru:"Кампус в центре Стамбула",     en:"Central Istanbul Campus", tr:"Merkezi İstanbul Kampüsü"},
   
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
   
    EduI18n.registerPage("kadir-has", D, function(lang){
      applyText(lang);
    });
  })();