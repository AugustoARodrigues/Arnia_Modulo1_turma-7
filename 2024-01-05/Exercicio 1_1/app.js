
const timestamp = (new Date()).getTime()
const publicKey = '7835523158f13d563c372c614864e380'
const privateKey = '9bca28c0bca314ab436f5fbe4c26cdfbd185aeef'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)


const visualizarPersonagem = () => {
    promise.then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results)
        console.log(resposta)
        const personagens = resposta.data.results
        let resultado = document.querySelector('.resultado')
        

    
        // Criando o elemento HTML para cada personagem
        personagens.forEach(personagem => {
            let quadrinhos = personagem.comics.items.filter((item, index)=>{
                return index < 2
            })
            let volumes = personagem.series.items.filter((item, index)=>{
                return index < 2
            })
            let quadrinhosHTML = ''
            let volumesHTML = ''
            
            quadrinhos.forEach(quadrinho => {
                quadrinhosHTML += `<li>${quadrinho.name}</li>`
            })
    
            volumes.forEach(volume => {
                volumesHTML += `<li>${volume.name}</li>`
            })
            const personagemHTML = `
            <div class=resultadofinal>
            <img class='imagem' src='${personagem.thumbnail.path}.${personagem.thumbnail.extension}'            </div>
            <div class='texto'>
            <h2>${personagem.name}</h2>
            <p>Revistas: 
            <ul>${quadrinhosHTML}</ul></p>
            <p>Séries:
            <ul>${volumesHTML}</ul></p>
            `
            resultado.innerHTML = resultado.innerHTML + personagemHTML
            
        })
    })}

    visualizarPersonagem()
