const formulario = document.querySelector('#formulario')

const cadastrarArtigo = async (objetoArtigo)=>{
    await fetch('http://localhost:3000/artigos', {
        method: 'POST', //tipo de método HTTP
        headers: { //informações adicionais (formato dos dados: fixo)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoArtigo) //conteudo a ser armazenado na API (é necessário converter para string com o JSON.stringify)
    })
}

formulario.addEventListener('submit', async(e)=>{
    e.preventDefault()  

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagemSelecao'].value
    const texto = formulario.elements['textoDescricao'].value

    console.log(titulo, autor, imagem, texto)

    const objetoArtigo ={
        title: titulo,
        author: autor,
        // img_url: `http://localhost:5000/uploads/${imagem}`,
        imagem,
        descricao: texto,
    }
    await cadastrarArtigo(objetoArtigo)

    window.location = 'index.html'
})