// Faça um programa de computador para contar e imprimir a 
// quantidade de divisores que um número natural possui. Este número 
// deverá ser fornecido pelo usuário.

const io = require('../io/io')

function divisores(){
    console.log(`O número ${num} possui ${calcular(num)} divisores.`)

    function calcular(){
        let listaDivisores = 0
        for(let i=0; i<=num; i++){
            if (num % i === 0){
                listaDivisores++
            } 
        }
        return listaDivisores
    }
}
io.write('Digite um numero:')
const num = io.readInt()
divisores(num)