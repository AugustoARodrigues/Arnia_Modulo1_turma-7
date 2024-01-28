const formulario = document.querySelector('#formulario')

/*
    Adicionado ouvinte do evento de SUBMIT ao formulário
    1º parâmetro: evento 
    2º parâmetro: função anonima que será executada quando o evento acontecer
    Quando o formulário for submetido (clicar no botão de cadastrar com type=submit) a função anônima será chamada 
*/
formulario.addEventListener('submit', async (e) => {
    e.preventDefault() // evitar que as informações do fomulario sejam enviadas pra URL

    //recuperar as informações do formulario
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const ano = formulario.elements['ano'].value

    console.log(titulo, autor, ano)

    //cria um objeto com as informações recuperadas do formulário
    const objetoLivro = {
        titulo: titulo,
        autor: autor,
        anoNascimento: ano
    }

        //enviando o objetoLivro para a API
       await fetch('http://localhost:3000/livros', {
            method: 'POST', //tipo de método HTTP
            headers: { //informações adicionais (formato dos dados: fixo)
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoLivro) //conteudo a ser armazenado na API (é necessário converter para string com o JSON.stringify)
        })

    //chama a função de cadastro do livro passando como parametro o objeto
    await cadastrarLivro(objetoLivro)

    window.location = 'index.html'
})
