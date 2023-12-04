// Faça um programa de computador para calcular o quanto gastou um 
// fumante com seu vício. O usuário deverá informar o número de anos que 
// fuma, o número de cigarros por dia e o preço do maço de cigarro. 
// Considere o maço com 20 unidades (considere o ano com 365 dias)


const io = require('../io/io')


let anosFumando
let valorDeCigarro
let quantidadeDeCigarros
let cigarroPorDia
let dias
let gastoTotal
let precoPorUnidade
let calcularVicio = 0


precoPorUnidade = valorDeCigarro / 20
dias = anosFumando * 365
gastoTotal = cigarroPorDia * dias * precoPorUnidade

io.write('Digite o numero de anos que fuma: ')
anosFumando = io.readInt()

io.write('Digite o numero de cigartos que fuma por dia: ')
cigarroPorDia = io.readInt()

io.write('Digite o valor do Cigarro: ')
valorDeCigarro = io.readFloat() // para valor


io.write(`O total gasto é: ${gastoTotal}`)






