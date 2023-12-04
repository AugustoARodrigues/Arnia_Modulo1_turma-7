// Faça um programa para imprimir os números pares menores que 100. 
// Não use comando de decisão

const io = require('../io/io')

let numero = 0
//let resultado = 0

while( numero < 100){
    numero += 2
    io.write(`O número ${numero} é par`)
    io.write(`-----------------------------------`)

}