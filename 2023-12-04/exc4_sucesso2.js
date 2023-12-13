const io = require('../io/io')

function imprimir_e_classificar(){  // fiz imprimir todos os numero para nao precisar digitar  de 1 a 20
    for(let n=1; n <= numero; n++){
    io.write(`${n} - ${categoria(n)}`)
    }
    function categoria(valor){
        if (valor % 2 === 0){
            return 'Esse Numero é Par'
        }else {
            return  'Esse Numero é Impar'
        }
    }
}

io.write('Digite valor inteiro: ')
let numero =  io.readInt()
const resultado = imprimir_e_classificar(numero)
io.write(resultado)