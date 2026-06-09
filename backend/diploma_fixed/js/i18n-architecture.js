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
   
      // ── BACK & ACTION BUTTONS ──────────────────────────────────────
      "back-btn": {
        kz:"← Мамандықтарға қайту",
        ru:"← Назад к специальностям",
        en:"← Back to specialties",
        tr:"← Bölümlere dön"
      },
      "back-to-specs": {
        kz:"← Мамандықтарға қайту",
        ru:"← Назад к специальностям",
        en:"← Back to specialties",
        tr:"← Bölümlere dön"
      },
      "spec-check-btn": {
        kz:"Маған сай ма екенін тексеру",
        ru:"Проверить, подходит ли мне",
        en:"Check if it suits me",
        tr:"Bana uygun mu kontrol et"
      },
      "spec-unis-btn": {
        kz:"Университеттерді көру",
        ru:"Смотреть университеты",
        en:"View universities",
        tr:"Üniversiteleri gör"
      },
      "spec-rec-btn": {
        kz:"Recommendation алу",
        ru:"Получить рекомендацию",
        en:"Get recommendation",
        tr:"Öneri al"
      },
      "spec-test-btn": {
        kz:"Тесттен өту",
        ru:"Пройти тест",
        en:"Take the test",
        tr:"Teste gir"
      },
      "all-specs-btn": {
        kz:"Барлық мамандықтар",
        ru:"Все специальности",
        en:"All specialties",
        tr:"Tüm bölümler"
      },
   
      // ── HERO SUBTITLE ──────────────────────────────────────────────
      "Creative Design · Urban Thinking · Technical Drawing · Future Cities": {
        kz:"Шығармашылық Дизайн · Қала Ойлауы · Техникалық Сурет · Болашақ Қалалар",
        ru:"Творческий Дизайн · Городское Мышление · Техническое Черчение · Города Будущего",
        en:"Creative Design · Urban Thinking · Technical Drawing · Future Cities",
        tr:"Yaratıcı Tasarım · Kentsel Düşünce · Teknik Çizim · Gelecek Şehirler"
      },
   
      // ── HERO DESCRIPTION ───────────────────────────────────────────
      "Architecture — ғимарат жобалау ғана емес, адамның өмір сүру ортасын, қала кеңістігін, эстетика мен инженерлік шешімді біріктіретін креативті әрі стратегиялық мамандық.": {
        kz:"Architecture — ғимарат жобалау ғана емес, адамның өмір сүру ортасын, қала кеңістігін, эстетика мен инженерлік шешімді біріктіретін креативті әрі стратегиялық мамандық.",
        ru:"Архитектура — это не только проектирование зданий, но и творческая, стратегическая специальность, объединяющая среду обитания человека, городское пространство, эстетику и инженерные решения.",
        en:"Architecture is not just building design — it is a creative and strategic profession that combines human living environments, urban space, aesthetics and engineering solutions.",
        tr:"Mimarlık yalnızca bina tasarımı değil; insanın yaşam ortamını, kentsel mekânı, estetiği ve mühendislik çözümlerini bir araya getiren yaratıcı ve stratejik bir meslektir."
      },
   
      // ── INFO CARD LABELS ───────────────────────────────────────────
      "spec-field-label": {kz:"Бағыт",         ru:"Направление",   en:"Field",     tr:"Alan"},
      "spec-level-label": {kz:"Оқу деңгейі",   ru:"Уровень",       en:"Level",     tr:"Düzey"},
      "spec-lang-label":  {kz:"Оқыту тілі",    ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "spec-who-label":   {kz:"Кімге сай?",    ru:"Кому подходит?",en:"Who fits?", tr:"Kime uygun?"},
   
      // Info card values
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Bachelor / Master": {
        kz:"Бакалавр / Магистр",
        ru:"Бакалавриат / Магистратура",
        en:"Bachelor / Master",
        tr:"Lisans / Yüksek Lisans"
      },
      "English / Turkish": {
        kz:"Ағылшын / Түрік",
        ru:"Английский / Турецкий",
        en:"English / Turkish",
        tr:"İngilizce / Türkçe"
      },
      "Creative + Technical students": {
        kz:"Шығармашылық + Техникалық студенттер",
        ru:"Творческие и технические студенты",
        en:"Creative + Technical students",
        tr:"Yaratıcı + Teknik öğrenciler"
      },
   
      // ── SECTION HEADINGS ───────────────────────────────────────────
      "spec-about-title": {
        kz:"Бұл мамандық не туралы?",
        ru:"О чём эта специальность?",
        en:"What is this specialty about?",
        tr:"Bu bölüm ne hakkında?"
      },
      "spec-who-title": {
        kz:"Кімдерге сай келеді?",
        ru:"Кому подходит?",
        en:"Who does it suit?",
        tr:"Kimler için uygundur?"
      },
      "spec-subjects-title": {
        kz:"Негізгі пәндер",
        ru:"Основные предметы",
        en:"Core subjects",
        tr:"Temel dersler"
      },
      "spec-skills-title": {
        kz:"Қандай skills керек?",
        ru:"Какие навыки нужны?",
        en:"What skills are needed?",
        tr:"Hangi beceriler gerekli?"
      },
      "spec-careers-title": {
        kz:"Болашақ профессиялар",
        ru:"Будущие профессии",
        en:"Future careers",
        tr:"Gelecekteki meslekler"
      },
      "spec-unis-title": {
        kz:"Осы бағытқа сай университеттер",
        ru:"Подходящие университеты",
        en:"Universities for this field",
        tr:"Bu alana uygun üniversiteler"
      },
      "Неге Түркияда Architecture оқу тиімді?": {
        kz:"Неге Түркияда Architecture оқу тиімді?",
        ru:"Почему выгодно изучать архитектуру в Турции?",
        en:"Why study Architecture in Türkiye?",
        tr:"Türkiye'de Mimarlık neden avantajlıdır?"
      },
      "Portfolio не үшін маңызды?": {
        kz:"Portfolio не үшін маңызды?",
        ru:"Зачем нужно портфолио?",
        en:"Why is a portfolio important?",
        tr:"Portfolyo neden önemlidir?"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Architecture мамандығы студентке ғимарат, интерьер, қоғамдық кеңістік және қалалық орта жобалауды үйретеді. Бұл бағытта тек сурет салу емес, design thinking, spatial planning, sustainability, construction logic және presentation skills қатар дамиды.": {
        kz:"Architecture мамандығы студентке ғимарат, интерьер, қоғамдық кеңістік және қалалық орта жобалауды үйретеді. Бұл бағытта тек сурет салу емес, design thinking, spatial planning, sustainability, construction logic және presentation skills қатар дамиды.",
        ru:"Специальность «Архитектура» учит студента проектировать здания, интерьеры, общественные пространства и городскую среду. В этом направлении развиваются не только навыки рисования, но и design thinking, spatial planning, sustainability, construction logic и presentation skills.",
        en:"The Architecture specialty teaches students to design buildings, interiors, public spaces and urban environments. This field develops not only drawing skills, but also design thinking, spatial planning, sustainability, construction logic and presentation skills.",
        tr:"Mimarlık bölümü, öğrenciye bina, iç mekan, kamusal alan ve kentsel çevre tasarlamayı öğretir. Bu alanda yalnızca çizim değil; design thinking, spatial planning, sürdürülebilirlik, yapım mantığı ve sunum becerileri de geliştirilir."
      },
      "Түркияда архитектура оқу өте тиімді, себебі елде тарихи архитектура, modern construction, urban transformation және tourism infrastructure өте жақсы дамыған.": {
        kz:"Түркияда архитектура оқу өте тиімді, себебі елде тарихи архитектура, modern construction, urban transformation және tourism infrastructure өте жақсы дамыған.",
        ru:"Изучение архитектуры в Турции очень эффективно, поскольку в стране хорошо развиты историческая архитектура, современное строительство, городская трансформация и туристическая инфраструктура.",
        en:"Studying architecture in Türkiye is very effective because the country has well-developed historical architecture, modern construction, urban transformation and tourism infrastructure.",
        tr:"Türkiye'de mimarlık okumak oldukça avantajlıdır; zira ülkede tarihi mimari, modern inşaat, kentsel dönüşüm ve turizm altyapısı çok iyi gelişmiştir."
      },
   
      // ── WHO SUITS — LIST ───────────────────────────────────────────
      "Креативті ойлайтын және визуалды дүниелерге қызығатындарға": {
        kz:"Креативті ойлайтын және визуалды дүниелерге қызығатындарға",
        ru:"Тем, кто мыслит творчески и интересуется визуальным миром",
        en:"Those who think creatively and are interested in visual worlds",
        tr:"Yaratıcı düşünen ve görsel dünyalara ilgi duyanlar için"
      },
      "Ғимарат, интерьер, қала дизайнын ұнататындарға": {
        kz:"Ғимарат, интерьер, қала дизайнын ұнататындарға",
        ru:"Тем, кто любит дизайн зданий, интерьеров и городской среды",
        en:"Those who enjoy building, interior and urban design",
        tr:"Bina, iç mekan ve kent tasarımını sevenlere"
      },
      "Сызба, макет, 3D modeling және design presentation жасағысы келетіндерге": {
        kz:"Сызба, макет, 3D modeling және design presentation жасағысы келетіндерге",
        ru:"Тем, кто хочет делать чертежи, макеты, 3D-модели и design presentation",
        en:"Those who want to create drawings, models, 3D models and design presentations",
        tr:"Teknik çizim, maket, 3D modelleme ve tasarım sunumu yapmak isteyenlere"
      },
      "Өнер мен техниканы бірге қолданғысы келетін студенттерге": {
        kz:"Өнер мен техниканы бірге қолданғысы келетін студенттерге",
        ru:"Студентам, желающим сочетать искусство и технику",
        en:"Students who want to combine art and technology",
        tr:"Sanatı ve tekniği bir arada kullanmak isteyen öğrencilere"
      },
      "Болашақта өз architecture studio ашқысы келетіндерге": {
        kz:"Болашақта өз architecture studio ашқысы келетіндерге",
        ru:"Тем, кто хочет в будущем открыть собственную архитектурную студию",
        en:"Those who want to open their own architecture studio in the future",
        tr:"Gelecekte kendi mimarlık stüdyosunu açmak isteyenlere"
      },
   
      // ── CORE SUBJECTS ──────────────────────────────────────────────
      "Architectural Design":  {kz:"Архитектуралық дизайн",    ru:"Архитектурный дизайн",    en:"Architectural Design",  tr:"Mimari Tasarım"},
      "Technical Drawing":     {kz:"Техникалық сурет",          ru:"Техническое черчение",    en:"Technical Drawing",     tr:"Teknik Çizim"},
      "Urban Design":          {kz:"Қалалық дизайн",            ru:"Городской дизайн",        en:"Urban Design",          tr:"Kentsel Tasarım"},
      "Building Materials":    {kz:"Құрылыс материалдары",      ru:"Строительные материалы",  en:"Building Materials",    tr:"Yapı Malzemeleri"},
      "History of Architecture":{kz:"Архитектура тарихы",       ru:"История архитектуры",     en:"History of Architecture",tr:"Mimarlık Tarihi"},
      "3D Modeling":           {kz:"3D моделдеу",               ru:"3D-моделирование",        en:"3D Modeling",           tr:"3D Modelleme"},
      "Sustainable Design":    {kz:"Тұрақты дизайн",            ru:"Устойчивый дизайн",       en:"Sustainable Design",    tr:"Sürdürülebilir Tasarım"},
      "Interior Architecture": {kz:"Интерьер архитектурасы",    ru:"Интерьерная архитектура", en:"Interior Architecture", tr:"İç Mimarlık"},
   
      // ── SKILLS ────────────────────────────────────────────────────
      "Creativity":          {kz:"Шығармашылық",      ru:"Креативность",        en:"Creativity",          tr:"Yaratıcılık"},
      "Drawing":             {kz:"Сурет салу",         ru:"Рисование",           en:"Drawing",             tr:"Çizim"},
      "Problem Solving":     {kz:"Мәселені шешу",      ru:"Решение задач",       en:"Problem Solving",     tr:"Problem Çözme"},
      "Spatial Thinking":    {kz:"Кеңістіктік ойлау",  ru:"Пространственное мышление",en:"Spatial Thinking", tr:"Mekânsal Düşünme"},
      "Attention to Detail": {kz:"Егжей-тегжейге назар",ru:"Внимание к деталям", en:"Attention to Detail", tr:"Ayrıntılara Dikkat"},
      "Communication":       {kz:"Коммуникация",       ru:"Коммуникация",        en:"Communication",       tr:"İletişim"},
      "Portfolio Building":  {kz:"Портфолио жасау",    ru:"Создание портфолио",  en:"Portfolio Building",  tr:"Portfolyo Oluşturma"},
      "Teamwork":            {kz:"Командада жұмыс",    ru:"Работа в команде",    en:"Teamwork",            tr:"Takım Çalışması"},
   
      // ── FUTURE CAREERS ─────────────────────────────────────────────
      "Architect":                    {kz:"Архитектор",                    ru:"Архитектор",                      en:"Architect",                    tr:"Mimar"},
      "Interior Architect":           {kz:"Интерьер архитекторы",          ru:"Архитектор-дизайнер интерьеров",  en:"Interior Architect",           tr:"İç Mimar"},
      "Urban Planner":                {kz:"Қала жоспарлаушысы",            ru:"Градостроитель",                  en:"Urban Planner",                tr:"Kentsel Plancı"},
      "Landscape Designer":           {kz:"Ландшафт дизайнері",            ru:"Ландшафтный дизайнер",            en:"Landscape Designer",           tr:"Peyzaj Tasarımcısı"},
      "3D Visualization Specialist":  {kz:"3D визуализация маманы",        ru:"Специалист по 3D-визуализации",   en:"3D Visualization Specialist",  tr:"3D Görselleştirme Uzmanı"},
      "Project Coordinator":          {kz:"Жоба координаторы",             ru:"Координатор проектов",            en:"Project Coordinator",          tr:"Proje Koordinatörü"},
      "Construction Design Consultant":{kz:"Құрылыс дизайн консультанты",  ru:"Консультант по строительному дизайну",en:"Construction Design Consultant",tr:"Yapı Tasarım Danışmanı"},
      "Design Studio Founder":        {kz:"Дизайн студиясының негізін қалаушы",ru:"Основатель дизайн-студии",   en:"Design Studio Founder",        tr:"Tasarım Stüdyosu Kurucusu"},
   
      // ── WHY TÜRKIYE PARAGRAPHS ─────────────────────────────────────
      "Түркия — architecture үшін өте мықты орта. Бір жағынан тарихи ғимараттар, Осман және Византия мұрасы болса, екінші жағынан modern skyscrapers, hotels, malls, airports және urban transformation projects көп.": {
        kz:"Түркия — architecture үшін өте мықты орта. Бір жағынан тарихи ғимараттар, Осман және Византия мұрасы болса, екінші жағынан modern skyscrapers, hotels, malls, airports және urban transformation projects көп.",
        ru:"Турция — отличная среда для изучения архитектуры. С одной стороны, здесь есть исторические здания, османское и византийское наследие, а с другой — много современных небоскрёбов, отелей, торговых центров, аэропортов и проектов городской трансформации.",
        en:"Türkiye is an excellent environment for architecture. On one side there are historic buildings and Ottoman and Byzantine heritage; on the other there are modern skyscrapers, hotels, malls, airports and urban transformation projects.",
        tr:"Türkiye, mimarlık için mükemmel bir ortamdır. Bir yanda tarihi binalar, Osmanlı ve Bizans mirası; öte yanda modern gökdelenler, oteller, alışveriş merkezleri, havalimanları ve kentsel dönüşüm projeleri bulunmaktadır."
      },
      "Студент теорияны ғана емес, нақты қала кеңістігін бақылап, real-life design examples арқылы үйрене алады.": {
        kz:"Студент теорияны ғана емес, нақты қала кеңістігін бақылап, real-life design examples арқылы үйрене алады.",
        ru:"Студент может изучать не только теорию, но и наблюдать за реальным городским пространством, учась на примерах настоящего дизайна.",
        en:"Students can learn not just theory, but also observe real urban space and learn through real-life design examples.",
        tr:"Öğrenciler yalnızca teoriyi değil, gerçek kentsel mekânı gözlemleyerek ve gerçek hayattan tasarım örnekleri aracılığıyla da öğrenebilir."
      },
   
      // ── PORTFOLIO PARAGRAPHS ───────────────────────────────────────
      "Architecture бағытында portfolio — студенттің ең маңызды құжатының бірі. Оған sketches, design projects, 3D models, concept boards және visual presentations кіреді.": {
        kz:"Architecture бағытында portfolio — студенттің ең маңызды құжатының бірі. Оған sketches, design projects, 3D models, concept boards және visual presentations кіреді.",
        ru:"В архитектуре портфолио — один из важнейших документов студента. В него входят эскизы, дизайн-проекты, 3D-модели, concept boards и визуальные презентации.",
        en:"In architecture, a portfolio is one of the student's most important documents. It includes sketches, design projects, 3D models, concept boards and visual presentations.",
        tr:"Mimarlıkta portfolyo, öğrencinin en önemli belgelerinden biridir. İçeriğinde eskizler, tasarım projeleri, 3D modeller, konsept panolar ve görsel sunumlar yer alır."
      },
      "Егер студент болашақта магистратураға, internship-ке немесе жұмысқа тапсырғысы келсе, portfolio оның creative және technical деңгейін көрсетеді.": {
        kz:"Егер студент болашақта магистратураға, internship-ке немесе жұмысқа тапсырғысы келсе, portfolio оның creative және technical деңгейін көрсетеді.",
        ru:"Если студент в будущем хочет поступить в магистратуру, пройти стажировку или устроиться на работу, портфолио демонстрирует его творческий и технический уровень.",
        en:"If a student wants to apply for a master's programme, internship or job in the future, a portfolio demonstrates their creative and technical level.",
        tr:"Öğrenci ileride yüksek lisans, staj veya iş başvurusu yapmak istiyorsa portfolyo, onun yaratıcı ve teknik seviyesini ortaya koyar."
      },
   
      // ── CTA BOX ────────────────────────────────────────────────────
      "Architecture бағыты саған сай ма?": {
        kz:"Architecture бағыты саған сай ма?",
        ru:"Подходит ли тебе специальность «Архитектура»?",
        en:"Does Architecture suit you?",
        tr:"Mimarlık bölümü sana uygun mu?"
      },
      "Егер дизайн, қала, ғимарат, визуалды ойлау және creative projects ұнаса, бұл бағыт сен үшін жақсы таңдау болуы мүмкін.": {
        kz:"Егер дизайн, қала, ғимарат, визуалды ойлау және creative projects ұнаса, бұл бағыт сен үшін жақсы таңдау болуы мүмкін.",
        ru:"Если тебе нравятся дизайн, город, здания, визуальное мышление и творческие проекты — это направление может стать отличным выбором для тебя.",
        en:"If you enjoy design, cities, buildings, visual thinking and creative projects, this field could be a great choice for you.",
        tr:"Tasarım, şehir, bina, görsel düşünme ve yaratıcı projelerden hoşlanıyorsan bu bölüm senin için iyi bir seçim olabilir."
      },
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Career Match":     {kz:"Карьера сәйкестігі", ru:"Соответствие карьере", en:"Career Match", tr:"Kariyer Uyumu"},
      "Ұсынылатын университеттер": {
        kz:"Ұсынылатын университеттер",
        ru:"Рекомендуемые университеты",
        en:"Recommended universities",
        tr:"Önerilen üniversiteler"
      },
      "Әрекеттер": {kz:"Әрекеттер", ru:"Действия", en:"Actions", tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Бағыт:":    {kz:"Бағыт:",    ru:"Направление:", en:"Field:",    tr:"Alan:"},
      "Duration:": {kz:"Ұзақтығы:", ru:"Длительность:", en:"Duration:", tr:"Süre:"},
      "Level:":    {kz:"Деңгей:",   ru:"Уровень:",      en:"Level:",    tr:"Düzey:"},
      "Language:": {kz:"Тіл:",      ru:"Язык:",         en:"Language:", tr:"Dil:"},
   
      // Sidebar quick info values
      "4 years":  {kz:"4 жыл",  ru:"4 года",  en:"4 years",  tr:"4 yıl"},
   
      // Sidebar career match
      "Creative Thinking": {kz:"Шығармашылық ойлау",  ru:"Творческое мышление",    en:"Creative Thinking", tr:"Yaratıcı Düşünce"},
      "Design Portfolio":  {kz:"Дизайн портфолиосы",  ru:"Дизайн-портфолио",       en:"Design Portfolio",  tr:"Tasarım Portfolyosu"},
      "Urban Projects":    {kz:"Қалалық жобалар",     ru:"Городские проекты",       en:"Urban Projects",    tr:"Kentsel Projeler"},
      "3D Visualization":  {kz:"3D визуализация",     ru:"3D-визуализация",         en:"3D Visualization",  tr:"3D Görselleştirme"},
      "Studio Work":       {kz:"Студиялық жұмыс",     ru:"Студийная работа",        en:"Studio Work",       tr:"Stüdyo Çalışması"},
   
      // Sidebar action
      "Профильге сақтау": {kz:"Профильге сақтау", ru:"Сохранить в профиль", en:"Save to profile", tr:"Profile kaydet"},
   
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
   
    EduI18n.registerPage("specialty-detail", D, function(lang){
      applyText(lang);
    });
  })();