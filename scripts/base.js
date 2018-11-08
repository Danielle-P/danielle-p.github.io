;(function() {
  function $(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = $('nav-button')
  var navPanel = $('nav-panel')
  var menuIcon = $('nav-icon')

  navButton.addEventListener('click', function() {
    if (navPanel.classList.contains('active')) {
      navPanel.classList.remove('active')
      menuIcon.classList.remove('open')
    } else {
      navPanel.classList.add('active')
      menuIcon.classList.add('open')
    }
  })
})()
