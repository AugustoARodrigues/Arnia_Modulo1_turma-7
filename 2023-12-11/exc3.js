// Faça um programa para receber nome e idade de 10 funcionários (nome, 
//     matrícula, cargo e salário). Depois faça um método que aumente o salário de 
//     cada um em 10%. Mostre a soma dos salários antes e depois do aumento (use o 
//     método de array .reduce() para somar).

const io = require('../io/io')

let funcionarios = []

for(let i=0; i<2; i++){
    io.write('Digite seu Nome:')
    const nome = io.read()
   
    io.write('Digite sua Matricula:')
    const matricula = io.readInt()
   
    io.write('Digite seu cargo:')
    const cargo = io.read()
    
    io.write('Digite seu Salario:')
    const salario = io.readFloat()

    //obj de cada aluno
    const dadosFuncionario = {
        nome,
        matricula,
        cargo,
        salario,
    }
    funcionarios.push(dadosFuncionario)
}

console.log('Lista de Funcionarios:');
console.log(funcionarios);
console.log('--------------------');

const novoSalario = funcionarios.map((funcionario)=>{
    return funcionario.salario += funcionario.salario * 0.1
})

console.log('Lista de Novo Salario:');
console.log(novoSalario);
console.log('--------------------');

console.log('Lista de nomes e Novo Salario:');
funcionarios.forEach((funcionario)=>{
    console.log(`O Novo Salario de ${funcionario.nome} é : ${funcionario.salario} `)
})
console.log('--------------------');

const soma = funcionarios.reduce((acc, funcionario)=>{
    return acc + funcionario.salario
},0)

console.log('Lista de Soma:');
console.log(`Soma: R$ ${soma}`)

console.log('--------------------');

console.log('Lista de Nome e a Soma:')
funcionarios.forEach((funcionario)=>{
    console.log(`O Novo Salario de ${funcionario.nome} é : ${funcionario.salario} `)
    console.log(`E a soma é: ${soma} `)
})
console.log('--------------------');
