// Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa
// que receba código e valor de 15 transações usando laços de repetição. Calcule e mostre: O valor
// total das compras à vista O valor total das compras à prazo O valor total das compras efetuadas

const io = require("../io/io")

const avista = "v"
const aprazo = "p"

let comprasVista = [];
let comprasPrazo = [];

const valor = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`Digite o ${i + 1}º Valor da Compra:`)
        let pagamento = io.readFloat()
        console.log(`Informe o pagamento, foi ${avista} para a Vista ou ${aprazo} para a Prazo:`)
        let formPagamento = io.read()

        if (formPagamento === avista){
        comprasVista.push(pagamento)
        } else if (formPagamento === aprazo) {
        comprasPrazo.push(pagamento)
        } else {
        console.log(
            'Forma de pagamento invalido. Utilize "v" para a Vista e "p" para a Prazo'
        )
        i-- // Volta para a iteração anterior
        }
    }

    const totalAvista =()=>{
        return comprasVista.reduce((acc, pagamento)=> acc + pagamento,0)
    }

    const totalAprazo=()=>{
        comprasPrazo.reduce((acc, pagamento)=> acc + pagamento,0)
    }

    const totalGeral = totalAvista() + totalAprazo()

    return {comprasVista, comprasPrazo, totalAprazo, totalAvista,totalGeral }
}


const resultado = valor()
console.log(`Valor total das compras a vista: ${resultado.totalAvista()}`)
console.log(`Valor total das compras a prazo: ${resultado.totalAprazo()}`)
console.log(`Valor total das compras efetuadas: ${resultado.totalGeral()}`)
