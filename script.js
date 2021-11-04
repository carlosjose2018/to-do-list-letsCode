const modalBtnInputTitle = document.querySelector('.modal-btn-title')
const modalHidden = document.querySelector('.modal-list')
const modalOverlay = document.querySelector('.modal-overlay')
const modalClose = document.querySelectorAll('.modal-close')

const modalSave = document.querySelector('.modal-save')

const modalSaveCard = document.querySelector('.modal-save-card')
const modalTitle = document.querySelector('.input-modal-title')
const inputModalDescription = document.querySelector('.modal-description')

const main = document.querySelector('.main')
const modalClickArea = () => {
  const modalClick = () => {
    modalHidden.classList.toggle('hidden')
    modalOverlay.classList.toggle('hidden')
  }

  modalBtnInputTitle.addEventListener('click', modalClick)
  modalOverlay.addEventListener('click', modalClick)
  modalClose[0].addEventListener('click', modalClick)
  modalClose[1].addEventListener('click', modalClick)
}

modalClickArea()

const createCardElement = () => {
  const divCardBody = document.createElement('div')
  const btnCardClose = document.createElement('div')

  const divCardTitle = document.createElement('div')
  const pCardTitle = document.createElement('p')
  const pCardDescription = document.createElement('p')
  const h5Card = document.createElement('h5')

  const divCardArea = document.createElement('div')
  const divCardAreaInput = document.createElement('div')

  let textBtnClose = document.createTextNode('X')
  let textCardTitle = document.createTextNode('Título:')
  let textCardDescription = document.createTextNode('Descrição:')

  main.appendChild(divCardBody)
  divCardBody.classList.add('card-element')

  divCardBody.appendChild(btnCardClose)
  btnCardClose.appendChild(textBtnClose)
  btnCardClose.classList.add('card-btn-close')

  const cardClose = () => {
    divCardBody.classList.add('hidden')
  }
  btnCardClose.addEventListener('click', cardClose)
  const cardBodyClick = () => {
    divCardBody.classList.toggle('card-body-click')
  }
  divCardBody.addEventListener('dblclick', cardBodyClick)

  divCardBody.appendChild(divCardTitle)
  divCardTitle.classList.add('card-div-title')

  divCardTitle.appendChild(pCardTitle)
  pCardTitle.appendChild(textCardTitle)
  pCardTitle.classList.add('card-p-title')

  h5Card.appendChild(document.createTextNode(modalTitle.value))
  divCardTitle.appendChild(h5Card)
  h5Card.classList.add('card-h5-title')

  divCardBody.appendChild(divCardArea)
  divCardArea.classList.add('div-card-description')

  divCardArea.appendChild(pCardDescription)
  pCardDescription.appendChild(textCardDescription)
  pCardDescription.classList.add('card-p-description')

  divCardAreaInput.appendChild(
    document.createTextNode(inputModalDescription.value),
  )
  divCardArea.appendChild(divCardAreaInput)
  divCardAreaInput.classList.add('card-input-description')
}

modalSaveCard.addEventListener('click', createCardElement)
