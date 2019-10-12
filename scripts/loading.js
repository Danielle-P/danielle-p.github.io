document.body.classList.add('js-loading-image')
window.addEventListener('load', showPage)

function showPage() {
  document.body.classList.remove('js-loading-image')
}
