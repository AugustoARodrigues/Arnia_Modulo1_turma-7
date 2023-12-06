const numeros = [4, 45, 78, 2, 100]

console.log(numeros[3]) // mostra o 3 elemento do array
//ou
console.log(numeros.at(3)) // mostra o 3 elemento do array

numeros.push(6) // add o 6 no final 
console.log(numeros)

numeros.unshift(45) // add 45 no inicio do array
console.log(numeros)

numeros.pop() // tira o ultimo elemento da lista
console.log(numeros)

numeros.shift() // tira o primeiro elemento da lista
console.log(numeros)

numeros.splice(2, 1) // tirar uma posição especifica
console.log(numeros)

const array2 = [67, 400, 3]  // quero add esses numeros vou fazer o seguinte
const array3 = numeros.concat(array2) //juntei o array 1 mais o array 2 e mesclar e deixar em um array novo o array 3
console.log(array3)

const numerosString = numeros.join(' - ') // aqui juntar como textos
console.log(numerosString)

numeros.reverse() // reverter a ordem do arrey 
console.log(numeros)

numeros.sort() // ordernar 
console.log(numeros)

const nomes = ['Arnia', 'Teste', 'Banana', 'Maçã']
nomes.sort() // ordenar os texto é melhor
console.log(nomes)