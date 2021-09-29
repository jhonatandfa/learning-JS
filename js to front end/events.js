const input = document.querySelector('input')
input.onkeyup = function(){
    console.log('rodei')
}

//AddEventListener
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log('print')
}

const h2 = document.querySelector('h2')

h2.addEventListener('click', function(){
    console.log('print')
})



//Event

const input2 = document.querySelector('input')

input2.onkeydown = function(event){
    console.log(event.currentTarget.value)
    console.log(event.key)
}