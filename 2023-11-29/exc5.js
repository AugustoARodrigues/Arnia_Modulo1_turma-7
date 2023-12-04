// Escreva um algoritmo para ler o salário mensal atual de um funcionário e 
// o percentual de reajuste. Calcular e escrever o valor do novo salário.

const io = require('../io/io')

io.write('Digite o valor do salario: ')
 let salario = io.readFloat()

io.write('Digite o pontencial do reajuste: ')
 let reajuste = io.readFloat()

let salarioReajuste = salario * reajuste / 100

let novoSalario = salario + salarioReajuste

io.write(` Seu novo salario seria : ${novoSalario}`)