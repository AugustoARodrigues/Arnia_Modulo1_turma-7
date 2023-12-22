// Escreva uma função chamada dobrarNumeros que recebe um array de 
// números e uma função de callback. A função dobrarNumeros deve aplicar 
// a função de callback a cada número do array e retornar um novo array 
// com os valores resultantes.
// ❖ Exemplo de uso:
// const dobrar = num => num * 2
// const numeros = [1, 2, 3, 4, 5]
// const resultado = dobrarNumeros(numeros, dobrar)
// console.log(resultado)   // Output: [2, 4, 6, 8, 10]


const io = require("../io/io")

const numeros = [1,2,3,4,5]

// ex1: 2º Forma de fazer => Mais facil

function dobrarNumeros(numeros,callback){
    const novoValor = numeros.map((item)=>{
        return  callback(item)
    })   
    return novoValor
}

const dobrar = (num) => num * 2

const resultado = dobrarNumeros(numeros, dobrar)
console.log(resultado)



console.log('-----------------------------')

// ex2: 2º Forma de fazer => Mais dificil

function dobrarNumeros2(element){
    const novoValor = element.map((item)=>{
        return item * 2
    })   
    return novoValor
}

const resultado2 = dobrarNumeros2(numeros)
console.log(resultado2)