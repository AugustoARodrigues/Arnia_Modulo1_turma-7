// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, 
// meses e dias e escreva a idade dessa pessoa expressa apenas em dias. 
// Considerar ano com 365 dias e mês com 30 dias. 

const io = require('../io/io')

io.write('Digite quantos Anos tem: ')
 let anos = io.readInt()
 
io.write('Digite quantos meses: ') // 11 meses - o mesmo do aniversario
 let mes = io.readInt()

io.write('Digite os Dias: ') // 30 dias - 1 do aniversario e - a data do seua aniversario
 let dias = io.readInt()

const resultado = (anos * 365) + (mes * 30) + dias 

 io.write(`Parabéns! Possui  ${resultado} dias de Nascimento`)