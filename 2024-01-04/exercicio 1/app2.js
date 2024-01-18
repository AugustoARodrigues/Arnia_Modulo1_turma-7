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
})
// -----------------------Funcao de armazenar os dados digitado---------------------------
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const codigo = document.querySelector("#codigo").value
    const nome = document.querySelector("#nome").value
    const categoria = document.querySelector("#categoria").value
    const preco = document.querySelector("#preco").value
    const quantidade = document.querySelector("#quantidade").value
    const totalValor = parseInt(preco) * parseInt(quantidade)

    console.log(totalValor)

    document.querySelector('.resultado').innerHTML = 
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