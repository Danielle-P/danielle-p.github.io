;(function() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var buttonTogglePanels = getElements('toggle-panel')
  var slideDownPanels = getElements('slide-down-panel')

  buttonTogglePanels.forEach(buttonTogglePanel => {
    buttonTogglePanel.addEventListener('click', function() {
      var wasActive = this.classList.contains('active')
      var buttonId = this.id

      buttonTogglePanels.forEach(buttonTogglePanel => {
        buttonTogglePanel.classList.remove('active')
      })

      if (!wasActive) {
        this.classList.add('active')
      }

      slideDownPanels.forEach(panel => {
        if (panel.classList.contains(buttonId)) {
          panel.classList.toggle('show')
          if (window.innerHeight < 720) {
            panel.scrollIntoView({behavior: 'smooth'})
          }
        } else {
          panel.classList.remove('show')
        }
      })
    })
  })
})()
