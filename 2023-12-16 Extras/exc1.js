//  Escreva um programa de computador que solicite login e senha para um usuário. Caso o login e 
// senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a 
// mensagem "Dados inválidos". (Os valores de login e senha corretos devem ser definidos em variáveis 
// pelo programador 

const io=require("../io/io")

const email = 'au123'
const senha = '123'

console.log('Digite seu email:')
const loginUsuario = io.read()

console.log('Digite sua Senha:')
const senhaUsuario = io.read()

const login =()=>{
    if(loginUsuario === email && senhaUsuario === senha){
        console.log('Bem Vindo ao Sistema')
    }else{
        console.log('Dados Invalidos')
    }
}
login()
