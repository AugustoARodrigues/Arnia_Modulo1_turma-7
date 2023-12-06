// Faça um programa de computador para receber 10 números inteiros e
// depois imprimir seus sucessores

const io = require('../io/io')

const numeros = []

for(let i=0; i<5; i++){
    io.write(`Digite ${i +1}º numero:`)
    const numero = io.readInt()
    numeros.push(numero)
}

io.write(numeros)
io.write('--------------------------')

for (let i = 0; i < numeros.length; i++) { 
    const numero = numeros[i]
    const sucesso = numero + 1 
    io.write(`Número: ${sucesso}`)  
} 

io.write('--------------------------')

//ex 2

for (let a = 0; a < numeros.length; a++) { 
    const sucessor = numeros[a] + 1 
    io.write(`O Sucessor do ${numeros[a]} é:  ${sucessor}`)  
} 
