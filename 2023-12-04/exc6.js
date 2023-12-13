// Faça um programa que receba 5 números. Após digitar cada número, o 
// usuário deve receber imediatamente a informação se o número é par 
// ou ímpar. Dica: Faça uma função para receber este número e retornar 
// true se for par e false se for ímpar.


const io = require('../io/io')

function imprimir_e_classificar(){  

    for(let i=0; i<5; i++){
        io.write(`Digite ${i +1}º numero: `)
        const numero = io.readInt()
        io.write(`${numero} - ${numeroPar(numero)}`)

        function numeroPar(numero){
            if(numero % 2 === 0){
                return 'Esse numero é Par'
             }else{
                 return 'Esse numero é Impar'
             }
        }
}
}
imprimir_e_classificar()