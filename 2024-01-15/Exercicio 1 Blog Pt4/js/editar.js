const formulario = document.querySelector('#formulario')
let id = null

formulario.addEventListener('submit', async (e) =>{
    e.preventDefault()   

    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['imagemSelecao'].value
    const texto = formulario.elements['textoDescricao'].value

    const objetoArtigo ={
        title: titulo,
        author: autor,
        imagem,
        descricao: texto,
    }

    await editarArtigo(id, objetoArtigo)

    window.location= '../index.html'
})

const editarArtigo = async (id, artigo) =>{
    await fetch(`http://localhost:3000/artigos/${id}`, {
        method: 'PUT',
        headers: { //informações adicionais (formato dos dados: fixo)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artigo)
    })
}

// primeira parte

const gerarArtigo = async (id)=>{
    let dados = await fetch(`http://localhost:3000/artigos/${id}`)
    const artigo = await dados.json()

    return artigo
}

const carregarDadosDoArtigo = (artigo) => {
    document.querySelector('#titulo').value = artigo.title
    document.querySelector('#autor').value = artigo.author
    document.querySelector('#imagemSelecao').value = artigo.imagem
    document.querySelector('#textoDescricao').value = artigo.descricao
}

const carregarDados = async ()=>{
    const parametros = window.location.search
    console.log(parametros)

    const objetoParametros = new URLSearchParams(parametros)
    // console.log('id')
     id = objetoParametros.get('id')
    // console.log('id')

    const artigo = await gerarArtigo(id)
    // console.log(artigo)

    carregarDadosDoArtigo(artigo)
}

carregarDados()