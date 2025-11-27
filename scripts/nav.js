;(function () {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('btn-menu')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('icon-container')

  if (navButton) {
    navButton.addEventListener('click', function () {
      if (navButton.classList.contains('active')) {
        menuIcon.classList.remove('open')
        navPanel.classList.remove('show')
        navButton.classList.remove('active')
      } else {
        menuIcon.classList.add('open')
        navPanel.classList.add('show')
        navButton.classList.add('active')
      }
    })

  }
})()
