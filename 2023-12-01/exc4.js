// Faça um programa de computador para receber 10 nomes de alunos e
// suas respectivas notas e depois imprimir as notas e nomes daqueles que
// obtiveram notas maiores que 7

const io = require('../io/io')

const nomes=[]
const notas = []

for(let i=0; i<3; i++){
    io.write(`Digite ${i +1}º nome: `)
    const nome = io.read()
    nomes.push(nome)
    
    io.write(`Digite sua Nota: `)
    const nota = io.read()
    notas.push(nota)
}

const aprovados = 10

   // imprimir cada nome e suas notas
for(let i=0; i < aprovados; i++ ){S
    if(notas[i] >= 7){
        io.write(`Parabéns ${nomes[i]} esta APROVADO com a nota: ${notas[i]}`)
    }
}