/* =============================================
   ملتقى الأثرياء — نظام الترجمة الثنائي
   The Wealth Forum — Bilingual (AR / EN) i18n
   ============================================= */

const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    fontFamily: "'Tajawal', 'Cairo', sans-serif",

    /* ---- Navbar ---- */
    'nav.home':           'الرئيسية',
    'nav.markets':        'أخبار الأسواق',
    'nav.strategies':     'المقالات',
    'nav.entrepreneurship':'ريادة الأعمال',
    'nav.about':          'عن الملتقى',
    'nav.subscribe':      'اشترك مجاناً ✦',
    'nav.toggle.label':   'فتح القائمة',
    'logo.text':          'ملتقى الأثرياء',
    'logo.sub':           'النخبة المالية العربية',
    
    /* ---- Ticker ---- */
    'ticker.tadawul':     'تداول السعودية',
    'ticker.dfm':         'دبي المالي',
    'ticker.aramco':      'أرامكو',
    'ticker.gold':        'الذهب',
    'ticker.oil':         'النفط',
    'ticker.btc':         'بيتكوين',
    
    /* ---- Hero ---- */
    'hero.badge':         'منصة النخبة المالية العربية',
    'hero.title.line1':   'استثمر بذكاء،',
    'hero.title.accent':  'ابنِ ثروتك',
    'hero.title.line2':   'بثقة',
    'hero.desc':          'تحليلات مالية عمقية، استراتيجيات استثمار مجرّبة، ورؤى نخبة من الخبراء — كل ما يحتاجه المستثمر العربي الطموح في مكان واحد.',
    'hero.btn.articles':  'استكشف المقالات',
    'hero.btn.newsletter':'اشترك مجاناً',
    'hero.stat.readers':  'مستثمر نشط',
    'hero.stat.articles': 'مقالة متخصصة',
    'hero.stat.years':    'تقييم القراء',
    'hero.card.title':    'محفظتي هذا الشهر',
    'hero.card.sub':      'أداء نمو الاستثمارات',
    'hero.card.growth':   'الأسهم',
    'hero.card.return':   'العقارات',
    'hero.card.risk':     'الذهب',
    
    /* ---- Articles section ---- */
    'section.articles.tag':   '✦ أحدث المقالات',
    'section.articles.title1': 'رؤى مالية',
    'section.articles.title2': 'حصرية',
    'section.articles.desc':  'محتوى متخصص يكتبه خبراء ماليون بخبرة عقود في أسواق المال العربية والعالمية',
    'articles.read.featured': 'اقرأ الدليل الكامل ←',
    'articles.loadmore':      'عرض المزيد من المقالات ↓',
    'articles.min':           'دقيقة',
    
    /* ---- Categories ---- */
    'section.categories.tag':   '✦ تصنيفات المحتوى',
    'section.categories.title1':'استكشف',
    'section.categories.title2':'مجالات الثروة',
    'section.categories.desc':  'اختر المجال الذي يناسب أهدافك المالية وابدأ رحلتك نحو التفوق المالي',
    'filter.all':         'الكل',
    'cat.stocks':         'الأسهم',
    'cat.stocks.desc':    '2 مقالة',
    'cat.realestate':     'العقارات',
    'cat.realestate.desc': '2 مقالة',
    'cat.gold':           'الذهب والمعادن',
    'cat.gold.desc':      '2 مقالة',
    'cat.crypto':         'العملات الرقمية',
    'cat.crypto.desc':    '2 مقالة',
    'cat.startup':        'ريادة الأعمال',
    'cat.startup.desc':   '2 مقالة',
    'cat.passive':        'الدخل السلبي',
    'cat.passive.desc':   '2 مقالة',
    'cat.personal':       'المالية الشخصية',
    'cat.personal.desc':  '2 مقالة',
    'cat.tech':           'تقنية وثروة',
    'cat.tech.desc':      '2 مقالة',
    
    /* ---- About Section ---- */
    'about.tag': '✦ عن ملتقى الأثرياء',
    'about.title1': 'لماذا',
    'about.title2': 'نختلف؟',
    'about.desc1': 'ملتقى الأثرياء ليس مجرد مدونة — إنه مجتمع نخبة من المستثمرين العرب الذين يؤمنون أن بناء الثروة الحقيقية يبدأ بالمعرفة الصحيحة.',
    'about.desc2': 'كل مقالة نشرها تمر بمراجعة دقيقة من خبراء ماليين معتمدين، ومبنية على بيانات حقيقية ودراسات موثقة. نؤمن بالشفافية والمسؤولية تجاه قرارات قرائنا المالية.',
    'about.feature1.title': 'محتوى موثّق',
    'about.feature1.desc': 'مراجعة من خبراء معتمدين',
    'about.feature2.title': 'تحديث أسبوعي',
    'about.feature2.desc': 'مقالات جديدة كل أسبوع',
    'about.feature3.title': 'مجاني تماماً',
    'about.feature3.desc': 'لا رسوم خفية أبداً',
    'about.feature4.title': 'مجتمع نشط',
    'about.feature4.desc': '+12,000 مستثمر',
    'about.cta': 'انضم إلى النخبة ←',
    'about.stat1.label': 'مقالة متخصصة',
    'about.stat2.label': 'مستثمر نشط',
    'about.stat3.label': 'خبير معتمد',
    'about.stat4.label': 'تقييم القراء',
    'about.award.title': 'أفضل مدونة مالية عربية 2025',
    'about.award.desc': 'جائزة المحتوى المالي العربي',
    
    /* ---- Newsletter ---- */
    'newsletter.title1':  'انضم إلى',
    'newsletter.title2':  'نخبة المستثمرين',
    'newsletter.desc':    'احصل على أفضل التحليلات المالية والفرص الاستثمارية مباشرة في بريدك كل أسبوع — مجاناً وبدون إزعاج',
    'newsletter.placeholder': 'بريدك الإلكتروني...',
    'newsletter.btn':     'اشترك الآن ✦',
    'newsletter.perk1':   'بريد أسبوعي فقط',
    'newsletter.perk2':   'لا إعلانات مزعجة',
    'newsletter.perk3':   'إلغاء في أي وقت',
    'newsletter.perk4':   'مجاني للأبد',
    
    /* ---- Footer ---- */
    'footer.brand.desc': 'منصة محتوى مالي متخصصة تهدف إلى تمكين المستثمر العربي من اتخاذ قرارات مالية واثقة ومدروسة.',
    'footer.col1.title': 'الاستثمار',
    'footer.col1.item1': 'الأسهم السعودية',
    'footer.col1.item2': 'سوق دبي المالي',
    'footer.col1.item3': 'الصناديق الاستثمارية',
    'footer.col1.item4': 'السندات والدخل الثابت',
    'footer.col1.item5': 'الاستثمار في الذهب',
    'footer.col2.title': 'ريادة الأعمال',
    'footer.col2.item1': 'بدء مشروع تجاري',
    'footer.col2.item2': 'تمويل الشركات الناشئة',
    'footer.col2.item3': 'التجارة الإلكترونية',
    'footer.col2.item4': 'الدخل السلبي',
    'footer.col2.item5': 'التسويق الرقمي',
    'footer.col3.title': 'الملتقى',
    'footer.col3.item1': 'عن ملتقى الأثرياء',
    'footer.col3.item2': 'النشرة البريدية',
    'footer.col3.item3': 'الكتّاب والخبراء',
    'footer.col3.item4': 'سياسة الخصوصية',
    'footer.col3.item5': 'تواصل معنا',
    'footer.copy': '© 2026 ملتقى الأثرياء. جميع الحقوق محفوظة. المحتوى للأغراض التعليمية فقط.',
    'footer.link.privacy': 'سياسة الخصوصية',
    'footer.link.terms': 'شروط الاستخدام',
    'footer.link.disclaimer': 'إخلاء المسؤولية',
    
    /* ---- Article page ---- */
    'article.back':       'الرئيسية',
    'article.readtime':   'دقيقة قراءة',
    'article.views':      'مشاهدة',
    'article.share':      'شارك المقالة',
    'article.share.twitter': 'تويتر / X',
    'article.share.whatsapp': 'واتساب',
    'article.share.telegram': 'تيليجرام',
    'article.share.copy': 'نسخ الرابط',
    'article.share.copied': 'تم النسخ!',
    'article.toc.title': '📑 جدول المحتويات',
    'article.newsletter.title': 'اشترك في النشرة',
    'article.newsletter.desc': 'رؤى مالية أسبوعية مجاناً',
    'article.related.title': 'مقالات ذات صلة',
    'article.notfound':   'المقالة غير موجودة',
    'article.notfound.msg': 'عذراً، لم نتمكن من العثور على المقالة المطلوبة.',
    'article.back.btn':   'العودة للرئيسية',
    'article.loading': 'جاري التحميل...',
    
    /* ---- Markets Page ---- */
    'markets.title': 'مركز الأسواق الحية',
    'markets.tag': '✦ بيانات فورية',
    'markets.desc': 'تحليل شامل ومتابعة لحظية لأسواق المال العالمية والمحلية باستخدام أحدث التقنيات.',
    'markets.overview.title': 'نظرة عامة على السوق',
    'markets.news.title': 'آخر الأخبار الاقتصادية',
    'markets.calendar.title': 'المفكرة الاقتصادية',
    'markets.heatmap.title': 'خريطة السوق الحرارية',
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",

    /* ---- Navbar ---- */
    'nav.home':           'Home',
    'nav.markets':        'Market News',
    'nav.strategies':     'Articles',
    'nav.entrepreneurship':'Entrepreneurship',
    'nav.about':          'About US',
    'nav.subscribe':      'Subscribe Free ✦',
    'nav.toggle.label':   'Open menu',
    'logo.text':          'The Wealth Forum',
    'logo.sub':           'Elite Financial Community',

    /* ---- Ticker ---- */
    'ticker.tadawul':     'Saudi Tadawul',
    'ticker.dfm':         'Dubai Market',
    'ticker.aramco':      'Aramco',
    'ticker.gold':        'Gold',
    'ticker.oil':         'Oil',
    'ticker.btc':         'Bitcoin',

    /* ---- Hero ---- */
    'hero.badge':         'The Elite Arabic Financial Platform',
    'hero.title.line1':   'Invest Smartly,',
    'hero.title.accent':  'Build Wealth',
    'hero.title.line2':   'with Confidence',
    'hero.desc':          'Deep financial analysis, proven investment strategies, and expert insights — everything the ambitious investor needs in one place.',
    'hero.btn.articles':  'Explore Articles',
    'hero.btn.newsletter':'Subscribe Free',
    'hero.stat.readers':  'Active Investors',
    'hero.stat.articles': 'Specialized Articles',
    'hero.stat.years':    'Reader Rating',
    'hero.card.title':    'Monthly Portfolio',
    'hero.card.sub':      'Investment Growth Performance',
    'hero.card.growth':   'Stocks',
    'hero.card.return':   'Real Estate',
    'hero.card.risk':     'Gold',

    /* ---- Articles section ---- */
    'section.articles.tag':   '✦ Latest Articles',
    'section.articles.title1': 'Exclusive',
    'section.articles.title2': 'Financial Insights',
    'section.articles.desc':  'Specialized content written by financial experts with decades of experience in Arabic and global markets',
    'articles.read.featured': 'Read Full Guide ←',
    'articles.loadmore':      'View More Articles ↓',
    'articles.min':           'min read',

    /* ---- Categories ---- */
    'section.categories.tag':   '✦ Content Categories',
    'section.categories.title1':'Explore',
    'section.categories.title2':'Wealth Domains',
    'section.categories.desc':  'Choose the domain that fits your financial goals and start your journey to excellence',
    'filter.all':         'All',
    'cat.stocks':         'Stocks',
    'cat.stocks.desc':    '2 articles',
    'cat.realestate':     'Real Estate',
    'cat.realestate.desc': '2 articles',
    'cat.gold':           'Gold & Metals',
    'cat.gold.desc':      '2 articles',
    'cat.crypto':         'Cryptocurrency',
    'cat.crypto.desc':    '2 articles',
    'cat.startup':        'Entrepreneurship',
    'cat.startup.desc':   '2 articles',
    'cat.passive':        'Passive Income',
    'cat.passive.desc':   '2 articles',
    'cat.personal':       'Personal Finance',
    'cat.personal.desc':  '2 articles',
    'cat.tech':           'Tech & Wealth',
    'cat.tech.desc':      '2 articles',

    /* ---- About Section ---- */
    'about.tag': '✦ About The Wealth Forum',
    'about.title1': 'Why',
    'about.title2': 'Different?',
    'about.desc1': 'The Wealth Forum is not just a blog — it is a community of elite Arabic investors who believe that building real wealth starts with the right knowledge.',
    'about.desc2': 'Every article we publish undergoes rigorous review by certified financial experts and is based on real data and documented studies. We believe in transparency and responsibility toward our readers\' financial decisions.',
    'about.feature1.title': 'Verified Content',
    'about.feature1.desc': 'Reviewed by certified experts',
    'about.feature2.title': 'Weekly Updates',
    'about.feature2.desc': 'New articles every week',
    'about.feature3.title': 'Completely Free',
    'about.feature3.desc': 'No hidden fees ever',
    'about.feature4.title': 'Active Community',
    'about.feature4.desc': '+12,000 investors',
    'about.cta': 'Join the Elite ←',
    'about.stat1.label': 'Specialized Articles',
    'about.stat2.label': 'Active Investors',
    'about.stat3.label': 'Certified Experts',
    'about.stat4.label': 'Readers Rating',
    'about.award.title': 'Best Arabic Financial Blog 2025',
    'about.award.desc': 'Arabic Financial Content Award',

    /* ---- Newsletter ---- */
    'newsletter.title1':  'Join the',
    'newsletter.title2':  'Elite Investors',
    'newsletter.desc':    'Get the best financial analysis and investment opportunities directly in your email every week — free and spam-free',
    'newsletter.placeholder': 'Your email...',
    'newsletter.btn':     'Subscribe Now ✦',
    'newsletter.perk1':   'Weekly email only',
    'newsletter.perk2':   'No annoying ads',
    'newsletter.perk3':   'Unsubscribe anytime',
    'newsletter.perk4':   'Free forever',

    /* ---- Footer ---- */
    'footer.brand.desc': 'A specialized financial content platform aimed at enabling Arabic investors to make confident and informed financial decisions.',
    'footer.col1.title': 'Investment',
    'footer.col1.item1': 'Saudi Stocks',
    'footer.col1.item2': 'Dubai Financial Market',
    'footer.col1.item3': 'Investment Funds',
    'footer.col1.item4': 'Bonds & Fixed Income',
    'footer.col1.item5': 'Gold Investment',
    'footer.col2.title': 'Entrepreneurship',
    'footer.col2.item1': 'Starting a Business',
    'footer.col2.item2': 'Startup Funding',
    'footer.col2.item3': 'E-commerce',
    'footer.col2.item4': 'Passive Income',
    'footer.col2.item5': 'Digital Marketing',
    'footer.col3.title': 'Forum',
    'footer.col3.item1': 'About The Forum',
    'footer.col3.item2': 'Newsletter',
    'footer.col3.item3': 'Writers & Experts',
    'footer.col3.item4': 'Privacy Policy',
    'footer.col3.item5': 'Contact Us',
    'footer.copy': '© 2026 The Wealth Forum. All rights reserved. Content for educational purposes only.',
    'footer.link.privacy': 'Privacy Policy',
    'footer.link.terms': 'Terms of Use',
    'footer.link.disclaimer': 'Disclaimer',

    /* ---- Article page ---- */
    'article.back':       'Home',
    'article.readtime':   'min read',
    'article.views':      'views',
    'article.share':      'Share Article',
    'article.share.twitter': 'Twitter / X',
    'article.share.whatsapp': 'WhatsApp',
    'article.share.telegram': 'Telegram',
    'article.share.copy': 'Copy Link',
    'article.share.copied': 'Copied!',
    'article.toc.title': '📑 Table of Contents',
    'article.newsletter.title': 'Join Newsletter',
    'article.newsletter.desc': 'Free weekly financial insights',
    'article.related.title': 'Related Articles',
    'article.notfound':   'Article Not Found',
    'article.notfound.msg': 'Sorry, we couldn\'t find the requested article.',
    'article.back.btn':   'Back to Home',
    'article.loading': 'Loading...',

    /* ---- Markets Page ---- */
    'markets.title': 'Live Market Hub',
    'markets.tag': '✦ Instant Data',
    'markets.desc': 'Comprehensive analysis and real-time tracking of global and local financial markets using state-of-the-art tech.',
    'markets.overview.title': 'Market Overview',
    'markets.news.title': 'Latest Financial News',
    'markets.calendar.title': 'Economic Calendar',
    'markets.heatmap.title': 'Market Heatmap',
  }
};

