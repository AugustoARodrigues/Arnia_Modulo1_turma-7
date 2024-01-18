// Classe Alunos
class Alunos {
    // Função para formatar a data no formato dd/mm/aaaa
    static formatarData(data) {
      const dataPartes = data.split('-');
      const dataFormatada = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
      return dataFormatada;
    }
  }
  
  // Função para preencher a tabela com os dados
  function preencherTabela() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ''; // Limpa o conteúdo existente
  
    // Substitua 'suaListaDeAlunos' pela lista de alunos que você tem no seu código
    const suaListaDeAlunos = [
      {
        id: 1,
        nome: 'Nome do Aluno',
        rg: '123456789',
        cpf: '987654321',
        email: 'aluno@exemplo.com',
        nasc: '1994-04-25' // Sua data de nascimento no formato aaaa-mm-dd
      }
    ];
  
    // Itera sobre os dados dos alunos e preenche a tabela
    suaListaDeAlunos.forEach((aluno) => {
      const tr = document.createElement('tr');
  
      // Preenche as células da linha com os dados formatados
      const dataFormatada = Alunos.formatarData(aluno.nasc);
      tr.innerHTML = `
        <td>${aluno.id}</td>
        <td>${aluno.nome}</td>
        <td>${aluno.rg}</td>
        <td>${aluno.cpf}</td>
        <td>${aluno.email}</td>
        <td>${dataFormatada}</td>
        <td><button onclick="editarAluno(${aluno.id})">Editar</button></td>
        <td><button onclick="excluirAluno(${aluno.id})">Excluir</button></td>
      `;
  
      tbody.appendChild(tr); // Adiciona a linha à tabela
    });
  }
  
  // Chame a função para preencher a tabela
  preencherTabela();
  