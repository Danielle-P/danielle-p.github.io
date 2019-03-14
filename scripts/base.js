;(function() {
  function $(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = $('nav-button')
  var navPanel = $('nav-panel')
  var menuIcon = $('nav-icon')
  var iconMenuLabel = $('menu-label')
  var iconHideLabel = $('hide-label')
  var pageContent = $('page-content')

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
