const io = require('../io/io')

/* Faça um programa que receba os dados de uma pessoa e posteriomente,
mostre na tela como uma string*/

io.write('Cadastro de Pessoa')

io.write('Informe o nome')
const nome = io.read()

io.write('Informe o cpf')
const cpf = io.read()

io.write('Informe o Data de nascimento')
const data = io.read()

const pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: data
}

io.write(`Nome: ${pessoa.nome} \n Cpf: ${pessoa.cpf} | Data de Nascimento: ${pessoa.dataNascimento}`)
// \n : pula a linha

