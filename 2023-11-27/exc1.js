// Faça um programa de computador que receba do usuário 2 números e 
// acuse qual é o maior

const io = require('../io/io')

io.write('Digite seu primeiro numero:')
const numero1 = io.readInt()


io.write('Digite seu segundo numero:')
const numero2 = io.readInt()

if(numero1 > numero2 ){  // se o primeiro for maior que o segundo apareça
    io.write(`O Primeiro numero ${numero1} é maior que ${numero2}`) // se o primeiro for maior apareça essa mensagem 
} else{
    io.write(`O Segundo numero ${numero2} é maior que ${numero1}`) // se o segundo for maior apareça essa mensagem
}

