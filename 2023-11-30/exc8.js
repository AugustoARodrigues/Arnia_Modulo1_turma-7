// Faça um programa que leia a idade e a altura de 5 pessoas. 
// Ao final, o programa deverá acusar a maior Idade e a média 
// das alturas.

const io = require('../io/io')

let idade
let altura
let maiorAltura = 0
let maiorIdade = 0
let somaAltura = 0

for(let i=0; i < 2; i++){
    io.write('Digite sua Idade: ')
    idade = io.readInt()

    io.write('Digite sua Altura: ')
    altura = io.readFloat()
    somaAltura = somaAltura + idade

    if( idade > maiorIdade){
        maiorIdade = idade
    } 

    if(altura > maiorAltura){
        maiorAltura = altura
    }
}
  const mediaAltura = somaAltura / 2

io.write(`A maior idade é: ${maiorIdade} e a maior altura é: ${maiorAltura} e a media das Altura é: ${mediaAltura}`)
