(function () {
  var STORAGE_KEY = 'site-lang';

  function applyLanguage(lang) {
    var isRu = lang === 'ru';
    document.querySelectorAll('.lang-ru').forEach(function (el) {
      el.style.display = isRu ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
      el.style.display = isRu ? 'none' : '';
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = isRu ? 'EN' : 'RU';
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'ru';
    applyLanguage(saved);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem(STORAGE_KEY) || 'ru';
        applyLanguage(current === 'ru' ? 'en' : 'ru');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
