// Faça um programa para receber nome, preço e ano de lançamento de 
// 10 carros utilizando de uma classe Carro. Depois inclua na classe um 
// método que aumente o preço do carro em R$5.000. Chame o método 
// para cada carro e mostre os dados atualizados.

const io = require('../io/io')

class Carro {
    nome
    preco
    ano

    constructor(nome, preco, ano) {
        this.nome = nome
        this.preco = preco
        this.ano = ano
    }
    calculoAumento(){
        this.preco += 5000 
    }
}

const carros = []

for(let i=0; i<2; i++){
    io.write(`Digite o ${i + 1}º Nome do carro:`)
    const nome = io.read()

    io.write(`Digite o ${i + 1}º preço do carro:`)
    const preco = io.readFloat()

    io.write(`Digite o ${i + 1}º Ano do carro:`)
    const ano = io.readInt()

    const informacaoCarro = new Carro(nome,preco,ano)
    carros.push(informacaoCarro)

}

console.log(carros)

carros.forEach((item) => {
    console.log(`Nome: ${item.nome}, Preço: ${item.preco}, Ano: ${item.ano}`)
    item.calculoAumento()
    console.log(`Novo preço após aumento: ${item.preco}`)
})

console;log(Carro)