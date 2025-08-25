(function () {
  const themeToggle = document.querySelector('.theme-toggle-switch')
  const rootElement = document.documentElement

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme)
    if (themeToggle) themeToggle.checked = theme === 'dark'
  }

  function showThemeToggle() {
    if (themeToggle) themeToggle.style.display = 'inline-block'
  }

  function initTheme() {
    let theme = getSystemTheme()
    setTheme(theme)
    showThemeToggle()
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