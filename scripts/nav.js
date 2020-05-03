;(function () {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('btn-menu')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('icon-container')
  var iconMenuLabel = document.querySelector('.btn-menu .label')
  var iconHideLabel = document.querySelector('.btn-menu .hide')
  var pageContent = getElement('page-content')

  if (navButton) {
    navButton.addEventListener('click', function () {
      if (navPanel.classList.contains('show')) {
        navPanel.classList.remove('show')
        menuIcon.classList.remove('open')
        iconMenuLabel.classList.add('visible')
        iconHideLabel.classList.remove('visible')
      } else {
        navPanel.classList.add('show')
        menuIcon.classList.add('open')
        iconMenuLabel.classList.remove('visible')
        iconHideLabel.classList.add('visible')
      }
    })

    if (pageContent) {
      pageContent.addEventListener('click', function () {
        if (navPanel.classList.contains('show')) {
          navPanel.classList.remove('show')
          menuIcon.classList.remove('open')
          iconMenuLabel.classList.add('visible')
          iconHideLabel.classList.remove('visible')
        }
      })
    }
  } else {
  }
})()
