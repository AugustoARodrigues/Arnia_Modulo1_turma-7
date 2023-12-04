const io = require('../io/io')

io.write('Digite o numero')
const numero = io.readInt()

const resultado = numero ===8   // se o usuario digitar o numero 8 vai ser "true" / e se nao digitar vai ser "false"

io.write(`o numero é: ${resultado}`)