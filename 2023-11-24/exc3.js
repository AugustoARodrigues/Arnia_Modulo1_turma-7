// Faça um programa de computador que receba do usuário dois números 
// e imprima o resto da divisão do primeiro pelo segundo

const io = require('../io/io')

io.write('Digite seu Primeiro Numero: ')
const numero1 = io.readInt()

io.write('Digite seu Segundo Numero: ')
const numero2 = io.readInt()

divisao = numero1 % numero2

io.write(`O resto da Divisao é: ${resultado}`)

