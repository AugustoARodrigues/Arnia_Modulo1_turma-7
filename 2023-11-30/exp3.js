const io = require('../io/io')

/* Programa de computador para escrever um nome, fornecido pelo usuário, 5 vezes. */

for (let i = 0; i < 5; i++) {
    io.write('Escreva seu nome:')
    const nome = io.read()

    io.write(`O nome informado foi: ${nome}`)
}