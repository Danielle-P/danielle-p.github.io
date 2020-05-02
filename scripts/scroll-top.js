var scrollButton = document.getElementById('scroll-top-link')

if (scrollButton) {
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY

    if (scrollTop > 200) {
      scrollButton.classList.add('visible')
    } else {
      scrollButton.classList.remove('visible')
    }
  })

  scrollButton.addEventListener('click', scrollToTop)

  function scrollToTop() {
    window.scroll({
      top: 0,
    })
  }
}
