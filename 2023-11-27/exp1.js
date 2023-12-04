const io = require('../io/io')

io.write('Digite o nome do Pais:')
const pais = io.read()

if(pais === 'Brasil'){   // caso for digitado "Brasil" vai exerculta essa função e aparecer a mensagem  
    io.write('Pais recebido com Sucesso!')
}

// caso nao digitar o Brasil só vai repetir o que foi digitado
io.write(pais)
