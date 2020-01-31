;(function() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var tabsList = getElements('tab')
  var slideDownPanels = getElements('slide-down-panel')

  tabsList.forEach(tab => {
    tab.addEventListener('click', function() {
      var tabId = this.id

      if (!this.classList.contains('selected')) {
        document.querySelector('.tab.selected').classList.remove('selected')

        slideDownPanels.forEach(panel => {
          if (panel.classList.contains(tabId)) {
            panel.classList.toggle('show')
          } else {
            panel.classList.remove('show')
          }
        })
        tab.classList.add('selected')
      }
    })
  })
})()
