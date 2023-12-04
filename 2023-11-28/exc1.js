// Faça um programa que recebe do usuário um número inteiro n e uma 
// frase e escreva esta frase n vezes


const io = require('../io/io')

io.write('Digite um numero:')
let numero = io.readInt()

let vezes= 0 

io.write('Digite uma Frase:')
let frase = io.read()

while(vezes < numero ){
    io.write(frase)
    vezes ++
    io.write(vezes)
}

