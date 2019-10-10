;(function() {
  var themeToggle = document.getElementById('theme-toggle')

  if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark')
    if (themeToggle) {
      themeToggle.checked = true
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', function(themeChange) {
      document.body.setAttribute('data-theme-animate', '')
      if (themeChange.target.checked) {
        document.body.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.body.setAttribute('data-theme', 'light')
        localStorage.removeItem('theme')
      }
    })
  }
})()
