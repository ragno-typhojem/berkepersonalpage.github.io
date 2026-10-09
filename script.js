(() => {
  'use strict';

  const turkish = {
    skip: 'İçeriğe geç', homeLabel: 'Berke — ana sayfa', navLabel: 'Ana menü',
    navWork: 'Projeler', navAbout: 'Hakkımda', navCommunity: 'Topluluk', navContact: 'Konuşalım',
    languageLabel: 'Dil', menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat',
    heroEyebrow: 'OYUN GELİŞTİRİCİ · SİSTEMLER & ETKİLEŞİM',
    heroTitleOne: 'Güçlü sistemler.', heroTitleTwo: 'Canlı dünyalar.',
    heroDescription: 'Ben Berke. Kodu oynanabilen, keşfedilebilen ve bir şeyler öğreten deneyimlere dönüştürüyorum — Roblox oyun sistemlerinden etkileşimli eğitim projelerine.',
    exploreWork: 'Projelerimi keşfet',
    heroNote: 'Oyun programlama. Görsel tasarım. Paylaşılan merak.',
    portraitAlt: 'Mustafa Berke Şimşekler bir şehir sokağında', portraitCaption: 'GELİŞTİRİCİ & ÜRETİCİ',
    worldPreviewLabel: 'Tasarladığım bir dünya — 3B çevre tasarımlarımı keşfet', worldPreview: 'Tasarladığım bir dünya',
    backgroundLabel: 'Geçmişim', factCoding: 'Kodlama ve oyun geliştirmeye başlangıç', factRoblox: 'Roblox üzerinde geliştirme', factMetu: 'Bilgisayar Topluluğu Başkanı',
    workEyebrow: '01 / SEÇİLİ PROJELER', workHeading: 'Deneyimi odağına alan projeler.',
    workIntro: 'Aksiyonun arkasındaki sistemler, onu çevreleyen arayüzler ve hepsini bir araya getiren dünyalar.',
    r15Alt: 'R15 karakter iskeletini, kol eklemlerini ve silah dönüşümlerini gösteren teknik çizim',
    systemIllustration: 'SİSTEM ÇİZİMİ', conceptIllustration: 'KONSEPT ÇİZİMİ', openSource: 'AÇIK KAYNAK', gameplay: 'OYUN SİSTEMLERİ',
    r15Description: 'Tool tabanlı, genişletilebilir bir Roblox silah sistemi. Karakter hareketi, silah kullanımı ve çevreyle etkileşim, kodla yönetilen animasyonlarla bir araya geliyor.',
    insideSystem: 'Sistemin içinde',
    r15DetailOne: 'IK tabanlı kol konumlandırması ve prosedürel karakter animasyonuyla R15 iskelet entegrasyonu.',
    r15DetailTwo: 'Silah salınımı, atalet ve geri tepme; ateş etme, şarjör değiştirme ve silaha özel davranışlar.',
    r15DetailThree: 'FPS ve isteğe bağlı TPS desteği, çevreyle etkileşim ve modüler silah yapılandırmaları.',
    projectNotes: 'Proje notları',
    euphoriaAlt: 'Parkur rotasını, duvar tespitini ve tırmanma yörüngesini gösteren konsept çizim',
    euphoriaCategory: 'ÖZEL FİZİK · KARAKTER KONTROLÜ',
    euphoriaDescription: 'Hareketin, yerçekiminin ve animasyonun kodla yönetildiği özel bir Roblox parkur ve fizik sistemi üzerine çalışıyorum.',
    euphoriaDetail: 'Geliştirme; duvar tespiti, karakter boyutuna göre raycast uzunlukları, zıplama, koşma ve tırmanmaya odaklanıyor. Mantling ve roll-up mekanikleri de geliştirme kapsamında.',
    kickvaneAlt: 'Hedefleme çizgisi ve oyuncu simgeleriyle arcade futbol sahası konsept çizimi',
    kickvaneCategory: 'ARCADE FUTBOL · ÇOK OYUNCULU',
    kickvaneDescription: 'Okunabilir bir oyun alanı, yönlü şut ve oyuncu girdisi, simülasyon ile geri bildirim arasındaki ilişki üzerine kurulu arcade futbol.',
    kickvaneDetail: 'Modüler istemci–sunucu yapısı, yapılandırılabilir top fiziği, hedefleme göstergeleri ve klavye, dokunmatik ekran ile kontrolcü için arayüz tasarımı üzerine çalışmalar.',
    clientServer: 'İstemci–sunucu', responsiveUi: 'Duyarlı arayüz',
    hustleAlt: 'Renkli bir ada şehrini ve modüler oyun arayüzünü gösteren konsept çizim',
    hustleCategory: 'TAKIM OYUNU · OYUN ARAYÜZLERİ',
    hustleDescription: 'Rekabetçi takım mekaniklerini canlı, simülasyon oyunlarından ilham alan bir arayüzle birleştiren çok oyunculu Roblox projesi.',
    hustleDetail: 'Çalışma anında GUI oluşturma, farklı ekranlara uyum sağlayan menüler ve HUD, anlaşılır rol seçimi ve sürdürülebilir oyun modülleri öne çıkan çalışma alanları.',
    modularSystems: 'Modüler sistemler',
    balkizAlt: 'Sohbet tabanlı öğrenme arayüzü, ses dalgaları ve eğlenceli şekillerin konsept çizimi',
    balkizCategory: 'EĞİTİM TEKNOLOJİLERİ · ETKİLEŞİM',
    balkizDescription: 'İLKYAR etkinlikleri için geliştirilen, sohbeti ve eğlenceli görselleri kullanarak teknolojiyi çocuklar için anlaşılır kılmayı amaçlayan eğitsel yapay zekâ projesi.',
    interactiveVisuals: 'Etkileşimli görseller', learningDesign: 'Öğrenme tasarımı', viewRepository: 'Kaynak kodu incele',
    worldsEyebrow: '02 / DÜNYA TASARIMI', worldsHeading: 'Piksellerden kurulan mekânlar.',
    worldsIntro: 'Önceki 3B çevre tasarımlarımdan bir seçki. Sokaklar, buluşma alanları ve bir mekâna hayat veren küçük ayrıntılar.',
    revengersAlt: 'Street Revengers için tasarlanmış şehir ortamı', revengersLabel: 'Street Revengers görselini büyüt',
    skylineAlt: 'Merdivenler ve oturma alanları bulunan, gün ışığı alan bir kafe iç mekânı', skylineLabel: 'Skyline Cafe görselini büyüt',
    japaneseAlt: 'Kırmızı binaları ve asılı ışıklarıyla Japonya esintili bir sokak', japaneseLabel: 'Japon sokağı görselini büyüt', japaneseCaption: 'Japon sokağı',
    winterAlt: 'Dağlar ve geometrik ağaçlarla karlı, düşük poligonlu bir manzara', winterLabel: 'Kış atmosferi görselini büyüt', winterCaption: 'Kış atmosferi',
    streetAlt: 'Binalar, ağaçlar ve korkuluklarla ayrıntılı bir şehir sokağı', streetLabel: 'Şehir sokağı görselini büyüt', streetCaption: 'Şehir sokağı',
    roadAlt: 'Tuğla binalar arasındaki yol ve demiryolu sahnesi', roadLabel: 'Yol çalışması görselini büyüt', roadCaption: 'Yol çalışması',
    hospitalAlt: 'Açık mavi gökyüzü altında modellenmiş hastane dış cephesi', hospitalLabel: 'Hastane dış cephesi görselini büyüt', hospitalCaption: 'Hastane dış cephesi',
    hospitalInteriorAlt: 'Tavan yapısı ve bekleme koltukları bulunan hastane koridoru', hospitalInteriorLabel: 'Hastane koridoru görselini büyüt', hospitalInteriorCaption: 'Hastane koridoru',
    cityEnvironment: 'Şehir ortamı', interiorDesign: 'İç mekân tasarımı', environmentStudy: 'Çevre tasarımı', architecture: 'Mimari',
    aboutEyebrow: '03 / PROJELERİN ARKASINDAKİ KİŞİ', aboutHeading: 'Hepsinin ortak noktası merak.',
    aboutLead: 'Bir sistemi, kendime ait bir şey üretebilecek kadar derinlemesine anlamayı seviyorum.',
    aboutDescription: '2018’de kodlama ve oyun geliştirmeye, 2019’da Roblox üzerinde üretmeye başladım. Çalışmalarım oyun programlamayı, prosedürel animasyonu, arayüz tasarımını ve 3B ortamları bir araya getiriyor.',
    aboutPersonal: 'Ekrandan uzaktayken yürüyüş yapmak, tenis oynamak ve sporla ilgilenmekten keyif alıyorum. Disiplin, merak ve öğrendiklerimi paylaşma isteği çalışma biçimimi şekillendiriyor.',
    cvLink: 'CV · PDF', educationLabel: 'EĞİTİM', educationHeading: 'Orta Doğu Teknik Üniversitesi',
    educationDescription: 'Bilgisayar ve Öğretim Teknolojileri Eğitimi', experienceLabel: 'DENEYİM',
    experienceDescription: 'Oyun Sanatçısı Stajyeri — görsel tasarım, varlık üretimi ve sanat yönetimi.',
    approachLabel: 'YAKLAŞIM', approachHeading: 'Üret. Geliştir. Paylaş.',
    approachDescription: 'Prototipleme, hata ayıklama ve karmaşık sistemleri daha kolay kullanılabilir hâle getirmek için uygulamalı bir yaklaşım.',
    skillsHeading: 'Çalışma araçlarım', skillsNote: 'Üretirken kullandığım araçlar ve fikirler',
    skillProgramming: 'Programlama', skillGameplay: 'Oynanış & fizik', skillAnimation: 'Animasyon', skillInteraction: 'Tasarım & etkileşim',
    gameSystems: 'Oyun sistemleri', raycastingPhysics: 'Raycasting & özel fizik', proceduralAnimation: 'Prosedürel animasyon', responsiveInterfaces: 'Duyarlı arayüzler', worldBuilding: '3B dünya tasarımı',
    communityEyebrow: '04 / LİDERLİK & TOPLULUK', communityHeadingOne: 'Birlikte ürettiğimizde', communityHeadingTwo: 'güzel şeyler oluyor.',
    communityIntro: 'Teknik çalışmalarım, insanları bir araya getirdiğinde veya birine yeni bir öğrenme yolu sunduğunda benim için daha anlamlı.',
    linkedinStory: 'Hikâyemin devamı LinkedIn’de', chairman: 'BAŞKAN', clubName: 'ODTÜ Bilgisayar Topluluğu',
    clubDescription: 'Topluluğa liderlik ediyor, Bilişim Günü dâhil etkinlikleri koordine ederek öğrencileri ve teknoloji profesyonellerini bir araya getiriyorum.',
    technicalLeadership: 'TEKNİK LİDERLİK', footballHeading: 'Roblox futbol toplulukları',
    footballDescription: 'Roblox futbol liglerine teknik liderlik, seremoniler ve çevre tasarımı alanlarında katkıda bulunuyorum.',
    learningTogether: 'BİRLİKTE ÖĞRENME', educationCommunityHeading: 'İLKYAR & eğitim projeleri',
    educationCommunityDescription: 'Çocuklara yönelik teknik projelerde gönüllüyüm. B.A.L.K.I.Z ve İskelet Fehmi ile anlaşılır yapay zekâ ve görsel öğrenme deneyimleri üzerine çalışıyorum.',
    mentorshipDescription: 'Bilgisayar biliminin temellerini öğretmek ve öğrencilere mentorluk yapmak istiyorum. Henüz özel ders deneyimim bulunmuyor.',
    iskeletLink: 'İskelet Fehmi’yi keşfet',
    contactEyebrow: '05 / BİR SOHBET BAŞLATALIM', contactHeadingOne: 'Bir fikir, bir proje,', contactHeadingTwo: 'ya da sadece bir merhaba.',
    contactDescription: 'Oyunlar, yaratıcı teknolojiler, birlikte üretmek veya yeni bir şey öğrenmek üzerine konuşalım.',
    copyEmail: 'E-posta adresini kopyala', emailCopied: 'E-posta adresi kopyalandı.', emailCopyFailed: 'Kopyalama kullanılamıyor. E-posta bağlantısından iletişime geçebilirsiniz.',
    footerNote: 'Merakla üretildi. Gelişmeye devam ediyor.', backTop: 'Başa dön',
    galleryLabel: 'DÜNYA TASARIMI / GALERİ', closeImage: 'Görseli kapat', previousImage: 'Önceki görsel', nextImage: 'Sonraki görsel'
  };

  // The complete English portfolio lives in HTML and works without JavaScript.
  const english = {
    menuClose: 'Close menu',
    emailCopied: 'Email address copied.',
    emailCopyFailed: 'Copy is unavailable. You can use the email link to get in touch.'
  };
  const translationTargets = [
    ['[data-i18n]', 'i18n', null],
    ['[data-i18n-alt]', 'i18nAlt', 'alt'],
    ['[data-i18n-aria]', 'i18nAria', 'aria-label']
  ];
  for (const [selector, key, attribute] of translationTargets) {
    document.querySelectorAll(selector).forEach(element => {
      english[element.dataset[key]] = attribute ? element.getAttribute(attribute) : element.textContent;
    });
  }
  let language = 'en';
  const translate = key => (language === 'tr' ? turkish[key] : english[key]) ?? english[key] ?? key;
  const nav = document.getElementById('main-nav');
  const menu = document.getElementById('menu-toggle');
  const dialog = document.getElementById('gallery-dialog');
  const galleryItems = [...document.querySelectorAll('[data-gallery]')];
  let galleryIndex = 0;
  let galleryTrigger = null;
  let copyTimer;
  let lastCopyResult = null;

  function updateMenuLabel() {
    menu.setAttribute('aria-label', translate(menu.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
  }
  function setMenu(open, returnFocus = false) {
    nav.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    updateMenuLabel();
    if (returnFocus) menu.focus({ preventScroll: true });
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
    if (open) nav.querySelector('a').focus();
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  matchMedia('(min-width: 801px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });
  nav.addEventListener('focusout', () => {
    queueMicrotask(() => {
      if (!nav.contains(document.activeElement) && document.activeElement !== menu) setMenu(false);
    });
  });

  function updateGallery() {
    const item = galleryItems[galleryIndex];
    const image = document.getElementById('gallery-image');
    image.src = item.href;
    image.alt = translate(item.dataset.alt);
    document.getElementById('gallery-caption').textContent = item.dataset.caption || translate(item.dataset.captionKey);
    document.getElementById('gallery-count').textContent = `${galleryIndex + 1} / ${galleryItems.length}`;
  }
  if (typeof dialog.showModal === 'function') {
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', event => {
        event.preventDefault();
        galleryIndex = index;
        galleryTrigger = item;
        updateGallery();
        dialog.showModal();
        document.body.classList.add('gallery-open');
        document.getElementById('gallery-close').focus();
      });
    });
    document.getElementById('gallery-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.body.classList.remove('gallery-open');
      galleryTrigger?.focus({ preventScroll: true });
    });
    // A dialog backdrop click has the dialog as its target; content clicks stay inside its bounds.
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    const changeImage = step => {
      galleryIndex = (galleryIndex + step + galleryItems.length) % galleryItems.length;
      updateGallery();
    };
    document.getElementById('gallery-prev').addEventListener('click', () => changeImage(-1));
    document.getElementById('gallery-next').addEventListener('click', () => changeImage(1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        changeImage(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
  }

  function setLanguage(next, persist = true) {
    language = next === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = language;
    for (const [selector, key, attribute] of translationTargets) {
      document.querySelectorAll(selector).forEach(element => {
        const value = translate(element.dataset[key]);
        if (attribute) element.setAttribute(attribute, value);
        else element.textContent = value;
      });
    }
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.title = language === 'tr'
      ? 'Mustafa Berke Şimşekler | Oyun Geliştirici & Sistem Programcısı'
      : 'Mustafa Berke Şimşekler | Game Developer & Systems Programmer';
    document.querySelector('meta[name="description"]').content = language === 'tr'
      ? 'Mustafa Berke Şimşekler — oyun geliştirici, oyun sistemleri programcısı ve ODTÜ Bilgisayar Topluluğu Başkanı. Roblox projeleri, prosedürel animasyon ve etkileşimli öğrenme.'
      : 'Mustafa Berke Şimşekler — game developer, gameplay systems programmer and METU Computer Club Chairman. Explore Roblox projects, procedural animation, interactive learning and 3D worlds.';
    document.querySelector('meta[property="og:locale"]').content = language === 'tr' ? 'tr_TR' : 'en_US';
    document.querySelector('meta[property="og:locale:alternate"]').content = language === 'tr' ? 'en_US' : 'tr_TR';
    updateMenuLabel();
    if (dialog.open) updateGallery();
    if (lastCopyResult) document.getElementById('copy-status').textContent = translate(lastCopyResult);
    if (persist) {
      try { localStorage.setItem('berke-portfolio-language', language); } catch { /* Optional preference storage. */ }
    }
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  let initialLanguage = new URLSearchParams(location.search).get('lang');
  if (!['en', 'tr'].includes(initialLanguage)) {
    try { initialLanguage = localStorage.getItem('berke-portfolio-language'); } catch { /* Browsing can disable storage. */ }
  }
  if (!['en', 'tr'].includes(initialLanguage)) initialLanguage = navigator.language.startsWith('tr') ? 'tr' : 'en';
  setLanguage(initialLanguage, false);

  const copyButton = document.getElementById('copy-email');
  if (navigator.clipboard?.writeText) {
    copyButton.addEventListener('click', async () => {
      clearTimeout(copyTimer);
      try {
        await navigator.clipboard.writeText('simseklermustafaberke@gmail.com');
        lastCopyResult = 'emailCopied';
      } catch {
        lastCopyResult = 'emailCopyFailed';
      }
      document.getElementById('copy-status').textContent = translate(lastCopyResult);
      copyTimer = setTimeout(() => {
        lastCopyResult = null;
        document.getElementById('copy-status').textContent = '';
      }, 6000);
    });
    copyButton.hidden = false;
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
  document.querySelector('.language-switch').hidden = false;
  menu.hidden = false;
  document.documentElement.classList.add('is-enhanced');

  // Highlight the current destination without hiding content or binding scroll work.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        nav.querySelectorAll('a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }
})();
