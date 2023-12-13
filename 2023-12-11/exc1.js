// Faça um programa para receber dados de 10 pessoas (nome, idade e 
//     documento) criando um objeto para cada pessoa. Depois mostrar as que são 
//     maiores de idade (use o método de array .filter() para filtrar)

const io = require('../io/io')

let listaPessoas = []
for(let i=0; i< 3; i++){
    io.write('Digite seu Nome:')
    const nome = io.read()
   
    io.write('Digite sua Idade:')
    const idade = io.readFloat()
   
    io.write('Digite seu Cpf:')
    const cpf = io.read()

    const pessoa = {
        nome,
        idade,
        cpf,
    }
    listaPessoas.push(pessoa)
}
const maiorIdade = listaPessoas.filter(pessoa => pessoa.idade >= 18)
// imprimir os de maior idade
console.log(maiorIdade)
console.log('--------------')
// imprimir o nome e a idade detalhado
maiorIdade.forEach((pessoa)=>{
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
})

