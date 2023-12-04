// . Faça um programa de computador que receba do usuário três tamanhos 
// de segmentos de reta em ordem aleatória e acuse se estes segmentos 
// formam ou não os lados de um triângulo. Para isso, um lado deve ser 
// sempre menor que a soma dos outros dois lados.


const io = require('../io/io')

io.write('Digite o primeiro tamanho ')
 let primeiroTamanho = io.readInt()

io.write('Digite o segundo tamanho  ')
 let segundoTamanho = io.readInt()

io.write('Digite o TERCEIRO tamanho ')
 let terceiroTamanho = io.readInt()

// if(primeiroTamanho < segundoTamanho + terceiroTamanho && segundoTamanho < primeiroTamanho + terceiroTamanho && terceiroTamanho < primeiroTamanho + segundoTamanho){
if( segundoTamanho + terceiroTamanho > primeiroTamanho && primeiroTamanho + terceiroTamanho > segundoTamanho &&  primeiroTamanho + segundoTamanho > terceiroTamanho){
    io.write(`Os numeros digitado É UM TRIANGULO`)
} else{
    io.write(`Os numeros digitado NÂO È UM TRIANGULO`)
}
