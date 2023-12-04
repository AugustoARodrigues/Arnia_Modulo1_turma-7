const io = require('../io/io')

/* Receba um número e informe se ele é igual ou diferente de 10 */

io.write('Informe um número:') 
const numero = io.readInt() 
// let resultado = ''  

// Duas forma de escrever caso for uma CONDIÇÂO SIMPLES: 

// if (numero === 10) {  
//     resultado = 'O número é igual a 10' 
// } else { 
//     resultado = 'O número é diferente de 10' 
// }


// forma mais simplificada a Baixo: 

const resultado = numero === 10 ? 'O número é igual a 10' : 'O número é diferente de 10' 
// const resultado = numero === 8 ? “igual a 10” : “diferente de 10”

io.write(resultado) 
