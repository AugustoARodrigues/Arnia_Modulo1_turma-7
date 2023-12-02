// Faça um programa de computador para escrever o produto de dois 
// números que o usuário digitar

const io = require('../io/io')

io.write('Digite seu Primeiro Numero: ')
const numero1 = io.readInt()

io.write('Digite seu Segundo Numero: ')
const numero2 = io.readInt()

io.write(`O seu primeiro numero é: ${numero1} e o segundo numero é: ${numero2}`)