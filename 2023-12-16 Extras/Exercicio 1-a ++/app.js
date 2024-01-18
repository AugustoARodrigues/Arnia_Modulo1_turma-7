//  Escreva um programa de computador que solicite login e senha para um usuário. Caso o login e 
// senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a 
// mensagem "Dados inválidos". (Os valores de login e senha corretos devem ser definidos em variáveis 
// pelo programador 


class Login  {
   constructor(nome,email,senha,senhaConfimar ){
    this.nome = nome
    this.email= email
    this.senha = senha
    this.senhaConfirmacao = senhaConfimar
   }
}

const cadastrar=()=>{
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const senhaConfimar = document.getElementById('senhaConfimar').value

    const novoUsuario = new Login(nome,email,senha,senhaConfimar)
    if(senha !== senhaConfimar){
        alert('Senha não coicidem. Tente novamente.')
        return
    }else{
        alert("Cadastro realizado com sucesso!")
    }
    console.log(novoUsuario)
}

const elementoSenha = Array.from(Login)
console.log(elementoSenha)