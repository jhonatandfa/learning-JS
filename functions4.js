//function constructor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const jhonatan = new Person('Jhonatan');
const rafaelle = new Person('Rafaelle');

console.log(jhonatan.walk())
console.log(rafaelle)