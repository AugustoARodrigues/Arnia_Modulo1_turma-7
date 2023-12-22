const pessoas = [
    {    id: 1,
        nome: 'Augusto',
        cpf: '111.111.111-11',
    },
    {    id: 2,
        nome: 'Viviane',
        cpf: '222.2222.222-22',
    },
    {    id: 3,
        nome: 'Luiz',
        cpf: '333.333.333-33',
    },
]

const carregar=() =>{
     const pessoasConteiner = document.querySelector('.pessoas')
     pessoas.forEach(pessoa =>{
        pessoasConteiner.innerHTML =pessoasConteiner.innerHTML + `
        <div> 
            ${pessoa.id}- ${pessoa.nome} - ${pessoa.cpf}
        <\div>    
        `
     })
}