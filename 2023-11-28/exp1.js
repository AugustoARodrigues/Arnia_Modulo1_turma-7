const io = require('../io/io')
/* Programa de computador para escrever Brasil por 10 vezes. */

let contador = 1

while (contador <= 10) {//laço ou looping
// while: A estrutura que define uma repetição em um algoritmo é o ENQUANTO.

    io.write('Brasil')

    contador = contador + 1 //altera o valor do iterador (soma + 1)

    io.write(contador)
}