/* ============================================================
   المساعدة في التخزين — Storage Helpers
   ============================================================ */
const storage = {
  get: (key, fallback) => {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      console.warn("Storage access failed:", e);
      return fallback;
    }
  },
  set: (key, val) => {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      console.warn("Storage write failed:", e);
    }
  }
};

/* ============================================================
   applyLanguage — يطبّق الترجمة على كل العناصر
   ============================================================ */
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  console.log(`Applying language: ${lang}`);

  /* 1. اتجاه الصفحة ولغتها */
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;
  document.body.style.fontFamily = t.fontFamily;

  /* 2. ترجمة كل عنصر يحمل data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = t[key];
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* 3. تحديث زر تبديل اللغة */
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    const currentLabel = langBtn.querySelector('.lang-current');
    if (currentLabel) {
      currentLabel.textContent = lang === 'ar' ? 'EN' : 'عر';
    }
  }

  /* 4. حفظ اللغة في التخزين */
  storage.set('site_lang', lang);

  /* 5. إضافة/إزالة class على body لـ CSS overrides */
  document.body.classList.toggle('lang-en', lang === 'en');
  document.body.classList.toggle('lang-ar', lang === 'ar');

  /* 6. إرسال حدث لتنبيه الأكواد الأخرى بتغيير اللغة */
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/* ============================================================
   toggleLanguage — يبدّل بين AR و EN
   ============================================================ */
function toggleLanguage() {
  const current = storage.get('site_lang', 'ar');
  const next = current === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
}

/* ============================================================
   initLanguage — يُشغَّل عند تحميل الصفحة
   ============================================================ */
function initLanguage() {
  const saved = storage.get('site_lang', 'ar');
  applyLanguage(saved);
}

// تصدير الدوال للنطاق العام للتأكد من وصول HTML إليها فوراً
window.toggleLanguage = toggleLanguage;
window.initLanguage = initLanguage;
window.TRANSLATIONS = TRANSLATIONS;

/* ============================================================
   attachLangListener — ربط الزر برمجياً (كخيار إضافي)
   ============================================================ */
function attachLangListener() {
  const btn = document.getElementById('langToggleBtn');
  if (btn && !btn.getAttribute('data-listener-attached')) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
    btn.setAttribute('data-listener-attached', 'true');
  }
}

// التشغيل
attachLangListener();
document.addEventListener('DOMContentLoaded', attachLangListener);
// تشغيل فوري إذا كان المستند محملاً بالفعل
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  attachLangListener();
}
