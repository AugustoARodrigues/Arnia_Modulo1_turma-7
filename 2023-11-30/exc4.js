// Faça um programa para escrever de 1 a n, sendo n fornecido 
// pelo usuário

const io = require('../io/io')

io.write('Escreva numero de vezes: ')
const n = io.readInt()

for(let i=1; i<=n; i++){
    io.write(i)
}