const mudarCor = () => {
    const paragrafo = document.getElementById('paragrafo1')
    //paragrafo.classList.add('red')
    // paragrafo.classList.remove('red')
    const classeExiste = paragrafo.classList.contains('red')
      //se exite mostra true se nao false para "teste"
      console.log(classeExiste)
}
// função chamada ao clicar no botão "Alterar parágrafos"
const mudarParagrafos = () => {
      //recupera os elementos HTML com a classe paragrafo
    const paragrafos = document.getElementsByClassName('paragrafo') //formato HTMLCollection
    console.log(paragrafos)

       //transforma os paragrafos do formato HTMLCollection para o formato de Array padrão
    const paragrafosArray = Array.from (paragrafos)

        //Percorre os elementos do array (os parágrafos) e altera o seu conteúdo
    paragrafosArray.forEach(item => {
        item.innerHTML = 'banana'
    })
}