const pessoa1 = { 
    nome: 'Augusto Rodrigues',
    dataNascimento: '10/08/1990',
    profissao: 'Desenvolvedor de Software'
}

const pessoa2 = { 
    nome: 'viviane Rodrigues',
    dataNascimento: '30/04/1988',
    profissao: 'Estudante'
}
// ex 1
console.log(pessoa1,pessoa2)
console.log('-----------------')
console.log(pessoa1,pessoa2)
console.log('-----------------')

// ex 2
//acessando os dados do objeto 
console.log(pessoa1.nome)
console.log(pessoa1.dataNascimento)
console.log(pessoa1.profissao)
console.log('-----------------')

// ex 3
// Incluir nova propriedade no objeto
pessoa2.idade = 35
console.log(pessoa2)
console.log('-----------------')

// ex 4
// Incluir nova propriedade no objeto
pessoa2.nome = 'Joao da Silva'
console.log(pessoa2)
console.log('-----------------')


// ex 5
// Excluir propriedade no objeto
delete pessoa2.dataNascimento
console.log(pessoa2)
console.log('-----------------')