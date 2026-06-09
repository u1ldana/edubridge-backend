
(function(){
  'use strict';
  const LANGS=['kz','ru','en','tr'];
  const STORE_KEYS=['edubridge_lang','lang','siteLang','language'];
  function normLang(v){v=String(v||'kz').toLowerCase(); if(v==='kk'||v==='kaz'||v==='қазақша')v='kz'; if(v==='gb'||v==='eng')v='en'; if(v==='tur'||v==='tk')v='tr'; return LANGS.includes(v)?v:'kz';}
  function getLang(){ for(const k of STORE_KEYS){const v=localStorage.getItem(k); if(v) return normLang(v);} return normLang(document.documentElement.lang||'kz'); }
  function setLang(l){ l=normLang(l); STORE_KEYS.forEach(k=>localStorage.setItem(k,l)); document.documentElement.lang=l==='kz'?'kk':l; return l; }
  const COMMON={
    'EduBridge Türkiye':{kz:'EduBridge Türkiye',ru:'EduBridge Türkiye',en:'EduBridge Türkiye',tr:'EduBridge Türkiye'},
    'Басты бет':{kz:'Басты бет',ru:'Главная',en:'Home',tr:'Ana sayfa'},'Главная':{kz:'Басты бет',ru:'Главная',en:'Home',tr:'Ana sayfa'},'Home':{kz:'Басты бет',ru:'Главная',en:'Home',tr:'Ana sayfa'},'Ana sayfa':{kz:'Басты бет',ru:'Главная',en:'Home',tr:'Ana sayfa'},'Ana Sayfa':{kz:'Басты бет',ru:'Главная',en:'Home',tr:'Ana sayfa'},
    'Мамандықтар':{kz:'Мамандықтар',ru:'Специальности',en:'Specialties',tr:'Bölümler'},'Специальности':{kz:'Мамандықтар',ru:'Специальности',en:'Specialties',tr:'Bölümler'},'Specialties':{kz:'Мамандықтар',ru:'Специальности',en:'Specialties',tr:'Bölümler'},'Bölümler':{kz:'Мамандықтар',ru:'Специальности',en:'Specialties',tr:'Bölümler'},
    'Университеттер':{kz:'Университеттер',ru:'Университеты',en:'Universities',tr:'Üniversiteler'},'Университеты':{kz:'Университеттер',ru:'Университеты',en:'Universities',tr:'Üniversiteler'},'Universities':{kz:'Университеттер',ru:'Университеты',en:'Universities',tr:'Üniversiteler'},'Üniversiteler':{kz:'Университеттер',ru:'Университеты',en:'Universities',tr:'Üniversiteler'},
    'Дайындық':{kz:'Дайындық',ru:'Подготовка',en:'Preparation',tr:'Hazırlık'},'Подготовка':{kz:'Дайындық',ru:'Подготовка',en:'Preparation',tr:'Hazırlık'},'Preparation':{kz:'Дайындық',ru:'Подготовка',en:'Preparation',tr:'Hazırlık'},'Hazırlık':{kz:'Дайындық',ru:'Подготовка',en:'Preparation',tr:'Hazırlık'},
    'Лента':{kz:'Лента',ru:'Лента',en:'Feed',tr:'Akış'},'Feed':{kz:'Лента',ru:'Лента',en:'Feed',tr:'Akış'},'Akış':{kz:'Лента',ru:'Лента',en:'Feed',tr:'Akış'},
    'Профиль':{kz:'Профиль',ru:'Профиль',en:'Profile',tr:'Profil'},'Profile':{kz:'Профиль',ru:'Профиль',en:'Profile',tr:'Profil'},'Profil':{kz:'Профиль',ru:'Профиль',en:'Profile',tr:'Profil'},
    'Кіру':{kz:'Кіру',ru:'Войти',en:'Login',tr:'Giriş'},'Войти':{kz:'Кіру',ru:'Войти',en:'Login',tr:'Giriş'},'Login':{kz:'Кіру',ru:'Войти',en:'Login',tr:'Giriş'},'Giriş':{kz:'Кіру',ru:'Войти',en:'Login',tr:'Giriş'},
    'Тіркелу':{kz:'Тіркелу',ru:'Регистрация',en:'Register',tr:'Kayıt ol'},'Register':{kz:'Тіркелу',ru:'Регистрация',en:'Register',tr:'Kayıt ol'},'Kayıt ol':{kz:'Тіркелу',ru:'Регистрация',en:'Register',tr:'Kayıt ol'},
    'Шығу':{kz:'Шығу',ru:'Выйти',en:'Logout',tr:'Çıkış'},'Выйти':{kz:'Шығу',ru:'Выйти',en:'Logout',tr:'Çıkış'},'Logout':{kz:'Шығу',ru:'Выйти',en:'Logout',tr:'Çıkış'},'Çıkış':{kz:'Шығу',ru:'Выйти',en:'Logout',tr:'Çıkış'},
    'Тіл':{kz:'Тіл',ru:'Язык',en:'Language',tr:'Dil'},'Язык':{kz:'Тіл',ru:'Язык',en:'Language',tr:'Dil'},'Language':{kz:'Тіл',ru:'Язык',en:'Language',tr:'Dil'},'Dil':{kz:'Тіл',ru:'Язык',en:'Language',tr:'Dil'},
    'Қазақша':{kz:'Қазақша',ru:'Казахский',en:'Kazakh',tr:'Kazakça'},'Русский':{kz:'Орысша',ru:'Русский',en:'Russian',tr:'Rusça'},'English':{kz:'Ағылшынша',ru:'Английский',en:'English',tr:'İngilizce'},'Türkçe':{kz:'Түрікше',ru:'Турецкий',en:'Turkish',tr:'Türkçe'},
    'Instagram':{kz:'Instagram',ru:'Instagram',en:'Instagram',tr:'Instagram'},'Email':{kz:'Email',ru:'Email',en:'Email',tr:'Email'},'İletişim':{kz:'Байланыс',ru:'Контакты',en:'Contact',tr:'İletişim'},'Communication':{kz:'Байланыс',ru:'Контакты',en:'Contact',tr:'İletişim'},'Байланыс':{kz:'Байланыс',ru:'Контакты',en:'Contact',tr:'İletişim'},
    'Сақтау':{kz:'Сақтау',ru:'Сохранить',en:'Save',tr:'Kaydet'},'Save':{kz:'Сақтау',ru:'Сохранить',en:'Save',tr:'Kaydet'},'Kaydet':{kz:'Сақтау',ru:'Сохранить',en:'Save',tr:'Kaydet'},
    'Жою':{kz:'Жою',ru:'Удалить',en:'Delete',tr:'Sil'},'Удалить':{kz:'Жою',ru:'Удалить',en:'Delete',tr:'Sil'},'Delete':{kz:'Жою',ru:'Удалить',en:'Delete',tr:'Sil'},'Sil':{kz:'Жою',ru:'Удалить',en:'Delete',tr:'Sil'},
    'Жүктеу':{kz:'Жүктеу',ru:'Загрузить',en:'Upload',tr:'Yükle'},'Загрузить':{kz:'Жүктеу',ru:'Загрузить',en:'Upload',tr:'Yükle'},'Upload':{kz:'Жүктеу',ru:'Загрузить',en:'Upload',tr:'Yükle'},'Yükle':{kz:'Жүктеу',ru:'Загрузить',en:'Upload',tr:'Yükle'},
    'Тазалау':{kz:'Тазалау',ru:'Очистить',en:'Clear',tr:'Temizle'},'Очистить':{kz:'Тазалау',ru:'Очистить',en:'Clear',tr:'Temizle'},'Clear':{kz:'Тазалау',ru:'Очистить',en:'Clear',tr:'Temizle'},'Temizle':{kz:'Тазалау',ru:'Очистить',en:'Clear',tr:'Temizle'},
    'Жаңарту':{kz:'Жаңарту',ru:'Обновить',en:'Refresh',tr:'Yenile'},'Обновить':{kz:'Жаңарту',ru:'Обновить',en:'Refresh',tr:'Yenile'},'Refresh':{kz:'Жаңарту',ru:'Обновить',en:'Refresh',tr:'Yenile'},'Yenile':{kz:'Жаңарту',ru:'Обновить',en:'Refresh',tr:'Yenile'},
    'Қосу':{kz:'Қосу',ru:'Добавить',en:'Add',tr:'Ekle'},'Add':{kz:'Қосу',ru:'Добавить',en:'Add',tr:'Ekle'},'Ekle':{kz:'Қосу',ru:'Добавить',en:'Add',tr:'Ekle'},
    'Іздеу':{kz:'Іздеу',ru:'Поиск',en:'Search',tr:'Ara'},'Поиск':{kz:'Іздеу',ru:'Поиск',en:'Search',tr:'Ara'},'Search':{kz:'Іздеу',ru:'Поиск',en:'Search',tr:'Ara'},'Ara':{kz:'Іздеу',ru:'Поиск',en:'Search',tr:'Ara'},
    'Күтілуде':{kz:'Күтілуде',ru:'Ожидает',en:'Pending',tr:'Beklemede'},'Pending':{kz:'Күтілуде',ru:'Ожидает',en:'Pending',tr:'Beklemede'},'Beklemede':{kz:'Күтілуде',ru:'Ожидает',en:'Pending',tr:'Beklemede'},'Ожидает':{kz:'Күтілуде',ru:'Ожидает',en:'Pending',tr:'Beklemede'},
    'Жоқ':{kz:'Жоқ',ru:'Нет',en:'Missing',tr:'Yok'},'Нет':{kz:'Жоқ',ru:'Нет',en:'Missing',tr:'Yok'},'Missing':{kz:'Жоқ',ru:'Нет',en:'Missing',tr:'Yok'},'Yok':{kz:'Жоқ',ru:'Нет',en:'Missing',tr:'Yok'},
    'Расталды':{kz:'Расталды',ru:'Подтверждено',en:'Approved',tr:'Onaylandı'},'Approved':{kz:'Расталды',ru:'Подтверждено',en:'Approved',tr:'Onaylandı'},'Onaylandı':{kz:'Расталды',ru:'Подтверждено',en:'Approved',tr:'Onaylandı'},
    '© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.':{kz:'© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.',ru:'© 2026 EduBridge Türkiye. Все права защищены.',en:'© 2026 EduBridge Türkiye. All rights reserved.',tr:'© 2026 EduBridge Türkiye. Tüm hakları saklıdır.'},
    '© 2026 EduBridge Türkiye. Все права защищены.':{kz:'© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.',ru:'© 2026 EduBridge Türkiye. Все права защищены.',en:'© 2026 EduBridge Türkiye. All rights reserved.',tr:'© 2026 EduBridge Türkiye. Tüm hakları saklıdır.'},
    '© 2026 EduBridge Türkiye. Tüm hakları saklıdır.':{kz:'© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.',ru:'© 2026 EduBridge Türkiye. Все права защищены.',en:'© 2026 EduBridge Türkiye. All rights reserved.',tr:'© 2026 EduBridge Türkiye. Tüm hakları saklıdır.'},

    'Тілі':{kz:'Тілі',ru:'Язык',en:'Language',tr:'Dili'},
'Язык':{kz:'Тілі',ru:'Язык',en:'Language',tr:'Dili'},
'Dili':{kz:'Тілі',ru:'Язык',en:'Language',tr:'Dili'},
  
  // ── Uni detail page ────────────────────────────────────────────────────────
'Admission Requirements':{kz:'Түсу талаптары',ru:'Требования к поступлению',en:'Admission Requirements',tr:'Kabul Gereksinimleri'},
'Scholarships':{kz:'Гранттар / Стипендиялар',ru:'Гранты / Стипендии',en:'Scholarships',tr:'Burslar'},
'Accommodation':{kz:'Тұрғын үй',ru:'Проживание',en:'Accommodation',tr:'Konaklama'},
'International Campuses':{kz:'Халықаралық кампустар',ru:'Международные кампусы',en:'International Campuses',tr:'Uluslararası Kampüsler'},
'Exchange Programs':{kz:'Алмасу бағдарламалары',ru:'Программы обмена',en:'Exchange Programs',tr:'Değişim Programları'},
'Tuition':{kz:'Оқу ақысы',ru:'Стоимость обучения',en:'Tuition',tr:'Öğrenim Ücreti'},
'Tuition Fee':{kz:'Оқу ақысы',ru:'Стоимость обучения',en:'Tuition Fee',tr:'Öğrenim Ücreti'},
'Rating':{kz:'Рейтинг',ru:'Рейтинг',en:'Rating',tr:'Sıralama'},
'Website':{kz:'Сайт',ru:'Сайт',en:'Website',tr:'Web sitesi'},

// ── Nav / buttons ──────────────────────────────────────────────────────────
'Профиль / Apply':{kz:'Профиль / Өтінім',ru:'Профиль / Заявка',en:'Profile / Apply',tr:'Profil / Başvur'},
'Profile / Apply':{kz:'Профиль / Өтінім',ru:'Профиль / Заявка',en:'Profile / Apply',tr:'Profil / Başvur'},
'Артқа қайту':{kz:'Артқа қайту',ru:'Назад',en:'Go back',tr:'Geri dön'},
'Назад':{kz:'Артқа қайту',ru:'Назад',en:'Go back',tr:'Geri dön'},
'Go back':{kz:'Артқа қайту',ru:'Назад',en:'Go back',tr:'Geri dön'},
'Geri dön':{kz:'Артқа қайту',ru:'Назад',en:'Go back',tr:'Geri dön'},
'← Университеттерге қайту':{kz:'← Университеттерге қайту',ru:'← К университетам',en:'← Back to universities',tr:'← Üniversitelere dön'},
'← К университетам':{kz:'← Университеттерге қайту',ru:'← К университетам',en:'← Back to universities',tr:'← Üniversitelere dön'},
'← Back to universities':{kz:'← Университеттерге қайту',ru:'← К университетам',en:'← Back to universities',tr:'← Üniversitelere dön'},
'Барлық университеттер':{kz:'Барлық университеттер',ru:'Все университеты',en:'All universities',tr:'Tüm üniversiteler'},
'Все университеты':{kz:'Барлық университеттер',ru:'Все университеты',en:'All universities',tr:'Tüm üniversiteler'},
'All universities':{kz:'Барлық университеттер',ru:'Все университеты',en:'All universities',tr:'Tüm üniversiteler'},

// ── Uni detail section headings ────────────────────────────────────────────
'Орналасуы':{kz:'Орналасуы',ru:'Расположение',en:'Location',tr:'Konum'},
'Расположение':{kz:'Орналасуы',ru:'Расположение',en:'Location',tr:'Konum'},
'Location':{kz:'Орналасуы',ru:'Расположение',en:'Location',tr:'Konum'},
'Түрі':{kz:'Түрі',ru:'Тип',en:'Type',tr:'Tür'},
'Тип':{kz:'Түрі',ru:'Тип',en:'Type',tr:'Tür'},
'Type':{kz:'Түрі',ru:'Тип',en:'Type',tr:'Tür'},
'Оқыту тілі':{kz:'Оқыту тілі',ru:'Язык обучения',en:'Language of instruction',tr:'Eğitim dili'},
'Язык обучения':{kz:'Оқыту тілі',ru:'Язык обучения',en:'Language of instruction',tr:'Eğitim dili'},
'Language of instruction':{kz:'Оқыту тілі',ru:'Язык обучения',en:'Language of instruction',tr:'Eğitim dili'},
'Деңгейлер':{kz:'Деңгейлер',ru:'Уровни обучения',en:'Degree levels',tr:'Öğretim seviyeleri'},
'Уровни обучения':{kz:'Деңгейлер',ru:'Уровни обучения',en:'Degree levels',tr:'Öğretim seviyeleri'},
'Degree levels':{kz:'Деңгейлер',ru:'Уровни обучения',en:'Degree levels',tr:'Öğretim seviyeleri'},
'Неге осы университет?':{kz:'Неге осы университет?',ru:'Почему этот университет?',en:'Why this university?',tr:'Neden bu üniversite?'},
'Почему этот университет?':{kz:'Неге осы университет?',ru:'Почему этот университет?',en:'Why this university?',tr:'Neden bu üniversite?'},
'Why this university?':{kz:'Неге осы университет?',ru:'Почему этот университет?',en:'Why this university?',tr:'Neden bu üniversite?'},
'Мамандықтар / Faculties':{kz:'Мамандықтар / Факультеттер',ru:'Специальности / Факультеты',en:'Programs / Faculties',tr:'Bölümler / Fakülteler'},
'Programs / Faculties':{kz:'Мамандықтар / Факультеттер',ru:'Специальности / Факультеты',en:'Programs / Faculties',tr:'Bölümler / Fakülteler'},
'Қысқаша ақпарат':{kz:'Қысқаша ақпарат',ru:'Краткая информация',en:'Quick info',tr:'Kısa bilgi'},
'Краткая информация':{kz:'Қысқаша ақпарат',ru:'Краткая информация',en:'Quick info',tr:'Kısa bilgi'},
'Quick info':{kz:'Қысқаша ақпарат',ru:'Краткая информация',en:'Quick info',tr:'Kısa bilgi'},
'Артықшылықтар':{kz:'Артықшылықтар',ru:'Преимущества',en:'Advantages',tr:'Avantajlar'},
'Преимущества':{kz:'Артықшылықтар',ru:'Преимущества',en:'Advantages',tr:'Avantajlar'},
'Advantages':{kz:'Артықшылықтар',ru:'Преимущества',en:'Advantages',tr:'Avantajlar'},
'Әрекеттер':{kz:'Әрекеттер',ru:'Действия',en:'Actions',tr:'İşlemler'},
'Действия':{kz:'Әрекеттер',ru:'Действия',en:'Actions',tr:'İşlemler'},
'Actions':{kz:'Әрекеттер',ru:'Действия',en:'Actions',tr:'İşlemler'},
'Аккредитациялар':{kz:'Аккредитациялар',ru:'Аккредитации',en:'Accreditations',tr:'Akreditasyonlar'},
'Аккредитации':{kz:'Аккредитациялар',ru:'Аккредитации',en:'Accreditations',tr:'Akreditasyonlar'},
'Accreditations':{kz:'Аккредитациялар',ru:'Аккредитации',en:'Accreditations',tr:'Akreditasyonlar'},

// ── Quick info labels ──────────────────────────────────────────────────────
'Қала':{kz:'Қала',ru:'Город',en:'City',tr:'Şehir'},
'Город':{kz:'Қала',ru:'Город',en:'City',tr:'Şehir'},
'City':{kz:'Қала',ru:'Город',en:'City',tr:'Şehir'},
'Ел':{kz:'Ел',ru:'Страна',en:'Country',tr:'Ülke'},
'Страна':{kz:'Ел',ru:'Страна',en:'Country',tr:'Ülke'},
'Country':{kz:'Ел',ru:'Страна',en:'Country',tr:'Ülke'},
'Оқу форматы':{kz:'Оқу форматы',ru:'Формат обучения',en:'Study format',tr:'Eğitim formatı'},
'Формат обучения':{kz:'Оқу форматы',ru:'Формат обучения',en:'Study format',tr:'Eğitim formatı'},
'Study format':{kz:'Оқу форматы',ru:'Формат обучения',en:'Study format',tr:'Eğitim formatı'},
  };
  const pages={};
  function merge(a,b){return Object.assign(a||{},b||{});}
  function pick(obj){const l=getLang(); return obj && (obj[l]||obj.kz||obj.en||'');}
  function clean(s){return String(s||'').replace(/\s+/g,' ').trim();}
  function allDict(){let d=Object.assign({},COMMON); Object.keys(pages).forEach(k=>merge(d,pages[k])); return d;}
  function translateExact(s){const t=clean(s); if(!t)return s; const D=allDict(); if(D[t]) return pick(D[t]); let core=t.replace(/^[^\p{L}\p{N}]+/u,'').replace(/[^\p{L}\p{N}]+$/u,'').trim(); if(D[core]) return t.replace(core,pick(D[core])); return smartPhrase(t);}
  const fragments={
    'kz':[['Document checklist','Құжат чек-листі'],['Document upload','Құжат жүктеу'],['Admission preparation','Түсуге дайындық'],['Application Progress','Өтінім прогресі'],['Profile completion','Профиль толтыру'],['University selection','Университет таңдау'],['Deadline tracking','Дедлайн бақылау'],['Task completion','Тапсырма орындау'],['Account status','Аккаунт статусы'],['Student Panel','Студент панелі'],['Favorite universities','Таңдаулы университеттер'],['Personal notes','Жеке жазбалар'],['Quick Actions','Жылдам әрекеттер'],['Language certificate','Тіл сертификаты'],['Motivation letter','Мотивациялық хат'],['Recommendation letter','Ұсыныс хат'],['CV / Resume','CV / Резюме'],['Details','Толық ақпарат'],['View details','Толық ақпарат'],['Open','Ашу'],['Save','Сақтау'],['Reset','Сифрлау'],['Search','Іздеу'],['Private university','Жеке университет'],['Tuition','Оқу ақысы'],['Rating','Рейтинг'],['Programs','Бағдарламалар'],['Language','Тіл'],['Deadline','Дедлайн'],['Notes','Жазбалар'],['Files','Файлдар'],['Checklist','Чек-лист'],['Scholarship','Грант'],['Interview','Сұхбат']],
    'ru':[['Құжат чек-листі','Чек-лист документов'],['Құжат жүктеу','Загрузка документов'],['Түсуге дайындық','Подготовка к поступлению'],['Өтінім прогресі','Прогресс заявки'],['Профиль толтыру','Заполнение профиля'],['Университет таңдау','Выбор университета'],['Дедлайн бақылау','Контроль дедлайнов'],['Тапсырма орындау','Выполнение задач'],['Аккаунт статусы','Статус аккаунта'],['Студент панелі','Панель студента'],['Таңдаулы университеттер','Избранные университеты'],['Жеке жазбалар','Личные заметки'],['Жылдам әрекеттер','Быстрые действия'],['Тіл сертификаты','Языковой сертификат'],['Мотивациялық хат','Мотивационное письмо'],['Ұсыныс хат','Рекомендательное письмо'],['Толық ақпарат','Подробнее'],['Ашу','Открыть'],['Сақтау','Сохранить'],['Сифрлау','Сбросить'],['Іздеу','Поиск'],['Жеке университет','Частный университет'],['Оқу ақысы','Стоимость обучения'],['Бағдарламалар','Программы'],['Файлдар','Файлы'],['Жазбалар','Заметки'],['Сұхбат','Собеседование'],['Грант','Стипендия']],
    'en':[['Құжат чек-листі','Document checklist'],['Құжат жүктеу','Document upload'],['Түсуге дайындық','Admission preparation'],['Өтінім прогресі','Application progress'],['Профиль толтыру','Profile completion'],['Университет таңдау','University selection'],['Дедлайн бақылау','Deadline tracking'],['Тапсырма орындау','Task completion'],['Аккаунт статусы','Account status'],['Студент панелі','Student Panel'],['Таңдаулы университеттер','Favorite universities'],['Жеке жазбалар','Personal notes'],['Жылдам әрекеттер','Quick actions'],['Тіл сертификаты','Language certificate'],['Мотивациялық хат','Motivation letter'],['Ұсыныс хат','Recommendation letter'],['Толық ақпарат','Details'],['Ашу','Open'],['Сақтау','Save'],['Сифрлау','Reset'],['Іздеу','Search'],['Жеке университет','Private university'],['Оқу ақысы','Tuition'],['Бағдарламалар','Programs'],['Файлдар','Files'],['Жазбалар','Notes'],['Сұхбат','Interview'],['Грант','Scholarship']],
    'tr':[['Құжат чек-листі','Belge kontrol listesi'],['Құжат жүктеу','Belge yükleme'],['Түсуге дайындық','Başvuru hazırlığı'],['Өтінім прогресі','Başvuru ilerlemesi'],['Профиль толтыру','Profil tamamlama'],['Университет таңдау','Üniversite seçimi'],['Дедлайн бақылау','Son tarih takibi'],['Тапсырма орындау','Görev tamamlama'],['Аккаунт статусы','Hesap durumu'],['Студент панелі','Öğrenci paneli'],['Таңдаулы университеттер','Favori üniversiteler'],['Жеке жазбалар','Kişisel notlar'],['Жылдам әрекеттер','Hızlı işlemler'],['Тіл сертификаты','Dil sertifikası'],['Мотивациялық хат','Motivasyon mektubu'],['Ұсыныс хат','Referans mektubu'],['Толық ақпарат','Detaylı bilgi'],['Ашу','Aç'],['Сақтау','Kaydet'],['Сифрлау','Sıfırla'],['Іздеу','Ara'],['Жеке университет','Özel üniversite'],['Оқу ақысы','Öğrenim ücreti'],['Бағдарламалар','Programlar'],['Файлдар','Dosyalar'],['Жазбалар','Notlar'],['Сұхбат','Mülakat'],['Грант','Burs']]
  };
  function smartPhrase(text){ let out=text; const l=getLang(); (fragments[l]||[]).forEach(([a,b])=>{out=out.split(a).join(b);}); return out; }
  function applyAttrs(root){ const D=allDict(); root.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n'); const src=COMMON[k]?k:clean(el.textContent); const tr=D[src]?pick(D[src]):translateExact(src); if(tr) el.textContent=tr;}); root.querySelectorAll('input,textarea').forEach(el=>{const ph=el.getAttribute('placeholder'); if(ph){const tr=translateExact(ph); if(tr!==ph) el.setAttribute('placeholder',tr);}}); root.querySelectorAll('option').forEach(el=>{const tr=translateExact(el.textContent); if(tr!==el.textContent) el.textContent=tr;}); }
  function applyText(root){ const walker=document.createTreeWalker(root.body||root,NodeFilter.SHOW_TEXT,{acceptNode(n){const p=n.parentElement;if(!p)return NodeFilter.FILTER_REJECT;if(['SCRIPT','STYLE','TEXTAREA','INPUT','NOSCRIPT'].includes(p.tagName))return NodeFilter.FILTER_REJECT; if(p.closest&&p.closest('.no-i18n'))return NodeFilter.FILTER_REJECT; const v=clean(n.nodeValue); if(!v||/^[\d\s%/.,:;()₸$€+-]+$/.test(v))return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT;}}); const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode); nodes.forEach(n=>{const old=n.nodeValue, c=clean(old), tr=translateExact(c); if(tr&&tr!==c)n.nodeValue=old.replace(c,tr);}); }
  function patchAuth(){
    // FIX: Submit interceptor мен localStorage override АЛЫНДЫ
    window.logout = window.mentorLogout = function(){
      ['role','userRole','edu_user_role','username','userDisplayName','currentUserEmail','currentUser','edu_current_user','edu_auth','isLoggedIn','isAdmin','user'].forEach(function(k){
        try { localStorage.removeItem(k); } catch(e){}
      });
      location.href = 'login.html';
    };
  }
  function bindLanguage(){
    window.setLang=window.setLanguage=window.adminSetLang=window.mentorSetLang=function(l){setLang(l); applyAll(); setTimeout(applyAll,80); return false;};
    window.toggleLanguageMenu=function(){const m=document.getElementById('languageMenu')||document.getElementById('adminLangMenu')||document.querySelector('.language-menu'); if(m){m.style.display=(getComputedStyle(m).display==='none'?'block':'none'); m.classList.toggle('show');}};
    window.adminToggleLang=function(){const m=document.getElementById('adminLangMenu')||document.querySelector('.language-menu'); if(m)m.style.display=(getComputedStyle(m).display==='none'?'block':'none');};
    document.querySelectorAll('[onclick*="setLang"],[onclick*="adminSetLang"],[onclick*="mentorSetLang"],.language-menu a,#adminLangMenu a').forEach(a=>{let s=(a.getAttribute('onclick')||'')+' '+a.textContent;let l=(s.match(/['"](kz|ru|en|tr|kk)['"]/i)||[])[1]; if(!l){s=s.toLowerCase(); if(s.includes('қазақ')||s.includes('kaz'))l='kz'; else if(s.includes('рус')||s.includes('ru'))l='ru'; else if(s.includes('english')||s.includes('gb'))l='en'; else if(s.includes('türk')||s.includes('tr'))l='tr';} if(l)a.onclick=function(ev){ev.preventDefault(); setLang(l); applyAll(); setTimeout(applyAll,80); return false;};});
  }
  let scheduled=false;
  function applyAll(){setLang(getLang()); applyAttrs(document); applyText(document); if(window.__EDU_PAGE_PATCH__) try{window.__EDU_PAGE_PATCH__(getLang());}catch(e){console.warn(e);} }
  function schedule(){ if(scheduled)return; scheduled=true; setTimeout(()=>{scheduled=false;applyAll();},120); }
  function boot(){setLang(getLang()); patchAuth(); bindLanguage(); applyAll(); [200,700,1500].forEach(t=>setTimeout(applyAll,t)); new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});}
  window.EduI18n={registerPage:function(name,dict,patch){pages[name]=dict||{}; if(patch) window.__EDU_PAGE_PATCH__=patch; if(document.readyState!=='loading') setTimeout(applyAll,0);},setLang,getLang,apply:applyAll,translate:translateExact};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
