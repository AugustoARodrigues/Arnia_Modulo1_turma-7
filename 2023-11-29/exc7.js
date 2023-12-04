// Faça um programa de computador que receba do usuário um ano e 
// acuse se este ano é ou não bissexto

const io = require('../io/io')

io.write('Digita o Ano de sua escolha: ')
let ano = io.readInt()


if( ano % 100 === 0 && ano % 400 === 0){
    io.write(`Esse ano: ${ano} é Bissexto`)
} else if ( ano % 100 !== 0 && ano % 4 === 0){
    io.write(`Esse ano: ${ano} é Bissexto`)
}else {
    io.write(`Esse ano: ${ano} Não é Bissexto`)
}