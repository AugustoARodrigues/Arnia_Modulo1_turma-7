// Escreva uma função que recebe um array qualquer e multiplica cada número
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
  })
  const resultadoFiltrado = novoArray.filter(numero => numero < 100);
  console.log(resultadoFiltrado);
};

calcularArray([10, 15, 20, 25, 30, 35, 40]);
