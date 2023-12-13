const io = require('../io/io')
/* Faça um programa que receba os dados de 3 Alunos (nome e nota) 
e mostre esses dados*/
const alunos = []

for (let i=0; i<3; i++){
    io.write('Informe o nome:')
    const nome = io.read()
    io.write('Infome a nota:')
    const nota = io.read()

    const aluno = {
        nome, // nome: nome,
        nota: nota,
    }
    alunos.push(aluno)
}
console.log(alunos)
console.log(alunos[1])
console.log(alunos[1].nome)


alunos.forEach(aluno =>{
    console.log(`O aluno ${aluno.nome} tirou a nota: ${aluno.nota}`)
})

// alterar a nota do aluno, somar 1 ponto no aluno
alunos = alunos.map(aluno => {
    aluno.nota = aluno.nota + 1
    return aluno
})
console.log(alunos)