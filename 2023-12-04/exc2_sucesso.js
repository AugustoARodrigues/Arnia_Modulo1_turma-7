const io = require('../io/io')


// imprima de contagem 1 a 18 para teste

// let idade = 0 
// while(idade <=25){
//     idade ++
//     if(idade < 5){
//         return ('Não Pode Participar')
//     } else if(idade >=5 && idade <=7){
//         return ('Sua Categoria é: Infantil A')
//     } else if(idade >=8 && idade <= 10){
//         return ('Sua Categoria é: Infantil B')
//     }else if(idade >=11 && idade <= 13){
//         return ('Sua Categoria é: Juvenil A')
//     } else if(idade >=14 && idade <= 17){
//         return ('Sua Categoria é: Infantil B')
//     } else {
//         return 'Adulto'
//     }
// }
// io.write(idade)



// for(let i=1;i<=10; i++){
//     io.write(`teste ${idade}`)
// }




// io.write('Digite sua Idade, para saber sua categoria:')
// const idade = io.readInt()

function imprimir_e_classificar(){
    for(let n=1; n <= 20; n++){
        io.write(`Numero ${n} - ${categoria_nadador(n)}`)
    }

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
}
const resultado = imprimir_e_classificar()
io.write(resultado)