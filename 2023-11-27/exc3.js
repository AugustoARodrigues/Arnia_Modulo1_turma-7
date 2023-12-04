// Faça um programa de computador que receba do usuário três tamanhos 
// de segmentos de reta e acuse se estes segmentos formam ou não os 
// lados de um triângulo. Para formar um triângulo o maior segmento deve 
// ser menor que a soma dos outros dois. Suponha que o maior lado sempre 
// será digitado primeiro.

const io = require('../io/io')

io.write('Digite o primeiro lado de um Triangulo:')
const lado1 = io.readInt()

io.write('Digite segundo lado de um Triangulo:')
const lado2 = io.readInt()

io.write('Digite o terceiro lado de um Triangulo:')
const lado3 = io.readInt()

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2 ){
    io.write(`Os numero ${lado1}, ${lado2}, ${lado3} forma um Triangulo`)
}else {
    io.write(`Os numero ${lado1}, ${lado2}, ${lado3} não forma um Triangulo`)
}






