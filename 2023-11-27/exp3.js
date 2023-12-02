const io = require('../io/io')

io.write('Informe um número maior que 10:')
const numero = io.readInt()

if (numero > 10) {  // Significa SE FOR, exerça essa mensagem
    io.write('Número recebido com sucesso!')
} else {    // significa se NAO FOR, exerça essa mensagem
    io.write('O número informado é inválido!')
}