const io = require('../io/io')

const numero1 = 10
const teste1 = numero1 > 5 //true

io.write('Teste 1:')
io.write(teste1)
// se o numero1 "10" é maior que 5 e se for é true "verdadeiro"

const numero2 = 50
const teste2 = numero2 > 100

io.write('Teste 2:')
io.write(teste2)
// se o numero2 "100" é maior que 50 e se for é false "falso"