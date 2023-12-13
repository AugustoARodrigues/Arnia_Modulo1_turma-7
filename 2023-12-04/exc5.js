// Faça uma função que leia um número não determinado de valores 
// positivos e retorna a média aritmética dos mesmos. (Utilize o número -1 
// como critério de parada da repetição).

const io = require('../io/io')

function valores_positivos(){
   
    const array=[]
    let aprecentar = true
    let soma = 0
    
    while(aprecentar){
        io.write('Digite um numero: ')
        const num = io.readInt()
    
        if(num >= 0){
            array.push(num)
            soma = soma + num
        } else{
            aprecentar = false
        }
    }
        const quant = array.length
        const resultado = soma / quant
        return resultado

}

io.write('Digite Numeros inteiro: ')
let numero =  io.readInt()
const resultado1 = valores_positivos(numero)
io.write(`Media total é: ${resultado1}` )