// Utilizado para acumular os elementos de um array (soma ou 
//     multiplicação)

const notas = [1, 2, ,4 ,5]

const somaArray = notas.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)


console.log(somaArray)