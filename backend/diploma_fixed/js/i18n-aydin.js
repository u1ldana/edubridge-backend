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
   
      // ── HERO SUBTITLE ──────────────────────────────────────────────
      "Istanbul, Türkiye · Private University · Turkish & English Programs": {
        kz:"Istanbul, Türkiye · Жеке университет · Түрік және ағылшын тіліндегі бағдарламалар",
        ru:"Стамбул, Турция · Частный университет · Программы на турецком и английском языках",
        en:"Istanbul, Türkiye · Private University · Turkish & English Programs",
        tr:"İstanbul, Türkiye · Özel üniversite · Türkçe ve İngilizce programlar"
      },
   
      // ── HERO DESCRIPTION ───────────────────────────────────────────
      "Istanbul Aydın University — Түркиядағы ең ірі private университеттердің бірі. Университет халықаралық академиялық серіктестіктерімен, үлкен кампусымен және international career бағытындағы бағдарламаларымен танымал.": {
        kz:"Istanbul Aydın University — Түркиядағы ең ірі private университеттердің бірі. Университет халықаралық академиялық серіктестіктерімен, үлкен кампусымен және international career бағытындағы бағдарламаларымен танымал.",
        ru:"Istanbul Aydın University — один из крупнейших частных университетов Турции. Университет известен международными академическими партнёрствами, большим кампусом и программами, ориентированными на международную карьеру.",
        en:"Istanbul Aydın University is one of the largest private universities in Türkiye. The university is known for its international academic partnerships, large campus and internationally oriented career programs.",
        tr:"Istanbul Aydın University, Türkiye'nin en büyük özel üniversitelerinden biridir. Üniversite, uluslararası akademik ortaklıkları, geniş kampüsü ve uluslararası kariyer odaklı programlarıyla tanınmaktadır."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",    ru:"Расположение",   en:"Location",   tr:"Konum"},
      "info-type-title":     {kz:"Түрі",         ru:"Тип",            en:"Type",       tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",   ru:"Язык обучения",  en:"Language",   tr:"Öğretim dili"},
      "Студенттер":          {kz:"Студенттер",   ru:"Студенты",       en:"Students",   tr:"Öğrenciler"},
      "43,000+ students":    {kz:"43 000+ студент", ru:"43 000+ студентов", en:"43,000+ students", tr:"43.000+ öğrenci"},
      "Private Foundation University": {
        kz:"Жеке қор университеті",
        ru:"Частный фондовый университет",
        en:"Private Foundation University",
        tr:"Özel Vakıf Üniversitesi"
      },
      "Turkish / English": {
        kz:"Түрік / Ағылшын",
        ru:"Турецкий / Английский",
        en:"Turkish / English",
        tr:"Türkçe / İngilizce"
      },
   
      // ── MAIN CONTENT HEADINGS ──────────────────────────────────────
      "Istanbul Aydın University туралы": {
        kz:"Istanbul Aydın University туралы",
        ru:"Об Istanbul Aydın University",
        en:"About Istanbul Aydın University",
        tr:"Istanbul Aydın University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Aydın University?": {
        kz:"Неге Aydın University?",
        ru:"Почему Aydın University?",
        en:"Why Aydın University?",
        tr:"Neden Aydın University?"
      },
      "Founder: Mustafa Aydın": {
        kz:"Founder: Mustafa Aydın",
        ru:"Основатель: Mustafa Aydın",
        en:"Founder: Mustafa Aydın",
        tr:"Kurucu: Mustafa Aydın"
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
      "Erasmus+ & Global Partnerships": {
        kz:"Erasmus+ және жаһандық серіктестіктер",
        ru:"Erasmus+ и глобальные партнёрства",
        en:"Erasmus+ & Global Partnerships",
        tr:"Erasmus+ ve Küresel Ortaklıklar"
      },
      "Факультеттер": {
        kz:"Факультеттер",
        ru:"Факультеты",
        en:"Faculties",
        tr:"Fakülteler"
      },
      "Engineering": {
        kz:"Инженерия",
        ru:"Инженерия",
        en:"Engineering",
        tr:"Mühendislik"
      },
      "Medicine & Health Sciences": {
        kz:"Медицина және денсаулық ғылымдары",
        ru:"Медицина и науки о здоровье",
        en:"Medicine & Health Sciences",
        tr:"Tıp ve Sağlık Bilimleri"
      },
      "Business & Economics": {
        kz:"Бизнес және Экономика",
        ru:"Бизнес и Экономика",
        en:"Business & Economics",
        tr:"İşletme ve Ekonomi"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Arts & Communication": {
        kz:"Өнер және Коммуникация",
        ru:"Искусство и Коммуникации",
        en:"Arts & Communication",
        tr:"Sanat ve İletişim"
      },
      "Campus Life": {
        kz:"Кампус өмірі",
        ru:"Жизнь в кампусе",
        en:"Campus Life",
        tr:"Kampüs Yaşamı"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Istanbul Aydın University (IAU) — 2003 жылы құрылған Түркиядағы ең ірі private university-лердің бірі.": {
        kz:"Istanbul Aydın University (IAU) — 2003 жылы құрылған Түркиядағы ең ірі private university-лердің бірі.",
        ru:"Istanbul Aydın University (IAU) — один из крупнейших частных университетов Турции, основанный в 2003 году.",
        en:"Istanbul Aydın University (IAU) is one of the largest private universities in Türkiye, founded in 2003.",
        tr:"Istanbul Aydın University (IAU), 2003 yılında kurulan Türkiye'nin en büyük özel üniversitelerinden biridir."
      },
      "Университетте 43 000+ студент және 1500+ оқытушы бар. IAU құрамына 12 факультет, 3 research institute және 40+ research center кіреді.": {
        kz:"Университетте 43 000+ студент және 1500+ оқытушы бар. IAU құрамына 12 факультет, 3 research institute және 40+ research center кіреді.",
        ru:"В университете обучаются 43 000+ студентов и работают 1500+ преподавателей. В состав IAU входят 12 факультетов, 3 научно-исследовательских института и 40+ исследовательских центров.",
        en:"The university has 43,000+ students and 1,500+ academic staff. IAU includes 12 faculties, 3 research institutes and 40+ research centers.",
        tr:"Üniversitede 43.000'den fazla öğrenci ve 1.500'den fazla öğretim üyesi bulunmaktadır. IAU bünyesinde 12 fakülte, 3 araştırma enstitüsü ve 40'tan fazla araştırma merkezi yer almaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "International career қалайтын студенттерге": {
        kz:"International career қалайтын студенттерге",
        ru:"Студентам, стремящимся к международной карьере",
        en:"Students seeking an international career",
        tr:"Uluslararası kariyer hedefleyen öğrencilere"
      },
      "Стамбұлда оқығысы келетіндерге": {
        kz:"Стамбұлда оқығысы келетіндерге",
        ru:"Желающим учиться в Стамбуле",
        en:"Those who want to study in Istanbul",
        tr:"İstanbul'da okumak isteyenler için"
      },
      "International environment іздейтіндерге": {
        kz:"Халықаралық орта іздейтіндерге",
        ru:"Ищущим международную среду",
        en:"Those seeking an international environment",
        tr:"Uluslararası ortam arayanlar için"
      },
      "Dual degree және exchange programs қызықтыратындарға": {
        kz:"Dual degree және алмасу бағдарламалары қызықтыратындарға",
        ru:"Интересующимся двойными дипломами и программами обмена",
        en:"Those interested in dual degree and exchange programs",
        tr:"Çift diploma ve değişim programlarıyla ilgilenenler için"
      },
      "Үлкен кампус пен student life маңызды студенттерге": {
        kz:"Үлкен кампус пен студенттік өмір маңызды студенттерге",
        ru:"Студентам, для которых важны большой кампус и студенческая жизнь",
        en:"Students for whom a large campus and student life matter",
        tr:"Geniş kampüs ve öğrenci yaşamına önem veren öğrencilere"
      },
   
      // ── WHY AYDIN — LIST ───────────────────────────────────────────
      "83.6% graduate employment rate": {
        kz:"83.6% түлектер жұмысқа орналасу деңгейі",
        ru:"83.6% трудоустройство выпускников",
        en:"83.6% graduate employment rate",
        tr:"%83.6 mezun istihdam oranı"
      },
      "670+ халықаралық серіктес университет": {
        kz:"670+ халықаралық серіктес университет",
        ru:"670+ международных университетов-партнёров",
        en:"670+ international partner universities",
        tr:"670'ten fazla uluslararası ortak üniversite"
      },
      "IELTS preparation center": {
        kz:"IELTS дайындық орталығы",
        ru:"Центр подготовки к IELTS",
        en:"IELTS preparation center",
        tr:"IELTS hazırlık merkezi"
      },
      "Turkish Proficiency Center": {
        kz:"Түрік тілін үйрену орталығы",
        ru:"Центр турецкого языка",
        en:"Turkish Proficiency Center",
        tr:"Türkçe Yeterlilik Merkezi"
      },
      "Dual degree agreements": {
        kz:"Қос диплом келісімдері",
        ru:"Соглашения о двойных дипломах",
        en:"Dual degree agreements",
        tr:"Çift diploma anlaşmaları"
      },
      "Үлкен modern campus": {
        kz:"Үлкен заманауи кампус",
        ru:"Большой современный кампус",
        en:"Large modern campus",
        tr:"Geniş modern kampüs"
      },
      "Research centers & technopark": {
        kz:"Зерттеу орталықтары және технопарк",
        ru:"Исследовательские центры и технопарк",
        en:"Research centers & technopark",
        tr:"Araştırma merkezleri ve teknopark"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Mustafa Aydın — Istanbul Aydın University негізін қалаушы, академик және халықаралық білім саласындағы influential тұлғалардың бірі.": {
        kz:"Mustafa Aydın — Istanbul Aydın University негізін қалаушы, академик және халықаралық білім саласындағы influential тұлғалардың бірі.",
        ru:"Mustafa Aydın — основатель Istanbul Aydın University, академик и одна из наиболее влиятельных фигур в сфере международного образования.",
        en:"Mustafa Aydın is the founder of Istanbul Aydın University, an academic and one of the most influential figures in international education.",
        tr:"Mustafa Aydın, Istanbul Aydın University'nin kurucusu, bir akademisyen ve uluslararası eğitim alanındaki en etkili isimlerden biridir."
      },
      "Ол EURAS ұйымының президенті және Түркияның халықаралық білім экспортын дамытуға белсенді қатысады.": {
        kz:"Ол EURAS ұйымының президенті және Түркияның халықаралық білім экспортын дамытуға белсенді қатысады.",
        ru:"Он является президентом организации EURAS и активно участвует в развитии экспорта международного образования Турции.",
        en:"He is the president of EURAS and actively contributes to developing Türkiye's international education exports.",
        tr:"EURAS'ın başkanıdır ve Türkiye'nin uluslararası eğitim ihracatının geliştirilmesine aktif olarak katkı sağlamaktadır."
      },
   
      // ── ACCREDITATIONS ─────────────────────────────────────────────
      "Университет engineering, dentistry, business және басқа бағыттар бойынша халықаралық аккредитацияларға ие.": {
        kz:"Университет engineering, dentistry, business және басқа бағыттар бойынша халықаралық аккредитацияларға ие.",
        ru:"Университет имеет международные аккредитации по направлениям инженерия, стоматология, бизнес и другим.",
        en:"The university holds international accreditations in engineering, dentistry, business and other fields.",
        tr:"Üniversite; mühendislik, diş hekimliği, işletme ve diğer alanlarda uluslararası akreditasyonlara sahiptir."
      },
   
      // ── EXCHANGE PROGRAM PILLS ─────────────────────────────────────
      "University of Seoul":        {kz:"University of Seoul",        ru:"Сеульский университет",      en:"University of Seoul",        tr:"Seul Üniversitesi"},
      "UAM Madrid":                 {kz:"UAM Madrid",                 ru:"UAM Мадрид",                 en:"UAM Madrid",                 tr:"UAM Madrid"},
      "CBS Germany":                {kz:"CBS Germany",                ru:"CBS Германия",               en:"CBS Germany",                tr:"CBS Almanya"},
      "Jeonbuk National University":{kz:"Jeonbuk National University",ru:"Национальный ун-т Чонбук",   en:"Jeonbuk National University",tr:"Jeonbuk Ulusal Üniversitesi"},
      "Airlangga University":       {kz:"Airlangga University",       ru:"Университет Айрланга",       en:"Airlangga University",       tr:"Airlangga Üniversitesi"},
      "Sorbonne Paris Nord":        {kz:"Sorbonne Paris Nord",        ru:"Сорбонна Париж Норд",        en:"Sorbonne Paris Nord",        tr:"Sorbonne Paris Nord"},
      "University Prague":          {kz:"Прага университеті",         ru:"Университет Праги",          en:"University Prague",          tr:"Prag Üniversitesi"},
      "Italy & Denmark Partners":   {kz:"Италия және Дания серіктестері", ru:"Партнёры в Италии и Дании", en:"Italy & Denmark Partners",   tr:"İtalya ve Danimarka Ortakları"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Engineering":   {kz:"Компьютерлік инженерия",  ru:"Компьютерная инженерия", en:"Computer Engineering",   tr:"Bilgisayar Mühendisliği"},
      "Software Engineering":   {kz:"Бағдарламалық инженерия", ru:"Программная инженерия",  en:"Software Engineering",   tr:"Yazılım Mühendisliği"},
      "Industrial Engineering": {kz:"Өнеркәсіптік инженерия",  ru:"Промышленная инженерия", en:"Industrial Engineering",  tr:"Endüstri Mühendisliği"},
      "Civil Engineering":      {kz:"Азаматтық инженерия",     ru:"Гражданская инженерия",  en:"Civil Engineering",      tr:"İnşaat Mühendisliği"},
      "Mechanical Engineering": {kz:"Механикалық инженерия",   ru:"Механическая инженерия", en:"Mechanical Engineering", tr:"Makine Mühendisliği"},
      "Aerospace Engineering":  {kz:"Аэроғарыштық инженерия",  ru:"Аэрокосмическая инженерия", en:"Aerospace Engineering", tr:"Havacılık ve Uzay Mühendisliği"},
   
      // ── MEDICINE PROGRAMS ──────────────────────────────────────────
      "Medicine":              {kz:"Медицина",          ru:"Медицина",              en:"Medicine",              tr:"Tıp"},
      "Dentistry":             {kz:"Стоматология",      ru:"Стоматология",          en:"Dentistry",             tr:"Diş Hekimliği"},
      "Pharmacy":              {kz:"Фармация",          ru:"Фармация",              en:"Pharmacy",              tr:"Eczacılık"},
      "Nursing":               {kz:"Мейірбикелік іс",  ru:"Сестринское дело",      en:"Nursing",               tr:"Hemşirelik"},
      "Nutrition & Dietetics": {kz:"Тамақтану және диетология", ru:"Нутрициология и диетология", en:"Nutrition & Dietetics", tr:"Beslenme ve Diyetetik"},
      "Physiotherapy":         {kz:"Физиотерапия",     ru:"Физиотерапия",          en:"Physiotherapy",         tr:"Fizyoterapi"},
   
      // ── BUSINESS PROGRAMS ──────────────────────────────────────────
      "Business Administration": {kz:"Бизнесті басқару",    ru:"Управление бизнесом",   en:"Business Administration", tr:"İşletme Yönetimi"},
      "Economics & Finance":     {kz:"Экономика және қаржы", ru:"Экономика и финансы",   en:"Economics & Finance",    tr:"Ekonomi ve Finans"},
      "International Trade":     {kz:"Халықаралық сауда",   ru:"Международная торговля", en:"International Trade",    tr:"Uluslararası Ticaret"},
      "Political Science":       {kz:"Саяси ғылымдар",      ru:"Политология",           en:"Political Science",      tr:"Siyaset Bilimi"},
      "Aviation Management":     {kz:"Авиациялық менеджмент",ru:"Авиационный менеджмент",en:"Aviation Management",    tr:"Havacılık Yönetimi"},
   
      // ── ARCHITECTURE & DESIGN PROGRAMS ────────────────────────────
      "Architecture":         {kz:"Архитектура",       ru:"Архитектура",       en:"Architecture",        tr:"Mimarlık"},
      "Interior Architecture":{kz:"Интерьер дизайны",  ru:"Интерьерная архитектура", en:"Interior Architecture", tr:"İç Mimarlık"},
      "Graphic Design":       {kz:"Графикалық дизайн", ru:"Графический дизайн", en:"Graphic Design",      tr:"Grafik Tasarım"},
      "Fashion Design":       {kz:"Сән дизайны",       ru:"Дизайн одежды",     en:"Fashion Design",      tr:"Moda Tasarımı"},
   
      // ── ARTS & COMMUNICATION PROGRAMS ─────────────────────────────
      "Journalism":         {kz:"Журналистика",    ru:"Журналистика",       en:"Journalism",        tr:"Gazetecilik"},
      "Cinema & Television":{kz:"Кино және теледидар", ru:"Кино и телевидение", en:"Cinema & Television", tr:"Sinema ve Televizyon"},
      "New Media":          {kz:"Жаңа медиа",     ru:"Новые медиа",        en:"New Media",         tr:"Yeni Medya"},
      "Animation":          {kz:"Анимация",       ru:"Анимация",           en:"Animation",         tr:"Animasyon"},
      "Drama & Acting":     {kz:"Драма және актерлік", ru:"Драма и актёрское мастерство", en:"Drama & Acting", tr:"Drama ve Oyunculuk"},
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "Istanbul Aydın University кампусы — private university арасында ең үлкен кампустардың бірі.": {
        kz:"Istanbul Aydın University кампусы — private university арасында ең үлкен кампустардың бірі.",
        ru:"Кампус Istanbul Aydın University — один из крупнейших среди частных университетов.",
        en:"Istanbul Aydın University campus is one of the largest among private universities.",
        tr:"Istanbul Aydın University kampüsü, özel üniversiteler arasındaki en büyük kampüslerden biridir."
      },
      "Medical Block":    {kz:"Медициналық блок",  ru:"Медицинский блок",   en:"Medical Block",    tr:"Tıp Bloğu"},
      "Technopark":       {kz:"Технопарк",         ru:"Технопарк",          en:"Technopark",       tr:"Teknopark"},
      "Research Centers": {kz:"Зерттеу орталықтары",ru:"Исследовательские центры", en:"Research Centers", tr:"Araştırma Merkezleri"},
      "Sports Areas":     {kz:"Спорт алаңдары",    ru:"Спортивные площадки", en:"Sports Areas",    tr:"Spor Alanları"},
      "Cultural Spaces":  {kz:"Мәдени кеңістіктер",ru:"Культурные пространства", en:"Cultural Spaces", tr:"Kültür Alanları"},
      "Student Clubs":    {kz:"Студенттік клубтар", ru:"Студенческие клубы", en:"Student Clubs",   tr:"Öğrenci Kulüpleri"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":    {kz:"Қала:",    ru:"Город:",    en:"City:",      tr:"Şehir:"},
      "Түрі:":    {kz:"Түрі:",    ru:"Тип:",      en:"Type:",      tr:"Tür:"},
      "Тілі:":    {kz:"Тілі:",    ru:"Язык:",     en:"Language:",  tr:"Dil:"},
      "Студент:": {kz:"Студент:", ru:"Студенты:", en:"Students:",  tr:"Öğrenci:"},
   
      // Sidebar values
      "Istanbul": {kz:"Стамбул", ru:"Стамбул",  en:"Istanbul",  tr:"İstanbul"},
      "Private":  {kz:"Жеке",    ru:"Частный",  en:"Private",   tr:"Özel"},
      "43,000+":  {kz:"43 000+", ru:"43 000+",  en:"43,000+",   tr:"43.000+"},
   
      // Sidebar advantages
      "670+ International Partners": {kz:"670+ халықаралық серіктес",       ru:"670+ международных партнёров",      en:"670+ international partners",    tr:"670+ uluslararası ortak"},
      "Dual Degree Programs":        {kz:"Қос диплом бағдарламалары",       ru:"Программы двойного диплома",        en:"Dual Degree Programs",           tr:"Çift Diploma Programları"},
      "International Campus":        {kz:"Халықаралық кампус",              ru:"Международный кампус",              en:"International Campus",           tr:"Uluslararası Kampüs"},
      "IELTS Preparation":           {kz:"IELTS дайындығы",                 ru:"Подготовка к IELTS",                en:"IELTS Preparation",              tr:"IELTS Hazırlık"},
      "Large Student Network":       {kz:"Үлкен студенттік желі",           ru:"Большая студенческая сеть",         en:"Large Student Network",          tr:"Geniş Öğrenci Ağı"},
   
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
   
    EduI18n.registerPage("aydin", D, function(lang){
      applyText(lang);
    });
  })();