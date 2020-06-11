const expandableImages = document.querySelectorAll('.project-image .lazy')
const modal = document.getElementById('image-expand-modal')
const modalImage = document.querySelector('#image-expand-modal .modal-image')

if (expandableImages && modal) {
  expandableImages.forEach((expandableImage) => {
    expandableImage.addEventListener('click', function () {
      modalImage.src = expandableImage.src
      modal.classList.add('open')
    })
  })

  modal.addEventListener('click', function (event) {
    const isClickInsideImage = modalImage.contains(event.target)

    if (!isClickInsideImage) {
      modal.classList.remove('open')
    }
  })
}
