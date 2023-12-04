// Fatorial de um número natural é a multiplicação dos naturais menores ou 
// igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um 
// número n calcule seu fatorial (use while)

const io = require('../io/io')

io.write('Digita o seu numero: ')
let numero = io.readInt()

let total = 1
let fatorial = numero

//ex1
// while( total < numero ){  // Enquanto o total "1" vai ser menor que o numero do usuario "5"
//     fatorial = fatorial * total // o fat = numer ==> fat = 5 => fat = 5 * 1 ===> depois 5 * 2 = 10 / 10*2=20 / etc..
//     total ++  // aonde o total sempre vai add mais "1"
// }
// io.write(fatorial) // resultado final a quantidade de vezes que o usuario pedio
// io.write('----------------- ex 1 --------------------------')



// ex2
// while( total < numero){
//     io.write(`O valor atual é ${total}`)
//     fatorial = fatorial * total           // o fat = numer ==> fat = 5 => fat = 5 * 1 ===> depois 5 * 2 = 10 / 10*2=20 / etc..
//     io.write(`O valor de soma atual é ${fatorial}`)
//     total++
//     io.write(`----------------------------------------`)
// }
// io.write('----------------- ex 2 --------------------------')



// ex3
// while( total <= numero){
//     io.write(`O valor atual é ${total}`)
//     fatorial = fatorial * total
//     io.write(`O valor de soma atual é ${fatorial}`)
//     total++
//     io.write(`----------------------------------------`)
// }
// io.write('----------------- ex 3 --------------------------')

// ex4
// while( numero >= 1 ){
//     total = total * numero  // o fat = numer ==> fat = 5 => fat = 5 * 4= 20 ===> depois 20 * 3 = 60 / 60*2=120 / etc..
//     numero --
// }
// io.write(total)
// io.write('----------------- ex 4 --------------------------')


// ex5
// while( numero > 1){
//     io.write(`O valor atual é ${numero}`)
//     total = total * numero
//     io.write(`O valor de soma atual é ${total}`)
//     numero --
//     io.write(`----------------------------------------`)
// }
// io.write('----------------- ex 5 --------------------------')

// ex6
while( numero >= 1){
    io.write(`O valor atual é ${numero}`)
    total = total * numero
    io.write(`O valor de soma atual é ${total}`)
    numero --
    io.write(`----------------------------------------`)
}
io.write('----------------- ex 6 --------------------------')