(function () {

  const D = {
  
    "AI Кеңесші": {
      kz: "AI кеңесші",
      ru: "AI консультант",
      en: "AI Advisor",
      tr: "AI Danışman"
    },
  
    "Сұрағыңды қой 🤖": {
      kz: "Сұрағыңды қой 🤖",
      ru: "Задай свой вопрос 🤖",
      en: "Ask Your Question 🤖",
      tr: "Sorunu Sor 🤖"
    },
  
    "Түркия университеттері, грант шарттары, мамандық таңдау — барлығы туралы сұра.": {
      kz: "Түркия университеттері, грант шарттары, мамандық таңдау — барлығы туралы сұра.",
      ru: "Спрашивай о турецких университетах, грантах и выборе специальности.",
      en: "Ask about Turkish universities, scholarships and choosing a major.",
      tr: "Türk üniversiteleri, burslar ve bölüm seçimi hakkında soru sor."
    },
  
    "Университет кеңесі": {
      kz: "Университет кеңесі",
      ru: "Консультация по университетам",
      en: "University Consultation",
      tr: "Üniversite Danışmanlığı"
    },
  
    "Сенің профиліңе сай университеттерді табамын": {
      kz: "Сенің профиліңе сай университеттерді табамын",
      ru: "Подберу университеты под твой профиль",
      en: "I will find universities that match your profile",
      tr: "Profiline uygun üniversiteleri bulurum"
    },
  
    "Грант туралы": {
      kz: "Грант туралы",
      ru: "О гранте",
      en: "About Scholarships",
      tr: "Burs Hakkında"
    },
  
    "Türkiye Bursları шарттарын түсіндіремін": {
      kz: "Türkiye Bursları шарттарын түсіндіремін",
      ru: "Объясню условия Türkiye Bursları",
      en: "I will explain Türkiye Bursları requirements",
      tr: "Türkiye Bursları şartlarını açıklarım"
    },
  
    "Құжат тізімі": {
      kz: "Құжат тізімі",
      ru: "Список документов",
      en: "Document Checklist",
      tr: "Belge Listesi"
    },
  
    "Нақты не дайындау керегін айтамын": {
      kz: "Нақты не дайындау керегін айтамын",
      ru: "Подскажу, что именно нужно подготовить",
      en: "I will tell you exactly what to prepare",
      tr: "Tam olarak hangi belgeleri hazırlaman gerektiğini söylerim"
    },
  
    "Сәлем! Мен EduBridge AI кеңесшісімін 👋": {
      kz: "Сәлем! Мен EduBridge AI кеңесшісімін 👋",
      ru: "Здравствуйте! Я AI-консультант EduBridge 👋",
      en: "Hello! I am EduBridge AI Advisor 👋",
      tr: "Merhaba! Ben EduBridge AI Danışmanıyım 👋"
    },
  
    "Түркия университеттеріне түсу туралы кез-келген сұрағыңды қоя аласың. Грант шарттары, мамандық таңдау, құжат дайындау — барлығына жауап беремін!": {
      kz: "Түркия университеттеріне түсу туралы кез-келген сұрағыңды қоя аласың. Грант шарттары, мамандық таңдау, құжат дайындау — барлығына жауап беремін!",
      ru: "Ты можешь задать любой вопрос о поступлении в турецкие университеты. Я помогу с грантами, выбором специальности и подготовкой документов.",
      en: "You can ask any question about admission to Turkish universities. I can help with scholarships, choosing a major and preparing documents.",
      tr: "Türk üniversitelerine başvuru hakkında istediğin soruyu sorabilirsin. Burslar, bölüm seçimi ve belge hazırlığı konusunda yardımcı olabilirim."
    },
  
    "Сұрағыңды жаз... (мысалы: Компьютер ғылымы бойынша қай университет жақсы?)": {
      kz: "Сұрағыңды жаз... (мысалы: Компьютер ғылымы бойынша қай университет жақсы?)",
      ru: "Напиши свой вопрос... (например: Какой университет лучше для Computer Science?)",
      en: "Write your question... (e.g. Which university is best for Computer Science?)",
      tr: "Sorunu yaz... (örneğin: Bilgisayar Bilimleri için hangi üniversite daha iyi?)"
    },
  
    "Жіберу": {
      kz: "Жіберу",
      ru: "Отправить",
      en: "Send",
      tr: "Gönder"
    },
  
    "🎓 Türkiye Bursları дегеніміз не?": {
      kz: "🎓 Türkiye Bursları дегеніміз не?",
      ru: "🎓 Что такое Türkiye Bursları?",
      en: "🎓 What is Türkiye Bursları?",
      tr: "🎓 Türkiye Bursları nedir?"
    },
  
    "🏛️ Ең жақсы IT университеттер": {
      kz: "🏛️ Ең жақсы IT университеттер",
      ru: "🏛️ Лучшие IT университеты",
      en: "🏛️ Best IT Universities",
      tr: "🏛️ En İyi BT Üniversiteleri"
    },
  
    "📋 Грантқа қандай құжат керек?": {
      kz: "📋 Грантқа қандай құжат керек?",
      ru: "📋 Какие документы нужны для гранта?",
      en: "📋 What documents are required for a scholarship?",
      tr: "📋 Burs için hangi belgeler gerekli?"
    },
  
    "💰 Түркияда оқу қанша тұрады?": {
      kz: "💰 Түркияда оқу қанша тұрады?",
      ru: "💰 Сколько стоит обучение в Турции?",
      en: "💰 How much does studying in Türkiye cost?",
      tr: "💰 Türkiye'de eğitim ne kadar tutar?"
    },
  
    "📅 Өтінім дедлайндары қашан?": {
      kz: "📅 Өтінім дедлайндары қашан?",
      ru: "📅 Когда дедлайны подачи заявок?",
      en: "📅 When are the application deadlines?",
      tr: "📅 Başvuru son tarihleri ne zaman?"
    },
  
    "🗣️ Интервьюге қалай дайындалу керек?": {
      kz: "🗣️ Интервьюге қалай дайындалу керек?",
      ru: "🗣️ Как подготовиться к интервью?",
      en: "🗣️ How should I prepare for the interview?",
      tr: "🗣️ Mülakata nasıl hazırlanmalıyım?"
    }
  
  };
  
  EduI18n.registerPage("chat", D, function(lang){});
  
  })();