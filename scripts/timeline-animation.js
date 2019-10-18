if (document.querySelector('#projects .project-details.meals-up')) {
  var journeyTopPosition = document
    .querySelector('.journey')
    .getBoundingClientRect().top
  var halfViewportHeight = window.innerHeight * 0.75
  var markers = document.getElementsByClassName('marker')

  window.addEventListener('scroll', function triggerAnimation(e) {
    var journeyInView =
      window.pageYOffset >= journeyTopPosition - halfViewportHeight

    if (journeyInView) {
      Array.from(markers).forEach(marker => {
        marker.classList.add('visible')
      })
      window.removeEventListener('scroll', triggerAnimation)
    }
  })
}
