(function () {
  const themeToggle = document.querySelector('.theme-toggle-switch')
  const rootElement = document.documentElement

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function getSavedTheme() {
    return sessionStorage.getItem('theme');
  }

  function setTheme(theme, persist = true) {
    rootElement.setAttribute('data-theme', theme);
    if (themeToggle) themeToggle.checked = theme === 'dark';
    if (persist) sessionStorage.setItem('theme', theme);
  }

  function showThemeToggle() {
    if (themeToggle) themeToggle.style.display = 'inline-block'
  }

  function initTheme() {
    const savedTheme = getSavedTheme();
    let theme = savedTheme || getSystemTheme();
    setTheme(theme, !!savedTheme);
    showThemeToggle();
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      setTheme(this.checked ? 'dark' : 'light')
    })
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setTheme(e.matches ? 'dark' : 'light')
  })

  initTheme()
})()