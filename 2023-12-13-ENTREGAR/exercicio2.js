// Dado o seguinte array de objetos que representa produtos em um
// e-commerce:
// const produtos = [
//  { id: 1, nome: 'Camiseta', preco: 29.9 },
//  { id: 2, nome: 'Calça', preco: 59.9 },
//  { id: 3, nome: 'Tênis', preco: 99.9 }
// ]
// Escreva uma função chamada calcularTotal que recebe esse array de
// produtos e retorna o valor total da compra, somando o preço de cada
// produto.
// ❖ Exemplo de uso:
// const total = calcularTotal(produtos)
// console.log(total) // Output: 189.7 

const io = require("../io/io")

const produtos = [
  { id: 1, nome: "Camiseta", preco: 29.9 },
  { id: 2, nome: "Calça", preco: 59.9 },
  { id: 3, nome: "Tênis", preco: 99.9 },
]

// ex1: Mais dificil
function calcularTotal() {
  let somatorio = 0

  for (let i = 0; i < produtos.length; i++) {
    somatorio += produtos[i].preco
  }
  return somatorio
}

const resultado = calcularTotal(produtos)
console.log(resultado)

console.log("--------------------------------")

// ex2: Mais facil

function calcularTotal2() {
  const precos = produtos.map((produto) => {
    return produto.preco
    // ou const precos = produtos.map((produto)=> produto.precos)
  });
  const soma = precos.reduce((acc, numero) => acc + numero, 0)
  return soma
}

const resultado2 = calcularTotal2(produtos)
console.log(resultado2)
