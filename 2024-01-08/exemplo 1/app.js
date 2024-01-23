const timestamp = new Date().getTime();
const publicKey = "7835523158f13d563c372c614864e380";
const privateKey = "9bca28c0bca314ab436f5fbe4c26cdfbd185aeef";
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

// const mostrarDados = (resposta) => {
//     //RENDERIZA OS DADOS NA TELA (MOSTRA)
//     const divPersonagens = document.querySelector('.personagens')
//     const personagens = resposta.data.results

//     personagens.forEach(personagem => {
//         divPersonagens.innerHTML = divPersonagens.innerHTML +
//             `<div>${personagem.id} - ${personagem.name}</div>`
//     })
// }

// const buscarPersonagens = async () => {
//     try {
//         //REQUISIÇÃO HTTP - MÉTODO GET
//         const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
//         const resposta = await respostaHttp.json()
//         //Chama a função que irá mostrar os dados passando como parâmetro a resposta da API
//         mostrarDados(resposta)
//     } catch (error) {
//         console.log('Erro: ', error)
//     }
// }

// buscarPersonagens()

//--------------------------------------------------------------------------------------------------

// // N: 2º
// const mostrarDados = (resposta) => {
//   //Renderizando os dados na tela (mostrar)
//   const divPersonagens = document.querySelector(".personagens");
//   const personagens = resposta.data.results

//   personagens.forEach((personagem) => {
//     divPersonagens.innerHTML =
//       divPersonagens.innerHTML +
//       `
//             <div>
//                 ${personagem.id}-${personagem.name}
//             </div>
//             `
//   })
// }

// // N: 1º
// const buscarPersonagens = async () => {
//   try {
//     // Requisição http- METODO GET
//     // await só passar para a proxima linha se execulta essa corretamente
//     const respostaHttp = await fetch(
//       `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
//     )
//     console.log(respostaHttp)
//     const resposta = await respostaHttp.json()
//     //Chama a função que irámostrar os dados passando coo parametro a resposta  da API n 2º
//    mostrarDados(resposta)

//   } catch (error) {
//     // caso tenha algum erro acima vai ser revelado
//     console.log("Erro: ", error)
//   }
// }

// buscarPersonagens()

//--------------------------------------------------------------------------------------------------

// outro exemplo 2 de cima

// const buscarPersonagens = async () => {
//     try {
//       // Requisição http- METODO GET
//       // await só passar para a proxima linha se execulta essa corretamente
//       const respostaHttp = await fetch(
//         `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
//       console.log(respostaHttp)

//       const resposta = await respostaHttp.json()
//       console.log(resposta)

//       const divPersonagens = document.querySelector(".personagens");
//       const personagens = resposta.data.results

//       personagens.forEach((personagem) => {
//         divPersonagens.innerHTML =
//           divPersonagens.innerHTML +
//           `
//                 <div>
//                     ${personagem.id}-${personagem.name}
//                 </div>
//                 `
//       })
//     } catch (error) {
//       // caso tenha algum erro acima vai ser revelado
//       console.log("Erro: ", error)
//     }
//   }

//   buscarPersonagens()

//--------------------------------------------------------------------------------------------------

// outro exemplo 3 de cima

// N: 2º
const mostrarDados = (resposta) => {
    console.log(resposta)
  const divPersonagens = document.querySelector(".personagens")
  const personagens = resposta.data.results

  personagens.forEach((personagem) => {
    divPersonagens.innerHTML +=
      `
            <div>
                ${personagem.id}-${personagem.name}
            </div>
            `
  })
}

// N: 1º
const buscarPersonagens = async () => {
    let resposta
  try {
    const respostaHttp = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`
    )
    resposta = await respostaHttp.json()
    return resposta // Retornar a resposta da requisição

  } catch (error) {
    console.log("Erro: ", error)
    return { data: { results: [] } } // Retornar um objeto vazio em caso de erro
  }
}
// Função assíncrona para aguardar a resposta antes de chamar mostrarDados
const carregarPersonagens = async () => {
    const resposta = await buscarPersonagens()
    mostrarDados(resposta)
  }
  carregarPersonagens()