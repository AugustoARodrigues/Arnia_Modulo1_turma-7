const excluirArtigo = async (id)=> {
    await fetch(`http://localhost:3000/artigos/${id}`,{
        method: 'DELETE'
    })
    carregarDados()
}

const editarArtigo= (id)=>{
    window.location = `html/editar.html?id=${id}`
}


const aquiPosts = async ()=>{
    const buscaApiHttp = await fetch('http://localhost:3000/artigos')
    const posts = await buscaApiHttp.json()
    
    return posts
}
const mostrarPosts = (postagens) =>{

    const postsDiv = document.querySelector('.noticias')
    postsDiv.innerHTML = '' 
    postagens.forEach(post => {
        postsDiv.innerHTML +=
        `
    <div class='info'>   
            <div><img class="imgNoticia" src="${post.imagem}" alt="${post.title}">
            </div> <br>
        <div>
            <h2>${post.title}</h2>
            
            <p>${post.descricao}</p>

            <div class="botoes">
                <button class="editar" onclick="editarArtigo('${post.id}')">Editar</button>
                <button class="excluir" onclick="excluirArtigo('${post.id}')">Excluir</button>
            </div>
        </div>
    </div>
        `
    })
}

const carregarDados = async () =>{
    const postagens = await aquiPosts()
    mostrarPosts(postagens)
}

carregarDados()


