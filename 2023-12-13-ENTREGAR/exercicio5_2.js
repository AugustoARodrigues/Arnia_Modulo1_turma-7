// Dado o seguinte array de objetos que representa estudantes:
// const estudantes = [
//  { nome: 'João', idade: 20 },
//  { nome: 'Maria', idade: 22 },
//  { nome: 'Pedro', idade: 18 },
//  { nome: 'Ana', idade: 21 }
// ]
// Escreva uma função chamada aplicarDesconto que recebe esse array de
// estudantes e uma função de callback. A função aplicarDesconto deve
// aplicar a função de callback a cada estudante, modificando o objeto para
// incluir uma propriedade "desconto" com base na idade do estudante.
// A função passada como callback deve se chamar calcularDesconto . O desconto deve
// ser calculado da seguinte forma: se a idade do estudante for menor que 20, o desconto é
// de 10%; caso contrário, o desconto é de 5%. A função deve retornar o array de estudantes
// modificado.
// ❖ Exemplo de uso:
// const estudantesComDesconto = aplicarDesconto(estudantes,
// calcularDesconto);
// console.log(estudantesComDesconto)
// /* Output:
// [
//  { nome: 'João', idade: 20, desconto: 0.05 },
//  { nome: 'Maria', idade: 22, desconto: 0.05 },
//  { nome: 'Pedro', idade: 18, desconto: 0.1 },
//  { nome: 'Ana', idade: 21, desconto: 0.05 }
// ]
// */

const io = require("../io/io")

const estudantes = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 18 },
    { nome: "Ana", idade: 21 },
  ]
  //ex 3: 3º Forma de fazer => Mais dificil, utilizando oq acabamos de aprender mais ainda nao conseguir tirar o  
  // calcularDesconto do array quando é chamado no console, arrow function dentro
  // da classe "Estudante", =>"calcularDesconto: [Function: calcularDesconto],"      =)
 
  //"Pedir ajudar" ? 

  class Estudante {
    constructor(nome, idade) {
      this.nome = nome
      this.idade = idade
    }
    
    calcularDesconto = () => {
      return this.idade < 20 ? 0.1 : 0.05
    }
  }
  
  const aplicarDesconto = (estudantes) => {
    return estudantes.map((estudante) => {
      const novoEstudante = new Estudante(estudante.nome, estudante.idade)
      novoEstudante.desconto = novoEstudante.calcularDesconto() // aquir é meu problema mais como fazer
      return novoEstudante
    })
  }
  const estudantesComDesconto = aplicarDesconto(estudantes)
  console.log(estudantesComDesconto)