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

  const projectFilterButtons = getElements('project-filter-buttons')[0]

  if (projectFilterButtons) {
    const filterButtons = Array.from(projectFilterButtons.querySelectorAll('.filter-button'))
    const filterContents = getElements('tab-content')

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((filterButton) => filterButton.classList.remove('active'))
        button.classList.add('active')

        const filter = button.getAttribute('data-filter')
        filterContents.forEach((content) => {
          const isVisible = filter === 'all' || content.getAttribute('data-filter-content') === filter
          content.classList.toggle('show', isVisible)

          if (isVisible && filter !== 'all') {
            content.scrollIntoView({behavior: 'smooth', block: 'start'})
          }
        })
      })
    })

    const hash = decodeURIComponent(window.location.hash.slice(1))
    const hashTab = filterContents.find((content) => content.id === hash)

    if (hashTab) {
      const matchingButton = filterButtons.find((button) =>
        button.getAttribute('data-filter') === hashTab.getAttribute('data-filter-content'))

      if (matchingButton) {
        filterButtons.forEach((button) => button.classList.remove('active'))
        matchingButton.classList.add('active')
        filterContents.forEach((content) => {
          content.classList.toggle('show', content === hashTab)
        })

        window.setTimeout(() => {
          hashTab.scrollIntoView({behavior: 'smooth', block: 'start'})
        }, 0)
      }
    }
  }


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
