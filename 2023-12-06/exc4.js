// Faça um programa que receba do usuário um array de números. Faça 
// uma função que recebe o array e retorna outro array com os valores em 
// ordem invertida. (sem usar o .reverse())

const io = require('../io/io')

let numerosAcumulado = []

const receberNumeros =()=> {
    for(let i=0; i<3; i++){
        io.write(`Digite o ${i + 1}º numero:`)
        const numeroUsuario = io.readInt()
        numerosAcumulado.push(numeroUsuario)
    }

}
    const arrayInvertidos=(numerosAcumulado)=>{
        const numeroInvertidos = []
        
        for(let a=0; a < numerosAcumulado.length; a++){
            numeroInvertidos.unshift(numerosAcumulado[a])
        }
        return numeroInvertidos
    }

    receberNumeros()
console.log(`Os numeros Digitado são: ${numerosAcumulado}`)
console.log('----------------------------')

const selecao = arrayInvertidos(numerosAcumulado)
console.log(`Os numeros Digitado invertidos: ${selecao}`)
