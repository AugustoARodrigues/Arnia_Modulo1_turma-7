//criando um objeto que representa uma pessoa
const pessoa1 = { nome: 'Maria da Silva', dataNascimento: '15/07/1978', profissao: 'Advogada' }
const pessoa2 = { 
    nome: 'João da Silva', 
    dataNascimento: '05/09/1998', 
    profissao: 'Médico' 
}

console.log(pessoa1)
console.log('----------1-------')
console.log(pessoa2)
console.log('--------2---------')
//acessando os dados do objeto
console.log(pessoa1.nome)
console.log(pessoa1.dataNascimento)
console.log(pessoa1.profissao)
console.log('---------3--------')
//incluir nova propriedade no objeto
pessoa2.idade = 35
console.log(pessoa2)
console.log('--------4---------')

//alterando o valor de uma propriedade do objeto
pessoa2.nome = 'João da Silva Santos'
console.log(pessoa2)
console.log('---------5--------')
//deletando uma propriedade do objeto
delete pessoa2.dataNascimento
console.log(pessoa2)
console.log('---------6--------')