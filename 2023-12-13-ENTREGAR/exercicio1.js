// Escreva uma função chamada somarValores que recebe um 
// array de números e retorna a soma de todos os valores do array 
// utilizando a função reduce.

// ❖ Exemplo de uso:
// const numeros = [1, 2, 3, 4, 5]
// const resultado = somarValores(numeros)
// console.log(resultado) // Output: 15

const io= require('../io/io')

// ex 1: 

function somarValores(){
    const array =[]
    for(let i=0; i<5; i++){
        console.log(`Digite ${ i +1}º Numero:`)
        const numeros = io.readInt()
        array.push(numeros)
    }
    const soma = array.reduce((acc, numero)=> acc + numero, 0)
    return soma
}
const resultado = somarValores()
console.log(`A soma de todos os Numeros Digitado é: ${resultado}`)

console.log('-----------------------------------------------------')
  
// ex 2: Forma simples

function somarValores2(){
    const soma = numeros.reduce((acc, numero)=> acc + numero, 0)
    return soma
}
const numeros = [10,20,30,40,50]
const resultado2 = somarValores2(numeros)
console.log(`A soma de todos os Numeros Digitado é: ${resultado2}`)