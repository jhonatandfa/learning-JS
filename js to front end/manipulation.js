const element = document.querySelector('h1')

//InnerText
element.innerText = "Jhonatan"



//InnerHTML
element.innerHTML = "<h1>Jhonatan</h1>"
const input = document.querySelector('input')

//Value
input.value = "Jhonatan"

//setAttribute, getAttribute, removeAttribute
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')


header.removeAttribute('id')

console.log(headerID.getAttribute('id'))


//Alterando estilo com style
const estilo = document.querySelector('body')
estilo.style.backgroundColor = "#f9d3f8"


//Alterando estilo com classList
const classlist = document.querySelector('body')

classlist.classList.add('active')


//Pegando elemento pai
const getFather = document.querySelector('body')

console.log(getFather.parentNode)

//Pegando o primeiro elemento filho
const child = document.querySelector('body')

console.log(child.firstElementChild)

//Pegando o ultimo elemento filho
console.log(child.lastElementChild)


//Criando e adicionando elementos
const div = document.createElement('div')
div.innerHTML = "Olá Devs!"

const body = document.querySelector('body')

body.append(div)  //prepend adiciona antes 


//