// Faça um programa que receba do usuário um array de números. Faça 
// uma função que recebe o array de números e retorna a soma desses 
// números. A soma deve ser mostrada ao usuário

const io = require('../io/io')
const array = []

const obternumeros =() =>{
    for(let i=0; i<3; i++){
        console.log(`Digite o ${i + 1}º numero:`)
        const num = io.readInt()

        array.push(num)
    }
}
const calculasoma = ()=> {
    const soma = array.reduce((acc, num) => acc + num, 0)
    return soma
}
obternumeros()
console.log(`Os numeros digitados são: ${array}`)
console.log('-------------------')

const somas = calculasoma()
console.log(`A Soma dos numeros digitado é: ${somas}`)
console.log('-------------------')