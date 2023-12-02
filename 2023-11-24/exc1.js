// Faça um programa de computador para escrever a raiz quadrada de um 
// número que o usuário fornecer

const io = require('../io/io')

io.write('Digite o Numero Desejado a baixo: ')
const numero = io.readInt()

resultado = numero**2

io.write(`O Numero Digitado é:${numero} e Sua raiz quadrada é: ${resultado}`)