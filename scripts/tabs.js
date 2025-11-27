;(function () {
  const getElements = (className) =>
    Array.from(document.getElementsByClassName(className))

  function switchToSelectedTab({selectedTabClassList, tabContentClassList}) {
    const tabContents = getElements('tab-content')

    if (!selectedTabClassList.contains('selected')) {
      document.querySelector('.tab.selected').classList.remove('selected')

      tabContents.forEach((panel) => {
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
  const nextTabLinks = getElements('next-project')

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
      const nextTabId = 'tab-link-' + event.currentTarget.id

      tabsList.forEach((tab) => {
        const nextTabContent = tab.querySelector('a')

        if (nextTabContent.classList.contains(nextTabId)) {
          const nextTabParent = nextTabContent.parentNode.classList
          const nextTabName =  nextTabContent.classList

          switchToSelectedTab({
            selectedTabClassList: nextTabParent,
            tabContentClassList: nextTabName,

          })
        }
      })
    })
  })
})()
