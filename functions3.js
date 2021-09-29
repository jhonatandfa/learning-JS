//function hoisting


sayMyName = function(){
    console.log("Jhonatan")
}


//arrow function
const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2('teste')


//callback function
function sayMyName3(name) {
    console.log("antes de entrar no callback")

    name()

    console.log("depois de entrar no callback")
}

sayMyName3(
    () => {
        console.log("estou em uma callback")
    }
)