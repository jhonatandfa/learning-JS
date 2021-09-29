const button = document.querySelector('button')
const modal = document.querySelector('.modal-wrapper')

button.addEventListener('click', function(){
    modal.classList.remove('invisible')
})


document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        modal.classList.add('invisible')
    }
})