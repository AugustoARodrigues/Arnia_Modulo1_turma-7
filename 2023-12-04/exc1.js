// Faça uma função que recebe a idade de uma pessoa em anos, meses e 
// dias e retorna essa idade expressa em dias.

const io = require('../io/io')


function calcularIdadeEmDias(anos, meses, dias) {
    idade_dias = (anos * 365) + (meses * 30) + dias 
    return idade_dias
}

io.write('Digite sua Idade: ')
let anos = io.readInt()

io.write('Digite qual meses: ') // 11 meses - o mesmo do aniversario
 let meses = io.readInt()

io.write('Digite qual o Dias: ') // 30 dias - 1 do aniversario e - a data do seua aniversario
 let dias = io.readInt()

 const resultado = calcularIdadeEmDias(anos, meses, dias)

 io.write(`A sua Idade em Dias é: ${resultado}`)