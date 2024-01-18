// add todo do formulario que o cliente add na tabela a baixo
class Alunos {
    constructor(id,nome,rg,cpf,email,dataNascimento){
        this.Id = id
        this.Nome= nome
        this.Rg = rg
        this.Cpf = cpf
        this.Email = email
        this.DataNascimento = dataNascimento
    }
}

const carregarAlunos=()=>{
    const pessoasList = document.querySelector('.tbody') // add alunos a tabela
    alunos.forEach(pessoa =>{
        pessoasList.innerHTML = pessoasList.innerHTML
    })
}