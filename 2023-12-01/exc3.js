// Faça um programa de computador que recebe do usuário 10 números e
// depois imprime os pares e depois os ímpares

const io = require('../io/io')

const par =[]
const impar =[]
let resultado = 0

for(let i=0; i<5; i++){
    io.write(`Digite ${i +1}º numero: `)
    const numero = io.readInt()

    //ex2
    if(numero % 2 === 0 ){
        par.push(numero)
    }else{
        impar.push(numero)
    }
}
io.write(`-------------------------`)

io.write(`Os numeros Pares são: ${par}`)    
io.write(`Os numeros IMPARes são: ${impar}`)


io.write(`-------------------------`)



