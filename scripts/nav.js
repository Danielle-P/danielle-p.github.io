;(function () {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('btn-menu')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('icon-container')
  var mainContent = document.getElementsByTagName('main')[0]

  if (navButton) {
    navButton.addEventListener('click', function () {
      if (navPanel.classList.contains('hide')) {
        navPanel.classList.remove('hide')
        menuIcon.classList.remove('open')
      } else {
        navPanel.classList.add('hide')
        menuIcon.classList.add('open')
      }
    })

    if (mainContent) {
      mainContent.addEventListener('click', function () {
        if (navPanel.classList.contains('hide')) {
          navPanel.classList.remove('hide')
          menuIcon.classList.remove('open')
        }
      })
    }
  }
})()
