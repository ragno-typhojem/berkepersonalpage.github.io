(() => {
  'use strict';

  const turkish = {
    moreProjects: "Web, eğitim ve masaüstü projeleri",
    moreProjectsIntro: "GitHub’ımdan diğer projeler ve kaynak kodları.",
    repoDescription0: "Kamera karşısındaki hareketlerini takip eden bir iskelet. Çocuklarla yaptığımız etkinliklerde hareket takibinin nasıl çalıştığını göstermek için kullanıyorum.",
    viewRepository: "Kaynak kodu incele",
    repoDescription1: "Çocukların kamera veya mikrofonla örnek toplayıp küçük bir sınıflandırıcı eğitebildiği tarayıcı atölyesi. Örnekler cihazda kalıyor.",
    repoDescription2: "Kameradan yüz ifadelerini tahmin edip sonuçları gösteren bir demo. İLKYAR etkinliklerinde görüntü işlemeyi tanıtmak için hazırladım.",
    repoDescription3: "Kütüphane ve yemekhane yoğunluğunu paylaşmak için kampüs uygulaması prototipi. Hesaplar, puanlar ve QR ile ödül alma akışı da var.",
    repoDescription4: "Sekmeler, yer imleri ve geçmiş içeren Electron tabanlı tarayıcı denemem. Masaüstü gezinme akışı ve arayüz üzerinde çalıştım.",
    repoDescription5: "Geliştirmesi sonlandırılmış blok programlama masaüstü prototipim. C# tarafında blok yürütme ve sprite hareketleri var; diğer KODKIT denemelerim Scratch, TurboWarp ve Blockly üzerine kurulu.",
    archiveTitle: "Roblox proje arşivi",
    historyDescription0: "Bu Roblox projesinin haritasını ve 3B şehir ortamını tasarladım. Proje yayımlanmadı.",
    historyDescription1: "Roblox’ta sosyal bir buluşma alanı için kafenin modellerinin çoğunu ve iç mekânını yaptım.",
    historyDescription2: "EKG monitörleri gibi Roblox rol yapma ekipmanları. Modelleme, animasyon ve kod tarafında çalıştım.",
    historyDescription3: "Yayımlanmamış Roblox rol yapma ortamı. Binaları ve dekorların çoğunu yaptım.",
    currentLabel: "GÜNCEL · KAS 2024 — DEVAM EDİYOR",
    currentDescription: "Eğitim projeleri ve saha etkinlikleri için gönüllü yazılım geliştirme.",
    skip: 'İçeriğe geç', homeLabel: 'Berke — ana sayfa', navLabel: 'Ana menü',
    navWork: 'Projeler', navAbout: 'Hakkımda', navCommunity: 'Topluluk', navContact: 'Konuşalım',
    languageLabel: 'Dil', menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat',
    heroEyebrow: "OYUN & FULL STACK GELİŞTİRİCİ",
    heroTitleOne: "Oyunlar, kod", heroTitleTwo: "ve biraz tasarım.",
    heroDescription: "Ben Berke. Roblox oyunları ve web uygulamaları geliştiriyorum. İLKYAR’da çocuklarla yaptığımız etkinlikler için yazılımlar hazırlıyorum.",
    exploreWork: 'Projelerimi keşfet',
    heroNote: "2018’den beri kod, 2019’dan beri Roblox.",
    portraitAlt: 'Mustafa Berke Şimşekler bir şehir sokağında', portraitCaption: 'GELİŞTİRİCİ & ÜRETİCİ',
    worldPreviewLabel: 'Tasarladığım bir dünya — 3B çevre tasarımlarımı keşfet', worldPreview: 'Tasarladığım bir dünya',
    backgroundLabel: 'Geçmişim', factCoding: 'Kodlama ve oyun geliştirmeye başlangıç', factRoblox: 'Roblox üzerinde geliştirme', factMetu: "Bilgisayar ve Öğretim Teknolojileri Eğitimi",
    workEyebrow: '01 / SEÇİLİ PROJELER', workHeading: "Üzerinde çalıştığım projeler.",
    workIntro: "Roblox sistemleri, eğitim araçları ve masaüstü denemeleri. Paylaşılabilir kaynak kodlarını da ekledim.",
    r15Alt: 'R15 karakter iskeletini, kol eklemlerini ve silah dönüşümlerini gösteren teknik çizim',
    systemIllustration: 'SİSTEM ÇİZİMİ', conceptIllustration: 'KONSEPT ÇİZİMİ', openSource: 'AÇIK KAYNAK', gameplay: 'OYUN SİSTEMLERİ',
    r15Description: "R15 karakterler için yazdığım Tool tabanlı silah sistemi. Animasyonları CFrame, Motor6D ve Tween ile yönetiyorum; kolları silaha göre IK ile konumlandırıyorum.",
    insideSystem: 'Sistemin içinde',
    r15DetailOne: 'IK tabanlı kol konumlandırması ve prosedürel karakter animasyonuyla R15 iskelet entegrasyonu.',
    r15DetailTwo: 'Silah salınımı, atalet ve geri tepme; ateş etme, şarjör değiştirme ve silaha özel davranışlar.',
    r15DetailThree: 'FPS ve isteğe bağlı TPS desteği, çevreyle etkileşim ve modüler silah yapılandırmaları.',
    projectNotes: 'Proje notları',
    euphoriaAlt: 'Parkur rotasını, duvar tespitini ve tırmanma yörüngesini gösteren konsept çizim',
    euphoriaCategory: 'ÖZEL FİZİK · KARAKTER KONTROLÜ',
    euphoriaDescription: "Roblox için kendi parkur ve fizik sistemim. Varsayılan karakter kontrolü yerine hareket, yerçekimi ve tırmanma davranışlarını kendim yazıyorum.",
    euphoriaDetail: 'Geliştirme; duvar tespiti, karakter boyutuna göre raycast uzunlukları, zıplama, koşma ve tırmanmaya odaklanıyor. Mantling ve roll-up mekanikleri de geliştirme kapsamında.',
    kickvaneAlt: 'Hedefleme çizgisi ve oyuncu simgeleriyle arcade futbol sahası konsept çizimi',
    kickvaneCategory: 'ARCADE FUTBOL · ÇOK OYUNCULU',
    kickvaneDescription: "Arcade futbol projem. Top fiziği, nişan alma ve şut kontrolleri üzerinde çalışıyorum; arayüzü dokunmatik ekran, klavye ve kontrolcüye göre düzenliyorum.",
    kickvaneDetail: 'Modüler istemci–sunucu yapısı, yapılandırılabilir top fiziği, hedefleme göstergeleri ve klavye, dokunmatik ekran ile kontrolcü için arayüz tasarımı üzerine çalışmalar.',
    clientServer: 'İstemci–sunucu', responsiveUi: 'Duyarlı arayüz',
    hustleAlt: 'Renkli bir ada şehrini ve modüler oyun arayüzünü gösteren konsept çizim',
    hustleCategory: 'TAKIM OYUNU · OYUN ARAYÜZLERİ',
    hustleDescription: "Takım mekanikleri, menüler ve HUD üzerinde çalıştığım çok oyunculu Roblox oyunu. Arayüzü kodla oluşturuyor, yeniden kullanılabilir modüllere ayırıyorum.",
    hustleDetail: 'Çalışma anında GUI oluşturma, farklı ekranlara uyum sağlayan menüler ve HUD, anlaşılır rol seçimi ve sürdürülebilir oyun modülleri öne çıkan çalışma alanları.',
    modularSystems: 'Modüler sistemler',
    balkizAlt: 'Sohbet tabanlı öğrenme arayüzü, ses dalgaları ve eğlenceli şekillerin konsept çizimi',
    balkizCategory: 'EĞİTİM TEKNOLOJİLERİ · ETKİLEŞİM',
    balkizDescription: "İLKYAR etkinlikleri için geliştirdiğim Türkçe konuşan yapay zekâ karakteri. Çocuklar görsel ve sesli bir arayüz üzerinden onunla sohbet edebiliyor.",
    interactiveVisuals: 'Etkileşimli görseller', learningDesign: 'Öğrenme tasarımı', viewRepository: 'Kaynak kodu incele',
    worldsEyebrow: '02 / DÜNYA TASARIMI', worldsHeading: "Önceki 3B çalışmalarım.",
    worldsIntro: "Roblox Studio’da yaptığım harita ve iç mekânlar. Aşağıda Street Revengers ve Skyline Cafe çalışmalarım da var.",
    revengersAlt: 'Street Revengers için tasarlanmış şehir ortamı', revengersLabel: 'Street Revengers görselini büyüt',
    skylineAlt: 'Merdivenler ve oturma alanları bulunan, gün ışığı alan bir kafe iç mekânı', skylineLabel: 'Skyline Cafe görselini büyüt',
    japaneseAlt: 'Kırmızı binaları ve asılı ışıklarıyla Japonya esintili bir sokak', japaneseLabel: 'Japon sokağı görselini büyüt', japaneseCaption: 'Japon sokağı',
    winterAlt: 'Dağlar ve geometrik ağaçlarla karlı, düşük poligonlu bir manzara', winterLabel: 'Kış atmosferi görselini büyüt', winterCaption: 'Kış atmosferi',
    streetAlt: 'Binalar, ağaçlar ve korkuluklarla ayrıntılı bir şehir sokağı', streetLabel: 'Şehir sokağı görselini büyüt', streetCaption: 'Şehir sokağı',
    roadAlt: 'Tuğla binalar arasındaki yol ve demiryolu sahnesi', roadLabel: 'Yol çalışması görselini büyüt', roadCaption: 'Yol çalışması',
    hospitalAlt: 'Açık mavi gökyüzü altında modellenmiş hastane dış cephesi', hospitalLabel: 'Hastane dış cephesi görselini büyüt', hospitalCaption: 'Hastane dış cephesi',
    hospitalInteriorAlt: 'Tavan yapısı ve bekleme koltukları bulunan hastane koridoru', hospitalInteriorLabel: 'Hastane koridoru görselini büyüt', hospitalInteriorCaption: 'Hastane koridoru',
    cityEnvironment: 'Şehir ortamı', interiorDesign: 'İç mekân tasarımı', environmentStudy: 'Çevre tasarımı', architecture: 'Mimari',
    aboutEyebrow: '03 / PROJELERİN ARKASINDAKİ KİŞİ', aboutHeading: "Biraz da ben.",
    aboutLead: "Projelerimin çoğu denemek istediğim bir şeyden ya da çözmek istediğim bir sorundan çıkıyor.",
    aboutDescription: "2018’de kodlama ve oyun geliştirmeye başladım, 2019’da Roblox’a geçtim. Şimdi ODTÜ’deki eğitimimin yanında oyun sistemleri, web uygulamaları ve eğitim etkinlikleri üzerinde çalışıyorum.",
    aboutPersonal: "Boş zamanlarımda yürüyüş yapmayı, tenis oynamayı ve sporla ilgilenmeyi seviyorum. Programlama konusunda diğer öğrencilere yardımcı olmak ve öğrendiklerimi paylaşmak da hoşuma gidiyor.",
    cvLink: 'CV · PDF', educationLabel: 'EĞİTİM', educationHeading: 'Orta Doğu Teknik Üniversitesi',
    educationDescription: 'Bilgisayar ve Öğretim Teknolojileri Eğitimi', experienceLabel: "GEÇMİŞ · TAMAMLANAN STAJ",
    experienceDescription: "Game Artist stajyeri · 2 ay. Üç kişilik bir ekiple oyun görselleri, asset üretimi ve sanat yönetimi üzerinde çalıştım.",
    approachLabel: 'YAKLAŞIM', approachHeading: 'Üret. Geliştir. Paylaş.',
    approachDescription: 'Prototipleme, hata ayıklama ve karmaşık sistemleri daha kolay kullanılabilir hâle getirmek için uygulamalı bir yaklaşım.',
    skillsHeading: 'Çalışma araçlarım', skillsNote: 'Üretirken kullandığım araçlar ve fikirler',
    skillProgramming: 'Programlama', skillGameplay: 'Oynanış & fizik', skillAnimation: 'Animasyon', skillInteraction: 'Tasarım & etkileşim',
    gameSystems: 'Oyun sistemleri', raycastingPhysics: 'Raycasting & özel fizik', proceduralAnimation: 'Prosedürel animasyon', responsiveInterfaces: 'Duyarlı arayüzler', worldBuilding: '3B dünya tasarımı',
    communityEyebrow: '04 / LİDERLİK & TOPLULUK', communityHeadingOne: "Kodun dışında.", communityHeadingTwo: "İnsanlar ve topluluklar.",
    communityIntro: "Yazılım geliştirmenin yanında eğitim etkinliklerine katılıyorum. Üniversitede öğrenci etkinliklerinin düzenlenmesinde de görev aldım.",
    linkedinStory: "LinkedIn’deki deneyimlerim", chairman: "GEÇMİŞ · ÖNCEKİ BAŞKAN", clubName: 'ODTÜ Bilgisayar Topluluğu',
    clubDescription: "Başkanlık ve yönetim kurulu görevim sona erdi. Bu dönemde yönetim kurulunu koordine ettim ve Bilişim Günü gibi etkinliklerin düzenlenmesinde çalıştım.",
    technicalLeadership: 'TEKNİK LİDERLİK', footballHeading: 'Roblox futbol toplulukları',
    footballDescription: "Roblox futbol liglerinde teknik liderlik, seremoni sistemleri ve çevre tasarımı alanlarında görev aldım.",
    learningTogether: "GÜNCEL · GÖNÜLLÜ", educationCommunityHeading: 'İLKYAR & eğitim projeleri',
    educationCommunityDescription: "İLKYAR’da Full Stack Developer olarak gönüllü çalışmaya devam ediyorum. Etkinlikler için yazılım geliştiriyor, testlerde ve sahadaki teknik işlerde görev alıyorum.",
    mentorshipDescription: 'Bilgisayar biliminin temellerini öğretmek ve öğrencilere mentorluk yapmak istiyorum. Henüz özel ders deneyimim bulunmuyor.',
    iskeletLink: 'İskelet Fehmi’yi keşfet',
    contactEyebrow: '05 / BİR SOHBET BAŞLATALIM', contactHeadingOne: 'Bir fikir, bir proje,', contactHeadingTwo: 'ya da sadece bir merhaba.',
    contactDescription: "Projeler, birlikte çalışma veya soruların için e-posta ya da LinkedIn üzerinden ulaşabilirsin.",
    copyEmail: 'E-posta adresini kopyala', emailCopied: 'E-posta adresi kopyalandı.', emailCopyFailed: 'Kopyalama kullanılamıyor. E-posta bağlantısından iletişime geçebilirsiniz.',
    footerNote: "Oyunlar, yazılımlar ve yaptığım işler.", backTop: 'Başa dön',
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
      ? 'Mustafa Berke Şimşekler | Oyun & Full Stack Geliştirici'
      : 'Mustafa Berke Şimşekler | Game & Full Stack Developer';
    document.querySelector('meta[name="description"]').content = language === 'tr'
      ? 'Mustafa Berke Şimşekler — oyun ve full stack geliştirici. Roblox oyun sistemleri, web uygulamaları ve İLKYAR eğitim projeleri.'
      : 'Mustafa Berke Şimşekler — game and full stack developer. Roblox gameplay systems, web applications and educational projects at İLKYAR.';
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
