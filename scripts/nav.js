;(function() {
  function getElement(className) {
    return document.getElementsByClassName(className)[0]
  }

  var navButton = getElement('nav-button')
  var navPanel = getElement('nav-panel')
  var menuIcon = getElement('nav-icon')
  var iconMenuLabel = getElement('button-label')
  var iconHideLabel = getElement('hide-label')
  var pageContent = getElement('page-content')
  var portfolioLinks = getElement('portfolio-links')

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

  if (portfolioLinks) {
    var portfolioBackButton = document.querySelector(
      '.portfolio-links button.back'
    )
    var portfolioToggleLinks = getElement('toggle-display-links')

    portfolioBackButton.addEventListener('mouseover', function() {
      portfolioToggleLinks.classList.add('show')
    })

    portfolioLinks.addEventListener('mouseleave', function() {
      portfolioToggleLinks.classList.remove('show')
    })
  }
})()
