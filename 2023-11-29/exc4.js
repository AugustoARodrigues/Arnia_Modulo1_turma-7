// Escreva um algoritmo para ler o número total de eleitores de um 
// município, o número de votos brancos, nulos e válidos. Calcular e escrever 
// o percentual que cada um representa em relação ao total de eleitores.

const io = require('../io/io')

let eleitor = 0

io.write('Digite o total de eleitores: ')
 let totalEleitores = io.readInt()
 
io.write('Digite o total de votos em branco: ')
 let votosEmBranco = io.readInt()

 io.write('Digite o total de votos Nulos: ')
 let votosNulos = io.readInt()

 io.write('Digite o total de votos Validos: ')
 let votosValidos = io.readInt()

 // regra de 3
const porcBrancos = (votosEmBranco * 100) / totalEleitores
const porcNulos = (votosNulos * 100) / totalEleitores
const porcValidos = (votosValidos * 100) / totalEleitores

io.write(` A porcentagem De votos em Brancos é: ${porcBrancos}`)
io.write(`A porcentagem De votos Nulos é: ${porcNulos}`)
io.write(`A porcentagem De votos Validos é: ${porcValidos}`)
