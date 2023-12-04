// Faça um programa para receber 10 números do usuário e 
// acusar qual deles é o menor número


const io = require('../io/io')

let numero 
let menor 

for(let i=0; i < 10; i++){
    io.write(`Digite o ${i +1}º Numero :`)
    numero = io.readInt()

    if(i === 0 || numero < menor){
        menor = numero
    }
}

io.write(`o Menor Numero é: ${menor}`)