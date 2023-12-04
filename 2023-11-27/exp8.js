const io = require('../io/io')

/* Receba um número e informe se ele é igual ou diferente de 10 */

io.write('Informe um número:')  // computador mostrar a informação
const numero = io.readInt()   // usuario digitar o numero seja guardado e amazenado
let resultado = ''  // estrigg vazia

// aonde vamos informar seguinte informaçao
if (numero === 10) {  // quando o numero for igual a 10
    resultado = 'O número é igual a 10' // quando o numero for igual a 10 apareça essa mensagem
} else { // se o numero nao for igual a 10
    resultado = 'O número é diferente de 10' // se o numero nao for igual a 10 apareça essa mensagem
}

io.write(resultado) // comp mostre o resultado