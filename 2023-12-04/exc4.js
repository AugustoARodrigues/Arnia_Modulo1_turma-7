// Faça uma função que recebe um valor inteiro e verifica se o valor é par. 
// A função deve retornar um valor booleano (true ou false).

const io = require('../io/io')

function booleano(){
    for(let n=0; n < numero; n++){
        
        if(numero %2 ===0){
            io.write(`Esse numero ${numero} é Par : true`)
        } else{
            io.write(`Esse numero ${numero} é Impar: false `)
        }
        return numero
    }
}
io.write('Digite valor inteiro: ')
let numero =  io.readInt()
const resultado = booleano(numero)





