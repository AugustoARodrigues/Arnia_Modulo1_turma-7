// usando const pois a variável io nunca mudará de valor
//const io = require("./io")


const io = require('../io/io') // inportando da bliblioteca

/* Faça um programa que escreva o nome do usuario */



io.write('Digite seu nome:')//= console.log('Digite seu nome')
const nome = io.read()  // io.read variavel para o leitor digitar e amarzenar no nome
io.write(nome) // variavel vai digitar o nome que o leitor digitar


io.write('Digite seu nome:')
const nome1 = io.read()  
io.write('O nome digitado é: ' + nome1) 

//ou

io.write(`O nome Informado é: ${nome1}`)
// interpolação de variavel, vai fazer o mesmo que a linha 18 