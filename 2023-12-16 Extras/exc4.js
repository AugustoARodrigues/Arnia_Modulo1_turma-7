// Faça um programa que receba o nome e nota de 5 alunos e armazene em um array de objetos. 
// Faça uma função que receberá a nota de cada aluno e acusará se ele está aprovado (nota a partir 
// de 7) ou reprovado (nota menor 7). De acordo com o retorno desta função, acrescente no aluno a 
// propriedade aprovado com o valor true ou false

const io = require('../io/io')

class Aluno{ 
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
        this.aprovado = false
    }

}

const alunosDigitado = ()=>{
    const alunos = []

    for(let i=0; i<2; i++){
            console.log(`Digita o ${i + 1}º nome do Aluno:`)
            const nome = io.read()
            console.log(`Digite a Nota do Aluno:`)
            let nota = io.readInt()

            const aluno = new Aluno (nome, nota)
            alunos.push(aluno)
        }
        return alunos
    }

//ex1
const verificarAprovacao = (aluno)=>{
    if (aluno.nota >= 7 ) {
        aluno.aprovado = `Esta de Ferias`
        } else {
            aluno.aprovado = `Te espero na Proxima semana`
            }
    }

    const alunosAprovados = alunosDigitado()

alunosAprovados.forEach(verificarAprovacao)


console.log('---------------1-----------------\n')
// apareça sem o array mostrando no console e um em baixo do outro
console.log('lista de alunos:')
console.log(alunosAprovados)

console.log('---------------2-----------------\n')
// só apareça o que foi aprovado e com a frase do if ou else
console.log(alunosAprovados.map(aluno => 
    `${aluno.nome} com a nota: ${aluno.nota}-`
    ))

console.log('--------------3------------------\n')
    console.log(alunosAprovados.map(aluno => 
        `${aluno.nome} com a nota: ${aluno.nota}- ${aluno.aprovado}`
        ))

console.log('--------------4------------------\n')

alunosAprovados.forEach(aluno => {
    console.log (`Nome: ${aluno.nome}, Nota: ${aluno.nota}, Situação: ${aluno.aprovado}`)
})

console.log('--------------5-------ex2-----------\n')

// ex2
const verificarAprovacao2 = (aluno)=>{
    aluno.aprovado = aluno.nota >= 7 
}

    const alunosAprovados2 = alunosAprovados.slice()

alunosAprovados2.forEach(verificarAprovacao2)

// só imprimir o que foi aprovado
alunosAprovados2.filter(aluno => aluno.aprovado).forEach(aluno =>{
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}, Situação: Aprovado! Está de férias.`)
})

console.log('--------------6-------ex2-----------\n')
alunosAprovados2.filter(aluno => aluno.aprovado).forEach(aluno =>{
    console.log(` Nome: ${aluno.nome}\n Nota: ${aluno.nota}\n Situação: Aprovado! Está de férias.`)
})