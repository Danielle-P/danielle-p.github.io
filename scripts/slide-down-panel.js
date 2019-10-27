;(function() {
  function getElement(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var buttonTogglePanels = getElement('button-toggle-panel')
  var slideDownPanels = getElement('slide-down-panel')

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
