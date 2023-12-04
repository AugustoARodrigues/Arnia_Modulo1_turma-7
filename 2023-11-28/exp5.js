const io = require('../io/io')
/* Programa de computador para escrever um nome, fornecido pelo usuário, 10 vezes. */

io.write('Informe o seu nome:') // comp apareça essa mensagem
const nome = io.read() // usuario fala seu nome e armazena
let iterador = 0 // esse nome vai começa a contagem de 0 

while (iterador < 10) {  // enquanto o nome seja menor que 10 continua repetindo
    io.write(nome)   // vai escrevendo o nome
    iterador++  // o nome + 1 ate a contagem que pedi
    io,io.write(iterador)

}