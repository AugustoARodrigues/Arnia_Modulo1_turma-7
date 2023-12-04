const io = require('../io/io')

/* Escreva um programa que repita a frase "Arnia Escola da Programação" a
 quantidade de vezes que o usuário definir */

io.write('Digite a quantidade de vezes: ')
 const repetir = io.readInt()

 for( let i = 0; i < repetir; i++){

    io.write('Arnia Escola')

 }