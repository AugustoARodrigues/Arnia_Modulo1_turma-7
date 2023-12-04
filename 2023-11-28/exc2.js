// Faça um programa que receba do usuário 20 números e imprima a 
// média aritmética desses números

const io = require('../io/io')

let digitado = 0
let contador = 0

while(contador < 10 ){
    io.write('Digite os numeros:')
    digitado += io.readInt()
    // ou 
    // digitado = digitado + io.readInt()
    contador ++
}

const resultado = digitado / 20 

io.write( `A media desses numeros é: ${resultado}`)


