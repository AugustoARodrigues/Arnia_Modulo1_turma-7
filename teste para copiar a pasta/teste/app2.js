// Array de alunos
const alunos = [];

// Função para carregar os alunos na tabela
const carregarAlunos = () => {
    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('nasc').value;

    // Criar um novo objeto aluno
    const novoAluno = {
        id: alunos.length + 1,
        nome: nome,
        rg: rg,
        cpf: cpf,
        email: email,
        dataNascimento: dataNascimento
    };

    // Adicionar o novo aluno ao array
    alunos.push(novoAluno);

    // Limpar os campos do formulário
    // document.getElementById('nome').value = '';
    // document.getElementById('rg').value = '';
    // document.getElementById('cpf').value = '';
    // document.getElementById('email').value = '';
    // document.getElementById('nasc').value = '';

    // Chamar a função para carregar os alunos na tabela
    carregarAlunosNaTabela();
}

// Função para carregar os alunos na tabela
const carregarAlunosNaTabela = () => {
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
        // tbody.appendChild(row);
    });
}

// Função para cancelar o preenchimento do formulário
// function cancelarPreenchimento() {
//     document.getElementById('nome').value = '';
//     document.getElementById('rg').value = '';
//     document.getElementById('cpf').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('nasc').value = '';
// }
