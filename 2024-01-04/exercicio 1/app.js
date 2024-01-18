// ----------------------Mudar a cor do botao---------------------------------------
const botao = document.querySelector('.botao')

botao.addEventListener('mouseover', () => {
    botao.classList.add('gray')
})
botao.addEventListener('mouseleave', () => {
    botao.classList.remove('gray')
})
// ------------------------Remover a funcao de esconder o resultado--------------------
botao.addEventListener('click', ()=>{
    const resultadoRevelar = document.querySelector('.resultado')
    resultadoRevelar.classList.remove('revelar')
       //  ou
    // resultadoRevelar.style.display = 'block'

    //Portanto, quando o botão é clicado, a div com a classe .resultado que estava oculta (com display: none; ou pela classe revelar) se tornará visível, permitindo que o conteúdo dentro dela seja exibido na página.

    
})
// -----------------------Funcao de armazenar os dados digitado---------------------------
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    //pegar os valores
    const codigo = formulario.elements['codigo'].value
    const nome  = formulario.elements['nome'].value
    const categoria  = formulario.elements['categoria'].value
    const preco = formulario.elements['preco'].value
    const quantidade = formulario.elements['quantidade'].value
    console.log(nome,codigo)

    const totalValor = parseInt(preco) * parseInt(quantidade)
    console.log(totalValor)

    //colocar o html direto não precisa colocar
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = 
    ` 
    <div class='tituloResultado'><h1>#${codigo} - ${nome}</h1> </div>
    <div class='subtituloResultado'>
        <p>Categoria</p> <p>${categoria}</p> 
    </div>
    <div class='subtituloResultado'>
        <p>Preco</p> <p>${preco}</p> 
    </div>
    <div class='subtituloResultado'>
        <p>Quantidade</p> <p>${quantidade}</p> 
    </div>
    <div class="valorResultado">
        R$ ${totalValor}
    </div>
    
    `
})