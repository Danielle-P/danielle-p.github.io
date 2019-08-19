;(function() {
  function getElementId(id) {
    return document.getElementById(id)
  }

  var themeToggle = getElementId('theme-toggle')

  if (themeToggle) {
    this.addEventListener('change', function(themeChange) {
      themeChange.target.checked
        ? document.body.setAttribute('data-theme', 'dark')
        : document.body.setAttribute('data-theme', 'light')
    })
  }
})()
