const io = require('../io/io')

io.write('Digite o numero')
const numero = io.readInt()

const resultado = numero ===8

io.write(`o numero é: ${resultado}`)