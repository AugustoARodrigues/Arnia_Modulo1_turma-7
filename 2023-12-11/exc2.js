// Faça um programa para receber os dados de 10 alunos (nome, matrícula e 
//     nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas 
//     dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.

const io = require('../io/io')

let alunos = []

for(let i=0; i<2; i++){
    io.write('Digite seu Nome:')
    const nome = io.read()
   
    io.write('Digite sua Matricula:')
    const matricula = io.readInt()
   
    io.write('Digite seu Nota:')
    const nota = io.readFloat()

    //obj de cada aluno
    const dadosAluno = {
        nome,
        matricula,
        nota,
    }
    alunos.push(dadosAluno)
}
console.log(alunos)
console.log("--------------------")

// ex 1: // Aumenta em 10% as notas dos alunos com matrícula maior que 1000
const novaNota = alunos.map((aluno)=>{
    if(aluno.matricula > 1000){
        // return aluno.nota = aluno.nota + (aluno.nota * 0.10)
        //ou
        return aluno.nota += aluno.nota * 0.10
    }
    return aluno
})

console.log('Lista de Alunos Atualizada:')
console.log(novaNota)
console.log("--------------------")

// ex 2: // Aumenta em 10% as notas dos alunos com matrícula maior que 1000
// Mostra a nova nota de cada aluno

console.log('Novas Notas:')
alunos.forEach((aluno)=>{
    console.log(`O Aluno: ${aluno.nome} tem uma nova nota é: ${aluno.nota}`)
})

console.log("--------------------")

