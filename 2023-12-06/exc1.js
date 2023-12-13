// Faça um programa que receba do usuário um array de números. 
// Implemente uma função que recebe o array de números e retorna um 
// outro array que contém somente os números pares.
const io = require('../io/io')

const pares = []
const numeros = []

const obterPares = () => {
    for(let i=0; i<5; i++){
        io.write(`Digite o ${i + 1}º numero: `)
        let escolhaNumeros = io.readInt()
        numeros.push(escolhaNumeros)

        if(escolhaNumeros % 2 === 0){
            pares.push(escolhaNumeros)
        }
    }
}
obterPares()
console.log('todos os numero: ' + numeros)
console.log('Só os pares: ' + pares)
