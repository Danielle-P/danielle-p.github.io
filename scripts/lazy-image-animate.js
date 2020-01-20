document.addEventListener('DOMContentLoaded', function() {
  var lazyImageSections = Array.from(
    document.querySelectorAll('.image-section, .image-intersect')
  )

  if ('IntersectionObserver' in window) {
    var lazyImageObserver = new IntersectionObserver(
      function(imageSections) {
        imageSections.forEach(function(imageSection) {
          if (imageSection.isIntersecting) {
            Array.from(
              imageSection.target.querySelectorAll('img.lazy')
            ).forEach(function(lazyImage) {
              lazyImage.classList.remove('lazy')
              lazyImageObserver.unobserve(lazyImage)
            })
          }
        })
      },
      {
        threshold: 0.6,
      }
    )
    lazyImageSections.forEach(function(lazyImageSection) {
      lazyImageObserver.observe(lazyImageSection)
    })
  } else {
    Array.from(document.querySelectorAll('img.lazy')).forEach(function(
      lazyImage
    ) {
      lazyImage.classList.remove('lazy')
    })
  }
})
