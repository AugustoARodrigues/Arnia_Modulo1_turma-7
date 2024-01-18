// fazendo a requisição HTTP para a rota /users
const dados = fetch('https://jsonplaceholder.typicode.com/users')
console.log(dados)

//definindo a acao a ser efetuada apos a conclusao da promesa(receber a resposta em formato HTTP. É PRECISO CONVERTER)
dados.then ((respostaHttp) => {
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta)=>{
    console.log(resposta)
    const lista = document.querySelector('.lista')

    resposta.forEach((usuario) => {
        lista.innerHTML = lista.innerHTML + 
        `
        <li>
            ${usuario.id} - ${usuario.name}

        </li>
        `
    })
})