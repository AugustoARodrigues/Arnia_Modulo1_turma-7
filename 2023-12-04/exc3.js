// Escreva uma função que recebe, por parâmetro, dois valores X e Z e 
// calcula e retorna Xz
//  (X elevado à Z). (sem utilizar funções ou operadores 
// de potência prontos)

const io = require('../io/io')


function calcular(x, z){
    for(let i=0; i<z; i++){
        const calculo = x **z
        return calculo
    }
}

io.write(`Digite o 1º numero:`)
let x = io.readInt()

io.write('Digite o 2º numero:')
let z = io.readInt()

const resultado = calcular(x,z)
io.write(`O numero ${x} elevado a ${z} é igual a: ${resultado}`)
