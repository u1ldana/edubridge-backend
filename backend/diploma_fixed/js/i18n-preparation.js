(function(){
  const D = {
    // ── NAV ────────────────────────────────────────────────────────
    "nav-home": {kz:"Басты бет", ru:"Главная", en:"Home", tr:"Ana sayfa"},
    "nav-specialties": {kz:"Мамандықтар", ru:"Специальности", en:"Specialties", tr:"Bölümler"},
    "nav-universities": {kz:"Университеттер", ru:"Университеты", en:"Universities", tr:"Üniversiteler"},
    "nav-preparation": {kz:"Дайындық", ru:"Подготовка", en:"Preparation", tr:"Hazırlık"},
    "nav-feed": {kz:"Лента", ru:"Лента", en:"Feed", tr:"Akış"},
    "nav-language": {kz:"Тіл", ru:"Язык", en:"Language", tr:"Dil"},
    "nav-login": {kz:"Кіру", ru:"Войти", en:"Login", tr:"Giriş yap"},
 
    // ── FOOTER ─────────────────────────────────────────────────────
    "footer-contact": {kz:"Байланыс", ru:"Контакты", en:"Contact", tr:"İletişim"},
    "footer-text": {kz:"© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.", ru:"© 2026 EduBridge Türkiye. Все права защищены.", en:"© 2026 EduBridge Türkiye. All rights reserved.", tr:"© 2026 EduBridge Türkiye. Tüm hakları saklıdır."},
 
    // ── HERO ───────────────────────────────────────────────────────
    "Admission Preparation": {kz:"Қабылдауға дайындық", ru:"Подготовка к поступлению", en:"Admission Preparation", tr:"Başvuru hazırlığı"},
    "Түркияға түсуге дайындық": {kz:"Түркияға түсуге дайындық", ru:"Подготовка к поступлению в Турцию", en:"Preparation for Admission to Türkiye", tr:"Türkiye'ye Başvuru Hazırlığı"},
    "Барлық процесті бір жерден — чек-лист, файл жүктеу, дедлайн, сұхбат жауаптары және жазбалар.": {kz:"Барлық процесті бір жерден — чек-лист, файл жүктеу, дедлайн, сұхбат жауаптары және жазбалар.", ru:"Весь процесс в одном месте: чек-лист, загрузка файлов, дедлайны, ответы для интервью и заметки.", en:"Manage the whole process in one place: checklist, file upload, deadlines, interview answers and notes.", tr:"Tüm süreci tek yerden yönetin: kontrol listesi, dosya yükleme, son tarihler, mülakat cevapları ve notlar."},
 
    // ── HERO STATS ─────────────────────────────────────────────────
    "prep-checklist": {kz:"Чек-лист", ru:"Чек-лист", en:"Checklist", tr:"Kontrol listesi"},
    "Чек-лист": {kz:"Чек-лист", ru:"Чек-лист", en:"Checklist", tr:"Kontrol listesi"},
    "Файлдар": {kz:"Файлдар", ru:"Файлы", en:"Files", tr:"Dosyalar"},
    "Дедлайн": {kz:"Дедлайн", ru:"Дедлайн", en:"Deadline", tr:"Son tarih"},
    "Жалпы": {kz:"Жалпы", ru:"Общий", en:"Overall", tr:"Genel"},

    // ── TAB NAV LABELS ─────────────────────────────────────────────
    "prep-dashboard": {kz:"Панель", ru:"Панель", en:"Dashboard", tr:"Panel"},
    "Панель": {kz:"Панель", ru:"Панель", en:"Dashboard", tr:"Panel"},
    "prep-uploads": {kz:"Файлдар", ru:"Файлы", en:"Files", tr:"Dosyalar"},
    "prep-interview": {kz:"Сұхбат", ru:"Интервью", en:"Interview", tr:"Mülakat"},
    "prep-deadlines": {kz:"Дедлайн", ru:"Дедлайн", en:"Deadline", tr:"Son tarih"},
    "prep-notes": {kz:"Жазбалар", ru:"Заметки", en:"Notes", tr:"Notlar"},
    "pro-menu-notes": {kz:"Жазбалар", ru:"Заметки", en:"Notes", tr:"Notlar"},
    "prep-grants": {kz:"Грант", ru:"Грант", en:"Scholarship", tr:"Burs"},
 
    // ── BUTTONS ────────────────────────────────────────────────────
    "prep-reset-btn": {kz:"🗑️ Reset", ru:"🗑️ Сброс", en:"🗑️ Reset", tr:"🗑️ Sıfırla"},
    "prep-clear-all-btn": {kz:"🗑️ Барлығын өшіру", ru:"🗑️ Удалить всё", en:"🗑️ Clear all", tr:"🗑️ Tümünü sil"},
    "pro-save-btn": {kz:"💾 Сақтау", ru:"💾 Сохранить", en:"💾 Save", tr:"💾 Kaydet"},
    "pro-clear-btn": {kz:"🗑️ Тазалау", ru:"🗑️ Очистить", en:"🗑️ Clear", tr:"🗑️ Temizle"},
    "pro-menu-docs": {kz:"Құжаттар", ru:"Документы", en:"Documents", tr:"Belgeler"},
    "📋 Чек-листке өту": {kz:"📋 Чек-листке өту", ru:"📋 Перейти к чек-листу", en:"📋 Go to checklist", tr:"📋 Kontrol listesine git"},
    "📁 Файл жүктеу": {kz:"📁 Файл жүктеу", ru:"📁 Загрузить файл", en:"📁 Upload file", tr:"📁 Dosya yükle"},
    "↺ Барлығын reset": {kz:"↺ Барлығын reset", ru:"↺ Сбросить всё", en:"↺ Reset all", tr:"↺ Tümünü sıfırla"},
    "📁 Файл жүктеуге өту →": {kz:"📁 Файл жүктеуге өту →", ru:"📁 Перейти к загрузке файлов →", en:"📁 Go to file upload →", tr:"📁 Dosya yüklemeye git →"},
    "📎 Жүктеу": {kz:"📎 Жүктеу", ru:"📎 Загрузить", en:"📎 Upload", tr:"📎 Yükle"},
    "🗑️ Өшіру": {kz:"🗑️ Өшіру", ru:"🗑️ Удалить", en:"🗑️ Delete", tr:"🗑️ Sil"},
    "💾 Жазбаны сақтау": {kz:"💾 Жазбаны сақтау", ru:"💾 Сохранить заметку", en:"💾 Save note", tr:"💾 Notu kaydet"},
    "➕ Дедлайн қосу": {kz:"➕ Дедлайн қосу", ru:"➕ Добавить дедлайн", en:"➕ Add deadline", tr:"➕ Son tarih ekle"},
    "✨ Мысал жауап": {kz:"✨ Мысал жауап", ru:"✨ Пример ответа", en:"✨ Example answer", tr:"✨ Örnek cevap"},
    "🗑️ Барлық файлдарды өшіру": {kz:"🗑️ Барлық файлдарды өшіру", ru:"🗑️ Удалить все файлы", en:"🗑️ Delete all files", tr:"🗑️ Tüm dosyaları sil"},
    "Жабу": {kz:"Жабу", ru:"Закрыть", en:"Close", tr:"Kapatу"},
    "🗣️ Сұхбатқа дайындалу": {kz:"🗣️ Сұхбатқа дайындалу", ru:"🗣️ Подготовиться к интервью", en:"🗣️ Prepare for interview", tr:"🗣️ Mülakata hazırlan"},
 
    // ── DASHBOARD ──────────────────────────────────────────────────
    "📊 Бақылау панелі": {kz:"📊 Бақылау панелі", ru:"📊 Панель контроля", en:"📊 Dashboard", tr:"📊 Kontrol paneli"},
    "Бақылау панелі": {kz:"Бақылау панелі", ru:"Панель контроля", en:"Dashboard", tr:"Kontrol paneli"},
    "Дайындық процесінің жалпы көрінісі. Кез-келген кезеңге өту үшін картаны басыңыз.": {kz:"Дайындық процесінің жалпы көрінісі. Кез-келген кезеңге өту үшін картаны басыңыз.", ru:"Общий обзор процесса подготовки. Нажмите на карточку, чтобы перейти к нужному этапу.", en:"General overview of your preparation process. Click a card to open any stage.", tr:"Hazırlık sürecinin genel görünümü. Herhangi bir aşamaya geçmek için karta tıklayın."},
    "Жүктелген файл": {kz:"Жүктелген файл", ru:"Загруженные файлы", en:"Uploaded files", tr:"Yüklenen dosyalar"},
    "1. Бастау": {kz:"1. Бастау", ru:"1. Начало", en:"1. Start", tr:"1. Başlangıç"},
    "Жобаға тіркелдіңіз.": {kz:"Жобаға тіркелдіңіз.", ru:"Вы зарегистрировались в проекте.", en:"You have registered for the project.", tr:"Projeye kayıt oldunuz."},
    "2. Чек-лист": {kz:"2. Чек-лист", ru:"2. Чек-лист", en:"2. Checklist", tr:"2. Kontrol listesi"},
    "Қандай құжаттар бар, қандай жоқ — белгіле.": {kz:"Қандай құжаттар бар, қандай жоқ — белгіле.", ru:"Отметьте, какие документы есть, а каких ещё нет.", en:"Mark which documents you have and which are missing.", tr:"Hangi belgelerin olduğunu ve hangilerinin eksik olduğunu işaretleyin."},
    "3. Файл жүктеу": {kz:"3. Файл жүктеу", ru:"3. Загрузка файлов", en:"3. File upload", tr:"3. Dosya yükleme"},
    "Скан немесе суретті жүктеп, admin растауына жіберу.": {kz:"Скан немесе суретті жүктеп, admin растауына жіберу.", ru:"Загрузите скан или фото и отправьте на проверку администратору.", en:"Upload a scan or image and send it for admin confirmation.", tr:"Tarama veya fotoğraf yükleyip admin onayına gönderin."},
    "4. Сұхбат": {kz:"4. Сұхбат", ru:"4. Интервью", en:"4. Interview", tr:"4. Mülakat"},
    "Мотивация жауаптарыңды жазып сақта.": {kz:"Мотивация жауаптарыңды жазып сақта.", ru:"Напишите и сохраните мотивационные ответы.", en:"Write and save your motivation answers.", tr:"Motivasyon cevaplarınızı yazıp kaydedin."},
    "5. Дедлайн": {kz:"5. Дедлайн", ru:"5. Дедлайн", en:"5. Deadline", tr:"5. Son tarih"},
    "Application, грант және виза мерзімдерін белгіле.": {kz:"Application, грант және виза мерзімдерін белгіле.", ru:"Отметьте сроки подачи заявки, гранта и визы.", en:"Set application, scholarship and visa deadlines.", tr:"Başvuru, burs ve vize tarihlerini belirleyin."},
 
    // ── CHECKLIST PANEL ────────────────────────────────────────────
    "📋 Құжаттар чек-листі": {kz:"📋 Құжаттар чек-листі", ru:"📋 Чек-лист документов", en:"📋 Document checklist", tr:"📋 Belge kontrol listesi"},
    "Бар құжаттарды белгіле. Деректер браузерде сақталады.": {kz:"Бар құжаттарды белгіле. Деректер браузерде сақталады.", ru:"Отметьте имеющиеся документы. Данные сохраняются в браузере.", en:"Mark the documents you have. Data is saved in the browser.", tr:"Mevcut belgeleri işaretleyin. Veriler tarayıcıda saklanır."},
    "🏛️ Жеке университет": {kz:"🏛️ Жеке университет", ru:"🏛️ Частный университет", en:"🏛️ Private university", tr:"🏛️ Özel üniversite"},
    "🎓 Грант": {kz:"🎓 Грант", ru:"🎓 Грант", en:"🎓 Scholarship", tr:"🎓 Burs"},
    "✈️ Виза": {kz:"✈️ Виза", ru:"✈️ Виза", en:"✈️ Visa", tr:"✈️ Vize"},
 
    // Checklist progress
    "белгіленді": {kz:"белгіленді", ru:"отмечено", en:"marked", tr:"işaretlendi"},
    "0 / 0 белгіленді": {kz:"0 / 0 белгіленді", ru:"0 / 0 отмечено", en:"0 / 0 marked", tr:"0 / 0 işaretlendi"},
 
    // ── CHECKLIST ITEMS — PRIVATE ──────────────────────────────────
    "Паспорт (заграндық)": {kz:"Паспорт (заграндық)", ru:"Загранпаспорт", en:"Passport (international)", tr:"Pasaport (uluslararası)"},
    "Мерзімі кем дегенде 2 жыл болуы керек.": {kz:"Мерзімі кем дегенде 2 жыл болуы керек.", ru:"Срок действия должен быть минимум 2 года.", en:"Must be valid for at least 2 years.", tr:"En az 2 yıl geçerli olmalıdır."},
    "Паспорт мерзімі жеткіліксіз болса, жаңартып алу керек.": {kz:"Паспорт мерзімі жеткіліксіз болса, жаңартып алу керек.", ru:"Если срок паспорта недостаточный, его нужно обновить.", en:"If the passport validity is insufficient, renew it.", tr:"Pasaport süresi yetersizse yenilenmelidir."},
    "Диплом / Аттестат": {kz:"Диплом / Аттестат", ru:"Диплом / Аттестат", en:"Diploma / Certificate", tr:"Diploma / Mezuniyet belgesi"},
    "Бакалавр немесе мектеп бітірушілер үшін.": {kz:"Бакалавр немесе мектеп бітірушілер үшін.", ru:"Для бакалавров или выпускников школы.", en:"For bachelor's applicants or school graduates.", tr:"Lisans başvuranları veya lise mezunları için."},
    "Нотариалды аударма немесе апостиль қажет болуы мүмкін.": {kz:"Нотариалды аударма немесе апостиль қажет болуы мүмкін.", ru:"Может потребоваться нотариальный перевод или апостиль.", en:"A notarized translation or apostille may be required.", tr:"Noter onaylı çeviri veya apostil gerekebilir."},
    "Транскрипт": {kz:"Транскрипт", ru:"Транскрипт", en:"Transcript", tr:"Transkript"},
    "Академиялық үлгерім ведомосы.": {kz:"Академиялық үлгерім ведомосы.", ru:"Ведомость академической успеваемости.", en:"Academic performance record.", tr:"Akademik başarı belgesi."},
    "Ресми мөр мен қол қойылған болуы керек.": {kz:"Ресми мөр мен қол қойылған болуы керек.", ru:"Должна быть официальная печать и подпись.", en:"Must have an official stamp and signature.", tr:"Resmi mühür ve imza olmalıdır."},
    "Фото (4x6, ақ фон)": {kz:"Фото (4x6, ақ фон)", ru:"Фото (4x6, белый фон)", en:"Photo (4x6, white background)", tr:"Fotoğraf (4x6, beyaz arka plan)"},
    "Университет форматы бойынша.": {kz:"Университет форматы бойынша.", ru:"По формату университета.", en:"According to the university format.", tr:"Üniversite formatına göre."},
    "Цифрлық және басып шығарылған нұсқалар қажет.": {kz:"Цифрлық және басып шығарылған нұсқалар қажет.", ru:"Нужны цифровые и распечатанные версии.", en:"Both digital and printed versions are required.", tr:"Dijital ve basılı versiyonların ikisi de gereklidir."},
    "Тіл сертификаты": {kz:"Тіл сертификаты", ru:"Языковой сертификат", en:"Language certificate", tr:"Dil sertifikası"},
    "IELTS 5.5+ немесе TOEFL 65+": {kz:"IELTS 5.5+ немесе TOEFL 65+", ru:"IELTS 5.5+ или TOEFL 65+", en:"IELTS 5.5+ or TOEFL 65+", tr:"IELTS 5.5+ veya TOEFL 65+"},
    "YÖS да қабылдануы мүмкін, университетті тексер.": {kz:"YÖS да қабылдануы мүмкін, университетті тексер.", ru:"YÖS также может быть принят — уточни в университете.", en:"YÖS may also be accepted — check with the university.", tr:"YÖS da kabul edilebilir, üniversiteyi kontrol edin."},
    "Мотивациялық хат": {kz:"Мотивациялық хат", ru:"Мотивационное письмо", en:"Motivation letter", tr:"Motivasyon mektubu"},
    "Неге осы университет — essay форматы.": {kz:"Неге осы университет — essay форматы.", ru:"Почему именно этот университет — в формате эссе.", en:"Why this university — in essay format.", tr:"Neden bu üniversite — deneme formatında."},
    "500-800 сөз, ағылшынша немесе түрікше.": {kz:"500-800 сөз, ағылшынша немесе түрікше.", ru:"500-800 слов, на английском или турецком.", en:"500-800 words, in English or Turkish.", tr:"500-800 kelime, İngilizce veya Türkçe."},
    "CV / Resume": {kz:"CV / Resume", ru:"CV / Резюме", en:"CV / Resume", tr:"CV / Özgeçmiş"},
    "Жетістіктер, тәжірибе, жобалар.": {kz:"Жетістіктер, тәжірибе, жобалар.", ru:"Достижения, опыт, проекты.", en:"Achievements, experience, projects.", tr:"Başarılar, deneyim, projeler."},
    "EduBridge шаблонын қолдануға болады.": {kz:"EduBridge шаблонын қолдануға болады.", ru:"Можно использовать шаблон EduBridge.", en:"EduBridge template can be used.", tr:"EduBridge şablonunu kullanabilirsiniz."},
    "Ұсыныс хаты": {kz:"Ұсыныс хаты", ru:"Рекомендательное письмо", en:"Recommendation letter", tr:"Referans mektubu"},
    "Мұғалім немесе жұмыс берушіден.": {kz:"Мұғалім немесе жұмыс берушіден.", ru:"От учителя или работодателя.", en:"From a teacher or employer.", tr:"Öğretmen veya işverenden."},
    "2 хат: академиялық және professional.": {kz:"2 хат: академиялық және professional.", ru:"2 письма: академическое и профессиональное.", en:"2 letters: academic and professional.", tr:"2 mektup: akademik ve profesyonel."},

    // ── CHECKLIST ITEMS — SCHOLARSHIP ─────────────────────────────
    "Паспорт": {kz:"Паспорт", ru:"Паспорт", en:"Passport", tr:"Pasaport"},
    "Мерзімі жеткілікті болуы керек.": {kz:"Мерзімі жеткілікті болуы керек.", ru:"Срок действия должен быть достаточным.", en:"Must have sufficient validity.", tr:"Yeterli geçerlilik süresi olmalıdır."},
    "Барлық беттерінің скані қажет.": {kz:"Барлық беттерінің скані қажет.", ru:"Нужны сканы всех страниц.", en:"Scans of all pages are required.", tr:"Tüm sayfaların taraması gereklidir."},
    "Диплом + аударма": {kz:"Диплом + аударма", ru:"Диплом + перевод", en:"Diploma + translation", tr:"Diploma + çeviri"},
    "Апостиль немесе нотариалды куәландыру.": {kz:"Апостиль немесе нотариалды куәландыру.", ru:"Апостиль или нотариальное заверение.", en:"Apostille or notarial certification.", tr:"Apostil veya noter tasdiki."},
    "scholarships.turkiye.gov.tr порталына жүктеу керек.": {kz:"scholarships.turkiye.gov.tr порталына жүктеу керек.", ru:"Нужно загрузить на портал scholarships.turkiye.gov.tr.", en:"Must be uploaded to scholarships.turkiye.gov.tr portal.", tr:"scholarships.turkiye.gov.tr portalına yüklenmesi gerekiyor."},
    "Транскрипт (аударылған)": {kz:"Транскрипт (аударылған)", ru:"Транскрипт (переведённый)", en:"Transcript (translated)", tr:"Transkript (çevrilmiş)"},
    "GPA немесе орташа баллды көрсету.": {kz:"GPA немесе орташа баллды көрсету.", ru:"Указать GPA или средний балл.", en:"Show GPA or average grade.", tr:"GPA veya ortalama notu gösterin."},
    "GPA 2.5+ минимум талап.": {kz:"GPA 2.5+ минимум талап.", ru:"Минимальное требование: GPA 2.5+.", en:"Minimum requirement: GPA 2.5+.", tr:"Minimum gereksinim: GPA 2.5+."},
    "Грант тілі ағылшын немесе түрік болуы мүмкін.": {kz:"Грант тілі ағылшын немесе түрік болуы мүмкін.", ru:"Язык гранта может быть английским или турецким.", en:"The scholarship language may be English or Turkish.", tr:"Burs dili İngilizce veya Türkçe olabilir."},
    "Statement of Purpose": {kz:"Statement of Purpose", ru:"Statement of Purpose", en:"Statement of Purpose", tr:"Statement of Purpose"},
    "Зерттеу мақсаттары немесе мансап жоспары.": {kz:"Зерттеу мақсаттары немесе мансап жоспары.", ru:"Цели исследования или карьерный план.", en:"Research goals or career plan.", tr:"Araştırma hedefleri veya kariyer planı."},
    "Магистрге research proposal қажет.": {kz:"Магистрге research proposal қажет.", ru:"Для магистратуры нужен research proposal.", en:"A research proposal is required for master's.", tr:"Yüksek lisans için araştırma önerisi gereklidir."},
    "Ұсыныс хаттары (2)": {kz:"Ұсыныс хаттары (2)", ru:"Рекомендательные письма (2)", en:"Recommendation letters (2)", tr:"Referans mektupları (2)"},
    "Академиялық немесе кәсіби ұсыныс.": {kz:"Академиялық немесе кәсіби ұсыныс.", ru:"Академическая или профессиональная рекомендация.", en:"Academic or professional recommendation.", tr:"Akademik veya mesleki referans."},
    "Ресми бланкта, мөрлі болуы керек.": {kz:"Ресми бланкта, мөрлі болуы керек.", ru:"Должно быть на официальном бланке с печатью.", en:"Must be on official letterhead with a stamp.", tr:"Resmi antetli kağıtta ve mühürlü olmalıdır."},
    "Фото (биометрлік)": {kz:"Фото (биометрлік)", ru:"Фото (биометрическое)", en:"Photo (biometric)", tr:"Fotoğraf (biyometrik)"},
    "3x4 немесе 4x6, ақ фон.": {kz:"3x4 немесе 4x6, ақ фон.", ru:"3x4 или 4x6, белый фон.", en:"3x4 or 4x6, white background.", tr:"3x4 veya 4x6, beyaz arka plan."},
    "Медициналық анықтама": {kz:"Медициналық анықтама", ru:"Медицинская справка", en:"Medical certificate", tr:"Sağlık raporu"},
    "Жалпы денсаулық анықтамасы.": {kz:"Жалпы денсаулық анықтамасы.", ru:"Справка об общем состоянии здоровья.", en:"General health certificate.", tr:"Genel sağlık belgesi."},
    "Кей грант түрлеріне міндетті талап.": {kz:"Кей грант түрлеріне міндетті талап.", ru:"Обязательное требование для некоторых видов грантов.", en:"Mandatory requirement for some scholarship types.", tr:"Bazı burs türleri için zorunlu şart."},
    'IELTS немесе TOEFL ұпайы':{kz:'IELTS немесе TOEFL ұпайы',ru:'Балл IELTS или TOEFL',en:'IELTS or TOEFL score',tr:'IELTS veya TOEFL puanı'},
'Балл IELTS или TOEFL':{kz:'IELTS немесе TOEFL ұпайы',ru:'Балл IELTS или TOEFL',en:'IELTS or TOEFL score',tr:'IELTS veya TOEFL puanı'},
'IELTS or TOEFL score':{kz:'IELTS немесе TOEFL ұпайы',ru:'Балл IELTS или TOEFL',en:'IELTS or TOEFL score',tr:'IELTS veya TOEFL puanı'},
'IELTS veya TOEFL puanı':{kz:'IELTS немесе TOEFL ұпайы',ru:'Балл IELTS или TOEFL',en:'IELTS or TOEFL score',tr:'IELTS veya TOEFL puanı'},
'Ресми грант форматы бойынша':{kz:'Ресми грант форматы бойынша',ru:'По официальному формату гранта',en:'According to official grant format',tr:'Resmi burs formatına göre'},
'По официальному формату гранта':{kz:'Ресми грант форматы бойынша',ru:'По официальному формату гранта',en:'According to official grant format',tr:'Resmi burs formatına göre'},
'According to official grant format':{kz:'Ресми грант форматы бойынша',ru:'По официальному формату гранта',en:'According to official grant format',tr:'Resmi burs formatına göre'},
'Resmi burs formatına göre':{kz:'Ресми грант форматы бойынша',ru:'По официальному формату гранта',en:'According to official grant format',tr:'Resmi burs formatına göre'},

// ── CHECKLIST ITEMS — VISA ─────────────────────────────────────
    "Паспорт (түпнұсқа)": {kz:"Паспорт (түпнұсқа)", ru:"Паспорт (оригинал)", en:"Passport (original)", tr:"Pasaport (orijinal)"},
    "Кем дегенде 1 жыл қалуы керек.": {kz:"Кем дегенде 1 жыл қалуы керек.", ru:"Должно оставаться не менее 1 года.", en:"At least 1 year must remain.", tr:"En az 1 yıl kalmalıdır."},
    "Барлық беттерінің скані сақталуы тиіс.": {kz:"Барлық беттерінің скані сақталуы тиіс.", ru:"Сканы всех страниц должны быть сохранены.", en:"Scans of all pages must be saved.", tr:"Tüm sayfaların taraması saklanmalıdır."},
    "Acceptance Letter": {kz:"Acceptance Letter", ru:"Acceptance Letter", en:"Acceptance Letter", tr:"Kabul mektubu"},
    "Университет тіркеуінен рәсімделген хат.": {kz:"Университет тіркеуінен рәсімделген хат.", ru:"Письмо, оформленное от регистратуры университета.", en:"Official letter from the university registrar.", tr:"Üniversite kayıt ofisinden düzenlenen mektup."},
    "Консулатқа ұсыну үшін қажет.": {kz:"Консулатқа ұсыну үшін қажет.", ru:"Необходимо для подачи в консульство.", en:"Required for submission to the consulate.", tr:"Konsoloslukta sunmak için gereklidir."},
    "Биометрлік фото": {kz:"Биометрлік фото", ru:"Биометрическое фото", en:"Biometric photo", tr:"Biyometrik fotoğraf"},
    "Консулат талабы бойынша.": {kz:"Консулат талабы бойынша.", ru:"По требованию консульства.", en:"Per consulate requirements.", tr:"Konsolosluk şartlarına göre."},
    "Консуляттан нақты талаптарды тексер.": {kz:"Консуляттан нақты талаптарды тексер.", ru:"Уточни конкретные требования в консульстве.", en:"Check the exact requirements at the consulate.", tr:"Konsolosluktan kesin gereksinimleri kontrol edin."},
    "Банк выписке": {kz:"Банк выписке", ru:"Банковская выписка", en:"Bank statement", tr:"Banka hesap dökümü"},
    "Қаржылық мүмкіндікті дәлелдеу.": {kz:"Қаржылық мүмкіндікті дәлелдеу.", ru:"Подтверждение финансовых возможностей.", en:"Proof of financial means.", tr:"Mali yeterlilik kanıtı."},
    "Соңғы 3 ай үшін, ата-ана немесе өзіңдікі.": {kz:"Соңғы 3 ай үшін, ата-ана немесе өзіңдікі.", ru:"За последние 3 месяца — своя или родительская.", en:"For the last 3 months — personal or parents'.", tr:"Son 3 aya ait — kendi veya ebeveynlerinize ait."},
    "Сақтандыру (30 000 EUR+)": {kz:"Сақтандыру (30 000 EUR+)", ru:"Страховка (30 000 EUR+)", en:"Insurance (30,000 EUR+)", tr:"Sigorta (30.000 EUR+)"},
    "Саяхат сақтандыруы.": {kz:"Саяхат сақтандыруы.", ru:"Туристическая страховка.", en:"Travel insurance.", tr:"Seyahat sigortası."},
    "Visa алынған соң студенттік сақтандыруға ауысуға болады.": {kz:"Visa алынған соң студенттік сақтандыруға ауысуға болады.", ru:"После получения визы можно перейти на студенческую страховку.", en:"After getting the visa, you can switch to student insurance.", tr:"Vize alındıktan sonra öğrenci sigortasına geçilebilir."},
    "Тұрғын үй растамасы": {kz:"Тұрғын үй растамасы", ru:"Подтверждение жилья", en:"Accommodation confirmation", tr:"Konaklama onayı"},
    "Жатақхана броні немесе жалдама контракт.": {kz:"Жатақхана броні немесе жалдама контракт.", ru:"Бронь общежития или договор аренды.", en:"Dormitory booking or rental contract.", tr:"Yurt rezervasyonu veya kiralık konut sözleşmesi."},
    "Университет жатақханасынан растау хаты.": {kz:"Университет жатақханасынан растау хаты.", ru:"Письмо-подтверждение от общежития университета.", en:"Confirmation letter from the university dormitory.", tr:"Üniversite yurdundan onay mektubu."},
    "Визалық өтінім форма": {kz:"Визалық өтінім форма", ru:"Визовая анкета", en:"Visa application form", tr:"Vize başvuru formu"},
    "Консулат сайтынан толтыру.": {kz:"Консулат сайтынан толтыру.", ru:"Заполнить на сайте консульства.", en:"Fill out on the consulate website.", tr:"Konsolosluk web sitesinden doldurun."},
    "E-Visa немесе консулатқа тікелей.": {kz:"E-Visa немесе консулатқа тікелей.", ru:"E-Visa или напрямую в консульство.", en:"E-Visa or directly to the consulate.", tr:"E-Vize veya doğrudan konsolosluğa."},
 
    // ── FILE UPLOADS ───────────────────────────────────────────────
    "📁 Құжат жүктеу": {kz:"📁 Құжат жүктеу", ru:"📁 Загрузка документов", en:"📁 Document upload", tr:"📁 Belge yükleme"},
    "Паспорт (скан)": {kz:"Паспорт (скан)", ru:"Паспорт (скан)", en:"Passport (scan)", tr:"Pasaport (tarama)"},
    "PDF немесе JPG": {kz:"PDF немесе JPG", ru:"PDF или JPG", en:"PDF or JPG", tr:"PDF veya JPG"},
    "Нотариалды көшірме": {kz:"Нотариалды көшірме", ru:"Нотариальная копия", en:"Notarized copy", tr:"Noter onaylı kopya"},
    "Академиялық үлгерім": {kz:"Академиялық үлгерім", ru:"Академическая успеваемость", en:"Academic performance", tr:"Akademik başarı"},
    "IELTS, TOEFL немесе YÖS": {kz:"IELTS, TOEFL немесе YÖS", ru:"IELTS, TOEFL или YÖS", en:"IELTS, TOEFL or YÖS", tr:"IELTS, TOEFL veya YÖS"},
    "PDF немесе DOCX": {kz:"PDF немесе DOCX", ru:"PDF или DOCX", en:"PDF or DOCX", tr:"PDF veya DOCX"},
    "PDF форматы ұсынылады": {kz:"PDF форматы ұсынылады", ru:"Рекомендуется формат PDF", en:"PDF format is recommended", tr:"PDF formatı önerilir"},
    "Мұғалім немесе жұмыс беруші": {kz:"Мұғалім немесе жұмыс беруші", ru:"Учитель или работодатель", en:"Teacher or employer", tr:"Öğretmen veya işveren"},
    "JPG, ақ фон": {kz:"JPG, ақ фон", ru:"JPG, белый фон", en:"JPG, white background", tr:"JPG, beyaz arka plan"},
    "Соңғы 3 ай үшін": {kz:"Соңғы 3 ай үшін", ru:"За последние 3 месяца", en:"For the last 3 months", tr:"Son 3 ay için"},
    "Сақтандыру полисі": {kz:"Сақтандыру полисі", ru:"Страховой полис", en:"Insurance policy", tr:"Sigorta poliçesi"},
    "Саяхат немесе студенттік": {kz:"Саяхат немесе студенттік", ru:"Туристическая или студенческая", en:"Travel or student", tr:"Seyahat veya öğrenci"},
 
    // Upload summary statuses
    "Жүктелді": {kz:"Жүктелді", ru:"Загружено", en:"Uploaded", tr:"Yüklendi"},
    "Күтілуде": {kz:"Күтілуде", ru:"Ожидает", en:"Pending", tr:"Bekleniyor"},
    "Жоқ": {kz:"Жоқ", ru:"Нет", en:"Missing", tr:"Yok"},
    "Расталды ✓": {kz:"Расталды ✓", ru:"Подтверждено ✓", en:"Confirmed ✓", tr:"Onaylandı ✓"},
 
    // Upload item status badges (rendered in JS)
    "✓ Расталды": {kz:"✓ Расталды", ru:"✓ Подтверждено", en:"✓ Confirmed", tr:"✓ Onaylandı"},
    "✗ Қабылданбады": {kz:"✗ Қабылданбады", ru:"✗ Отклонено", en:"✗ Rejected", tr:"✗ Reddedildi"},
    "⏳ Күтілуде": {kz:"⏳ Күтілуде", ru:"⏳ Ожидает", en:"⏳ Pending", tr:"⏳ Bekleniyor"},
    "⚠ Жоқ": {kz:"⚠ Жоқ", ru:"⚠ Отсутствует", en:"⚠ Missing", tr:"⚠ Yok"},
 
    // ── INTERVIEW ──────────────────────────────────────────────────
    "🗣️ Сұхбатқа дайындық": {kz:"🗣️ Сұхбатқа дайындық", ru:"🗣️ Подготовка к интервью", en:"🗣️ Interview preparation", tr:"🗣️ Mülakat hazırlığı"},
    "Жауаптарыңды жазып, сақтай аласың. «Сақтау» батырмасын басқаннан кейін деректер сақталады.": {kz:"Жауаптарыңды жазып, сақтай аласың. «Сақтау» батырмасын басқаннан кейін деректер сақталады.", ru:"Вы можете написать и сохранить свои ответы. После нажатия кнопки «Сохранить» данные будут сохранены.", en:"You can write and save your answers. Data is saved after clicking the Save button.", tr:"Cevaplarınızı yazıp kaydedebilirsiniz. Kaydet düğmesine bastıktan sonra veriler saklanır."},
    "1. Неге Түркияда оқығыңыз келеді?": {kz:"1. Неге Түркияда оқығыңыз келеді?", ru:"1. Почему вы хотите учиться в Турции?", en:"1. Why do you want to study in Türkiye?", tr:"1. Neden Türkiye'de okumak istiyorsunuz?"},
    "2. Неге осы мамандықты таңдадыңыз?": {kz:"2. Неге осы мамандықты таңдадыңыз?", ru:"2. Почему вы выбрали эту специальность?", en:"2. Why did you choose this specialty?", tr:"2. Neden bu bölümü seçtiniz?"},
    "3. 5 жылдан кейін өзіңізді қайда көресіз?": {kz:"3. 5 жылдан кейін өзіңізді қайда көресіз?", ru:"3. Где вы видите себя через 5 лет?", en:"3. Where do you see yourself in 5 years?", tr:"3. Kendinizi 5 yıl sonra nerede görüyorsunuz?"},
    "4. Грант алсаңыз, еліңізге қандай пайда әкелесіз?": {kz:"4. Грант алсаңыз, еліңізге қандай пайда әкелесіз?", ru:"4. Если вы получите грант, какую пользу принесёте своей стране?", en:"4. If you receive a scholarship, how will you benefit your country?", tr:"4. Burs kazanırsanız ülkenize nasıl katkı sağlayacaksınız?"},
    "5. Өзіңіз туралы қысқаша айтып беріңіз (Self-introduction)": {kz:"5. Өзіңіз туралы қысқаша айтып беріңіз (Self-introduction)", ru:"5. Кратко расскажите о себе (Self-introduction)", en:"5. Briefly introduce yourself (Self-introduction)", tr:"5. Kendinizi kısaca tanıtın (Self-introduction)"},
    "Өз жауабыңды жаз...": {kz:"Өз жауабыңды жаз...", ru:"Напишите свой ответ...", en:"Write your answer...", tr:"Cevabınızı yazın..."},
    "Аты-жөні, елі, мамандығы, мақсаты...": {kz:"Аты-жөні, елі, мамандығы, мақсаты...", ru:"Имя, страна, специальность, цель...", en:"Name, country, specialty, goal...", tr:"Ad soyad, ülke, bölüm, hedef..."},
 
    // ── DEADLINES ──────────────────────────────────────────────────
    "📅 Дедлайндар": {kz:"📅 Дедлайндар", ru:"📅 Дедлайны", en:"📅 Deadlines", tr:"📅 Son tarihler"},
    "Маңызды мерзімдерді қос. 7 күннен аз қалса сары, өтіп кетсе қызыл деп белгіленеді.": {kz:"Маңызды мерзімдерді қос. 7 күннен аз қалса сары, өтіп кетсе қызыл деп белгіленеді.", ru:"Добавьте важные сроки. Если осталось меньше 7 дней — жёлтый, если срок прошёл — красный.", en:"Add important deadlines. Less than 7 days left = yellow; expired = red.", tr:"Önemli tarihleri ekleyin. 7 günden az kaldıysa sarı, süre geçtiyse kırmızı."},
    "Дедлайн атауы (мысалы: Sabancı application)": {kz:"Дедлайн атауы (мысалы: Sabancı application)", ru:"Название дедлайна (например: заявка Sabancı)", en:"Deadline title (e.g. Sabancı application)", tr:"Son tarih adı (ör. Sabancı başvurusu)"},
    "Ескерту (міндетті емес)": {kz:"Ескерту (міндетті емес)", ru:"Примечание (необязательно)", en:"Note (optional)", tr:"Not (isteğe bağlı)"},
 
    // Deadline day labels (used in JS dynamically)
    "күн өтті": {kz:"күн өтті", ru:"дней прошло", en:"days ago", tr:"gün geçti"},
    "Бүгін!": {kz:"Бүгін!", ru:"Сегодня!", en:"Today!", tr:"Bugün!"},
    "күн": {kz:"күн", ru:"дней", en:"days", tr:"gün"},
 
    // ── NOTES ──────────────────────────────────────────────────────
    "📝 Жеке жазбалар": {kz:"📝 Жеке жазбалар", ru:"📝 Личные заметки", en:"📝 Personal notes", tr:"📝 Kişisel notlar"},
    "Ойыңды, идеяңды немесе маңызды ақпаратты сақта.": {kz:"Ойыңды, идеяңды немесе маңызды ақпаратты сақта.", ru:"Сохраняйте мысли, идеи или важную информацию.", en:"Save your thoughts, ideas or important information.", tr:"Düşüncelerinizi, fikirlerinizi veya önemli bilgileri kaydedin."},
    "Жазба атауы": {kz:"Жазба атауы", ru:"Название заметки", en:"Note title", tr:"Not başlığı"},
    "Мысалы: Transcript аудармасын дайындау керек...": {kz:"Мысалы: Transcript аудармасын дайындау керек...", ru:"Например: нужно подготовить перевод transcript...", en:"For example: prepare the transcript translation...", tr:"Örneğin: transkript çevirisini hazırlamak gerekiyor..."},
    "Құжаттар": {kz:"Құжаттар", ru:"Документы", en:"Documents", tr:"Belgeler"},
    "Сұхбат": {kz:"Сұхбат", ru:"Интервью", en:"Interview", tr:"Mülakat"},
    "Университет": {kz:"Университет", ru:"Университет", en:"University", tr:"Üniversite"},
    "Виза": {kz:"Виза", ru:"Виза", en:"Visa", tr:"Vize"},
    "Грант": {kz:"Грант", ru:"Грант", en:"Scholarship", tr:"Burs"},
 
    // ── GRANTS TAB ─────────────────────────────────────────────────
    "🎓 Грантқа түсу жолы": {kz:"🎓 Грантқа түсу жолы", ru:"🎓 Путь к получению гранта", en:"🎓 Scholarship admission path", tr:"🎓 Burs kazanma yolu"},
    "Türkiye Bursları және университет scholarship стратегиялары.": {kz:"Türkiye Bursları және университет scholarship стратегиялары.", ru:"Стратегии для Türkiye Bursları и университетских стипендий.", en:"Strategies for Türkiye Bursları and university scholarships.", tr:"Türkiye Bursları ve üniversite burs stratejileri."},
    "Толық грант": {kz:"Толық грант", ru:"Полный грант", en:"Full scholarship", tr:"Tam burs"},
    "Türkiye Bursları (YTB)": {kz:"Türkiye Bursları (YTB)", ru:"Türkiye Bursları (YTB)", en:"Türkiye Bursları (YTB)", tr:"Türkiye Bursları (YTB)"},
    "ytb-description": {
  kz:"Мемлекеттік грант: оқу ақысы + жатақхана + $400–600/ай стипендия. <strong style=\"color:#fff;\">scholarships.turkiye.gov.tr</strong> арқылы өтінім беріледі. Өтінім мерзімі: қаңтар–ақпан. 2-тур: онлайн сұхбат.",
  ru:"Государственный грант: обучение + общежитие + стипендия $400–600/мес. Заявка через <strong style=\"color:#fff;\">scholarships.turkiye.gov.tr</strong>. Срок: январь–февраль. 2-й тур: онлайн-интервью.",
  en:"Government scholarship: tuition + dormitory + $400–600/month stipend. Apply via <strong style=\"color:#fff;\">scholarships.turkiye.gov.tr</strong>. Period: Jan–Feb. Round 2: online interview.",
  tr:"Devlet bursu: eğitim + yurt + aylık 400–600$/burs. Başvuru: <strong style=\"color:#fff;\">scholarships.turkiye.gov.tr</strong>. Dönem: Ocak–Şubat. 2. aşama: online mülakat."
},
    "Ішінара грант": {kz:"Ішінара грант", ru:"Частичный грант", en:"Partial scholarship", tr:"Kısmi burs"},
    "Университет Scholarship": {kz:"Университет Scholarship", ru:"Университетская стипендия", en:"University scholarship", tr:"Üniversite bursu"},
    "Жеке университеттер GPA, YÖS немесе early application арқылы 20–50% жеңілдік береді. Sabancı, Bilkent, Koç — толық merit scholarship бар.": {kz:"Жеке университеттер GPA, YÖS немесе early application арқылы 20–50% жеңілдік береді. Sabancı, Bilkent, Koç — толық merit scholarship бар.", ru:"Частные вузы дают скидки 20–50% по GPA, YÖS или ранней подаче. В Sabancı, Bilkent, Koç есть полные merit scholarships.", en:"Private universities offer 20–50% discounts via GPA, YÖS or early application. Sabancı, Bilkent and Koç offer full merit scholarships.", tr:"Özel üniversiteler GPA, YÖS veya erken başvuru ile %20–50 indirim verir. Sabancı, Bilkent ve Koç'ta tam başarı bursları vardır."},
    "Merit-based": {kz:"Merit-based", ru:"По заслугам", en:"Merit-based", tr:"Başarı temelli"},
    "Rector Grant / Double Major": {kz:"Rector Grant / Double Major", ru:"Грант ректора / Double Major", en:"Rector Grant / Double Major", tr:"Rektör bursu / Çift ana dal"},
    "Кей университеттерде ректор деңгейінде арнайы жеңілдік болуы мүмкін. Double major таңдаған студенттерге де scholarship мүмкіндіктері бар.": {kz:"Кей университеттерде ректор деңгейінде арнайы жеңілдік болуы мүмкін. Double major таңдаған студенттерге де scholarship мүмкіндіктері бар.", ru:"В некоторых вузах есть скидки на уровне ректора. Студентам с двойной специализацией тоже доступны гранты.", en:"Some universities offer rector-level discounts. Double major students may also have scholarship options.", tr:"Bazı üniversitelerde rektör düzeyinde özel indirimler olabilir. Çift ana dal öğrencilerine de burs imkanları mevcut."},
    "📌 Грант алу стратегиясы": {kz:"📌 Грант алу стратегиясы", ru:"📌 Стратегия получения гранта", en:"📌 Scholarship strategy", tr:"📌 Burs kazanma stratejisi"},

"grant-strategy-steps": {
  kz:"1. GPA 3.5+ болу<br>2. Сертификаттар жинау (IELTS, SAT, олимпиад)<br>3. Күшті мотивациялық хат жазу<br>4. Сұхбатқа дайындық (себептер, мақсаттар, Қазақстанға қосқан үлес)",
  ru:"1. GPA 3.5+<br>2. Сертификаты (IELTS, SAT, олимпиады)<br>3. Мотивационное письмо<br>4. Подготовка к интервью (причины, цели, вклад в Казахстан)",
  en:"1. GPA 3.5+<br>2. Certificates (IELTS, SAT, olympiads)<br>3. Strong motivation letter<br>4. Interview prep (reasons, goals, contribution to Kazakhstan)",
  tr:"1. GPA 3.5+<br>2. Sertifikalar (IELTS, SAT, olimpiyatlar)<br>3. Motivasyon mektubu<br>4. Mülakat hazırlığı (nedenler, hedefler, Kazakistan'a katkı)"
},
    // ── AUTH GUARD ─────────────────────────────────────────────────
    "Кіру керек": {kz:"Кіру керек", ru:"Нужно войти", en:"Login required", tr:"Giriş gerekli"},
    "Дайындық бетін пайдалану үшін алдымен аккаунтқа кіріңіз немесе тіркеліңіз.": {kz:"Дайындық бетін пайдалану үшін алдымен аккаунтқа кіріңіз немесе тіркеліңіз.", ru:"Чтобы использовать страницу подготовки, войдите в аккаунт или зарегистрируйтесь.", en:"To use the preparation page, please log in or register first.", tr:"Hazırlık sayfasını kullanmak için önce giriş yapın veya kayıt olun."},
    "🔑 Кіру": {kz:"🔑 Кіру", ru:"🔑 Войти", en:"🔑 Login", tr:"🔑 Giriş yap"},
    "📝 Тіркелу": {kz:"📝 Тіркелу", ru:"📝 Зарегистрироваться", en:"📝 Register", tr:"📝 Kayıt ol"},
    "← Басты бетке оралу": {kz:"← Басты бетке оралу", ru:"← Вернуться на главную", en:"← Back to home", tr:"← Ana sayfaya dön"},
  
    // ── AI CHAT BUBBLE ─────────────────────────────────────────────
    "EduBridge AI": {kz:"EduBridge AI", ru:"EduBridge AI", en:"EduBridge AI", tr:"EduBridge AI"},
    "Онлайн · Жауап береді": {kz:"Онлайн · Жауап береді", ru:"Онлайн · Отвечает", en:"Online · Responding", tr:"Çevrimiçi · Yanıtlıyor"},
    "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋": {kz:"Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋", ru:"Привет! Я AI-консультант EduBridge. Задай любой вопрос об университетах Турции 👋", en:"Hello! I'm EduBridge AI advisor. Ask me anything about Turkish universities 👋", tr:"Merhaba! Ben EduBridge AI danışmanıyım. Türk üniversiteleri hakkında her şeyi sorabilirsiniz 👋"},
    "Сұрағыңды жаз...": {kz:"Сұрағыңды жаз...", ru:"Напишите вопрос...", en:"Type your question...", tr:"Sorunuzu yazın..."},
 
    // ── TOAST MESSAGES (JS-generated) ─────────────────────────────
    "✓ Белгіленді": {kz:"✓ Белгіленді", ru:"✓ Отмечено", en:"✓ Marked", tr:"✓ İşaretlendi"},
    "Белгі алынды": {kz:"Белгі алынды", ru:"Отметка снята", en:"Mark removed", tr:"İşaret kaldırıldı"},
    "Checklist тазаланды": {kz:"Checklist тазаланды", ru:"Чек-лист очищен", en:"Checklist cleared", tr:"Kontrol listesi temizlendi"},
    "❌ Файл 5MB-дан үлкен!": {kz:"❌ Файл 5MB-дан үлкен!", ru:"❌ Файл больше 5MB!", en:"❌ File exceeds 5MB!", tr:"❌ Dosya 5MB'den büyük!"},
    "✅ жүктелді": {kz:"жүктелді", ru:"загружен", en:"uploaded", tr:"yüklendi"},
    "Файл өшірілді": {kz:"Файл өшірілді", ru:"Файл удалён", en:"File deleted", tr:"Dosya silindi"},
    "Барлық файлдар өшірілді": {kz:"Барлық файлдар өшірілді", ru:"Все файлы удалены", en:"All files deleted", tr:"Tüm dosyalar silindi"},
    "💾 Жауаптар сақталды": {kz:"💾 Жауаптар сақталды", ru:"💾 Ответы сохранены", en:"💾 Answers saved", tr:"💾 Cevaplar kaydedildi"},
    "Жауаптар тазаланды": {kz:"Жауаптар тазаланды", ru:"Ответы очищены", en:"Answers cleared", tr:"Cevaplar temizlendi"},
    "⚠️ Атау мен күнді толтыр!": {kz:"⚠️ Атау мен күнді толтыр!", ru:"⚠️ Заполните название и дату!", en:"⚠️ Fill in the title and date!", tr:"⚠️ Başlık ve tarihi doldurun!"},
    "📅 Дедлайн қосылды": {kz:"📅 Дедлайн қосылды", ru:"📅 Дедлайн добавлен", en:"📅 Deadline added", tr:"📅 Son tarih eklendi"},
    "Дедлайн өшірілді": {kz:"Дедлайн өшірілді", ru:"Дедлайн удалён", en:"Deadline deleted", tr:"Son tarih silindi"},
    "⚠️ Атау мен мәтінді толтыр!": {kz:"⚠️ Атау мен мәтінді толтыр!", ru:"⚠️ Заполните название и текст!", en:"⚠️ Fill in the title and text!", tr:"⚠️ Başlık ve metni doldurun!"},
    "📝 Жазба сақталды": {kz:"📝 Жазба сақталды", ru:"📝 Заметка сохранена", en:"📝 Note saved", tr:"📝 Not kaydedildi"},
    "Жазба өшірілді": {kz:"Жазба өшірілді", ru:"Заметка удалена", en:"Note deleted", tr:"Not silindi"},
    "Барлық деректер тазаланды": {kz:"Барлық деректер тазаланды", ru:"Все данные очищены", en:"All data cleared", tr:"Tüm veriler temizlendi"},
 
    // ── CONFIRM DIALOGS (JS-generated) ─────────────────────────────
    "Барлық чек-лист белгілері тазаланады. Жалғастыру?": {kz:"Барлық чек-лист белгілері тазаланады. Жалғастыру?", ru:"Все отметки чек-листа будут удалены. Продолжить?", en:"All checklist marks will be cleared. Continue?", tr:"Tüm kontrol listesi işaretleri silinecek. Devam edilsin mi?"},
    "Барлық жүктелген файлдар өшіріледі. Растайсыз?": {kz:"Барлық жүктелген файлдар өшіріледі. Растайсыз?", ru:"Все загруженные файлы будут удалены. Подтверждаете?", en:"All uploaded files will be deleted. Confirm?", tr:"Yüklenen tüm dosyalar silinecek. Onaylıyor musunuz?"},
    "Барлық дедлайн өшіріледі?": {kz:"Барлық дедлайн өшіріледі?", ru:"Удалить все дедлайны?", en:"Delete all deadlines?", tr:"Tüm son tarihler silinsin mi?"},
    "Барлық жазба өшіріледі?": {kz:"Барлық жазба өшіріледі?", ru:"Удалить все заметки?", en:"Delete all notes?", tr:"Tüm notlar silinsin mi?"},
    "Барлық дайындық деректері тазаланады. Жалғастыру?": {kz:"Барлық дайындық деректері тазаланады. Жалғастыру?", ru:"Все данные подготовки будут удалены. Продолжить?", en:"All preparation data will be cleared. Continue?", tr:"Tüm hazırlık verileri silinecek. Devam edilsin mi?"},
 
    // ── EMPTY STATES ───────────────────────────────────────────────
    "Дедлайн жоқ. Жоғарыдан қосыңыз.": {kz:"Дедлайн жоқ. Жоғарыдан қосыңыз.", ru:"Дедлайнов нет. Добавьте выше.", en:"No deadlines. Add one above.", tr:"Son tarih yok. Yukarıdan ekleyin."},
    "Жазба жоқ. Жоғарыдан қосыңыз.": {kz:"Жазба жоқ. Жоғарыдан қосыңыз.", ru:"Заметок нет. Добавьте выше.", en:"No notes. Add one above.", tr:"Not yok. Yukarıdan ekleyin."},
  
    "16 Personalities · NERIS Type Explorer": {
  kz:"16 тұлға типі · NERIS тип анықтаушысы",
  ru:"16 типов личности · NERIS определитель типа",
  en:"16 Personalities · NERIS Type Explorer",
  tr:"16 Kişilik Tipi · NERIS Tip Belirleyici"
},

"Personality type test": {
  kz:"Тұлға типі тесті",
  ru:"Тест типа личности",
  en:"Personality Type Test",
  tr:"Kişilik Tipi Testi"
},

"Myers-Briggs + 5-ші ось (A/T) негізіндегі тест. 60 сұрақ · ~10 минут": {
  kz:"Myers-Briggs + 5-ші ось (A/T) негізіндегі тест. 60 сұрақ · ~10 минут",
  ru:"Тест на основе Myers-Briggs и 5-й оси (A/T). 60 вопросов · ~10 минут",
  en:"Based on Myers-Briggs + 5th axis (A/T). 60 questions · ~10 minutes",
  tr:"Myers-Briggs + 5. eksen (A/T) temelli test. 60 soru · ~10 dakika"
},

"🧠 16 тұлға типі": {
  kz:"🧠 16 тұлға типі",
  ru:"🧠 16 типов личности",
  en:"🧠 16 Personality Types",
  tr:"🧠 16 Kişilik Tipi"
},

"5 ось · 60 сұрақ": {
  kz:"5 ось · 60 сұрақ",
  ru:"5 осей · 60 вопросов",
  en:"5 axes · 60 questions",
  tr:"5 eksen · 60 soru"
},

"🎓 Мамандық ұсынысы": {
  kz:"🎓 Мамандық ұсынысы",
  ru:"🎓 Рекомендация специальности",
  en:"🎓 Major Recommendation",
  tr:"🎓 Bölüm Önerisi"
},

"🏛️ Түркия университеттері": {
  kz:"🏛️ Түркия университеттері",
  ru:"🏛️ Университеты Турции",
  en:"🏛️ Universities in Türkiye",
  tr:"🏛️ Türkiye Üniversiteleri"
},

"0 / 60 сұрақ": {
  kz:"0 / 60 сұрақ",
  ru:"0 / 60 вопросов",
  en:"0 / 60 questions",
  tr:"0 / 60 soru"
},

"⚡ Energy direction": {
  kz:"⚡ Энергия бағыты",
  ru:"⚡ Направление энергии",
  en:"⚡ Energy Direction",
  tr:"⚡ Enerji Yönü"
},

"Экстраверт (E) пе — Интроверт (I) пе?": {
  kz:"Экстраверт (E) пе — Интроверт (I) пе?",
  ru:"Экстраверт (E) или Интроверт (I)?",
  en:"Extrovert (E) or Introvert (I)?",
  tr:"Dışa Dönük (E) mü — İçe Dönük (I) mü?"
},

"🔭 Ақпарат қабылдау": {
  kz:"🔭 Ақпарат қабылдау",
  ru:"🔭 Восприятие информации",
  en:"🔭 Information Perception",
  tr:"🔭 Bilgi Algılama"
},

"Сенсорлық (S) па — Интуитивті (N) ме?": {
  kz:"Сенсорлық (S) па — Интуитивті (N) ме?",
  ru:"Сенсорный (S) или Интуитивный (N)?",
  en:"Sensing (S) or Intuitive (N)?",
  tr:"Algısal (S) mı — Sezgisel (N) mi?"
},

"⚖️ Шешім қабылдау": {
  kz:"⚖️ Шешім қабылдау",
  ru:"⚖️ Принятие решений",
  en:"⚖️ Decision Making",
  tr:"⚖️ Karar Verme"
},

"Ойлаушы (T) па — Сезімдік (F) пе?": {
  kz:"Ойлаушы (T) па — Сезімдік (F) пе?",
  ru:"Логик (T) или Чувствующий (F)?",
  en:"Thinking (T) or Feeling (F)?",
  tr:"Düşünen (T) mi — Hisseden (F) mi?"
},

"🗓️ Өмір стилі": {
  kz:"🗓️ Өмір стилі",
  ru:"🗓️ Стиль жизни",
  en:"🗓️ Lifestyle",
  tr:"🗓️ Yaşam Tarzı"
},

"Жоспарлаушы (J) па — Икемді (P) пе?": {
  kz:"Жоспарлаушы (J) па — Икемді (P) пе?",
  ru:"Планирующий (J) или Гибкий (P)?",
  en:"Judging (J) or Perceiving (P)?",
  tr:"Planlı (J) mı — Esnek (P) mi?"
},

"🧘 Сәйкестік (Identity)": {
  kz:"🧘 Сәйкестік (Identity)",
  ru:"🧘 Идентичность",
  en:"🧘 Identity",
  tr:"🧘 Kimlik"
},

"Сенімді (A) пе — Толқымалы (T) пе?": {
  kz:"Сенімді (A) пе — Толқымалы (T) пе?",
  ru:"Уверенный (A) или Тревожный (T)?",
  en:"Assertive (A) or Turbulent (T)?",
  tr:"Kendinden Emin (A) mi — Çalkantılı (T) mı?"
},

"Agree": {
  kz:"Келісемін",
  ru:"Согласен",
  en:"Agree",
  tr:"Katılıyorum"
},

"Disagree": {
  kz:"Келіспеймін",
  ru:"Не согласен",
  en:"Disagree",
  tr:"Katılmıyorum"
},

"Нәтижені есептеу →": {
  kz:"Нәтижені есептеу →",
  ru:"Рассчитать результат →",
  en:"Calculate Result →",
  tr:"Sonucu Hesapla →"
},

"Барлық 60 сұраққа жауап беріңіз": {
  kz:"Барлық 60 сұраққа жауап беріңіз",
  ru:"Ответьте на все 60 вопросов",
  en:"Please answer all 60 questions",
  tr:"Lütfen tüm 60 soruyu cevaplayın"
},

"🇰🇿 Kazakh": {
  kz:"🇰🇿 Қазақша",
  ru:"🇰🇿 Казахский",
  en:"🇰🇿 Kazakh",
  tr:"🇰🇿 Kazakça"
},

"🇷🇺 Орысша": {
  kz:"🇷🇺 Орысша",
  ru:"🇷🇺 Русский",
  en:"🇷🇺 Russian",
  tr:"🇷🇺 Rusça"
},

"🇬🇧 Ағылшынша": {
  kz:"🇬🇧 Ағылшынша",
  ru:"🇬🇧 Английский",
  en:"🇬🇧 English",
  tr:"🇬🇧 İngilizce"
},

"🇹🇷 Түрікше": {
  kz:"🇹🇷 Түрікше",
  ru:"🇹🇷 Турецкий",
  en:"🇹🇷 Turkish",
  tr:"🇹🇷 Türkçe"
}
  };
 
  // ── Translation helpers ────────────────────────────────────────
 
  function trText(key, lang){
    return D[key] && D[key][lang] ? D[key][lang] : key;
  }
 
  function norm(s){
    return (s || "").trim().replace(/\s+/g, " ");
  }
 
  // Translates JS-generated dynamic strings (toast, confirm, status badges)
  // Call this via window.t(key) inside preparation's script block
  window.t = function(key, lang){
    var l = lang || localStorage.getItem("lang") || "kz";
    return trText(key, l);
  };
 
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
    document.querySelectorAll("span,h1,h2,h3,p,strong,small,a,button,label,option,div").forEach(function(el){
      if(el.children.length > 0) return;
      var key = norm(el.textContent);
      if(D[key]) el.textContent = trText(key, lang);
    });
  }
 
  EduI18n.registerPage("preparation", D, function(lang){
    applyText(lang);
  });
  // 5. data-i18n-html: innerHTML (for <br>-containing blocks)
  document.querySelectorAll("[data-i18n-html]").forEach(function(el){
    var key = el.getAttribute("data-i18n-html");
    if(D[key] && D[key][lang]) el.innerHTML = D[key][lang];
  });
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
    document.querySelectorAll("span,h1,h2,h3,p,strong,small,a,button,label,option,div").forEach(function(el){
      if(el.children.length > 0) return;
      var key = norm(el.textContent);
      if(D[key]) el.textContent = trText(key, lang);
    });
    // 5. data-i18n-html: innerHTML (for <br>-containing blocks)  ← ОСЫ ЖОЛ ЖОҚ БОЛАТЫН
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var key = el.getAttribute("data-i18n-html");
      if(D[key] && D[key][lang]) el.innerHTML = D[key][lang];
    });
  }
})();