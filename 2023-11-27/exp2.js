const io = require('../io/io')

/* Faça um programa de computador que recebe do usuário um número inteiro e acuse se este número é par ou ímpar */

io.write('Informe o número:')
const numero = io.readInt()
const resto = numero % 2 // numero "mod" 2 obs: verificar se é par ou nao, divid por 2 e nao tem resto é par

if (resto === 0) { //se resto for igual à 0 é par  significa " ==== "" igual a "
    io.write('Este número é par!')   // se for par esse numero vai aparecer a mensagem
}

if (resto !== 0) { //se resto for diferente de 0
    io.write('Este número é ímpar!') // caso for diferente de  " 0 " vai aparecer essa mensagem
}