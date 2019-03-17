;(function() {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('nav-button')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('nav-icon')
  var iconMenuLabel = getElement('menu-label')
  var iconHideLabel = getElement('hide-label')
  var pageContent = getElement('page-content')

  if (navButton) {
    navButton.addEventListener('click', function() {
      if (navPanel.classList.contains('show')) {
        navPanel.classList.remove('show')
        menuIcon.classList.remove('open')
        iconMenuLabel.classList.add('show')
        iconHideLabel.classList.remove('show')
      } else {
        navPanel.classList.add('show')
        menuIcon.classList.add('open')
        iconMenuLabel.classList.remove('show')
        iconHideLabel.classList.add('show')
      }
    })
  } else {
  }

  if (pageContent) {
    pageContent.addEventListener('click', function() {
      if (navPanel.classList.contains('show')) {
        navPanel.classList.remove('show')
        menuIcon.classList.remove('open')
        iconMenuLabel.classList.add('show')
        iconHideLabel.classList.remove('show')
      } else {
      }
    })
  } else {
  }
})()
