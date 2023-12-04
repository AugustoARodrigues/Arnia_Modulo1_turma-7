// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
// calcular e escrever o valor correspondente em graus Celsius (baseado na 
// fórmula abaixo): c / 5 = (F - 32) / 9

const io = require('../io/io')

io.write('Digita a Temperatura em graus Cº: ')
let temperaturaC = io.readFloat()

//ex1
 const conta1 = (temperaturaC * 9) + 160
// const conta2 = conta1 / 5 
let temperaturaF = conta1 / 5 
io.write(`A temperatura em Fº é: ${temperaturaF}`)


//ex2
let temperaturaF2 = (temperaturaC * 1.8) + 32 
io.write(`A temperatura em Fº é: ${temperaturaF2}`)