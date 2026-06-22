/* ===== Mobile hamburger menu ===== */
function toggleMobileMenu() {
  const btn = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMobileMenu() {
  const btn = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  if (btn) btn.classList.remove('open');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
}
// Close drawer when clicking a link inside it
document.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ===== Navigation scroll effect ===== */
(function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.remove('nav--transparent');
    } else {
      nav.classList.add('nav--transparent');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ===== Booking tabs ===== */
function switchTab(id, btn) {
  document.querySelectorAll('.booking-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.booking-tab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ===== Stepper ===== */
const stepperConfig = {
  days: { min: 1, max: 30, val: 1 },
  pax:  { min: 1, max: 14, val: 2 },
  lug:  { min: 0, max: 20, val: 2 },
};
function stepperChange(key, delta) {
  const cfg = stepperConfig[key];
  if (!cfg) return;
  cfg.val = Math.min(cfg.max, Math.max(cfg.min, cfg.val + delta));
  const el = document.getElementById('val-' + key);
  if (el) el.textContent = cfg.val;
}

/* ===== Airport direction toggle ===== */
document.querySelectorAll('input[name="direction"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const label = document.getElementById('destLabel');
    if (!label) return;
    label.textContent = radio.value === 'pickup' ? 'Your Destination' : 'Your Departure Point';
  });
});

/* ===== Flight number mock validation ===== */
function validateFlight(input) {
  const val = input.value.toUpperCase();
  input.value = val;
  const info = document.getElementById('flightInfo');
  if (!info) return;
  const re = /^[A-Z]{2,3}\d{1,4}$/;
  if (re.test(val)) {
    // Mock auto-fill — replace with real API call later
    const airlines = { MU: 'China Eastern', CA: 'Air China', CZ: 'China Southern', AA: 'American Airlines', UA: 'United Airlines', BA: 'British Airways' };
    const code = val.match(/^[A-Z]+/)?.[0] || '';
    const airline = airlines[code] || 'Airline';
    info.textContent = `✓ ${airline} · Scheduled arrival 14:35 (mock data)`;
    info.style.display = 'block';
  } else {
    info.style.display = 'none';
  }
}

/* ===== Date & Time defaults ===== */
(function () {
  // Default time = now + 1h rounded to 5 min
  const now = new Date();
  now.setHours(now.getHours() + 1);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(Math.ceil(now.getMinutes() / 5) * 5 % 60).padStart(2, '0');
  document.querySelectorAll('input[type="time"]').forEach(el => {
    el.value = `${hh}:${mm}`;
  });

  // Date pickers via flatpickr (consistent English UI on all locales/devices)
  if (typeof flatpickr === 'function') {
    document.querySelectorAll('input[type="date"]').forEach(el => {
      flatpickr(el, {
        dateFormat: 'M j, Y',
        minDate: 'today',
        disableMobile: true,
      });
    });
  } else {
    // Fallback: just set min attribute
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(el => { el.min = today; });
  }
})();

/* ===== Modal ===== */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
});

/* ===== Language toggle ===== */
const langToggle = document.getElementById('langToggle');
const langLabel  = document.getElementById('langLabel');
let currentLang = localStorage.getItem('preferred_language') || 'en';
if (langLabel) langLabel.textContent = currentLang === 'zh-CN' ? '中文' : 'EN';
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh-CN' : 'en';
    localStorage.setItem('preferred_language', currentLang);
    if (langLabel) langLabel.textContent = currentLang === 'zh-CN' ? '中文' : 'EN';
    showToast(currentLang === 'zh-CN' ? '已切换至中文 (静态演示)' : 'Switched to English (static demo)');
  });
}

/* ===== Toast ===== */
let toastTimer;
function showToast(msg, duration = 3000) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), duration);
}

/* ===== Filter tabs (orders page) ===== */
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const parent = tab.closest('.filter-tabs');
    parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // TODO: wire to backend filter API
  });
});

/* ===== Account sidebar ===== */
document.querySelectorAll('.account-nav-item').forEach(item => {
  if (item.href && item.href === window.location.href) item.classList.add('active');
});
