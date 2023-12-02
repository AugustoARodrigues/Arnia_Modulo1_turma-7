const io = require('../io/io')

io.write('Digite o nome do Pais:')
const pais = io.read()

if(pais === 'Brasil'){   // caso for digitado vai exerculta essa função 
    io.write('Pais recebido com Sucesso!')
}

io.write(pais)
