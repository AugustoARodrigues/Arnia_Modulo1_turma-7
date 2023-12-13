//FOREACH - MOSTRAR DADOS 
const array = [1, 2, 3, 4, 5, 6]
const arrayNomes = ['teste', 'teste1', 'jose', 'banana' ]

// for (let i = 0; i < array.length; i++) {
//     io.write(array[i])
// }

array.forEach((elemento, idx) => { // passar cada elemento do array
    console.log(elemento + ' Teste ' + idx)
})

console.log('--------------------------') 
arrayNomes.forEach((item, index) => {
    console.log((index + 1) + ' Olá ' + item)
})  