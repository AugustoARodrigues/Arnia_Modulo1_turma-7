// Faça um programa de computador para receber preços de 10 produtos
// e depois imprimir os preços que estão acima da média.

const io = require('../io/io')

const array = [] 
let somaDoProduto = 0
let preco
for(let i=0; i<6; i++){
    io.write(`Digite o valor ${i +1}º Produto:`)
    preco = io.readFloat()
    array.push(preco)

    somaDoProduto = somaDoProduto + preco
}
const media = somaDoProduto / 5 // quant de produtos

io.write(`Média: ${media}` )
for(let i=0; i < array.length ; i++){
    let preco = array[i]

    if( preco > media){
        io.write(`Preços acima da média: ${preco}`)
    }
}

