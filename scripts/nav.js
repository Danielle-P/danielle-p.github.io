;(function () {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('btn-menu')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('icon-container')

  if (navButton) {
    navButton.addEventListener('click', function () {
      if (navPanel.classList.contains('hide')) {
        navPanel.classList.remove('hide')
        menuIcon.classList.add('open')
      } else {
        navPanel.classList.add('hide')
        menuIcon.classList.remove('open')
      }
    })

  }
})()
