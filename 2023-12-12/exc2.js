// Faça um programa para receber modelo, marca e valor de 5 
// smartphones utilizando de uma classe Celular. Depois inclua na classe 
// método que mostre os dados de cada um nesse formato: Modelo: 
// [modelo] | Marca: [marca] | Valor: [valor]. Chame o método 
// para cada smartphone.

const io = require('../io/io')

class Celular {
    modelo
    marca
    valor
    
    constructor(modelo,marca,valor){
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
    }
    mostraDados(){
        console.log(`Modelo: ${this.modelo} \n Marca: ${this.marca} \n Valor: R$ ${this.valor}`)
        //console.log(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: R$ ${this.valor}`)
    }
}
const celulares = []

for(let i=0; i<2; i++){
    io.write(`Digite o ${i + 1}º Modelo:`)
    const modelo = io.read()

    io.write(`Digite o ${i + 1}º Marcas:`)
    const marca = io.read()

    io.write(`Digite o ${i + 1}º valor:`)
    const valor = io.readFloat()

    const addCelular = new Celular (modelo,marca,valor)
    celulares.push(addCelular)
}

console.log(celulares)

celulares.forEach((item) =>{
    item.mostraDados()
})