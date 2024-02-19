
const gerarArtigo = async (id)=>{
    let dados = await fetch(`http://localhost:3000/artigos/${id}`)
    const artigo = await dados.json()

    return artigo
}

const carregarDadosDoArtigo = (artigo) => {
    document.querySelector('#titulo').innerText = artigo.title;
    // document.querySelector('#autor').value = artigo.author
    // document.querySelector('#imagemSelecao').value = artigo.imagem
    // document.querySelector('#textoDescricao').value = artigo.descricao
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