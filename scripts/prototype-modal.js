const prototypeTriggers = document.querySelectorAll('.prototype-window-bar')
const prototypeModal = document.getElementById('prototype-expand-modal')
const prototypeModalFrame = prototypeModal?.querySelector('iframe')
const prototypeModalClose = prototypeModal?.querySelector('.modal-close')

function closePrototypeModal() {
  prototypeModal?.classList.remove('open')
  if (prototypeModalFrame) prototypeModalFrame.src = ''
}

if (prototypeTriggers.length && prototypeModal && prototypeModalFrame) {
  prototypeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const prototypeFrame = trigger.closest('.prototype-window')?.querySelector('iframe')
      if (!prototypeFrame) return

      prototypeModalFrame.src = prototypeFrame.src
      prototypeModal.classList.add('open')
      prototypeModalClose?.focus()
    })
  })

  prototypeModalClose?.addEventListener('click', closePrototypeModal)

  prototypeModal.addEventListener('click', (event) => {
    if (event.target === prototypeModal) closePrototypeModal()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && prototypeModal.classList.contains('open')) {
      closePrototypeModal()
    }
  })
}