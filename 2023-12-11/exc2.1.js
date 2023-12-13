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

console.log('Lista de Alunos:');
console.log(alunos);
console.log('--------------------');

// Aumenta em 10% as notas dos alunos com matrícula maior que 1000
const alunosAtualizados = alunos.map((aluno) => {
    if (aluno.matricula > 1000) {
        aluno.nota += aluno.nota * 0.10;
    }
    return aluno;
});

console.log('Lista de Alunos Atualizada:');
console.log(alunosAtualizados);
console.log('--------------------');

// Mostra a nova nota de cada aluno
console.log('Novas Notas:');
alunosAtualizados.forEach((aluno) => {
    console.log(`O Aluno: ${aluno.nome} tem uma nova nota de ${aluno.nota}`);
});

console.log('--------------------');
