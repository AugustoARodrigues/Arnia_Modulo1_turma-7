// Faça o usuario escreva 10 numeros de uma função que recebe um array qualquer e multiplica cada número
// desse array por 3 quando o número for ímpar e por 4 quando o número
// for par. E depois filtre deste array os números menores que 100.

const io = require("../io/io");

const calcularArray = (numeros) => {

  const novoArray = numeros.map((numero) => {
    if (numero % 2 === 0) {
      return numero * 4
    } else {
        return numero * 3
    }
  });
  console.log(novoArray);
};

    // Solicita ao usuário 10 números usando uma função de array
    const numerosUsuario = Array.from({ length: 5 }, (_, index) => {
        io.write(`Digite o ${index + 1}º número: `);
        return io.readInt();
    });

const resultado = calcularArray(numerosUsuario)
// Imprime o resultado
// console.log(`Resultado após processamento: ${resultado}`);