const carregarEstilo=()=>{
    
    const mudanca = document.getElementById('fonte')
    mudanca.classList ='fonte'

    const mudanca2 = document.getElementById('titulo')
    mudanca2.className = 'tituloEstilo'

    const mudanca3 = document.querySelectorAll('.paragrafo1_2')
    mudanca3.forEach(paragrafo => {
        paragrafo.classList.add('paragrafoEstilo')
    })

          // obs: tentando remover o paragrafo 3 e nao sei como tentei e nao conseguir
    // const mudanca4 = document.getElementsByClassName('.estilo3')
    // mudanca4.classList.remove('estilo3')

    // const mudaca4_1 =document.querySelector('.estilo3')
    // mudaca4_1.forEach(paragrafo =>{
    //     paragrafo.classList.remove('estilo3')
    // })

    // const mudanca4_2 = document.getElementById('estilo3')
    // mudanca4_2.classList.remove ='estilo3'
}