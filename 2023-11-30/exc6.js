// Faça um programa para receber 10 números do usuário e 
// acusar qual deles é o maior número

const io = require('../io/io')

let numero
let maior

for(let i=0; i<10; i++){
    io.write(`Digite ${i +1}º NUmero:`)
    numero = io.readInt()

    if(i === 0 || numero > maior){
        maior = numero
    }
}
io.write(maior)