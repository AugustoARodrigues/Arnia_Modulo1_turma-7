// Faça um programa de computador para calcular as raízes de uma 
// equação do segundo -grau na forma ax^2 + bx + c = 0 sendo o valores de 
// a, b e c fornecidos pelo usuário. Caso a equação não tenha raízes, o 
// usuário deverá ser informado desse fato.


const io = require('../io/io')

io.write('Digite o primeiro valor:')
const a = io.readInt()

io.write('Digite segundo valor:')
const b = io.readInt()

io.write('Digite o terceiro valor:')
const c = io.readInt()

const delta = (b * b) - (4 * a * c )

if(delta < 0){
    io.write(`Não existem raizes para equação`)
}else if (delta > 0){
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    io.write(`A primeira raiz é ${raiz1}, A segunda raiz é ${raiz2} `)
} else if(delta = 0){
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    io.write(`A raiz é ${raiz1}`)
}
