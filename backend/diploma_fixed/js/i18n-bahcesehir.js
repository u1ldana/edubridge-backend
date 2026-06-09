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
      "Istanbul, Türkiye · Private University · English Medium Education": {
        kz:"Istanbul, Türkiye · Жеке университет · Ағылшын тілінде білім",
        ru:"Стамбул, Турция · Частный университет · Обучение на английском",
        en:"Istanbul, Türkiye · Private University · English Medium Education",
        tr:"İstanbul, Türkiye · Özel üniversite · İngilizce eğitim"
      },
      "Bahçeşehir University (BAU) — Стамбұлдың дәл орталығында орналасқан халықаралық private university. Университеттің ұраны — \"World University in the Heart of Istanbul\".": {
        kz:"Bahçeşehir University (BAU) — Стамбұлдың дәл орталығында орналасқан халықаралық private university. Университеттің ұраны — \"World University in the Heart of Istanbul\".",
        ru:"Bahçeşehir University (BAU) — международный частный университет, расположенный в самом центре Стамбула. Девиз университета — «World University in the Heart of Istanbul».",
        en:"Bahçeşehir University (BAU) is an international private university located in the very heart of Istanbul. The university's motto is \"World University in the Heart of Istanbul\".",
        tr:"Bahçeşehir University (BAU), İstanbul'un tam merkezinde yer alan uluslararası bir özel üniversitedir. Üniversitenin sloganı \"İstanbul'un Kalbinde Dünya Üniversitesi\"dir."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "Рейтинг": {kz:"Рейтинг", ru:"Рейтинг", en:"Rating", tr:"Sıralama"},
      "Top Universities in Türkiye": {
        kz:"Түркия TOP университеттері",
        ru:"Ведущие университеты Турции",
        en:"Top Universities in Türkiye",
        tr:"Türkiye'nin Önde Gelen Üniversiteleri"
      },
      "Private Foundation University": {
        kz:"Жеке қор университеті",
        ru:"Частный фондовый университет",
        en:"Private Foundation University",
        tr:"Özel Vakıf Üniversitesi"
      },
      "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "Bahçeşehir University туралы": {
        kz:"Bahçeşehir University туралы",
        ru:"О Bahçeşehir University",
        en:"About Bahçeşehir University",
        tr:"Bahçeşehir University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Bahçeşehir University?": {
        kz:"Неге Bahçeşehir University?",
        ru:"Почему Bahçeşehir University?",
        en:"Why Bahçeşehir University?",
        tr:"Neden Bahçeşehir University?"
      },
      "Founder: Enver Yücel": {
        kz:"Founder: Enver Yücel",
        ru:"Основатель: Enver Yücel",
        en:"Founder: Enver Yücel",
        tr:"Kurucu: Enver Yücel"
      },
      "Аккредитациялар": {
        kz:"Аккредитациялар",
        ru:"Аккредитации",
        en:"Accreditations",
        tr:"Akreditasyonlar"
      },
      "International Campuses": {
        kz:"Халықаралық кампустар",
        ru:"Международные кампусы",
        en:"International Campuses",
        tr:"Uluslararası Kampüsler"
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
      "CO-OP Program": {
        kz:"CO-OP бағдарламасы",
        ru:"Программа CO-OP",
        en:"CO-OP Program",
        tr:"CO-OP Programı"
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
      "Medicine & Health": {
        kz:"Медицина және Денсаулық",
        ru:"Медицина и Здоровье",
        en:"Medicine & Health",
        tr:"Tıp ve Sağlık"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Communication & Media": {
        kz:"Коммуникация және Медиа",
        ru:"Коммуникации и Медиа",
        en:"Communication & Media",
        tr:"İletişim ve Medya"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Bahçeşehir University (BAU) — Түркиядағы ең танымал және халықаралық бағыттағы private university-лердің бірі. Университет 1998 жылы құрылған және бүгінде әлемдік деңгейдегі академиялық желіге ие.": {
        kz:"Bahçeşehir University (BAU) — Түркиядағы ең танымал және халықаралық бағыттағы private university-лердің бірі. Университет 1998 жылы құрылған және бүгінде әлемдік деңгейдегі академиялық желіге ие.",
        ru:"Bahçeşehir University (BAU) — один из самых известных и международно ориентированных частных университетов Турции. Университет основан в 1998 году и сегодня располагает академической сетью мирового уровня.",
        en:"Bahçeşehir University (BAU) is one of the most recognised and internationally oriented private universities in Türkiye. Founded in 1998, it today holds a world-class academic network.",
        tr:"Bahçeşehir University (BAU), Türkiye'nin en tanınmış ve uluslararası odaklı özel üniversitelerinden biridir. 1998 yılında kurulan üniversite, bugün dünya standartlarında bir akademik ağa sahiptir."
      },
      "BAU инженерия, медицина, құқық, business және communication бағыттарымен танымал.": {
        kz:"BAU инженерия, медицина, құқық, business және communication бағыттарымен танымал.",
        ru:"BAU известен направлениями инженерия, медицина, право, бизнес и коммуникации.",
        en:"BAU is known for its engineering, medicine, law, business and communication programs.",
        tr:"BAU; mühendislik, tıp, hukuk, işletme ve iletişim alanlarıyla tanınmaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Стамбұлдың орталығында оқығысы келетін студенттерге": {
        kz:"Стамбұлдың орталығында оқығысы келетін студенттерге",
        ru:"Студентам, желающим учиться в центре Стамбула",
        en:"Students who want to study in the heart of Istanbul",
        tr:"İstanbul'un merkezinde okumak isteyen öğrencilere"
      },
      "English medium education қалайтындарға": {
        kz:"Ағылшын тілінде білім алғысы келетіндерге",
        ru:"Желающим получить образование на английском языке",
        en:"Those who prefer English medium education",
        tr:"İngilizce eğitim almak isteyenler için"
      },
      "International diploma алғысы келетіндерге": {
        kz:"Халықаралық диплом алғысы келетіндерге",
        ru:"Желающим получить международный диплом",
        en:"Those who want an international diploma",
        tr:"Uluslararası diploma almak isteyenler için"
      },
      "Career-oriented education маңызды студенттерге": {
        kz:"Карьераға бағытталған білім маңызды студенттерге",
        ru:"Студентам, для которых важно карьерно ориентированное образование",
        en:"Students for whom career-oriented education matters",
        tr:"Kariyer odaklı eğitimi önemseyen öğrencilere"
      },
      "Internship және work experience іздейтіндерге": {
        kz:"Тағылымдама және жұмыс тәжірибесі іздейтіндерге",
        ru:"Ищущим стажировку и опыт работы",
        en:"Those seeking internship and work experience",
        tr:"Staj ve iş deneyimi arayanlar için"
      },
   
      // ── WHY BAU — LIST ─────────────────────────────────────────────
      "World University in the Heart of Istanbul": {
        kz:"Стамбұл жүрегіндегі дүниежүзілік университет",
        ru:"Мировой университет в сердце Стамбула",
        en:"World University in the Heart of Istanbul",
        tr:"İstanbul'un Kalbinde Dünya Üniversitesi"
      },
      "Top private universities in Türkiye": {
        kz:"Түркиядағы үздік private университеттер",
        ru:"Ведущие частные университеты Турции",
        en:"Top private universities in Türkiye",
        tr:"Türkiye'nin önde gelen özel üniversiteleri"
      },
      "200-ге жуық халықаралық партнер": {
        kz:"200-ге жуық халықаралық серіктес",
        ru:"Около 200 международных партнёров",
        en:"Around 200 international partners",
        tr:"200'e yakın uluslararası ortak"
      },
      "Washington, Berlin, Batumi, Cyprus campuses": {
        kz:"Вашингтон, Берлин, Батуми, Кипр кампустары",
        ru:"Кампусы в Вашингтоне, Берлине, Батуми, на Кипре",
        en:"Washington, Berlin, Batumi, Cyprus campuses",
        tr:"Washington, Berlin, Batum, Kıbrıs kampüsleri"
      },
      "CO-OP career program": {
        kz:"CO-OP карьера бағдарламасы",
        ru:"Карьерная программа CO-OP",
        en:"CO-OP career program",
        tr:"CO-OP kariyer programı"
      },
      "International exchange opportunities": {
        kz:"Халықаралық алмасу мүмкіндіктері",
        ru:"Возможности международного обмена",
        en:"International exchange opportunities",
        tr:"Uluslararası değişim imkânları"
      },
      "Strong practical education system": {
        kz:"Күшті практикалық білім жүйесі",
        ru:"Сильная система практического образования",
        en:"Strong practical education system",
        tr:"Güçlü uygulamalı eğitim sistemi"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Enver Yücel — Түркиядағы ең танымал білім беру лидерлерінің бірі. Ол BAU Global Education Network жүйесін құрды.": {
        kz:"Enver Yücel — Түркиядағы ең танымал білім беру лидерлерінің бірі. Ол BAU Global Education Network жүйесін құрды.",
        ru:"Enver Yücel — один из самых известных лидеров в сфере образования Турции. Он создал систему BAU Global Education Network.",
        en:"Enver Yücel is one of Türkiye's most prominent education leaders. He founded the BAU Global Education Network.",
        tr:"Enver Yücel, Türkiye'nin en tanınmış eğitim liderlerinden biridir. BAU Global Education Network sistemini o kurmuştur."
      },
      "Бүгінде бұл желі 4 континентте 9 елде орналасқан университеттер, language schools және education centers-ті қамтиды.": {
        kz:"Бүгінде бұл желі 4 континентте 9 елде орналасқан университеттер, language schools және education centers-ті қамтиды.",
        ru:"Сегодня эта сеть охватывает университеты, языковые школы и образовательные центры в 9 странах на 4 континентах.",
        en:"Today this network includes universities, language schools and education centers in 9 countries across 4 continents.",
        tr:"Bugün bu ağ, 4 kıtada 9 ülkede yer alan üniversiteleri, dil okullarını ve eğitim merkezlerini kapsamaktadır."
      },
   
      // ── INTERNATIONAL CAMPUSES ─────────────────────────────────────
      "Berlin":         {kz:"Берлин",     ru:"Берлин",       en:"Berlin",          tr:"Berlin"},
      "Washington D.C.":{kz:"Вашингтон", ru:"Вашингтон",    en:"Washington D.C.", tr:"Washington D.C."},
      "Batumi":         {kz:"Батуми",     ru:"Батуми",       en:"Batumi",          tr:"Batum"},
      "Cyprus":         {kz:"Кипр",       ru:"Кипр",         en:"Cyprus",          tr:"Kıbrıs"},
   
      // ── EXCHANGE PARTNERS ──────────────────────────────────────────
      "University of Toronto":        {kz:"Торонто университеті",         ru:"Университет Торонто",          en:"University of Toronto",         tr:"Toronto Üniversitesi"},
      "Sorbonne University":          {kz:"Сорбонна университеті",        ru:"Университет Сорбонна",          en:"Sorbonne University",           tr:"Sorbonne Üniversitesi"},
      "Stevens Institute":            {kz:"Stevens институты",            ru:"Институт Стивенса",             en:"Stevens Institute",             tr:"Stevens Enstitüsü"},
      "Berlin International University":{kz:"Берлин халықаралық университеті",ru:"Берлинский международный университет",en:"Berlin International University",tr:"Berlin Uluslararası Üniversitesi"},
      "Bay Atlantic University":      {kz:"Bay Atlantic университеті",    ru:"Университет Bay Atlantic",     en:"Bay Atlantic University",       tr:"Bay Atlantic Üniversitesi"},
      "Japan Exchange":               {kz:"Жапония алмасуы",              ru:"Обмен с Японией",              en:"Japan Exchange",                tr:"Japonya Değişimi"},
      "Erasmus+":                     {kz:"Erasmus+",                     ru:"Erasmus+",                     en:"Erasmus+",                      tr:"Erasmus+"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Engineering":             {kz:"Компьютерлік инженерия",        ru:"Компьютерная инженерия",         en:"Computer Engineering",              tr:"Bilgisayar Mühendisliği"},
      "Software Engineering":             {kz:"Бағдарламалық инженерия",       ru:"Программная инженерия",          en:"Software Engineering",              tr:"Yazılım Mühendisliği"},
      "Artificial Intelligence Engineering":{kz:"Жасанды интеллект инженериясы",ru:"Инженерия искусственного интеллекта",en:"Artificial Intelligence Engineering",tr:"Yapay Zeka Mühendisliği"},
      "Biomedical Engineering":           {kz:"Биомедициналық инженерия",      ru:"Биомедицинская инженерия",       en:"Biomedical Engineering",            tr:"Biyomedikal Mühendisliği"},
      "Civil Engineering":                {kz:"Азаматтық инженерия",           ru:"Гражданское строительство",      en:"Civil Engineering",                 tr:"İnşaat Mühendisliği"},
      "Mechatronics":                     {kz:"Мехатроника",                   ru:"Мехатроника",                   en:"Mechatronics",                      tr:"Mekatronik"},
   
      // ── BUSINESS PROGRAMS ──────────────────────────────────────────
      "Business Administration": {kz:"Бизнесті басқару",     ru:"Управление бизнесом",    en:"Business Administration", tr:"İşletme Yönetimi"},
      "Economics":               {kz:"Экономика",             ru:"Экономика",              en:"Economics",               tr:"Ekonomi"},
      "Finance":                 {kz:"Қаржы",                 ru:"Финансы",                en:"Finance",                 tr:"Finans"},
      "International Trade":     {kz:"Халықаралық сауда",    ru:"Международная торговля", en:"International Trade",     tr:"Uluslararası Ticaret"},
      "Psychology":              {kz:"Психология",            ru:"Психология",             en:"Psychology",              tr:"Psikoloji"},
   
      // ── MEDICINE PROGRAMS ──────────────────────────────────────────
      "Medicine":        {kz:"Медицина",       ru:"Медицина",          en:"Medicine",        tr:"Tıp"},
      "Dentistry":       {kz:"Стоматология",   ru:"Стоматология",      en:"Dentistry",       tr:"Diş Hekimliği"},
      "Pharmacy":        {kz:"Фармация",       ru:"Фармация",          en:"Pharmacy",        tr:"Eczacılık"},
      "Nursing":         {kz:"Мейірбикелік іс",ru:"Сестринское дело",  en:"Nursing",         tr:"Hemşirelik"},
      "Physiotherapy":   {kz:"Физиотерапия",  ru:"Физиотерапия",      en:"Physiotherapy",   tr:"Fizyoterapi"},
   
      // ── ARCHITECTURE PROGRAMS ──────────────────────────────────────
      "Architecture":          {kz:"Архитектура",       ru:"Архитектура",              en:"Architecture",          tr:"Mimarlık"},
      "Interior Architecture": {kz:"Интерьер дизайны",  ru:"Интерьерная архитектура",  en:"Interior Architecture", tr:"İç Mimarlık"},
      "Industrial Design":     {kz:"Өнеркәсіптік дизайн",ru:"Промышленный дизайн",    en:"Industrial Design",     tr:"Endüstriyel Tasarım"},
   
      // ── COMMUNICATION PROGRAMS ─────────────────────────────────────
      "Cinema & Television": {kz:"Кино және теледидар",    ru:"Кино и телевидение",      en:"Cinema & Television", tr:"Sinema ve Televizyon"},
      "Digital Game Design": {kz:"Цифрлық ойын дизайны",  ru:"Дизайн цифровых игр",     en:"Digital Game Design", tr:"Dijital Oyun Tasarımı"},
      "Animation":           {kz:"Анимация",               ru:"Анимация",                en:"Animation",           tr:"Animasyon"},
      "Marketing":           {kz:"Маркетинг",              ru:"Маркетинг",               en:"Marketing",           tr:"Pazarlama"},
      "New Media":           {kz:"Жаңа медиа",             ru:"Новые медиа",             en:"New Media",           tr:"Yeni Medya"},
   
      // ── CO-OP PARAGRAPH ────────────────────────────────────────────
      "BAU CO-OP Program студенттерге оқу барысында real company experience алуға мүмкіндік береді.": {
        kz:"BAU CO-OP Program студенттерге оқу барысында real company experience алуға мүмкіндік береді.",
        ru:"Программа BAU CO-OP даёт студентам возможность получить реальный опыт работы в компаниях в процессе обучения.",
        en:"The BAU CO-OP Program gives students the opportunity to gain real company experience while studying.",
        tr:"BAU CO-OP Programı, öğrencilere eğitimleri süresince gerçek şirket deneyimi kazanma imkânı sunmaktadır."
      },
   
      // CO-OP company pills (internationally recognised, kept in English)
      "Microsoft":     {kz:"Microsoft",    ru:"Microsoft",    en:"Microsoft",    tr:"Microsoft"},
      "IBM":           {kz:"IBM",          ru:"IBM",          en:"IBM",          tr:"IBM"},
      "CISCO":         {kz:"CISCO",        ru:"CISCO",        en:"CISCO",        tr:"CISCO"},
      "Mercedes-Benz": {kz:"Mercedes-Benz",ru:"Mercedes-Benz",en:"Mercedes-Benz",tr:"Mercedes-Benz"},
      "Pfizer":        {kz:"Pfizer",       ru:"Pfizer",       en:"Pfizer",       tr:"Pfizer"},
      "KPMG":          {kz:"KPMG",         ru:"KPMG",         en:"KPMG",         tr:"KPMG"},
      "HP":            {kz:"HP",           ru:"HP",           en:"HP",           tr:"HP"},
      "Hilton":        {kz:"Hilton",       ru:"Hilton",       en:"Hilton",       tr:"Hilton"},
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "BAU кампусы Стамбұлдың орталығында орналасқан және студенттерге халықаралық student life atmosphere ұсынады.": {
        kz:"BAU кампусы Стамбұлдың орталығында орналасқан және студенттерге халықаралық student life atmosphere ұсынады.",
        ru:"Кампус BAU расположен в центре Стамбула и предлагает студентам атмосферу международной студенческой жизни.",
        en:"BAU's campus is located in the heart of Istanbul and offers students an international student life atmosphere.",
        tr:"BAU kampüsü İstanbul'un merkezinde yer almakta ve öğrencilere uluslararası bir öğrenci yaşam atmosferi sunmaktadır."
      },
      "Research Labs":          {kz:"Зерттеу зертханалары", ru:"Исследовательские лаборатории", en:"Research Labs",          tr:"Araştırma Laboratuvarları"},
      "Brain Research Center":  {kz:"Ми зерттеу орталығы",  ru:"Центр исследования мозга",      en:"Brain Research Center",  tr:"Beyin Araştırma Merkezi"},
      "Library":                {kz:"Кітапхана",             ru:"Библиотека",                    en:"Library",                tr:"Kütüphane"},
      "Conference Halls":       {kz:"Конференц-залдар",      ru:"Конференц-залы",                en:"Conference Halls",       tr:"Konferans Salonları"},
      "Student Clubs":          {kz:"Студенттік клубтар",    ru:"Студенческие клубы",            en:"Student Clubs",          tr:"Öğrenci Kulüpleri"},
      "International Campus Life":{kz:"Халықаралық кампус өмірі",ru:"Международная жизнь в кампусе",en:"International Campus Life",tr:"Uluslararası Kampüs Yaşamı"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":    {kz:"Қала:",    ru:"Город:",    en:"City:",      tr:"Şehir:"},
      "Түрі:":    {kz:"Түрі:",    ru:"Тип:",      en:"Type:",      tr:"Tür:"},
      "Тілі:":    {kz:"Тілі:",    ru:"Язык:",     en:"Language:",  tr:"Dil:"},
      "Бағыты:":  {kz:"Бағыты:", ru:"Направление:", en:"Focus:", tr:"Odak:"},
   
      // Sidebar values
      "Istanbul":              {kz:"Стамбул",              ru:"Стамбул",                   en:"Istanbul",              tr:"İstanbul"},
      "Private":               {kz:"Жеке",                 ru:"Частный",                   en:"Private",               tr:"Özel"},
      "International Education":{kz:"Халықаралық білім",   ru:"Международное образование", en:"International Education",tr:"Uluslararası Eğitim"},
   
      // Sidebar advantages
      "International Campuses": {kz:"Халықаралық кампустар",   ru:"Международные кампусы",      en:"International Campuses", tr:"Uluslararası Kampüsler"},
      "CO-OP Program":          {kz:"CO-OP бағдарламасы",      ru:"Программа CO-OP",             en:"CO-OP Program",          tr:"CO-OP Programı"},
      "Global Exchange":        {kz:"Жаһандық алмасу",         ru:"Глобальный обмен",           en:"Global Exchange",        tr:"Küresel Değişim"},
      "English Education":      {kz:"Ағылшын тіліндегі білім", ru:"Образование на английском",  en:"English Education",      tr:"İngilizce Eğitim"},
      "Strong Career Network":  {kz:"Күшті карьера желісі",    ru:"Сильная карьерная сеть",     en:"Strong Career Network",  tr:"Güçlü Kariyer Ağı"},
   
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
   
    EduI18n.registerPage("bahcesehir", D, function(lang){
      applyText(lang);
    });
  })();