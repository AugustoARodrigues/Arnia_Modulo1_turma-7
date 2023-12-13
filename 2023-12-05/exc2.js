// Faça um programa que peça ao usuário um número natural e 
// imprima seus divisores.
// ➢ Divisores de 10: números menores ou iguais à 10 pelos quais 10 se 
// divide de forma exata (com resto igual a 0)
// ■ 1, 2, 5, 10


const io = require('../io/io')

function divisores(numero){
    console.log(`Divisores de ${numero} é: ${calculo(numero)} `);
  
    function calculo(){
        const listaDivisores = []
  
        for(let i=1; i<=numero; i++){
        if(numero % i === 0) {
            listaDivisores.push(i)
        }
    }
    return listaDivisores
}
}
io.write('Digita um numero:')
const numero = io.readInt()
divisores(numero)