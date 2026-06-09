/* EduBridge Türkiye — recommendation.html i18n */

(function () {
  "use strict";

  const LANGS = ["kz", "ru", "en", "tr"];

  function normLang(lang) {
    lang = (lang || localStorage.getItem("lang") || "kz").toLowerCase();
    if (lang === "kk") return "kz";
    return LANGS.includes(lang) ? lang : "kz";
  }

  function tr(obj, lang) {
    lang = normLang(lang);
    return obj?.[lang] || obj?.kz || "";
  }

  const UI = {
    navHome: { kz: "Басты бет", ru: "Главная", en: "Home", tr: "Ana sayfa" },
    navSpecialties: { kz: "Мамандықтар", ru: "Специальности", en: "Programs", tr: "Bölümler" },
    navUniversities: { kz: "Университеттер", ru: "Университеты", en: "Universities", tr: "Üniversiteler" },
    navPreparation: { kz: "Дайындық", ru: "Подготовка", en: "Preparation", tr: "Hazırlık" },
    navFeed: { kz: "Лента", ru: "Лента", en: "Feed", tr: "Haber Akışı" },
    navLanguage: { kz: "Тіл", ru: "Язык", en: "Language", tr: "Dil" },
    navProfile: { kz: "Профиль", ru: "Профиль", en: "Profile", tr: "Profil" },

    heroTitle: { kz: "Тұлға типі тесті", ru: "Тест типа личности", en: "Personality Type Test", tr: "Kişilik Tipi Testi" },
    heroDesc: {
      kz: "Myers-Briggs + 5-ші ось (A/T) негізіндегі тест. 16personalities.com стандартымен жасалған. 60 сұрақ · ~10 минут",
      ru: "Тест на основе Myers-Briggs + 5-й оси (A/T). Создан по стандарту 16personalities.com. 60 вопросов · ~10 минут",
      en: "A test based on Myers-Briggs + the 5th axis (A/T). Built in the style of 16personalities.com. 60 questions · ~10 minutes",
      tr: "Myers-Briggs + 5. eksen (A/T) temelli test. 16personalities.com standardına göre hazırlandı. 60 soru · ~10 dakika"
    },

    badge1: { kz: "🧠 16 тұлға типі", ru: "🧠 16 типов личности", en: "🧠 16 personality types", tr: "🧠 16 kişilik tipi" },
    badge2: { kz: "5 ось · 60 сұрақ", ru: "5 осей · 60 вопросов", en: "5 axes · 60 questions", tr: "5 eksen · 60 soru" },
    badge3: { kz: "🎓 Мамандық ұсынысы", ru: "🎓 Рекомендации по специальности", en: "🎓 Program recommendation", tr: "🎓 Bölüm önerisi" },
    badge4: { kz: "🏛️ Түркия университеттері", ru: "🏛️ Университеты Турции", en: "🏛️ Turkish universities", tr: "🏛️ Türkiye üniversiteleri" },

    submit: { kz: "Нәтижені есептеу →", ru: "Рассчитать результат →", en: "Calculate result →", tr: "Sonucu hesapla →" },
    answerAll: { kz: "Барлық 60 сұраққа жауап беріңіз", ru: "Ответьте на все 60 вопросов", en: "Answer all 60 questions", tr: "60 sorunun tümünü yanıtlayın" },
    allDone: { kz: "✅ Барлық сұрақтарға жауап бердіңіз!", ru: "✅ Вы ответили на все вопросы!", en: "✅ You answered all questions!", tr: "✅ Tüm soruları yanıtladınız!" },

    qWord: { kz: "Сұрақ", ru: "Вопрос", en: "Question", tr: "Soru" },
    left: { kz: "сұрақ қалды", ru: "вопросов осталось", en: "questions left", tr: "soru kaldı" },
    agree: { kz: "Келісемін", ru: "Согласен/согласна", en: "Agree", tr: "Katılıyorum" },
    disagree: { kz: "Келіспеймін", ru: "Не согласен/не согласна", en: "Disagree", tr: "Katılmıyorum" },

    warn: {
      kz: "ℹ️ Бұл тест бағдарлама мақсатында қолданылады. MBTI — ғылыми диагноз емес, өзіңіздің қызығушылықтарыңызды да ескеріңіз.",
      ru: "ℹ️ Этот тест используется в рамках платформы. MBTI — не научный диагноз, учитывайте также свои реальные интересы.",
      en: "ℹ️ This test is used for platform purposes. MBTI is not a scientific diagnosis, so also consider your own interests.",
      tr: "ℹ️ Bu test platform amacıyla kullanılır. MBTI bilimsel bir teşhis değildir; kendi ilgi alanlarınızı da dikkate alın."
    },

    majorsTitle: { kz: "🎓 Ұсынылатын мамандықтар", ru: "🎓 Рекомендуемые специальности", en: "🎓 Recommended programs", tr: "🎓 Önerilen bölümler" },
    careersTitle: { kz: "💼 Карьера бағыттары", ru: "💼 Карьерные направления", en: "💼 Career paths", tr: "💼 Kariyer alanları" },
    unisTitle: { kz: "🏛️ Ұсынылатын университеттер", ru: "🏛️ Рекомендуемые университеты", en: "🏛️ Recommended universities", tr: "🏛️ Önerilen üniversiteler" },
    famousTitle: { kz: "⭐ Осы типтің белгілі тұлғалары", ru: "⭐ Известные личности этого типа", en: "⭐ Famous people of this type", tr: "⭐ Bu tipin ünlü kişileri" },
    aboutTitle: { kz: "🔍 Сіздің тұлға типіңіз туралы", ru: "🔍 О вашем типе личности", en: "🔍 About your personality type", tr: "🔍 Kişilik tipiniz hakkında" },
    strongTitle: { kz: "💪 КҮШТІ ЖАҚТАРЫ", ru: "💪 СИЛЬНЫЕ СТОРОНЫ", en: "💪 STRENGTHS", tr: "💪 GÜÇLÜ YÖNLER" },
    weakTitle: { kz: "🌱 ДАМЫТУЫ КЕРЕК", ru: "🌱 ЗОНЫ РОСТА", en: "🌱 AREAS TO DEVELOP", tr: "🌱 GELİŞTİRİLMESİ GEREKENLER" },
    workTitle: { kz: "💘 Жұмыс стилі мен серіктестік", ru: "💘 Стиль работы и сотрудничество", en: "💘 Work style and collaboration", tr: "💘 Çalışma tarzı ve iş birliği" },

    saveBtn: { kz: "💾 Профильге сақтау", ru: "💾 Сохранить в профиль", en: "💾 Save to profile", tr: "💾 Profile kaydet" },
    uniBtn: { kz: "🏛️ Университеттер", ru: "🏛️ Университеты", en: "🏛️ Universities", tr: "🏛️ Üniversiteler" },
    specBtn: { kz: "🎓 Мамандықтар", ru: "🎓 Специальности", en: "🎓 Programs", tr: "🎓 Bölümler" },
    retakeBtn: { kz: "🔄 Қайта тапсыру", ru: "🔄 Пройти заново", en: "🔄 Retake", tr: "🔄 Tekrar çöz" },

    missedAlert: {
      kz: n => `⚠️ ${n} сұраққа жауап берілмеді!\nЖауап берілмегендер қызылмен белгіленді.`,
      ru: n => `⚠️ Не отвечено на ${n} вопросов!\nНеотвеченные вопросы отмечены красным.`,
      en: n => `⚠️ ${n} questions are unanswered!\nUnanswered questions are highlighted in red.`,
      tr: n => `⚠️ ${n} soru yanıtlanmadı!\nYanıtlanmayan sorular kırmızıyla işaretlendi.`
    },

    noTest: { kz: "Алдымен тестті аяқтаңыз!", ru: "Сначала завершите тест!", en: "Complete the test first!", tr: "Önce testi tamamlayın!" },
    saved: { kz: "✅ Нәтиже профильге сақталды!\nТипіңіз: ", ru: "✅ Результат сохранён!\nВаш тип: ", en: "✅ Result saved!\nYour type: ", tr: "✅ Sonuç kaydedildi!\nTipiniz: " }
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

  const Q = {
    1:{kz:"Мен жиі жаңа адамдармен танысамын.",ru:"Я часто знакомлюсь с новыми людьми.",en:"I often meet new people.",tr:"Sık sık yeni insanlarla tanışırım."},
    2:{kz:"Топ жиналыстары мені шабыттандырады.",ru:"Групповые встречи меня вдохновляют.",en:"Group meetings motivate me.",tr:"Grup toplantıları beni motive eder."},
    3:{kz:"Мен жаңа орынға барғанда тез сөйлесіп кетемін.",ru:"В новом месте я быстро начинаю общаться.",en:"When I go to a new place, I quickly start conversations.",tr:"Yeni bir ortama girdiğimde hızlıca iletişim kurarım."},
    4:{kz:"Бейтаныс адамдарға өзімді таныстыру маған оңай.",ru:"Мне легко представиться незнакомым людям.",en:"It is easy for me to introduce myself to strangers.",tr:"Tanımadığım insanlara kendimi tanıtmak benim için kolaydır."},
    5:{kz:"Мен топта болғанда жалғыз болғанда алатын энергиядан гөрі көбірек энергия аламын.",ru:"В группе я получаю больше энергии, чем в одиночестве.",en:"I gain more energy in a group than when I am alone.",tr:"Bir grubun içindeyken yalnız olduğumdan daha fazla enerji alırım."},
    6:{kz:"Үлкен топтарда болу — маған қызықты, жалықтырмайды.",ru:"Мне интересно находиться в больших группах, это меня не утомляет.",en:"Being in large groups is interesting for me and does not bore me.",tr:"Kalabalık gruplarda olmak bana ilginç gelir, sıkıcı değildir."},
    7:{kz:"Ұзақ әлеуметтік кездесулерден кейін мен шаршаймын.",ru:"После долгих социальных встреч я устаю.",en:"After long social gatherings, I feel tired.",tr:"Uzun sosyal buluşmalardan sonra yorulurum."},
    8:{kz:"Маған жалғыз ойлану ыңғайлырақ.",ru:"Мне удобнее размышлять в одиночестве.",en:"I feel more comfortable thinking alone.",tr:"Yalnız düşünmek bana daha rahat gelir."},
    9:{kz:"Мен кішігірім топтағы терең сұхбатты ұнатамын.",ru:"Мне нравятся глубокие разговоры в небольшой группе.",en:"I enjoy deep conversations in a small group.",tr:"Küçük gruplardaki derin sohbetleri severim."},
    10:{kz:"Жаңа адамдармен желілестіру мені тез шаршатады.",ru:"Нетворкинг с новыми людьми быстро меня утомляет.",en:"Networking with new people quickly tires me.",tr:"Yeni insanlarla network kurmak beni çabuk yorar."},
    11:{kz:"Маған жазбаша сөйлесу ауызша сөйлесуден ыңғайлырақ.",ru:"Мне удобнее общаться письменно, чем устно.",en:"Written communication is more comfortable for me than speaking.",tr:"Yazılı iletişim kurmak sözlü iletişimden daha rahattır."},
    12:{kz:"Телефонмен сөйлесуден гөрі хабарлама жіберуді жөн көремін.",ru:"Я предпочитаю писать сообщения, а не говорить по телефону.",en:"I prefer texting rather than talking on the phone.",tr:"Telefonla konuşmak yerine mesaj yazmayı tercih ederim."},

    13:{kz:"Мен нақты деректер мен фактілерге сүйенемін.",ru:"Я опираюсь на конкретные данные и факты.",en:"I rely on concrete data and facts.",tr:"Somut verilere ve gerçeklere dayanırım."},
    14:{kz:"Мен практикалық тәжірибені теориялық болжамнан жоғары бағалаймын.",ru:"Я ценю практический опыт выше теоретических предположений.",en:"I value practical experience more than theoretical assumptions.",tr:"Pratik deneyimi teorik varsayımlardan daha değerli görürüm."},
    15:{kz:"Мен дәстүрлі тәсілдер жаңа тәсілдерге қарағанда тиімдірек деп санаймын.",ru:"Я считаю традиционные подходы эффективнее новых.",en:"I believe traditional methods are more effective than new ones.",tr:"Geleneksel yöntemlerin yeni yöntemlerden daha etkili olduğunu düşünürüm."},
    16:{kz:"Маған нақты нұсқаулар жалпы бағыттан ыңғайлырақ.",ru:"Мне удобнее конкретные инструкции, чем общее направление.",en:"Clear instructions are more comfortable for me than general direction.",tr:"Genel yönlendirmeden çok net talimatlar bana daha uygundur."},
    17:{kz:"Мен қадамдарды бірте-бірте орындауды ұнатамын.",ru:"Я люблю выполнять шаги постепенно.",en:"I like completing steps one by one.",tr:"Adımları tek tek takip etmeyi severim."},
    18:{kz:"Мен байқалатын, дәлелденген нәрселерге сенемін.",ru:"Я доверяю тому, что можно наблюдать и доказать.",en:"I trust things that are observable and proven.",tr:"Gözlemlenebilir ve kanıtlanmış şeylere güvenirim."},
    19:{kz:"Күрделі және ерекше идеялар мені қарапайым идеялардан гөрі қызықтырады.",ru:"Сложные и необычные идеи интересуют меня больше простых.",en:"Complex and unusual ideas interest me more than simple ones.",tr:"Karmaşık ve sıra dışı fikirler beni basit fikirlerden daha çok ilgilendirir."},
    20:{kz:"Мен болашақты қазіргіден гөрі қызықты деп санаймын.",ru:"Будущее кажется мне интереснее настоящего.",en:"I find the future more interesting than the present.",tr:"Geleceği bugünden daha ilginç bulurum."},
    21:{kz:"Мен жиі жаңа мүмкіндіктерді іздеймін.",ru:"Я часто ищу новые возможности.",en:"I often look for new opportunities.",tr:"Sık sık yeni fırsatlar ararım."},
    22:{kz:"Мен суреттер мен метафоралар арқылы жақсы түсінемін.",ru:"Я лучше понимаю через образы и метафоры.",en:"I understand better through images and metaphors.",tr:"Görseller ve metaforlar yoluyla daha iyi anlarım."},
    23:{kz:"Маған жалпы бейне детальдарға қарағанда маңыздырақ.",ru:"Для меня общая картина важнее деталей.",en:"The big picture is more important to me than details.",tr:"Benim için genel tablo detaylardan daha önemlidir."},
    24:{kz:"Мен жиі жаңа теориялар ойлап табамын.",ru:"Я часто придумываю новые теории.",en:"I often come up with new theories.",tr:"Sık sık yeni teoriler üretirim."},

    25:{kz:"Мен шешім қабылдауда эмоциядан гөрі логикаға сүйенемін.",ru:"При принятии решений я больше полагаюсь на логику, чем на эмоции.",en:"When making decisions, I rely more on logic than emotions.",tr:"Karar verirken duygulardan çok mantığa dayanırım."},
    26:{kz:"Объективті сын адамды ренжіткенше де пайдалы.",ru:"Объективная критика полезна, даже если может задеть человека.",en:"Objective criticism is useful even if it may hurt someone.",tr:"Objektif eleştiri, birini kırsa bile faydalıdır."},
    27:{kz:"Маған тиімділік үйлесімділіктен маңыздырақ.",ru:"Эффективность для меня важнее гармонии.",en:"Efficiency is more important to me than harmony.",tr:"Verimlilik benim için uyumdan daha önemlidir."},
    28:{kz:"Мен дауда сезімдерді емес, фактілерді ұсынамын.",ru:"В споре я привожу факты, а не чувства.",en:"In an argument, I present facts rather than feelings.",tr:"Tartışmada duygulardan çok gerçekleri öne sürerim."},
    29:{kz:"Мен жұмыста адам факторынан гөрі нәтижеге бағытталамын.",ru:"На работе я больше ориентируюсь на результат, чем на человеческий фактор.",en:"At work, I focus more on results than the human factor.",tr:"İşte insan faktöründen çok sonuca odaklanırım."},
    30:{kz:"Мен сыни ойлауды ескі жолдан шықпаудан жоғары бағалаймын.",ru:"Я ценю критическое мышление выше следования старым путям.",en:"I value critical thinking more than sticking to old ways.",tr:"Eski yöntemlere bağlı kalmaktansa eleştirel düşünmeyi daha çok önemserim."},
    31:{kz:"Маған фактілік дәлелдерден гөрі эмоционалды үндеулер сендіреді.",ru:"Эмоциональные обращения убеждают меня сильнее фактических доказательств.",en:"Emotional appeals convince me more than factual evidence.",tr:"Duygusal çağrılar beni gerçek kanıtlardan daha çok ikna eder."},
    32:{kz:"Мен адамдардың сезімін ренжітпеу үшін тікелей сын айтудан аулақпын.",ru:"Я избегаю прямой критики, чтобы не задеть чувства людей.",en:"I avoid direct criticism to protect people's feelings.",tr:"İnsanların duygularını incitmemek için doğrudan eleştiriden kaçınırım."},
    33:{kz:"Маған адам үйлесімі нәтижеден маңыздырақ.",ru:"Гармония между людьми для меня важнее результата.",en:"Human harmony is more important to me than results.",tr:"İnsanlar arasındaki uyum benim için sonuçtan daha önemlidir."},
    34:{kz:"Мен біреудің хабарламасын оқымас бұрын оның көңіл-күйін байқаймын.",ru:"Прежде чем читать сообщение, я обращаю внимание на настроение человека.",en:"Before reading someone's message, I notice their mood.",tr:"Birinin mesajını okumadan önce onun ruh halini fark ederim."},
    35:{kz:"Мен шешім қабылдаған кезде этиканы тиімділіктен жоғары қоямын.",ru:"При принятии решений я ставлю этику выше эффективности.",en:"When making decisions, I put ethics above efficiency.",tr:"Karar verirken etiği verimliliğin üstünde tutarım."},
    36:{kz:"Мен басқалардың проблемаларына шешім ұсынбас бұрын жай тыңдаймын.",ru:"Прежде чем предлагать решение чужих проблем, я просто слушаю.",en:"Before offering solutions to others' problems, I simply listen.",tr:"Başkalarının sorunlarına çözüm sunmadan önce sadece dinlerim."},

    37:{kz:"Мен жоспарды ұстану ыңғайлы деп санаймын.",ru:"Мне удобно придерживаться плана.",en:"I find it comfortable to follow a plan.",tr:"Plana bağlı kalmayı rahat bulurum."},
    38:{kz:"Маған тәртіп пен жүйе маңызды.",ru:"Для меня важны порядок и система.",en:"Order and structure are important to me.",tr:"Düzen ve sistem benim için önemlidir."},
    39:{kz:"Мен тапсырманы дедлайнға дейін ерте аяқтауға тырысамын.",ru:"Я стараюсь закончить задачи раньше дедлайна.",en:"I try to finish tasks before the deadline.",tr:"Görevleri son tarihten önce bitirmeye çalışırım."},
    40:{kz:"Маған тазалық пен тәртіп маңызды.",ru:"Для меня важны чистота и порядок.",en:"Cleanliness and order are important to me.",tr:"Temizlik ve düzen benim için önemlidir."},
    41:{kz:"Мен жоспар жасамай жайсыздана бастаймын.",ru:"Без плана я начинаю чувствовать дискомфорт.",en:"I start feeling uncomfortable without a plan.",tr:"Plan yapmadan rahatsız hissetmeye başlarım."},
    42:{kz:"Мен жауапты адам деген беделге ие болуды ұнатамын.",ru:"Мне нравится иметь репутацию ответственного человека.",en:"I like being known as a responsible person.",tr:"Sorumlu biri olarak tanınmayı severim."},
    43:{kz:"Маған икемділік пен спонтанды болу жоспардан маңыздырақ.",ru:"Гибкость и спонтанность для меня важнее плана.",en:"Flexibility and spontaneity are more important to me than planning.",tr:"Esneklik ve spontane olmak benim için plandan daha önemlidir."},
    44:{kz:"Мен жаңа мүмкіндіктерге ашық болу үшін шешімді кейінге қалдырамын.",ru:"Я откладываю решение, чтобы оставаться открытым/открытой новым возможностям.",en:"I postpone decisions to stay open to new opportunities.",tr:"Yeni fırsatlara açık kalmak için kararları ertelerim."},
    45:{kz:"Мен бір мезгілде бірнеше жобамен жұмыс жасауды ұнатамын.",ru:"Мне нравится работать над несколькими проектами одновременно.",en:"I like working on several projects at the same time.",tr:"Aynı anda birkaç projeyle çalışmayı severim."},
    46:{kz:"Маған монотонды рутина тез жалықтырады.",ru:"Монотонная рутина быстро мне надоедает.",en:"Monotonous routine quickly bores me.",tr:"Monoton rutin beni çabuk sıkar."},
    47:{kz:"Мен жолда шешім қабылдауды жоспарлаудан ыңғайлырақ деп санаймын.",ru:"Мне удобнее принимать решения по ходу дела, чем заранее планировать.",en:"I find it more comfortable to decide along the way than to plan ahead.",tr:"Önceden planlamak yerine yolda karar vermeyi daha rahat bulurum."},
    48:{kz:"Ертеңгі жоспарым кездейсоқ өзгерсе мен ашуланбаймын.",ru:"Если мой завтрашний план неожиданно изменится, я не расстроюсь.",en:"If my plan for tomorrow changes unexpectedly, I do not get upset.",tr:"Yarınki planım aniden değişirse sinirlenmem."},

    49:{kz:"Мен өз мүмкіндіктеріме сенімдімін.",ru:"Я уверен(а) в своих возможностях.",en:"I am confident in my abilities.",tr:"Kendi yeteneklerime güvenirim."},
    50:{kz:"Мен жіберген қателерімді тез ұмытамын.",ru:"Я быстро забываю свои ошибки.",en:"I quickly move on from my mistakes.",tr:"Yaptığım hataları çabuk unuturum."},
    51:{kz:"Мен стресс кезінде де өзімді жайлы сезінемін.",ru:"Даже во время стресса я чувствую себя спокойно.",en:"Even under stress, I feel calm.",tr:"Stres altındayken bile kendimi rahat hissederim."},
    52:{kz:"Сын сөз менің мотивациямды жоймайды.",ru:"Критика не разрушает мою мотивацию.",en:"Criticism does not destroy my motivation.",tr:"Eleştiri motivasyonumu yok etmez."},
    53:{kz:"Маңызды жиналыс алдында мен жайлы боламын.",ru:"Перед важной встречей я чувствую себя спокойно.",en:"Before an important meeting, I feel relaxed.",tr:"Önemli bir toplantıdan önce rahat olurum."},
    54:{kz:"Мен өз жетістіктерімді мақтанышпен мойындаймын.",ru:"Я с гордостью признаю свои достижения.",en:"I proudly acknowledge my achievements.",tr:"Başarılarımı gururla kabul ederim."},
    55:{kz:"Мен жиі өзімнің жеткілікті деңгейде екенімді сезінем.",ru:"Я часто чувствую, что я достаточно хорош(а).",en:"I often feel that I am good enough.",tr:"Sık sık yeterli olduğumu hissederim."},
    56:{kz:"Мен жиі болашақ туралы алаңдаймын.",ru:"Я часто беспокоюсь о будущем.",en:"I often worry about the future.",tr:"Gelecek hakkında sık sık endişelenirim."},
    57:{kz:"Маңызды жұмыс аяқталса да мен жиі жақсырақ болуы мүмкін еді деп ойлаймын.",ru:"Даже после завершения важной работы я часто думаю, что могло быть лучше.",en:"Even after finishing important work, I often think it could have been better.",tr:"Önemli bir iş bittikten sonra bile sık sık daha iyi olabilirdi diye düşünürüm."},
    58:{kz:"Кішігірім сәтсіздіктер де мені ұзақ уақыт алаңдатады.",ru:"Даже небольшие неудачи долго меня беспокоят.",en:"Even small failures worry me for a long time.",tr:"Küçük başarısızlıklar bile beni uzun süre endişelendirir."},
    59:{kz:"Мен жиі өзімнің шешімдерімді күмән астына аламын.",ru:"Я часто сомневаюсь в своих решениях.",en:"I often question my decisions.",tr:"Sık sık kendi kararlarımdan şüphe ederim."},
    60:{kz:"Мен жиі жетіспейтін нәрсеге назар аударамын, бар нәрсеге емес.",ru:"Я часто фокусируюсь на том, чего не хватает, а не на том, что уже есть.",en:"I often focus on what is missing rather than what I already have.",tr:"Sık sık sahip olduklarıma değil, eksik olan şeylere odaklanırım."}
  };

  const TYPE_NAMES = {
    INTJ:{kz:"Стратег",ru:"Стратег",en:"Strategist",tr:"Stratejist"},
    INTP:{kz:"Логик",ru:"Логик",en:"Logician",tr:"Mantıkçı"},
    ENTJ:{kz:"Командир",ru:"Командир",en:"Commander",tr:"Komutan"},
    ENTP:{kz:"Полемист",ru:"Полемист",en:"Debater",tr:"Tartışmacı"},
    INFJ:{kz:"Провайдер",ru:"Поборник",en:"Advocate",tr:"Savunucu"},
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

  const ROLE_NAMES = {
    "Аналитик":{kz:"Аналитик",ru:"Аналитик",en:"Analyst",tr:"Analist"},
    "Дипломат":{kz:"Дипломат",ru:"Дипломат",en:"Diplomat",tr:"Diplomat"},
    "Сентинел":{kz:"Сентинел",ru:"Страж",en:"Sentinel",tr:"Bekçi"},
    "Зерттеуші":{kz:"Зерттеуші",ru:"Искатель",en:"Explorer",tr:"Kaşif"}
  };

  const AXIS = {
    E:{kz:"Экстраверт",ru:"Экстраверт",en:"Extravert",tr:"Dışadönük"},
    I:{kz:"Интроверт",ru:"Интроверт",en:"Introvert",tr:"İçedönük"},
    N:{kz:"Интуитивті",ru:"Интуит",en:"Intuitive",tr:"Sezgisel"},
    S:{kz:"Сенсорлық",ru:"Сенсорик",en:"Sensing",tr:"Duyusal"},
    F:{kz:"Сезімдік",ru:"Чувства",en:"Feeling",tr:"Hisseden"},
    T:{kz:"Ойлаушы",ru:"Мышление",en:"Thinking",tr:"Düşünen"},
    P:{kz:"Икемді",ru:"Гибкий",en:"Prospecting",tr:"Esnek"},
    J:{kz:"Жоспарлаушы",ru:"Планирующий",en:"Judging",tr:"Planlı"},
    A:{kz:"Сенімді",ru:"Уверенный",en:"Assertive",tr:"Kendinden emin"},
    Turb:{kz:"Толқымалы",ru:"Турбулентный",en:"Turbulent",tr:"Kaygılı"},
  };
  const I18N = {
        // ── NAV ────────────────────────────────────────────────────────
        "nav-home":         {kz:"Басты бет",      ru:"Главная",       en:"Home",          tr:"Ana sayfa"},
        "nav-specialties":  {kz:"Мамандықтар",    ru:"Специальности", en:"Specialties",   tr:"Bölümler"},
        "nav-universities": {kz:"Университеттер", ru:"Университеты",  en:"Universities",  tr:"Üniversiteler"},
        "nav-preparation":  {kz:"Дайындық",       ru:"Подготовка",    en:"Preparation",   tr:"Hazırlık"},
        "nav-feed":         {kz:"Лента",          ru:"Лента",         en:"Feed",          tr:"Akış"},
        "nav-language":     {kz:"Тіл",            ru:"Язык",          en:"Language",      tr:"Dil"},
        "nav-profile":      {kz:"Профиль",        ru:"Профиль",       en:"Profile",       tr:"Profil"},
      
        // ── FOOTER ─────────────────────────────────────────────────────
        "© 2026 EduBridge Türkiye.": {
          kz:"© 2026 EduBridge Türkiye.",
          ru:"© 2026 EduBridge Türkiye.",
          en:"© 2026 EduBridge Türkiye.",
          tr:"© 2026 EduBridge Türkiye."
        },
    
        // ── HERO ───────────────────────────────────────────────────────
        "16 Personalities · NERIS Type Explorer": {
          kz:"16 Personalities · NERIS Type Explorer",
          ru:"16 Personalities · NERIS Type Explorer",
          en:"16 Personalities · NERIS Type Explorer",
          tr:"16 Personalities · NERIS Type Explorer"
        },
        "Тұлға типі тесті": {
          kz:"Тұлға типі тесті",
          ru:"Тест типа личности",
          en:"Personality Type Test",
          tr:"Kişilik Tipi Testi"
        },
        "Myers-Briggs + 5-ші ось (A/T) негізіндегі тест. 16personalities.com стандартымен жасалған. 60 сұрақ · ~10 минут": {
          kz:"Myers-Briggs + 5-ші ось (A/T) негізіндегі тест. 16personalities.com стандартымен жасалған. 60 сұрақ · ~10 минут",
          ru:"Тест на основе Myers-Briggs + 5-я ось (A/T). Создан по стандарту 16personalities.com. 60 вопросов · ~10 минут",
          en:"Test based on Myers-Briggs + 5th axis (A/T). Created to the 16personalities.com standard. 60 questions · ~10 minutes",
          tr:"Myers-Briggs + 5. eksen (A/T) temelinde test. 16personalities.com standardında hazırlanmıştır. 60 soru · ~10 dakika"
        },
    
        // Hero badges
        "🧠 16 тұлға типі":   {kz:"🧠 16 тұлға типі",   ru:"🧠 16 типов личности", en:"🧠 16 personality types", tr:"🧠 16 kişilik tipi"},
        "5 ось · 60 сұрақ":   {kz:"5 ось · 60 сұрақ",   ru:"5 осей · 60 вопросов", en:"5 axes · 60 questions",  tr:"5 eksen · 60 soru"},
        "🎓 Мамандық ұсынысы":{kz:"🎓 Мамандық ұсынысы",ru:"🎓 Рекомендация специальности",en:"🎓 Specialty recommendation",tr:"🎓 Bölüm önerisi"},
        "🏛️ Түркия университеттері":{kz:"🏛️ Түркия университеттері",ru:"🏛️ Университеты Турции",en:"🏛️ Türkiye universities",tr:"🏛️ Türkiye üniversiteleri"},
    
        // ── PROGRESS ───────────────────────────────────────────────────
        "0 / 60 сұрақ": {
          kz:"0 / 60 сұрақ",
          ru:"0 / 60 вопросов",
          en:"0 / 60 questions",
          tr:"0 / 60 soru"
        },
    
        // ── BLOCK HEADERS ──────────────────────────────────────────────
        "Энергия бағыты": {
          kz:"Энергия бағыты",
          ru:"Направление энергии",
          en:"Energy Direction",
          tr:"Enerji Yönü"
        },
        "Экстраверт (E) пе — Интроверт (I) пе?": {
          kz:"Экстраверт (E) пе — Интроверт (I) пе?",
          ru:"Экстраверт (E) или Интроверт (I)?",
          en:"Extravert (E) or Introvert (I)?",
          tr:"Dışadönük (E) mi — İçedönük (I) mi?"
        },
        "Ақпарат қабылдау": {
          kz:"Ақпарат қабылдау",
          ru:"Восприятие информации",
          en:"Information Perception",
          tr:"Bilgi Algılama"
        },
        "Сенсорлық (S) па — Интуитивті (N) ме?": {
          kz:"Сенсорлық (S) па — Интуитивті (N) ме?",
          ru:"Сенсорный (S) или Интуитивный (N)?",
          en:"Sensing (S) or Intuitive (N)?",
          tr:"Duyusal (S) mı — Sezgisel (N) mi?"
        },
        "Шешім қабылдау": {
          kz:"Шешім қабылдау",
          ru:"Принятие решений",
          en:"Decision Making",
          tr:"Karar Verme"
        },
        "Ойлаушы (T) па — Сезімдік (F) пе?": {
          kz:"Ойлаушы (T) па — Сезімдік (F) пе?",
          ru:"Мыслящий (T) или Чувствующий (F)?",
          en:"Thinking (T) or Feeling (F)?",
          tr:"Düşünen (T) mi — Hisseden (F) mi?"
        },
        "Өмір стилі": {
          kz:"Өмір стилі",
          ru:"Стиль жизни",
          en:"Lifestyle",
          tr:"Yaşam Tarzı"
        },
        "Жоспарлаушы (J) па — Икемді (P) пе?": {
          kz:"Жоспарлаушы (J) па — Икемді (P) пе?",
          ru:"Организованный (J) или Гибкий (P)?",
          en:"Judging (J) or Perceiving (P)?",
          tr:"Planlı (J) mı — Esnek (P) mi?"
        },
        "Сәйкестік (Identity)": {
          kz:"Сәйкестік (Identity)",
          ru:"Идентичность (Identity)",
          en:"Identity",
          tr:"Kimlik (Identity)"
        },
        "Сенімді (A) пе — Толқымалы (T) пе?": {
          kz:"Сенімді (A) пе — Толқымалы (T) пе?",
          ru:"Уверенный (A) или Бурный (T)?",
          en:"Assertive (A) or Turbulent (T)?",
          tr:"Kararlı (A) mı — Çalkantılı (T) mi?"
        },
     
        // ── QUESTION SCALE POLES (repeated across questions) ───────────
        "Келісемін":   {kz:"Келісемін",   ru:"Согласен",    en:"Agree",    tr:"Katılıyorum"},
        "Келіспеймін": {kz:"Келіспеймін", ru:"Не согласен", en:"Disagree", tr:"Katılmıyorum"},
     
        // ── QUESTION TEXTS — EI ────────────────────────────────────────
        "Мен жиі жаңа адамдармен танысамын.": {
          kz:"Мен жиі жаңа адамдармен танысамын.",
          ru:"Я часто знакомлюсь с новыми людьми.",
          en:"I often meet new people.",
          tr:"Sık sık yeni insanlarla tanışırım."
        },
        "Топ жиналыстары мені шабыттандырады.": {
          kz:"Топ жиналыстары мені шабыттандырады.",
          ru:"Групповые встречи вдохновляют меня.",
          en:"Group meetings inspire me.",
          tr:"Grup toplantıları beni motive eder."
        },
        "Мен жаңа орынға барғанда тез сөйлесіп кетемін.": {
          kz:"Мен жаңа орынға барғанда тез сөйлесіп кетемін.",
          ru:"Когда я прихожу в новое место, я быстро начинаю общаться.",
          en:"When I go to a new place, I start talking to people quickly.",
          tr:"Yeni bir yere gittiğimde hızla konuşmaya başlarım."
        },
        "Бейтаныс адамдарға өзімді таныстыру маған оңай.": {
          kz:"Бейтаныс адамдарға өзімді таныстыру маған оңай.",
          ru:"Мне легко представляться незнакомым людям.",
          en:"Introducing myself to strangers is easy for me.",
          tr:"Yabancılara kendimi tanıtmak benim için kolaydır."
        },
        "Мен топта болғанда жалғыз болғанда алатын энергиядан гөрі көбірек энергия аламын.": {
          kz:"Мен топта болғанда жалғыз болғанда алатын энергиядан гөрі көбірек энергия аламын.",
          ru:"В группе я получаю больше энергии, чем наедине с собой.",
          en:"I get more energy from being in a group than from being alone.",
          tr:"Grupla geçirdiğim zamanlardan yalnız olduğumdan daha fazla enerji alırım."
        },
        "Үлкен топтарда болу — маған қызықты, жалықтырмайды.": {
          kz:"Үлкен топтарда болу — маған қызықты, жалықтырмайды.",
          ru:"Быть в больших группах — для меня интересно, не утомительно.",
          en:"Being in large groups is interesting to me, not tiring.",
          tr:"Büyük gruplarda bulunmak benim için ilginçtir, yorucu değil."
        },
        "Ұзақ әлеуметтік кездесулерден кейін мен шаршаймын.": {
          kz:"Ұзақ әлеуметтік кездесулерден кейін мен шаршаймын.",
          ru:"После долгих социальных встреч я устаю.",
          en:"After long social gatherings I feel tired.",
          tr:"Uzun sosyal buluşmalardan sonra yorulrum."
        },
        "Маған жалғыз ойлану ыңғайлырақ.": {
          kz:"Маған жалғыз ойлану ыңғайлырақ.",
          ru:"Мне удобнее думать в одиночестве.",
          en:"I find it more comfortable to think alone.",
          tr:"Yalnız düşünmek benim için daha rahat."
        },
        "Мен кішігірім топтағы терең сұхбатты ұнатамын.": {
          kz:"Мен кішігірім топтағы терең сұхбатты ұнатамын.",
          ru:"Мне нравятся глубокие беседы в маленькой группе.",
          en:"I enjoy deep conversations in small groups.",
          tr:"Küçük gruplarda derin sohbetlerden hoşlanırım."
        },
        "Жаңа адамдармен желілестіру мені тез шаршатады.": {
          kz:"Жаңа адамдармен желілестіру мені тез шаршатады.",
          ru:"Нетворкинг с новыми людьми быстро утомляет меня.",
          en:"Networking with new people tires me out quickly.",
          tr:"Yeni insanlarla ağ kurmak beni çabuk yorar."
        },
        "Маған жазбаша сөйлесу ауызша сөйлесуден ыңғайлырақ.": {
          kz:"Маған жазбаша сөйлесу ауызша сөйлесуден ыңғайлырақ.",
          ru:"Письменное общение удобнее для меня, чем устное.",
          en:"Written communication is more comfortable for me than spoken.",
          tr:"Yazılı iletişim benim için sözlü iletişimden daha rahat."
        },
        "Телефонмен сөйлесуден гөрі хабарлама жіберуді жөн көремін.": {
          kz:"Телефонмен сөйлесуден гөрі хабарлама жіберуді жөн көремін.",
          ru:"Я предпочитаю отправлять сообщения, а не звонить по телефону.",
          en:"I prefer sending messages to talking on the phone.",
          tr:"Telefonda konuşmak yerine mesaj göndermeyi tercih ederim."
        },
     
        // ── QUESTION TEXTS — SN ────────────────────────────────────────
        "Мен нақты деректер мен фактілерге сүйенемін.": {
          kz:"Мен нақты деректер мен фактілерге сүйенемін.",
          ru:"Я опираюсь на конкретные данные и факты.",
          en:"I rely on concrete data and facts.",
          tr:"Somut verilere ve gerçeklere güvenirim."
        },
        "Мен практикалық тәжірибені теориялық болжамнан жоғары бағалаймын.": {
          kz:"Мен практикалық тәжірибені теориялық болжамнан жоғары бағалаймын.",
          ru:"Я ценю практический опыт выше теоретических предположений.",
          en:"I value practical experience over theoretical speculation.",
          tr:"Pratik deneyimi teorik spekülasyondan daha değerli bulurum."
        },
        "Мен дәстүрлі тәсілдер жаңа тәсілдерге қарағанда тиімдірек деп санаймын.": {
          kz:"Мен дәстүрлі тәсілдер жаңа тәсілдерге қарағанда тиімдірек деп санаймын.",
          ru:"Я считаю, что традиционные методы эффективнее новых.",
          en:"I believe traditional methods are more effective than new ones.",
          tr:"Geleneksel yöntemlerin yeni yöntemlerden daha etkili olduğunu düşünürüm."
        },
        "Маған нақты нұсқаулар жалпы бағыттан ыңғайлырақ.": {
          kz:"Маған нақты нұсқаулар жалпы бағыттан ыңғайлырақ.",
          ru:"Мне удобнее конкретные инструкции, чем общее направление.",
          en:"I find specific instructions more comfortable than general direction.",
          tr:"Genel yön göstermek yerine somut talimatlar benim için daha rahattır."
        },
        "Мен қадамдарды бірте-бірте орындауды ұнатамын.": {
          kz:"Мен қадамдарды бірте-бірте орындауды ұнатамын.",
          ru:"Я люблю выполнять шаги постепенно.",
          en:"I like completing steps one at a time.",
          tr:"Adımları yavaş yavaş tamamlamayı severim."
        },
        "Мен байқалатын, дәлелденген нәрселерге сенемін.": {
          kz:"Мен байқалатын, дәлелденген нәрселерге сенемін.",
          ru:"Я доверяю наблюдаемым, доказанным вещам.",
          en:"I trust things that are observable and proven.",
          tr:"Gözlemlenebilir ve kanıtlanmış şeylere güvenirim."
        },
        "Күрделі және ерекше идеялар мені қарапайым идеялардан гөрі қызықтырады.": {
          kz:"Күрделі және ерекше идеялар мені қарапайым идеялардан гөрі қызықтырады.",
          ru:"Сложные и необычные идеи интересуют меня больше, чем простые.",
          en:"Complex and unusual ideas interest me more than simple ones.",
          tr:"Karmaşık ve alışılmadık fikirler beni basit fikirlerden daha çok ilgilendirir."
        },
        "Мен болашақты қазіргіден гөрі қызықты деп санаймын.": {
          kz:"Мен болашақты қазіргіден гөрі қызықты деп санаймын.",
          ru:"Я считаю будущее более интересным, чем настоящее.",
          en:"I find the future more interesting than the present.",
          tr:"Geleceği şimdiden daha ilginç buluyorum."
        },
        "Мен жиі жаңа мүмкіндіктерді іздеймін.": {
          kz:"Мен жиі жаңа мүмкіндіктерді іздеймін.",
          ru:"Я часто ищу новые возможности.",
          en:"I often look for new opportunities.",
          tr:"Sık sık yeni fırsatlar ararım."
        },
        "Мен суреттер мен метафоралар арқылы жақсы түсінемін.": {
          kz:"Мен суреттер мен метафоралар арқылы жақсы түсінемін.",
          ru:"Я лучше понимаю через образы и метафоры.",
          en:"I understand better through images and metaphors.",
          tr:"Görüntüler ve metaforlar aracılığıyla daha iyi anlarım."
        },
        "Маған жалпы бейне детальдарға қарағанда маңыздырақ.": {
          kz:"Маған жалпы бейне детальдарға қарағанда маңыздырақ.",
          ru:"Для меня общая картина важнее деталей.",
          en:"The big picture is more important to me than details.",
          tr:"Büyük resim, ayrıntılardan daha önemlidir benim için."
        },
        "Мен жиі жаңа теориялар ойлап табамын.": {
          kz:"Мен жиі жаңа теориялар ойлап табамын.",
          ru:"Я часто придумываю новые теории.",
          en:"I often come up with new theories.",
          tr:"Sık sık yeni teoriler geliştiririm."
        },
     
        // ── QUESTION TEXTS — TF ────────────────────────────────────────
        "Мен шешім қабылдауда эмоциядан гөрі логикаға сүйенемін.": {
          kz:"Мен шешім қабылдауда эмоциядан гөрі логикаға сүйенемін.",
          ru:"При принятии решений я опираюсь на логику, а не на эмоции.",
          en:"When making decisions I rely on logic rather than emotions.",
          tr:"Karar verirken duygulardan çok mantığa dayanırım."
        },
        "Объективті сын адамды ренжіткенше де пайдалы.": {
          kz:"Объективті сын адамды ренжіткенше де пайдалы.",
          ru:"Объективная критика полезна, даже если обижает человека.",
          en:"Objective criticism is useful even if it upsets someone.",
          tr:"Nesnel eleştiri, birini üzse bile faydalıdır."
        },
        "Маған тиімділік үйлесімділіктен маңыздырақ.": {
          kz:"Маған тиімділік үйлесімділіктен маңыздырақ.",
          ru:"Для меня эффективность важнее гармонии.",
          en:"Efficiency is more important to me than harmony.",
          tr:"Benim için verimlilik, uyumdan daha önemlidir."
        },
        "Мен дауда сезімдерді емес, фактілерді ұсынамын.": {
          kz:"Мен дауда сезімдерді емес, фактілерді ұсынамын.",
          ru:"В споре я представляю факты, а не чувства.",
          en:"In an argument I present facts rather than feelings.",
          tr:"Bir tartışmada duyguları değil gerçekleri sunarım."
        },
        "Мен жұмыста адам факторынан гөрі нәтижеге бағытталамын.": {
          kz:"Мен жұмыста адам факторынан гөрі нәтижеге бағытталамын.",
          ru:"На работе я ориентируюсь на результат, а не на человеческий фактор.",
          en:"At work I focus on results rather than people factors.",
          tr:"İşte insan faktöründen çok sonuca odaklanırım."
        },
        "Мен сыни ойлауды ескі жолдан шықпаудан жоғары бағалаймын.": {
          kz:"Мен сыни ойлауды ескі жолдан шықпаудан жоғары бағалаймын.",
          ru:"Я ценю критическое мышление выше следования устоявшемуся пути.",
          en:"I value critical thinking over staying on the beaten path.",
          tr:"Eleştirel düşünceyi alışılmış yoldan sapmamaktan daha değerli bulurum."
        },
        "Маған фактілік дәлелдерден гөрі эмоционалды үндеулер сендіреді.": {
          kz:"Маған фактілік дәлелдерден гөрі эмоционалды үндеулер сендіреді.",
          ru:"Эмоциональные обращения убеждают меня больше, чем фактические доказательства.",
          en:"Emotional appeals persuade me more than factual evidence.",
          tr:"Duygusal çağrılar beni olgusal kanıtlardan daha çok ikna eder."
        },
        "Мен адамдардың сезімін ренжітпеу үшін тікелей сын айтудан аулақпын.": {
          kz:"Мен адамдардың сезімін ренжітпеу үшін тікелей сын айтудан аулақпын.",
          ru:"Я избегаю прямой критики, чтобы не обидеть чувства людей.",
          en:"I avoid direct criticism to avoid hurting people's feelings.",
          tr:"İnsanların duygularını incitmemek için doğrudan eleştiriden kaçınırım."
        },
        "Маған адам үйлесімі нәтижеден маңыздырақ.": {
          kz:"Маған адам үйлесімі нәтижеден маңыздырақ.",
          ru:"Для меня гармония в отношениях важнее результата.",
          en:"Human harmony is more important to me than results.",
          tr:"Benim için insanlar arasındaki uyum, sonuçtan daha önemlidir."
        },
        "Мен біреудің хабарламасын оқымас бұрын оның көңіл-күйін байқаймын.": {
          kz:"Мен біреудің хабарламасын оқымас бұрын оның көңіл-күйін байқаймын.",
          ru:"Перед тем как читать сообщение, я замечаю настроение человека.",
          en:"Before reading someone's message, I notice their mood.",
          tr:"Birinin mesajını okumadan önce ruh halini fark ederim."
        },
        "Мен шешім қабылдаған кезде этиканы тиімділіктен жоғары қоямын.": {
          kz:"Мен шешім қабылдаған кезде этиканы тиімділіктен жоғары қоямын.",
          ru:"Принимая решения, я ставлю этику выше эффективности.",
          en:"When making decisions, I place ethics above efficiency.",
          tr:"Karar verirken etiği verimliliğin üstünde tutarım."
        },
        "Мен басқалардың проблемаларына шешім ұсынбас бұрын жай тыңдаймын.": {
          kz:"Мен басқалардың проблемаларына шешім ұсынбас бұрын жай тыңдаймын.",
          ru:"Перед тем как предложить решение чужих проблем, я просто слушаю.",
          en:"Before offering solutions to others' problems, I simply listen.",
          tr:"Başkalarının sorunlarına çözüm önermeden önce sadece dinlerim."
        },
     
        // ── QUESTION TEXTS — JP ────────────────────────────────────────
        "Мен жоспарды ұстану ыңғайлы деп санаймын.": {
          kz:"Мен жоспарды ұстану ыңғайлы деп санаймын.",
          ru:"Я считаю, что придерживаться плана удобно.",
          en:"I find it comfortable to stick to a plan.",
          tr:"Bir plana bağlı kalmayı rahat buluyorum."
        },
        "Маған тәртіп пен жүйе маңызды.": {
          kz:"Маған тәртіп пен жүйе маңызды.",
          ru:"Для меня важны порядок и система.",
          en:"Order and structure are important to me.",
          tr:"Benim için düzen ve sistem önemlidir."
        },
        "Мен тапсырманы дедлайнға дейін ерте аяқтауға тырысамын.": {
          kz:"Мен тапсырманы дедлайнға дейін ерте аяқтауға тырысамын.",
          ru:"Я стараюсь завершить задачу до дедлайна.",
          en:"I try to finish tasks before the deadline.",
          tr:"Görevi son tarihten önce tamamlamaya çalışırım."
        },
        "Маған тазалық пен тәртіп маңызды.": {
          kz:"Маған тазалық пен тәртіп маңызды.",
          ru:"Для меня важны чистота и порядок.",
          en:"Cleanliness and order are important to me.",
          tr:"Benim için temizlik ve düzen önemlidir."
        },
        "Мен жоспар жасамай жайсыздана бастаймын.": {
          kz:"Мен жоспар жасамай жайсыздана бастаймын.",
          ru:"Без плана я начинаю чувствовать дискомфорт.",
          en:"Without a plan I start to feel uncomfortable.",
          tr:"Plan yapmadan rahatsızlık hissetmeye başlarım."
        },
        "Мен жауапты адам деген беделге ие болуды ұнатамын.": {
          kz:"Мен жауапты адам деген беделге ие болуды ұнатамын.",
          ru:"Мне нравится иметь репутацию ответственного человека.",
          en:"I like having a reputation as a responsible person.",
          tr:"Sorumlu biri olarak tanınmayı severim."
        },
        "Маған икемділік пен спонтанды болу жоспардан маңыздырақ.": {
          kz:"Маған икемділік пен спонтанды болу жоспардан маңыздырақ.",
          ru:"Для меня гибкость и спонтанность важнее плана.",
          en:"Flexibility and spontaneity are more important to me than a plan.",
          tr:"Benim için esneklik ve kendiliğindenlik plandan daha önemlidir."
        },
        "Мен жаңа мүмкіндіктерге ашық болу үшін шешімді кейінге қалдырамын.": {
          kz:"Мен жаңа мүмкіндіктерге ашық болу үшін шешімді кейінге қалдырамын.",
          ru:"Я откладываю решение, чтобы оставаться открытым к новым возможностям.",
          en:"I delay decisions to stay open to new opportunities.",
          tr:"Yeni fırsatlara açık kalmak için kararları ertelerim."
        },
        "Мен бір мезгілде бірнеше жобамен жұмыс жасауды ұнатамын.": {
          kz:"Мен бір мезгілде бірнеше жобамен жұмыс жасауды ұнатамын.",
          ru:"Мне нравится работать над несколькими проектами одновременно.",
          en:"I enjoy working on several projects at the same time.",
          tr:"Aynı anda birden fazla proje üzerinde çalışmaktan hoşlanırım."
        },
        "Маған монотонды рутина тез жалықтырады.": {
          kz:"Маған монотонды рутина тез жалықтырады.",
          ru:"Монотонная рутина быстро мне надоедает.",
          en:"Monotonous routine bores me quickly.",
          tr:"Tekdüze rutin beni çabuk sıkar."
        },
        "Мен жолда шешім қабылдауды жоспарлаудан ыңғайлырақ деп санаймын.": {
          kz:"Мен жолда шешім қабылдауды жоспарлаудан ыңғайлырақ деп санаймын.",
          ru:"Я считаю решения на ходу удобнее, чем планирование.",
          en:"I find making decisions on the go more comfortable than planning.",
          tr:"Anında karar vermeyi planlamadan daha rahat buluyorum."
        },
        "Ертеңгі жоспарым кездейсоқ өзгерсе мен ашуланбаймын.": {
          kz:"Ертеңгі жоспарым кездейсоқ өзгерсе мен ашуланбаймын.",
          ru:"Если мои планы на завтра неожиданно меняются, я не злюсь.",
          en:"If tomorrow's plans change unexpectedly, I don't get angry.",
          tr:"Yarınki planlarım beklenmedik şekilde değişirse sinirlenmen."
        },
     
        // ── QUESTION TEXTS — AT ────────────────────────────────────────
        "Мен өз мүмкіндіктеріме сенімдімін.": {
          kz:"Мен өз мүмкіндіктеріме сенімдімін.",
          ru:"Я уверен в своих возможностях.",
          en:"I am confident in my abilities.",
          tr:"Kendi yeteneklerime güveniyorum."
        },
        "Мен жіберген қателерімді тез ұмытамын.": {
          kz:"Мен жіберген қателерімді тез ұмытамын.",
          ru:"Я быстро забываю о своих ошибках.",
          en:"I quickly forget the mistakes I make.",
          tr:"Yaptığım hataları çabuk unuturum."
        },
        "Мен стресс кезінде де өзімді жайлы сезінемін.": {
          kz:"Мен стресс кезінде де өзімді жайлы сезінемін.",
          ru:"Даже в стрессовых ситуациях я чувствую себя комфортно.",
          en:"Even in stressful situations I feel at ease.",
          tr:"Stresli durumlarda bile kendimi rahat hissederim."
        },
        "Сын сөз менің мотивациямды жоймайды.": {
          kz:"Сын сөз менің мотивациямды жоймайды.",
          ru:"Критика не разрушает мою мотивацию.",
          en:"Criticism doesn't destroy my motivation.",
          tr:"Eleştiri motivasyonumu yok etmez."
        },
        "Маңызды жиналыс алдында мен жайлы боламын.": {
          kz:"Маңызды жиналыс алдында мен жайлы боламын.",
          ru:"Перед важным совещанием я чувствую себя комфортно.",
          en:"Before an important meeting I feel comfortable.",
          tr:"Önemli bir toplantıdan önce kendimi rahat hissederim."
        },
        "Мен өз жетістіктерімді мақтанышпен мойындаймын.": {
          kz:"Мен өз жетістіктерімді мақтанышпен мойындаймын.",
          ru:"Я с гордостью признаю свои достижения.",
          en:"I acknowledge my achievements with pride.",
          tr:"Başarılarımı gururla kabul ederim."
        },
        "Мен жиі өзімнің жеткілікті деңгейде екенімді сезінем.": {
          kz:"Мен жиі өзімнің жеткілікті деңгейде екенімді сезінем.",
          ru:"Я часто чувствую, что мне чего-то не хватает.",
          en:"I often feel that I am not good enough.",
          tr:"Sık sık yeterli olmadığımı hissederim."
        },
        "Мен жиі болашақ туралы алаңдаймын.": {
          kz:"Мен жиі болашақ туралы алаңдаймын.",
          ru:"Я часто беспокоюсь о будущем.",
          en:"I often worry about the future.",
          tr:"Gelecek hakkında sık sık endişelenirim."
        },
        "Маңызды жұмыс аяқталса да мен жиі жақсырақ болуы мүмкін еді деп ойлаймын.": {
          kz:"Маңызды жұмыс аяқталса да мен жиі жақсырақ болуы мүмкін еді деп ойлаймын.",
          ru:"Даже после завершения важной работы я часто думаю, что могло быть лучше.",
          en:"Even after finishing important work, I often think it could have been better.",
          tr:"Önemli bir iş bittikten sonra bile sık sık daha iyi olabilirdi diye düşünürüm."
        },
        "Кішігірім сәтсіздіктер де мені ұзақ уақыт алаңдатады.": {
          kz:"Кішігірім сәтсіздіктер де мені ұзақ уақыт алаңдатады.",
          ru:"Даже небольшие неудачи долго меня беспокоят.",
          en:"Even small failures worry me for a long time.",
          tr:"Küçük başarısızlıklar bile beni uzun süre endişelendirir."
        },
        "Мен жиі өзімнің шешімдерімді күмән астына аламын.": {
          kz:"Мен жиі өзімнің шешімдерімді күмән астына аламын.",
          ru:"Я часто ставлю под сомнение свои решения.",
          en:"I often question my own decisions.",
          tr:"Sık sık kendi kararlarımı sorgulurum."
        },
        "Мен жиі жетіспейтін нәрсеге назар аударамын, бар нәрсеге емес.": {
          kz:"Мен жиі жетіспейтін нәрсеге назар аударамын, бар нәрсеге емес.",
          ru:"Я часто обращаю внимание на то, чего не хватает, а не на то, что есть.",
          en:"I often focus on what's missing rather than what I have.",
          tr:"Sık sık var olanlara değil, eksik olanlara odaklanırım."
        },
     
        // ── SUBMIT SECTION ─────────────────────────────────────────────
        "Нәтижені есептеу →": {
          kz:"Нәтижені есептеу →",
          ru:"Вычислить результат →",
          en:"Calculate result →",
          tr:"Sonucu hesapla →"
        },
        "Барлық 60 сұраққа жауап беріңіз": {
          kz:"Барлық 60 сұраққа жауап беріңіз",
          ru:"Ответьте на все 60 вопросов",
          en:"Answer all 60 questions",
          tr:"60 sorunun tümünü yanıtlayın"
        },
     
        // ── RESULT SECTION HEADINGS ────────────────────────────────────
        "🎓 Ұсынылатын мамандықтар": {
          kz:"🎓 Ұсынылатын мамандықтар",
          ru:"🎓 Рекомендуемые специальности",
          en:"🎓 Recommended programs",
          tr:"🎓 Önerilen bölümler"
        },
        "💼 Карьера бағыттары": {
          kz:"💼 Карьера бағыттары",
          ru:"💼 Карьерные направления",
          en:"💼 Career directions",
          tr:"💼 Kariyer yönleri"
        },
        "🏛️ Ұсынылатын университеттер": {
          kz:"🏛️ Ұсынылатын университеттер",
          ru:"🏛️ Рекомендуемые университеты",
          en:"🏛️ Recommended universities",
          tr:"🏛️ Önerilen üniversiteler"
        },
        "⭐ Осы типтің белгілі тұлғалары": {
          kz:"⭐ Осы типтің белгілі тұлғалары",
          ru:"⭐ Известные личности этого типа",
          en:"⭐ Famous people of this type",
          tr:"⭐ Bu tipin tanınmış isimleri"
        },
        "🔍 Сіздің тұлға типіңіз туралы": {
          kz:"🔍 Сіздің тұлға типіңіз туралы",
          ru:"🔍 О вашем типе личности",
          en:"🔍 About your personality type",
          tr:"🔍 Kişilik tipiniz hakkında"
        },
        "💪 КҮШТІ ЖАҚТАРЫ": {
          kz:"💪 КҮШТІ ЖАҚТАРЫ",
          ru:"💪 СИЛЬНЫЕ СТОРОНЫ",
          en:"💪 STRENGTHS",
          tr:"💪 GÜÇLÜ YÖNLER"
        },
        "🌱 ДАМЫТУЫ КЕРЕК": {
          kz:"🌱 ДАМЫТУЫ КЕРЕК",
          ru:"🌱 НУЖНО РАЗВИВАТЬ",
          en:"🌱 AREAS TO DEVELOP",
          tr:"🌱 GELİŞTİRİLMESİ GEREKENLER"
        },
        "💘 Жұмыс стилі мен серіктестік": {
          kz:"💘 Жұмыс стилі мен серіктестік",
          ru:"💘 Рабочий стиль и партнёрство",
          en:"💘 Work style and partnership",
          tr:"💘 Çalışma tarzı ve ortaklık"
        },
     
        // ── WARNING ────────────────────────────────────────────────────
        "ℹ️ Бұл тест бағдарлама мақсатында қолданылады. MBTI — ғылыми диагноз емес, өзіңіздің қызығушылықтарыңызды да ескеріңіз.": {
          kz:"ℹ️ Бұл тест бағдарлама мақсатында қолданылады. MBTI — ғылыми диагноз емес, өзіңіздің қызығушылықтарыңызды да ескеріңіз.",
          ru:"ℹ️ Этот тест используется в ознакомительных целях. MBTI — не научный диагноз, учитывайте также свои личные интересы.",
          en:"ℹ️ This test is used for guidance purposes. MBTI is not a scientific diagnosis — also consider your personal interests.",
          tr:"ℹ️ Bu test yönlendirme amacıyla kullanılmaktadır. MBTI bilimsel bir tanı değildir; kişisel ilgi alanlarınızı da göz önünde bulundurun."
        },
     
        // ── AXES LABELS ────────────────────────────────────────────────
        "Экстраверт":   {kz:"Экстраверт",   ru:"Экстраверт",  en:"Extravert",  tr:"Dışadönük"},
        "Интроверт":    {kz:"Интроверт",    ru:"Интроверт",   en:"Introvert",  tr:"İçedönük"},
        "Интуитивті":   {kz:"Интуитивті",   ru:"Интуитивный", en:"Intuitive",  tr:"Sezgisel"},
        "Сенсорлық":    {kz:"Сенсорлық",    ru:"Сенсорный",   en:"Sensing",    tr:"Duyusal"},
        "Сезімдік":     {kz:"Сезімдік",     ru:"Чувствующий", en:"Feeling",    tr:"Hisseden"},
        "Ойлаушы":      {kz:"Ойлаушы",      ru:"Мыслящий",    en:"Thinking",   tr:"Düşünen"},
        "Икемді":       {kz:"Икемді",       ru:"Гибкий",      en:"Perceiving", tr:"Esnek"},
        "Жоспарлаушы":  {kz:"Жоспарлаушы", ru:"Организованный",en:"Judging",  tr:"Planlı"},
        "Толқымалы":    {kz:"Толқымалы",    ru:"Бурный",      en:"Turbulent",  tr:"Çalkantılı"},
        "Сенімді":      {kz:"Сенімді",      ru:"Уверенный",   en:"Assertive",  tr:"Kararlı"},
     
        // ── ACTION BUTTONS ─────────────────────────────────────────────
        "💾 Профильге сақтау": {
          kz:"💾 Профильге сақтау",
          ru:"💾 Сохранить в профиль",
          en:"💾 Save to profile",
          tr:"💾 Profile kaydet"
        },
        "🏛️ Университеттер": {
          kz:"🏛️ Университеттер",
          ru:"🏛️ Университеты",
          en:"🏛️ Universities",
          tr:"🏛️ Üniversiteler"
        },
        "🎓 Мамандықтар": {
          kz:"🎓 Мамандықтар",
          ru:"🎓 Специальности",
          en:"🎓 Specialties",
          tr:"🎓 Bölümler"
        },
        "🔄 Қайта тапсыру": {
          kz:"🔄 Қайта тапсыру",
          ru:"🔄 Пройти заново",
          en:"🔄 Retake",
          tr:"🔄 Tekrar al"
        },
     
        // ── DYNAMIC HINTS (used in JS) ─────────────────────────────────
        "✅ Барлық сұрақтарға жауап бердіңіз!": {
          kz:"✅ Барлық сұрақтарға жауап бердіңіз!",
          ru:"✅ Вы ответили на все вопросы!",
          en:"✅ You have answered all questions!",
          tr:"✅ Tüm soruları yanıtladınız!"
        },
        "Жалпы": {kz:"Жалпы", ru:"Общий", en:"Overall", tr:"Genel"},
    
        // ── AI BUBBLE ──────────────────────────────────────────────────
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

  window.__mbtiNameI18n = {
// Careers
"Маркетолог": { kz: "Маркетолог", ru: "Маркетолог", en: "Marketer", tr: "Pazarlamacı" },
"Дизайнер": { kz: "Дизайнер", ru: "Дизайнер", en: "Designer", tr: "Tasarımcı" },
"PR маман": { kz: "PR маман", ru: "PR-специалист", en: "PR Specialist", tr: "PR Uzmanı" },
"Психолог": { kz: "Психолог", ru: "Психолог", en: "Psychologist", tr: "Psikolog" },
"Кәсіпкер": { kz: "Кәсіпкер", ru: "Предприниматель", en: "Entrepreneur", tr: "Girişimci" },

// Strengths
"Шығармашылық": { kz: "Шығармашылық", ru: "Творчество", en: "Creativity", tr: "Yaratıcılık" },
"Коммуникация": { kz: "Коммуникация", ru: "Коммуникация", en: "Communication", tr: "İletişim" },
"Оптимизм": { kz: "Оптимизм", ru: "Оптимизм", en: "Optimism", tr: "İyimserlik" },

// Weaknesses
"Аяқтамайды": { kz: "Аяқтамайды", ru: "Не доводит до конца", en: "Doesn't finish", tr: "Tamamlamaz" },
"Гиперактивтілік": { kz: "Гиперактивтілік", ru: "Гиперактивность", en: "Hyperactivity", tr: "Hiperaktivite" },
  };
  
  window.__mbtiRoleI18n = {
    'Аналитик':{kz:'Аналитик',  ru:'Аналитик', en:'Analyst',   tr:'Analist'},
    'Дипломат': {kz:'Дипломат',  ru:'Дипломат', en:'Diplomat',  tr:'Diplomat'},
    'Сентинел': {kz:'Сентинел',  ru:'Страж',    en:'Sentinel',  tr:'Bekçi'},
    'Зерттеуші':{kz:'Зерттеуші', ru:'Искатель', en:'Explorer',  tr:'Kaşif'},
  };

  const RESULT_I18N = {
    "Psychology": {
      kz: "Психология",
      ru: "Психология",
      en: "Psychology",
      tr: "Psikoloji"
    },
    "Design": {
      kz: "Дизайн",
      ru: "Дизайн",
      en: "Design",
      tr: "Tasarım"
    },
    "Arts": {
      kz: "Өнер",
      ru: "Искусство",
      en: "Arts",
      tr: "Sanat"
    },
    "Entrepreneurship": {
      kz: "Кәсіпкерлік",
      ru: "Предпринимательство",
      en: "Entrepreneurship",
      tr: "Girişimcilik"
    },
  
    "Recommended universities": {
      kz: "Ұсынылатын университеттер",
      ru: "Рекомендуемые университеты",
      en: "Recommended universities",
      tr: "Önerilen üniversiteler"
    },
  
    "Famous people of this type": {
      kz: "Осы типтің белгілі тұлғалары",
      ru: "Известные личности этого типа",
      en: "Famous people of this type",
      tr: "Bu tipтің ünlü kişileri"
    },
  
    "STRENGTHS": {
      kz: "КҮШТІ ЖАҚТАРЫ",
      ru: "СИЛЬНЫЕ СТОРОНЫ",
      en: "STRENGTHS",
      tr: "GÜÇLÜ YÖNLER"
    },
  
    "AREAS TO DEVELOP": {
      kz: "ДАМЫТУ ҚАЖЕТ",
      ru: "ЗОНЫ РОСТА",
      en: "AREAS TO DEVELOP",
      tr: "GELİŞİM ALANLARI"
    },
  
    "Energy": {
      kz: "Энергия",
      ru: "Энергия",
      en: "Energy",
      tr: "Enerji"
    },
  
    "Communication": {
      kz: "Коммуникация",
      ru: "Коммуникация",
      en: "Communication",
      tr: "İletişim"
    },
  
    "Creativity": {
      kz: "Шығармашылық",
      ru: "Креативность",
      en: "Creativity",
      tr: "Yaratıcılık"
    },
  
    "Optimism": {
      kz: "Оптимизм",
      ru: "Оптимизм",
      en: "Optimism",
      tr: "İyimserlik"
    },
  
    "Lack of focus": {
      kz: "Зейіннің жетіспеуі",
      ru: "Недостаток концентрации",
      en: "Lack of focus",
      tr: "Odak eksikliği"
    },
  
    "Hyperactivity": {
      kz: "Гипербелсенділік",
      ru: "Гиперактивность",
      en: "Hyperactivity",
      tr: "Hiperaktivite"
    }
  };

  function getCurrentLang() {
    return localStorage.getItem("lang") || "kz";
  }
  
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  }
  
  function applyRecommendationI18n() {
    const lang = getCurrentLang();
  
    setText('[data-rec="navHome"]', UI.navHome[lang]);
    setText('[data-rec="navSpecialties"]', UI.navSpecialties[lang]);
    setText('[data-rec="navUniversities"]', UI.navUniversities[lang]);
    setText('[data-rec="navPreparation"]', UI.navPreparation[lang]);
    setText('[data-rec="navFeed"]', UI.navFeed[lang]);
    setText('[data-rec="navLanguage"]', UI.navLanguage[lang]);
    setText('[data-rec="navProfile"]', UI.navProfile[lang]);
  
    setText('[data-rec="heroTitle"]', UI.heroTitle[lang]);
    setText('[data-rec="heroDesc"]', UI.heroDesc[lang]);
  
    setText('[data-rec="badge1"]', UI.badge1[lang]);
    setText('[data-rec="badge2"]', UI.badge2[lang]);
    setText('[data-rec="badge3"]', UI.badge3[lang]);
    setText('[data-rec="badge4"]', UI.badge4[lang]);
  
    setText('[data-rec="submit"]', UI.submit[lang]);
    setText('[data-rec="answerAll"]', UI.answerAll[lang]);
  
    setText('[data-rec="majorsTitle"]', UI.majorsTitle[lang]);
    setText('[data-rec="careersTitle"]', UI.careersTitle[lang]);
    setText('[data-rec="unisTitle"]', UI.unisTitle[lang]);
    setText('[data-rec="famousTitle"]', UI.famousTitle[lang]);
    setText('[data-rec="aboutTitle"]', UI.aboutTitle[lang]);
    setText('[data-rec="strongTitle"]', UI.strongTitle[lang]);
    setText('[data-rec="weakTitle"]', UI.weakTitle[lang]);
    setText('[data-rec="workTitle"]', UI.workTitle[lang]);
  
    setText('[data-rec="saveBtn"]', UI.saveBtn[lang]);
    setText('[data-rec="uniBtn"]', UI.uniBtn[lang]);
    setText('[data-rec="specBtn"]', UI.specBtn[lang]);
    setText('[data-rec="retakeBtn"]', UI.retakeBtn[lang]);
  }
  
  document.addEventListener("DOMContentLoaded", applyRecommendationI18n);
  window.applyRecommendationI18n = applyRecommendationI18n;

  function translateResultBlocks() {
    const lang = localStorage.getItem("lang") || "kz";
  
    document.querySelectorAll("*").forEach(el => {
      const txt = el.textContent?.trim();
  
      if (RESULT_I18N[txt]) {
        el.textContent = RESULT_I18N[txt][lang];
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(translateResultBlocks, 300);
  });
  
  window.addEventListener("storage", () => {
    setTimeout(translateResultBlocks, 300);
  });
  
  
  function forceTranslateResult(lang) {
    lang = normLang(lang);
  
    document.querySelectorAll("#resWrap *").forEach(el => {
      if (el.children.length) return;
  
      const key = el.textContent.trim().replaceAll('"', "");
      const original = el.textContent.trim();
  
      if (EXTRA_RESULT_I18N[key]) {
        el.textContent = EXTRA_RESULT_I18N[key][lang] || EXTRA_RESULT_I18N[key].kz;
      }
  
      if (EXTRA_RESULT_I18N[original]) {
        el.textContent = EXTRA_RESULT_I18N[original][lang] || EXTRA_RESULT_I18N[original].kz;
      }
    });
  }
  
  const oldShowResultTranslate = window.showResult;
  window.showResult = function(code, variant, scores) {
    oldShowResultTranslate(code, variant, scores);
  
    const lang = normLang();
  
    setTimeout(() => {
      forceTranslateResult(lang);
      applyStatic(lang);
    }, 50);
  };
  
  const oldSetLangTranslate = window.setLang;
  window.setLang = function(lang) {
    oldSetLangTranslate(lang);
  
    setTimeout(() => {
      forceTranslateResult(lang);
      applyStatic(lang);
    }, 50);
  };

  function progressText(done, lang) {
    if (lang === "ru") return `${done} / 60 вопросов`;
    if (lang === "en") return `${done} / 60 questions`;
    if (lang === "tr") return `${done} / 60 soru`;
    return `${done} / 60 сұрақ`;
  }

  function applyToData(lang) {
    lang = normLang(lang);

    if (typeof QS !== "undefined") {
      QS.forEach(q => {
        if (!q.__LKey) q.__LKey = q.L === "Келісемін" ? "agree" : "disagree";
        if (!q.__RKey) q.__RKey = q.R === "Келісемін" ? "agree" : "disagree";
        q.t = tr(Q[q.id], lang);
        q.L = tr(UI[q.__LKey], lang);
        q.R = tr(UI[q.__RKey], lang);
      });
    }

    if (typeof BLOCKS !== "undefined") {
      BLOCKS.forEach(b => {
        if (BLOCK_TEXTS[b.ax]) {
          b.title = tr(BLOCK_TEXTS[b.ax].title, lang);
          b.sub = tr(BLOCK_TEXTS[b.ax].sub, lang);
        }
      });
    }

    if (typeof TYPES !== "undefined") {
      Object.keys(TYPES).forEach(code => {
        if (TYPE_NAMES[code]) TYPES[code].name = tr(TYPE_NAMES[code], lang);
        if (ROLE_NAMES[TYPES[code].role]) TYPES[code].role = tr(ROLE_NAMES[TYPES[code].role], lang);
      });
    }
  }

  function applyStatic(lang) {
    lang = normLang(lang);

    document.documentElement.lang = lang === "kz" ? "kk" : lang;

    const byKey = {
      "nav-home": UI.navHome,
      "nav-specialties": UI.navSpecialties,
      "nav-universities": UI.navUniversities,
      "nav-preparation": UI.navPreparation,
      "nav-feed": UI.navFeed,
      "nav-language": UI.navLanguage,
      "nav-profile": UI.navProfile
    };

    Object.keys(byKey).forEach(key => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
        el.textContent = tr(byKey[key], lang);
      });
    });

    const heroTitle = document.querySelector(".test-hero h1");
    if (heroTitle) heroTitle.textContent = tr(UI.heroTitle, lang);

    const heroDesc = document.querySelector(".test-hero p");
    if (heroDesc) heroDesc.textContent = tr(UI.heroDesc, lang);

    const badges = document.querySelectorAll(".t-badge");
    if (badges[0]) badges[0].textContent = tr(UI.badge1, lang);
    if (badges[1]) badges[1].textContent = tr(UI.badge2, lang);
    if (badges[2]) badges[2].textContent = tr(UI.badge3, lang);
    if (badges[3]) badges[3].textContent = tr(UI.badge4, lang);

    const pText = document.getElementById("pText");
    if (pText) pText.textContent = progressText(Object.keys(window.ANS || {}).length, lang);

    const subBtn = document.querySelector(".sub-btn");
    if (subBtn) subBtn.textContent = tr(UI.submit, lang);

    const done = Object.keys(window.ANS || {}).length;
    const subHint = document.getElementById("subHint");
    if (subHint) {
      subHint.textContent = done === 60 ? tr(UI.allDone, lang) : done === 0 ? tr(UI.answerAll, lang) : `${60 - done} ${tr(UI.left, lang)}`;
    }

    const warn = document.querySelector(".warn");
    if (warn) warn.textContent = tr(UI.warn, lang);

    const cards = document.querySelectorAll(".res-card h3");
    if (cards[0]) cards[0].textContent = tr(UI.majorsTitle, lang);
    if (cards[1]) cards[1].textContent = tr(UI.careersTitle, lang);
    if (cards[2]) cards[2].textContent = tr(UI.unisTitle, lang);
    if (cards[3]) cards[3].textContent = tr(UI.famousTitle, lang);
    if (cards[4]) cards[4].textContent = tr(UI.aboutTitle, lang);
    if (cards[5]) cards[5].textContent = tr(UI.workTitle, lang);

    const sw = document.querySelectorAll(".sw-box h4");
    if (sw[0]) sw[0].textContent = tr(UI.strongTitle, lang);
    if (sw[1]) sw[1].textContent = tr(UI.weakTitle, lang);

    const actions = document.querySelectorAll(".res-actions .r-btn");
    if (actions[0]) actions[0].textContent = tr(UI.saveBtn, lang);
    if (actions[1]) actions[1].textContent = tr(UI.uniBtn, lang);
    if (actions[2]) actions[2].textContent = tr(UI.specBtn, lang);
    if (actions[3]) actions[3].textContent = tr(UI.retakeBtn, lang);
  }

  const oldRenderQs = window.renderQs;
  window.renderQs = function () {
    const lang = normLang();
    applyToData(lang);
    if (typeof oldRenderQs === "function") oldRenderQs();
    applyStatic(lang);
  };

  const oldPick = window.pick;
  window.pick = function (id, v) {
    if (typeof oldPick === "function") oldPick(id, v);
    const lang = normLang();
    const done = Object.keys(window.ANS || {}).length;
    const pText = document.getElementById("pText");
    if (pText) pText.textContent = progressText(done, lang);

    const hint = document.getElementById("subHint");
    if (hint) {
      hint.textContent = done === 60 ? tr(UI.allDone, lang) : `${60 - done} ${tr(UI.left, lang)}`;
      hint.style.color = done === 60 ? "#34d399" : "var(--muted)";
    }
  };

  const oldCalc = window.calcMBTI;
  window.calcMBTI = function () {
    const lang = normLang();
    const missed = typeof QS !== "undefined" ? QS.filter(q => !ANS[q.id]) : [];
    if (missed.length) {
      missed.forEach(q => {
        const c = document.getElementById("qc" + q.id);
        if (c) c.className = "q-block unanswered";
      });
      const first = missed[0];
      const el = document.getElementById("qc" + first.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      alert(UI.missedAlert[lang](missed.length));
      return;
    }
    if (typeof oldCalc === "function") oldCalc();
  };
// Слоганды аудару
const tSlogan = document.getElementById("tSlogan");
if (tSlogan && TYPE_SLOGANS[code]) tSlogan.textContent = tr(TYPE_SLOGANS[code], lang);

  const oldShowResult = window.showResult;
  window.showResult = function (code, variant, scores) {
    const lang = normLang();
    applyToData(lang);

    if (typeof oldShowResult === "function") oldShowResult(code, variant, scores);

    const t = typeof TYPES !== "undefined" ? TYPES[code] : null;

    const tName = document.getElementById("tName");
    if (tName && TYPE_NAMES[code]) tName.textContent = tr(TYPE_NAMES[code], lang);

    const tRole = document.getElementById("tRole");
    if (tRole && t && ROLE_NAMES[t.role]) tRole.textContent = tr(ROLE_NAMES[t.role], lang);

    // ← МЫН ҚОСЫҢЫЗ
    const tSlogan = document.getElementById("tSlogan");
    if (tSlogan && TYPE_SLOGANS[code]) tSlogan.textContent = tr(TYPE_SLOGANS[code], lang);

    // ... қалған axes коды ...
    applyStatic(lang);
};

const oldSave = window.saveToProfile;
window.saveToProfile = function () {
  const lang = normLang();
  const email = localStorage.getItem("currentUserEmail") || "guest";
  const m = JSON.parse(localStorage.getItem("u_" + email + "_mbti") || "{}");

  if (!m.type) {
    alert(tr(UI.noTest, lang));
    return;
  }

  // ── localStorage-ке сақтау ──
  const result = {
    type: m.type,
    variant: m.variant,
    name: m.name,
    role: m.role,
    date: new Date().toLocaleDateString("kk-KZ"),
    pattern: m.variant + " — " + m.name,
    description: m.role || ""
  };
  localStorage.setItem("u_" + email + "_careerTestResult", JSON.stringify(result));

  try {
    const pdKey = "u_" + email + "_profileData";
    const pd = JSON.parse(localStorage.getItem(pdKey) || "{}");
    pd.mbtiType = m.variant;
    pd.mbtiName = m.name;
    localStorage.setItem(pdKey, JSON.stringify(pd));
  } catch(e) {}

  const name = TYPE_NAMES[m.type] ? tr(TYPE_NAMES[m.type], lang) : m.name;
  alert(tr(UI.saved, lang) + m.variant + " — " + name);
};

  const oldRetake = window.retake;
  window.retake = function () {
    if (typeof oldRetake === "function") oldRetake();
    const lang = normLang();
    applyStatic(lang);
    const pText = document.getElementById("pText");
    if (pText) pText.textContent = progressText(0, lang);
    const subHint = document.getElementById("subHint");
    if (subHint) subHint.textContent = tr(UI.answerAll, lang);
  };

  window.applyTranslations = function (lang) {
    lang = normLang(lang);
    localStorage.setItem("lang", lang);
    applyToData(lang);
    if (typeof oldRenderQs === "function") oldRenderQs();
    applyStatic(lang);
  };

  window.setLang = function (lang) {
    lang = normLang(lang);
    localStorage.setItem("lang", lang);
    window.applyTranslations(lang);
    forceTranslateResult();

    const menu = document.getElementById("languageMenu");
    if (menu) menu.classList.remove("show");
  };

  document.addEventListener("DOMContentLoaded", function () {
    const lang = normLang();
    applyToData(lang);
    if (typeof oldRenderQs === "function") oldRenderQs();
    applyStatic(lang);
  });

  function translateResultNow(lang) {
  lang = normLang(lang);

  document.querySelectorAll("#resWrap *").forEach(el => {
    if (!el.children.length) {
      const key = el.textContent.trim();
      if (I18N[key] && I18N[key][lang]) {
        el.textContent = I18N[key][lang];
      }
    }
  });

  const code = document.getElementById("tCode")?.textContent.trim();

  if (code && TYPE_NAMES[code]) {
    document.getElementById("tName").textContent = TYPE_NAMES[code][lang];
  }

  const roleEl = document.getElementById("tRole");
  const roleKey = roleEl?.textContent.trim();

  if (roleKey && ROLE_NAMES[roleKey]) {
    roleEl.textContent = ROLE_NAMES[roleKey][lang];
  }

  document.querySelectorAll(".ax-card").forEach(card => {
    const letter = card.querySelector(".ax-letter")?.textContent.trim();
    const label = card.querySelector(".ax-label");

    if (!letter || !label) return;

    if (letter === "T" && label.textContent.includes("Turbulent")) {
      label.textContent = AXIS.Turb[lang];
    } else if (AXIS[letter]) {
      label.textContent = AXIS[letter][lang];
    }
  });
}
function forceTranslateResult() {
  const lang = localStorage.getItem("lang") || "kz";

  document.querySelectorAll("#resWrap *").forEach(el => {
    const text = el.textContent.trim();

    if (window.EXTRA_RESULT_I18N && EXTRA_RESULT_I18N[text]) {
      el.textContent = EXTRA_RESULT_I18N[text][lang] || EXTRA_RESULT_I18N[text].kz;
    }
  });
}

document.addEventListener("DOMContentLoaded", forceTranslateResult);

})();