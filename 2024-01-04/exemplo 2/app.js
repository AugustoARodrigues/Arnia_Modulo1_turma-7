const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) => {
    //evitar a execução do comportamento padrão da submissão
    evento.preventDefault()
                                             //name do formulario
    const numero1Value = formulario.elements['numero1'].value  
    const numero2Value = formulario.elements['numero2'].value
    // parseInt funcao para converter em numero inteiro  
    const soma = parseInt(numero1Value) + parseInt(numero2Value)

    console.log(soma)
    
    const divResultado = document.querySelector('#resultado')
    divResultado.innerHTML = `A soma dos números é: ${soma}`
})