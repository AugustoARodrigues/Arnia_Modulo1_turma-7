// Faça um programa de computador que receba um número natural e 
// acuse se é primo ou não através de uma função chamada isPrimo. 
// Números primos são os naturais maiores que 1 e que possuem 
// somente 2 divisores.

const io = require('../io/io')
function isPrimo() {

    if (numero <= 1) {
        console.log (`Esse numero ${numero} não Primos`)
     return
    } 

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log (`Esse numero ${numero} não é Primo`)
         return
        }
    }
    console.log (`O número ${numero} é primo.`)
}
io.write('Digite um numero: ')
const numero = io.readInt()
isPrimo()