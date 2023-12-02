// Faça um programa que receba o preço de dois produtos e imprima a 
// média desses preços

const io = require('../io/io')

io.write('Digite o primeiro preço:')
const numero1 = io.readInt()

io.write('Digite o segundo preço:')
const numero2 = io.readInt()

resultado = (numero1 - numero2)/2

io.write( `A media dos Dois numero é : ${resultado}`)
io.write(resultado)
