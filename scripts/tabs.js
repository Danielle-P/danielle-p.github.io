;(function () {
  const getElements = (className) =>
    Array.from(document.getElementsByClassName(className))

  function switchToSelectedTab({selectedTabClassList, tabContentClassList}) {
    const slideDownPanels = getElements('slide-down-panel')

    if (!selectedTabClassList.contains('selected')) {
      document.querySelector('.tab.selected').classList.remove('selected')

      slideDownPanels.forEach((panel) => {
        if (panel.classList.contains(tabContentClassList)) {
          panel.classList.toggle('show')
        } else {
          panel.classList.remove('show')
        }
      })
      selectedTabClassList.add('selected')
    }
  }

  const tabsList = getElements('tab')
  const nextTabLinks = getElements('next-tab')

  tabsList.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      const selectedTab = event.currentTarget

      switchToSelectedTab({
        selectedTabClassList: selectedTab.classList,
        tabContentClassList: selectedTab.querySelector('a').classList,
      })
    })
  })

  nextTabLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const nextTabId = event.currentTarget.id

      tabsList.forEach((tab) => {
        const nextTabContent = tab.querySelector('a')

        if (nextTabContent.classList.contains(nextTabId)) {
          const nextTabName = nextTabContent.parentNode.classList

          switchToSelectedTab({
            selectedTabClassList: nextTabName,
            tabContentClassList: nextTabContent.classList,
          })
        }
      })
    })
  })
})()
