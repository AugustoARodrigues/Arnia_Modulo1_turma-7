// Faça um programa para pedir 10 nomes de pessoas ao 
// usuário e acusar quantas se chamam “Maria”

const io = require('../io/io')

let quantidade = 0

for (let i=1; i<= 10; i++){
    io.write('Digite os Nomes: ')
    const nome = io.read()  // digite os nomes

    if(nome === 'Maria' || nome === 'maria' ){  // se aparece o nome 'Maria' ou "maria" seja amarzenado 
        quantidade ++ // vai somando os nomes maria que aparecer
    }
}

io.write(`O nome Maria sugiu ${quantidade} vezes`)
