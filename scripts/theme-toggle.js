;(function() {
  var themeToggle = document.getElementById('theme-toggle')

  if (localStorage.getItem('theme') === 'light') {
    document.body.setAttribute('data-theme', 'light')
    if (themeToggle) {
      themeToggle.checked = true
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', function(themeChange) {
      document.body.setAttribute('data-theme-animate', '')
      if (themeChange.target.checked) {
        document.body.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      } else {
        document.body.setAttribute('data-theme', 'dark')
        localStorage.removeItem('theme')
      }
    })
  }
})()
