// Faça um programa de computador que leia números reais maiores que 
// zero. Quando for digitado o número zero, o programa deverá apresentar 
// os números que foram entrados e a média destes (use while para 
// receber os números)

const io = require('../io/io')

const array=[]
let aprecentar = true
let soma = 0

while(aprecentar){
    io.write('Digite um numero: ')
    const num = io.readInt()

    if(num > 0){
        array.push(num)
        soma = soma + num
    } else{
        aprecentar = false
    }
}

const quant = array.length
const resultado = soma / quant

io.write(`O numero informado é: ${array} e a sua Media total é: ${resultado}` )