const aquiPosts = async ()=>{
    const buscaApiHttp = await fetch('http://localhost:3000/posts')
    console.log(buscaApiHttp)
    const posts = await buscaApiHttp.json()
    console.log(posts)
    return posts
}
const mostrarPosts = (posts) =>{

    const postsDiv = document.querySelector('.noticias')
    postsDiv.innerHTML = '' //aqui
    posts.forEach(post => {
        postsDiv.innerHTML +=
        `
    <div class='info'>   
            <div><img class="imgNoticia" src="${post.imagem}" alt="${post.title}">
            </div> <br>
        <div>
            <h2>${post.title}</h2>
            
            <p>${post.descricao}</p>
        </div>
    </div>
        `
    })
}

const carregarDados = async () =>{
    const postagens = await aquiPosts()
    mostrarPosts(postagens)
}

// //aqui
// const adicionarNovaNoticia = () => {
//     const noticiasDiv = document.querySelector('.noticias')
//     // Adicione aqui a lógica para criar uma nova notícia e adicioná-la ao DOM
// }

// document.getElementById('btnNovaNoticia').addEventListener('click', adicionarNovaNoticia)

carregarDados()


// conseguir colocar assim que click no botao e add a noticia