// Faça uma função que recebe a idade de um nadador por parâmetro e 
// retorna a categoria desse nadador de acordo com a tabela abaixo:


const io = require('../io/io')

io.write('Digite sua Idade, para saber sua categoria:')
const idade = io.readInt()


function categoria_nadador(idade){
    if(idade < 5){
        return ('Não Pode Participar')
    } else if(idade >=5 && idade <=7){
        return ('Sua Categoria é: Infantil A')
    } else if(idade >=8 && idade <= 10){
        return ('Sua Categoria é: Infantil B')
    }else if(idade >=11 && idade <= 13){
        return ('Sua Categoria é: Juvenil A')
    } else if(idade >=14 && idade <= 17){
        return ('Sua Categoria é: Infantil B')
    } else {
        return 'Adulto'
    }
}

const resultado = categoria_nadador(idade)
io.write(resultado)


