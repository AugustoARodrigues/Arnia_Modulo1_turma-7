// Faça um programa que leia a idade e a altura de 5 pessoas. 
// Ao final, o programa deverá acusar a maior Idade e a média 
// das alturas.

const io = require('../io/io')

let idade
let altura
let maiorAltura
let maiorIdade

for(let i=0; i < 2; i++){
    io.write('Digite sua Idade: ')
    idade = io.readInt()

    io.write('Digite sua Altura: ')
    altura = io.readFloat()

    if( idade < maiorIdade && altura > maiorAltura){
        maiorAltura = altura
        maiorIdade = idade
    }
}
//io.write(`A maior idade é: ${maiorIdade} e a maior altura é: ${maiorAltura}`)
io.write(maiorAltura)
//io.write(maiorIdade)
