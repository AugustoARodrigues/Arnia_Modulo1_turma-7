// Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3 
// - ímpar, …. até n, sendo n fornecido por um usuário.

const io = require('../io/io')

io.write('Digire o numero: ')
let n = io.readInt()

let contador = 0

while( contador <= n){
    if( contador % 2 === 0){
        io.write(`Esse numero ${contador} é par`)
    } else {
        io.write(`Esse numero ${contador} é impar`)
    }
    contador ++
}
