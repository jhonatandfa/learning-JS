const validaNota = (nota) =>{
    if(nota >= 90){ 
        newNota = console.log("A")
    }else if(nota >= 80){
        newNota = console.log("B")
    }else if(nota >= 70){
        newNota = console.log("C")
    }else if(nota >= 60){
        newNota = console.log("D")
    }else{
        newNota = console.log("F")
    }
    return console.log(newNota)
}


validaNota(70)