class Pessoa {
    id
    nome
    cpf
    anoNascimento

    calcularIdade() {
        const calculo = 2023 - this.anoNascimento  // é acessar uma variavel que esta dentro de uma class
        return calculo
    }
}

const pessoa1 = new Pessoa()
pessoa1.id = 1
pessoa1.nome = 'Fulano'
pessoa1.cpf = '158.956.985-59'
pessoa1.anoNascimento = 1995
const idadePessoa1 = pessoa1.calcularIdade()
pessoa1.idade = pessoa1.calcularIdade() // mostra idade direto na class

const pessoa2 = new Pessoa()
pessoa2.id = 2
pessoa2.nome = 'Ciclano'
pessoa2.cpf = '598.895.956-52'
pessoa2.anoNascimento = 1956
const idadePessoa2 = pessoa2.calcularIdade()

console.log("-------1--------")
console.log(pessoa1, pessoa2)

console.log("-------1--------")
console.log("-------2--------")

console.log(idadePessoa1, idadePessoa2)
console.log("-------2--------")
console.log("-------3--------")

console.log(pessoa1,pessoa2, idadePessoa2)
console.log("-------3--------")
console.log("-------4--------")

console.log( idadePessoa1)
console.log(idadePessoa2)
console.log("-------4--------")