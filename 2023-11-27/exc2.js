// Faça um programa de computador que receba do usuário 2 números, 
// calcule o produto entre eles e acuse se o produto é maior que 10

const io = require('../io/io')

io.write('Digite seu primeiro numero:')
const numero1 = io.readInt()


io.write('Digite seu segundo numero:')
const numero2 = io.readInt()

const resultado = numero1 * numero2

if( resultado >=10 ){  // se o primeiro for maior que o segundo apareça
    io.write(`O resultado do Produto dos dois numeros é ${resultado} maior que 10`) // se o primeiro for maior apareça essa mensagem 
} else{
    io.write(`O resultado do Produto dos dois numeros é ${resultado} menor que 10`) // se o segundo for maior apareça essa mensagem
}

