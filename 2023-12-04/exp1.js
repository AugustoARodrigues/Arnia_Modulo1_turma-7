const io = require('../io/io')

// faça um programa que receba um numero. Use uma função para calcular 

function calcularDobro(teste){
    const resultado = teste * 2 
    io.write(resultado)
}
io.write('--- Ca')
const numero = io.readInt()
calcularDobro(numero)