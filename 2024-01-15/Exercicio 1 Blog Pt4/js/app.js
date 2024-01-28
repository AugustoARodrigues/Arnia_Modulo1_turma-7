const aquiPosts = async ()=>{
    const buscaApiHttp = await fetch('http://localhost:3000/artigos')
    const posts = await buscaApiHttp.json()
    
    return posts
}
const mostrarPosts = (postagens) =>{

    const postsDiv = document.querySelector('.noticias')
    postsDiv.innerHTML = '' //aqui
    postagens.forEach(post => {
        postsDiv.innerHTML +=
        `
    <div class='info'>   
            <div><img class="imgNoticia" src="${post.imagem}" alt="${post.title}">
            </div> <br>
        <div>
            <h2>${post.title}</h2>
            
            <p>${post.descricao}</p>
            <a href="./Html/editar.html?id=${post.id}">
            <button class="editar">Editar</button></a>
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


