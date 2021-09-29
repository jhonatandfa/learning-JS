//substituir tipo de dado
let string = '123'
console.log(Number(string))

let number = 123
console.log(String(number))



//contar caracteres
let word = 'paralelepipedo'
console.log(word.length)

let num = 1980
console.log(String(num).length)



//manipular casas decimais e substituir caractere
let numquebrado = 4545132.15165646
console.log(numquebrado.toFixed(2).replace('.',','))



//transformar em maiusculas e minusculas
//transformando a primeira letra em maiuscula 
let palavra = 'jhonatan freitas'
console.log(palavra.charAt(0).toUpperCase() + palavra.substr(1))




/*transformar um texto que contem espaços em um novo array onde cada texto é uma posição no array, depois disso
transformar o array em texto e onde era espaço colocar _ */

let texto = "Eu quero viver o Amor!"
let myArray = texto.split(" ")
let phraseWithUnderscore = myArray.join("_") //join junta a frase inteira
console.log(myArray)
console.log(phraseWithUnderscore.toLocaleLowerCase())




//chamando pelo sobrenome da pessoa
let meuNome = "Jhonatan de Freitas Anotonio"
const chamarPeloSobrenome = (meuNome) => {
    let sobrenome = meuNome.split(" ")
    if(sobrenome[1].length > 2){
        return console.log(`Seja bem-vindo Sr(a) ${sobrenome[1]}!`)
    }else{
        return console.log(`Seja bem-vindo Sr(a) ${sobrenome[2]}!`)
    }
    
}
chamarPeloSobrenome(meuNome)


// verificar se no texto existe uma certa palavra se
textVerify = "Eu quero viver Amor!"
console.log(textVerify.includes("Amor"))



//criar array com construtor
let arrayWithConstructor  = new Array('a', 'b', 'c')
console.log(arrayWithConstructor)

//contar elementos do array
let contarArray = ['a', 'b', 'c']
console.log(contarArray.length)


//transformar uma cadeira de caracteres em um elemento de array
let transfToArray = 'manipulacao'
console.log(Array.from(transfToArray))



//manipulando array

let techs = ['html', 'css', 'js']

//adicionando um item ao fim
techs.push('nodejs')

//adicionado um item ao inicio
techs.unshift('sql')

//remover um item do final
techs.pop()

//remover um item do inicio
techs.shift()

//pegar somente alguns elementos com array
techs.slice(1, 2)

//remover 1 ou mais itens de qualquer posicao do array
techs.splice(1,1)

//encontrar a posicao de um elemento do array
let index = techs.indexOf('css')

console.log(techs)