//for

for(let i = 1; i <= 10; i++){
    console.log(i)
}


//while
let i = 0
while(i > 10){
    console.log(i)
    i++
}


// for of
let name = 'Jhonatan'
let names = ['Jhonatan', 'Rafaelle']

for(let name of names){
    console.log(name)
}


//for in
let person = {
    name: 'Jhonatan',
    age: 21,
    weight: 61
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}