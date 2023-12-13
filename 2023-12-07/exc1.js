// Escreva uma função que recebe como parâmetro um array de números. Dado este array, a 
// função deverá:
// a. Deixar no array somente os números ímpares (utilize filter)
// b. Somar todos os números restantes (utilize reduce)
// c. Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x 
// a soma dos números restantes do array

const io = require('../io/io')

const parametrosArray = (numeros)=>{

     // a. Filtrar os números ímpares
    const numerosImpares = numeros.filter((numero) =>numero % 2 !== 0 )
    console.log(numerosImpares)

     // b. Somar todos os números restantes
    const soma = numerosImpares.reduce((acc,numero) => acc + numero,0)
    console.log(soma)

    // c. Imprimir a string "Javascript é muito bom" x vezes
    for(let i=0;i<soma;i++){
        io.write('Javascript é muito bom " ok "')
    }
}
parametrosArray ([3,4,6,7,8])

