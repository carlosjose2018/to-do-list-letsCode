# Olá !

## \_Me Chamo José Carlos ,sou aluno da Lets'Code logo em baixo segue meu projeto sinta a vontade para usar e principalmente dá feedback!

[![N|Solid](https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Logos/logoLcPng.webp)]()

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Nesse projeto utilizei algumas tecnologias.

- HTML5
- CSS3
- BOOTSTRAP 5
- ✨JAVASCRIPT ES6

## BIBLIOTECAS UTILIZADAS

A biblioteca é de grande utilidade para um desenvolvedor, através dela pode ver como um codigo pode ser usado .

- [HTML 5](https://www.w3schools.com/tags/tag_doctype.asp)
- [CSS3](https://www.w3schools.com/css/)
- [BOOTSTRAP 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [JAVASCRIPT ES6](https://www.w3schools.com/js/)

## Desenvolvimento ✨To-Do-List-LetsCode ✨

Projeto em JavaScript utilizando os seguintes conceitos:

1.Seletores
2.Manipulação de DOM
3.Escuta de eventos
4.Manipulação de classes de CSS

1)Seletores:✨
//document.querySelector('.modal-btn-title') com ajuda do querySelector("") poderemos pegar a div ou classe que desejamos trabalhar.

```sh
const modalBtnInputTitle = document.querySelector('.modal-btn-title')
const modalHidden = document.querySelector('.modal-list')
const modalOverlay = document.querySelector('.modal-overlay')
const modalClose = document.querySelectorAll('.modal-close')

const modalSave = document.querySelector('.modal-save')

const modalSaveCard = document.querySelector('.modal-save-card')
const modalTitle = document.querySelector('.input-modal-title')
const inputModalDescription = document.querySelector('.modal-description')
```

2)Manipulação de DOM:✨
//Nessa abar criamos div,parágrafos e h1 com o createElement , manipulamos eventos como addEventList e criamos classe com classList.
document.createElement('div').
btnCardClose.addEventListener('click', cardClose)

```sh
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
```

3)Esculta de Eventos:✨
//addEventListener captura um click no input a partir desse envento varias interações ocorrem no codigo como criação de classe ou mesmo criação de novos elementos dentro do html ex:div e parágrafos.

```sh
modalSaveCard.addEventListener('click', createCardElement)
```

4)Manipulação de classes de CSS:✨
// modalHidden.classList.toggle('hidden') Com ajuda do toggle verificamos que existe uma classe hidden caso não exista a mesma será criada.

```sh
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
```

## License

MIT

**Free Software, Hell Yeah!**
