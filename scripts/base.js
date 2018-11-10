;(function() {
  function $(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = $('nav-button')
  var navPanel = $('nav-panel')
  var menuIcon = $('nav-icon')

  if (navButton) {
    navButton.addEventListener('click', function() {
      if (navPanel.classList.contains('show')) {
        navPanel.classList.remove('show')
        menuIcon.classList.remove('open')
      } else {
        navPanel.classList.add('show')
        menuIcon.classList.add('open')
      }
    })
  } else {
  }
})()
