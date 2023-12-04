// Faça um programa para imprimir os números pares menores 
// que um número fornecido pelo usuário.

const io = require('../io/io')

io.write('Escreva numero de vezes: ')
const n = io.readInt()

// ex1 SÒ PAR
for(let i=0; i < n; i= i+2 ){
    io.write(i)
}
io.write('-----------------------------------')

//ex2   só IMPAR
for(let i=1; i < n; i= i+2 ){
    io.write(i)
}
