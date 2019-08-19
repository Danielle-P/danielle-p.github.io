;(function() {
  function getElement(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var buttonTogglePanels = getElement('button-toggle-panel')
  var slideDownPanels = getElement('slide-down-panel')

  buttonTogglePanels.forEach(buttonTogglePanel => {
    buttonTogglePanel.addEventListener('click', function() {
      var buttonId = this.id

      slideDownPanels.forEach(panel => {
        if (panel.classList.contains(buttonId)) {
          panel.classList.toggle('show')
        } else {
          panel.classList.remove('show')
        }
      })
    })
  })
})()
