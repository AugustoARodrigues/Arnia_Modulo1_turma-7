// Array de alunos
const alunos = [
    {
        id: 1,
        nome: 'Jéssica Maria Freitas',
        rg: '14568896-59',
        cpf: '485.895.963-59',
        email: 'jessica@gmail.com',
        dataNascimento: '20/07/1989'
    },
    // Adicione outros alunos conforme necessário
];

// Função para adicionar alunos à tabela
function carregarAlunos() {
    const tbody = document.getElementById('tbody');

    // Limpar o conteúdo atual da tabela
    tbody.innerHTML = '';

    // Percorrer o array de alunos e adicionar cada aluno à tabela
    alunos.forEach(aluno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.rg}</td>
            <td>${aluno.cpf}</td>
            <td>${aluno.email}</td>
            <td>${aluno.dataNascimento}</td>
            <td><button onclick="editarAluno(${aluno.id})">Editar</button></td>
            <td><button onclick="excluirAluno(${aluno.id})">Excluir</button></td>
        `;

        // Adicionar a linha à tabela
        tbody.appendChild(row);
    });
}

// Função chamada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Carregar os alunos na tabela
    carregarAlunos();
});

// Função para editar um aluno (você pode implementar esta função conforme necessário)
function editarAluno(alunoId) {
    // Implemente a lógica de edição aqui
    console.log(`Editar aluno com ID ${alunoId}`);
}

// Função para excluir um aluno (você pode implementar esta função conforme necessário)
function excluirAluno(alunoId) {
    // Implemente a lógica de exclusão aqui
    console.log(`Excluir aluno com ID ${alunoId}`);
}