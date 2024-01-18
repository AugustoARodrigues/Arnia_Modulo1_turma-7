const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = formulario.elements['nome'].value
    const data = formulario.elements['data'].value

    const divResultado = document.querySelector('#resultado')
    const dataFormatada = new Date(data).toLocaleDateString()  // deixa no formado a data aaaa/mes/dia
    divResultado.innerHTML = `${nome} nasceu em ${dataFormatada}`
})