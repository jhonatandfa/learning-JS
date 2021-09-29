//if and else
let temperature = 36.5

if(temperature >= 37){
    console.log("Febre")
}else{
    console.log("Saudavel")
}


//switch
let expression = 'a'
switch(expression) {
    case "a":
        console.log("a")
        break
    case "b":
        console.log("b") 
        break
    default:
        console.log("default")
        break
}

//calculadora com switch

function calculadora(number1, operador, number2) {
    let result

    switch (operador) {
        case '+':
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*" :
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default :
            console.log("Invalid operador")
            break
    }
}
console.log(calculadora(5, '+', 5))


//trow

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}

//try and catch

try{
    sayMyName()
}catch(e){
    console.log(e)
}

console.log('teste')