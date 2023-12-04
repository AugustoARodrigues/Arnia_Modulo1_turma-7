// Faça um programa para imprimir os múltiplos de 5 menores ou igual 
// a n, sendo n fornecido pelos usuários. Não use comando de decisão.

const io = require('../io/io')

let mutiplos = 0
let vezes = 0


io.write(`Digite o numero Desejado: `)
    vezes = io.readInt()
//ou
   // let vezes = io.readInt()

while(mutiplos < vezes ){
    io.write( mutiplos += 5 )    // MAIS RAPIDO

    //ou

    // mutiplos = mutiplos + 5
    // io.write( mutiplos )
    
}
