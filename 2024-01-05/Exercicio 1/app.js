
const timestamp = (new Date()).getTime()
const publicKey = '7835523158f13d563c372c614864e380'
const privateKey = '9bca28c0bca314ab436f5fbe4c26cdfbd185aeef'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results)
        const personagens = resposta.data.results
        const content = document.querySelector('#content')





        personagens.forEach(personagem => {
            const content = document.querySelector('#content')
        
            //Cria um container para cada personagem
            const characterContainer = document.createElement('div')
            characterContainer.classList.add('caracteristica-container')
        
            // Acrescenta informações do personagem e imagem ao contêiner
            characterContainer.innerHTML =
            `
                <div>
                   
                    <img class="imagem" src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                   
                        ${personagem.name}
                    

                    <div>                    
                        <p>
                            Revistas 
                            Avengers: The Initiative (2007) #14
                            Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)
                        </p>
                     </div>
                </div>
            `
        
            // Acrescenta o contêiner de caracteres ao conteúdo
            content.appendChild(characterContainer)
        })






    })