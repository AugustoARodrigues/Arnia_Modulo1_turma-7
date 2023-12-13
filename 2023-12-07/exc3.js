// Escreva uma função que transforme todos cada elemento de um array qualquer 
// em texto. Dica: todas as variáveis javascript possuem uma função .toString()

let array = [10,20,30,40,50]

array = array.map((elemento) => {
    return elemento.toString()  // // Transforma em texto
})

console.log(array)