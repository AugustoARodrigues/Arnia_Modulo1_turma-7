// Faça um programa que receba o nome, time e salário de 5 jogadores de futebol e armazene em um 
// array de objetos. Depois faça uma função que receberá a lista de jogadores e retornará somente os 
// jogadores com salário maior que 100 mil reais

const io = require('../io/io')

class Time {
    constructor(nome, time, salario){
        this.nome = nome
        this.time = time
        this.salario = Number(salario)
}
}

const timeDigitado = ()=>{
    const jogadores=[]

    for(let i=0; i<3; i++){
        console.log(`Digita o ${i +1}º nome do jogador:`)
        const nome = io.read()
        console.log(`Digite o time do jogador:`)
        const time = io.read()
        console.log(`Digite o salário do jogador Inteiro em R$:`)
        const salario = io.read()

        const jogador = new Time(nome,time,salario)
        jogadores.push(jogador)
    }
    return jogadores
}

const jogadores = timeDigitado()

const filtrarJogadoresMaior100mil = (listaJogadores)=>{
    return listaJogadores.filter((jogador)=> jogador.salario > 100000)
}

const jogadoresMaisRicos = filtrarJogadoresMaior100mil(jogadores)
console.log(jogadoresMaisRicos)

console.log(`----------------------------`)

console.log(jogadoresMaisRicos.map(jogador => 
    `${jogador.nome} do time ${jogador.time} com salário de R$: ${jogador.salario} reais`
    ))
