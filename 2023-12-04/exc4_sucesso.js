const io = require('../io/io')

function imprimir_e_classificar(){  // fiz imprimir todos os numero para nao precisar digitar  de 1 a 20
    for(let n=1; n <= 20; n++){
    io.write(`${n} é par? ${categoria(n)}`)
    }
    function categoria(valor){
        return valor % 2 === 0
    }
}
const resultado = imprimir_e_classificar()
io.write(resultado)

