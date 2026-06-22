/* ===== DX i18n — Translations ===== */
const i18n = {
  en: {
    /* Nav */
    'nav.services':       'Our Services',
    'nav.business':       'For Business',
    'nav.help':           'Help',
    'nav.signin':         'Sign In',
    'nav.book':           'Book a Ride',
    'nav.dd.services':    'Our Services',
    'nav.dd.city':        '🛣 City-to-City Rides',
    'nav.dd.airport':     '✈️ Airport Transfers',
    'nav.dd.hourly':      '⏱ Hourly Hire',
    'nav.dd.chauffeur':   '🎩 Chauffeur Service',
    'nav.dd.corp':        'Corporate Solutions',
    'nav.dd.group':       '🚌 Official Group Vehicle',
    'nav.dd.travel':      '🏨 Travel Agencies',
    'nav.dd.partner':     'Strategic Partnerships',
    'nav.dd.aviation':    '✈️ Aviation',
    'nav.dd.cruise':      '🚢 Cruise',
    'nav.dd.finance':     '💳 Financial Services',
    'nav.dd.hotel':       '🏩 Hotel',
    /* Mobile drawer */
    'nav.m.services':     'Services',
    'nav.m.business':     'For Business',
    'nav.m.city':         '🛣 City-to-City Rides',
    'nav.m.airport':      '✈️ Airport Transfers',
    'nav.m.hourly':       '⏱ Hourly Hire',
    'nav.m.chauffeur':    '🎩 Chauffeur Service',
    'nav.m.group':        '🚌 Official Group Vehicle',
    'nav.m.travel':       '🏨 Travel Agencies',
    'nav.m.help':         '❓ Help Center',
    'nav.m.signin':       'Sign In',
    'nav.m.book':         'Book a Ride',
    /* Hero */
    'hero.badge':         'DX Premium Chauffeur',
    'hero.title':         'Your <em>Premium</em><br/>Chauffeur,<br/>Wherever You Are',
    'hero.subtitle':      'DX delivers professional chauffeurs, luxury vehicles, and seamless booking — airport transfers, city rides, and bespoke journeys.',
    /* Booking tabs */
    'tab.oneway':         'One Way',
    'tab.hourly':         'By the Hour',
    'tab.daytour':        'Day Tour',
    'tab.airport':        'Airport Transfer',
    /* One Way */
    'ow.from':            'From',
    'ow.to':              'To',
    'ow.date':            'Date',
    'ow.time':            'Time',
    'ow.ph.from':         'Departure city or address',
    'ow.ph.to':           'Destination city or address',
    'ow.note':            '✓ Free cancellation 24h before pickup',
    /* Hourly */
    'hr.location':        'Pickup Location',
    'hr.duration':        'Duration',
    'hr.date':            'Date',
    'hr.time':            'Start Time',
    'hr.ph.location':     'Starting address',
    'hr.note':            '✓ Minimum 2 hours · 15 min free waiting per stop',
    'hr.opt.placeholder': 'Select hours',
    'hr.opt.2':           '2 hours',
    'hr.opt.3':           '3 hours',
    'hr.opt.4':           '4 hours',
    'hr.opt.5':           '5 hours',
    'hr.opt.6':           '6 hours',
    'hr.opt.8':           '8 hours',
    'hr.opt.10':          '10 hours',
    'hr.opt.12':          '12 hours',
    'hr.opt.24':          '24 hours',
    /* Day Tour */
    'dt.location':        'Pickup Location',
    'dt.days':            'Number of Days',
    'dt.date':            'Start Date',
    'dt.time':            'Daily Start Time',
    'dt.ph.location':     'Starting address',
    'dt.note':            '✓ Up to 10h service per day · 15 min free waiting',
    /* Airport Transfer */
    'at.direction':       'Direction',
    'at.flight':          'Flight Number',
    'at.dest':            'Your Destination',
    'at.orig':            'Your Departure Point',
    'at.date':            'Date',
    'at.pax':             'Passengers',
    'at.lug':             'Luggage',
    'at.pickup':          '✈️ Pickup (from airport)',
    'at.dropoff':         '🚗 Drop-off (to airport)',
    'at.ph.flight':       'e.g. MU5735',
    'at.ph.dest':         'Hotel, address...',
    'at.note':            '✓ 60 min free waiting · Meet & Greet included',
    /* Buttons */
    'btn.search':         'Search Vehicles',
    'btn.select':         'Select →',
    /* Features */
    'feat.label':         'Why Choose Us',
    'feat.title':         'The Standard for Premium Ground Transport',
    'feat.subtitle':      'Every ride is crafted around your comfort, time, and peace of mind.',
    'feat1.title':        'Transparent Pricing',
    'feat1.desc':         'No surge pricing, no hidden fees. The price you see is the price you pay — guaranteed upfront before you book.',
    'feat2.title':        'Seamless Airport Experience',
    'feat2.desc':         'Flight tracking included. 60 minutes free waiting time. Professional meet & greet with name sign at arrivals.',
    'feat3.title':        'Flexible On Your Terms',
    'feat3.desc':         'Book one-way, hourly, multi-day or airport transfers. Free cancellation up to 24 hours before your ride.',
    /* Fleet */
    'fleet.label':        'Our Fleet',
    'fleet.title':        'Premium Vehicles for Every Journey',
    'fleet.subtitle':     'All vehicles are professionally maintained, fully insured, and driven by vetted chauffeurs.',
    'van.badge':          'Most Popular',
    'van.name':           'Business Van / SUV',
    'van.models':         'Mercedes V-Class · Toyota Alphard',
    'van.pax.key':        'Passengers',
    'van.trunk':          'Large Trunk',
    'van.price':          'From <strong>$95</strong>/ride',
    'coach.badge':        'Group Travel',
    'coach.name':         'Business Coach',
    'coach.models':       'Toyota Hiace · Mercedes Sprinter',
    'coach.pax.key':      'Passengers',
    'coach.lug':          'Luggage Hold',
    'coach.price':        'From <strong>$145</strong>/ride',
    'stat.wifi':          'WiFi',
    'stat.all':           'All',
    'stat.trips':         'Trip Types',
    'stat.conf':          'Conference seating',
    /* How it works */
    'hiw.label':          'How It Works',
    'hiw.title':          'Booked in Under 2 Minutes',
    'step1.title':        'Enter Your Trip',
    'step1.desc':         'Choose your trip type, locations, date and time with our smart booking form.',
    'step2.title':        'Select Your Vehicle',
    'step2.desc':         'Browse available vehicles with upfront pricing — no surprises.',
    'step3.title':        'Confirm & Pay',
    'step3.desc':         'Secure payment via credit card or PayPal. Pre-authorized until ride completion.',
    'step4.title':        'Enjoy Your Ride',
    'step4.desc':         'Your chauffeur details are sent 2 hours before. Track in real-time.',
    /* Footer */
    'footer.tagline':     'DX delivers premium chauffeur service for business and leisure travellers worldwide. Professional, discreet, always on time.',
    'footer.col.services':'Services',
    'footer.col.company': 'Company',
    'footer.col.support': 'Support',
    'footer.city':        'City-to-City Rides',
    'footer.airport':     'Airport Transfers',
    'footer.hourly':      'Hourly Hire',
    'footer.chauffeur':   'Chauffeur Service',
    'footer.about':       'About Us',
    'footer.business':    'For Business',
    'footer.driver':      'Become a Driver',
    'footer.careers':     'Careers',
    'footer.help':        'Help Center',
    'footer.contact':     'Contact Us',
    'footer.cancel':      'Cancellation Policy',
    'footer.pricing':     'Pricing & Fees',
    'footer.safety':      'Safety',
    'footer.copy':        '© 2026 DX Premium Chauffeur. All rights reserved.',
    'footer.privacy':     'Privacy Policy',
    'footer.terms':       'Terms of Service',
    'footer.cookies':     'Cookie Policy',
    /* Login modal */
    'login.title':        'Sign In',
    'login.email.label':  'Email Address',
    'login.pw.label':     'Password',
    'login.remember':     'Remember me',
    'login.forgot':       'Forgot password?',
    'login.submit':       'Sign In',
    'login.noaccount':    "Don't have an account?",
    'login.create':       'Create one →',
    'login.ph.email':     'you@example.com',
    'login.ph.pw':        '••••••••',
    /* Page title */
    'page.title':         'DX — Premium Chauffeur Service',
  },

  zh: {
    /* Nav */
    'nav.services':       '我们的服务',
    'nav.business':       '企业服务',
    'nav.help':           '帮助',
    'nav.signin':         '登录',
    'nav.book':           '立即预订',
    'nav.dd.services':    '我们的服务',
    'nav.dd.city':        '🛣 城际出行',
    'nav.dd.airport':     '✈️ 机场接送',
    'nav.dd.hourly':      '⏱ 按时包车',
    'nav.dd.chauffeur':   '🎩 礼宾专车',
    'nav.dd.corp':        '企业解决方案',
    'nav.dd.group':       '🚌 团队包车',
    'nav.dd.travel':      '🏨 旅行社合作',
    'nav.dd.partner':     '战略合作',
    'nav.dd.aviation':    '✈️ 航空业',
    'nav.dd.cruise':      '🚢 邮轮',
    'nav.dd.finance':     '💳 金融服务',
    'nav.dd.hotel':       '🏩 酒店',
    /* Mobile drawer */
    'nav.m.services':     '服务',
    'nav.m.business':     '企业服务',
    'nav.m.city':         '🛣 城际出行',
    'nav.m.airport':      '✈️ 机场接送',
    'nav.m.hourly':       '⏱ 按时包车',
    'nav.m.chauffeur':    '🎩 礼宾专车',
    'nav.m.group':        '🚌 团队包车',
    'nav.m.travel':       '🏨 旅行社合作',
    'nav.m.help':         '❓ 帮助中心',
    'nav.m.signin':       '登录',
    'nav.m.book':         '立即预订',
    /* Hero */
    'hero.badge':         'DX 高端礼宾专车',
    'hero.title':         '您的<em>专属礼宾</em><br/>司机，<br/>随时恭候',
    'hero.subtitle':      'DX 提供专业礼宾司机、豪华车辆及无缝预订体验——机场接送、城市出行及定制行程。',
    /* Booking tabs */
    'tab.oneway':         '单程',
    'tab.hourly':         '按小时包车',
    'tab.daytour':        '一日游',
    'tab.airport':        '机场接送',
    /* One Way */
    'ow.from':            '出发地',
    'ow.to':              '目的地',
    'ow.date':            '日期',
    'ow.time':            '时间',
    'ow.ph.from':         '出发城市或地址',
    'ow.ph.to':           '目的地城市或地址',
    'ow.note':            '✓ 出发前24小时免费取消',
    /* Hourly */
    'hr.location':        '上车地点',
    'hr.duration':        '时长',
    'hr.date':            '日期',
    'hr.time':            '出发时间',
    'hr.ph.location':     '起始地址',
    'hr.note':            '✓ 最少2小时 · 每站15分钟免费等待',
    'hr.opt.placeholder': '选择时长',
    'hr.opt.2':           '2小时',
    'hr.opt.3':           '3小时',
    'hr.opt.4':           '4小时',
    'hr.opt.5':           '5小时',
    'hr.opt.6':           '6小时',
    'hr.opt.8':           '8小时',
    'hr.opt.10':          '10小时',
    'hr.opt.12':          '12小时',
    'hr.opt.24':          '24小时',
    /* Day Tour */
    'dt.location':        '上车地点',
    'dt.days':            '天数',
    'dt.date':            '出发日期',
    'dt.time':            '每日出发时间',
    'dt.ph.location':     '起始地址',
    'dt.note':            '✓ 每天最多10小时 · 15分钟免费等待',
    /* Airport Transfer */
    'at.direction':       '接送方向',
    'at.flight':          '航班号',
    'at.dest':            '目的地',
    'at.orig':            '您的出发地',
    'at.date':            '日期',
    'at.pax':             '乘客人数',
    'at.lug':             '行李件数',
    'at.pickup':          '✈️ 从机场接客',
    'at.dropoff':         '🚗 送往机场',
    'at.ph.flight':       '如 MU5735',
    'at.ph.dest':         '酒店、地址...',
    'at.note':            '✓ 60分钟免费等待 · 含接机举牌服务',
    /* Buttons */
    'btn.search':         '搜索车辆',
    'btn.select':         '选择 →',
    /* Features */
    'feat.label':         '为何选择我们',
    'feat.title':         '高端地面交通的卓越标准',
    'feat.subtitle':      '每一次出行，都以您的舒适、时间和安心为核心精心打造。',
    'feat1.title':        '透明定价',
    'feat1.desc':         '无加价、无隐藏费用。预订前即可看到最终价格——价格所见即所得，绝无意外。',
    'feat2.title':        '无缝机场体验',
    'feat2.desc':         '全程航班追踪，60分钟免费等待，在到达大厅提供专业举牌接机服务。',
    'feat3.title':        '灵活满足您的需求',
    'feat3.desc':         '提供单程、按时、多日及机场接送等预订方式。出行前24小时可免费取消。',
    /* Fleet */
    'fleet.label':        '我们的车队',
    'fleet.title':        '每次出行的豪华之选',
    'fleet.subtitle':     '所有车辆均经专业维护、全额保险，并由严格筛选的专业司机驾驶。',
    'van.badge':          '最受欢迎',
    'van.name':           '商务MPV / SUV',
    'van.models':         '奔驰 V-Class · 丰田埃尔法',
    'van.pax.key':        '乘客',
    'van.trunk':          '大行李空间',
    'van.price':          '起价 <strong>$95</strong>/次',
    'coach.badge':        '团体出行',
    'coach.name':         '商务大巴',
    'coach.models':       '丰田海狮 · 奔驰 Sprinter',
    'coach.pax.key':      '乘客',
    'coach.lug':          '行李仓',
    'coach.price':        '起价 <strong>$145</strong>/次',
    'stat.wifi':          'WiFi',
    'stat.all':           '全部',
    'stat.trips':         '行程类型',
    'stat.conf':          '会议式座椅',
    /* How it works */
    'hiw.label':          '如何预订',
    'hiw.title':          '2分钟内完成预订',
    'step1.title':        '填写行程',
    'step1.desc':         '通过智能预订表单选择行程类型、地点、日期及时间。',
    'step2.title':        '选择车型',
    'step2.desc':         '浏览可用车辆及透明报价，没有任何意外费用。',
    'step3.title':        '确认并支付',
    'step3.desc':         '通过信用卡或 PayPal 安全支付，行程完成前仅作预授权扣款。',
    'step4.title':        '享受出行',
    'step4.desc':         '出发前2小时将收到司机详情，支持实时追踪。',
    /* Footer */
    'footer.tagline':     'DX 为全球商务及休闲旅客提供高端礼宾专车服务，专业低调、准时可靠。',
    'footer.col.services':'服务',
    'footer.col.company': '公司',
    'footer.col.support': '支持',
    'footer.city':        '城际出行',
    'footer.airport':     '机场接送',
    'footer.hourly':      '按时包车',
    'footer.chauffeur':   '礼宾专车',
    'footer.about':       '关于我们',
    'footer.business':    '企业服务',
    'footer.driver':      '成为司机',
    'footer.careers':     '加入我们',
    'footer.help':        '帮助中心',
    'footer.contact':     '联系我们',
    'footer.cancel':      '取消政策',
    'footer.pricing':     '价格与费用',
    'footer.safety':      '安全保障',
    'footer.copy':        '© 2026 DX 高端礼宾专车 版权所有',
    'footer.privacy':     '隐私政策',
    'footer.terms':       '服务条款',
    'footer.cookies':     'Cookie 政策',
    /* Login modal */
    'login.title':        '登录',
    'login.email.label':  '电子邮箱',
    'login.pw.label':     '密码',
    'login.remember':     '记住我',
    'login.forgot':       '忘记密码？',
    'login.submit':       '登录',
    'login.noaccount':    '还没有账户？',
    'login.create':       '立即注册 →',
    'login.ph.email':     '请输入邮箱地址',
    'login.ph.pw':        '••••••••',
    /* Page title */
    'page.title':         'DX — 高端礼宾专车服务',
  }
};

/* Apply all translations for a given language */
function applyLang(lang) {
  const t = i18n[lang] || i18n.en;

  /* html[lang] attribute */
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  /* Page title */
  if (t['page.title']) document.title = t['page.title'];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Inner HTML (content that contains child tags like <em>, <strong>) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Input / textarea placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Persist */
  localStorage.setItem('preferred_language', lang);
}

/* Auto-apply saved language on page load */
(function () {
  const saved = localStorage.getItem('preferred_language');
  if (saved === 'zh') applyLang('zh');
})();
