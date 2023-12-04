// Faça um programa para escrever seu nome n vezes, sendo n
//fornecido pelo usuário

const io = require('../io/io')

io.write('Digite quantas vezes deseja repetir: ')
let vezes =  io.readInt()

for(let i=0; i < vezes; i ++){

    io.write(`${i +1}º -Augusto `)
}