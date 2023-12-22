// Escreva uma função chamada filtrarPalavras que recebe um array de 
// palavras e uma função de callback. A função filtrarPalavras deve 
// aplicar a função de callback a cada palavra do array e retornar um novo 
// array contendo apenas as palavras que satisfazem a condição definida 
// pela função de callback.
// ❖ Exemplo de uso:
// const verificarTamanho = palavra => palavra.length > 5;
// const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi', 
// 'livro']
// const resultado = filtrarPalavras(palavras, verificarTamanho);
// console.log(resultado) // Output: ['bicicleta', 'abacaxi']

const io= require('../io/io')

const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi', 'livro']


// ex1: Mais facil
const filtrarPalavras=(array, callback)=>{
    const filtrar = array.filter((palavra)=> {
        return callback(palavra)
    })
    return filtrar
}
const verificarTamanho = palavra => palavra.length > 5

const resultado = filtrarPalavras(palavras, verificarTamanho)
console.log(resultado) 

console.log('-----------------------------')

// ex2: Mais dificil, mais simples

const filtrarPalavras2=(array, callback)=>{
    return array.filter(callback)
}
const verificarTamanho2 = palavra => palavra.length > 5

const resultado2 = filtrarPalavras2(palavras, verificarTamanho2)
console.log(resultado2) 
