const mudarCorTitulo =() =>{
    let teste = document.getElementById('titulo')
   // if(teste.style.color == 'red'){}
    teste.className = 'textoverde'
}

const mudarCorSubTitulo=()=>{
    const subtitulo = document.getElementById('titulo')
    subtitulo.classList.add('textoAzul')
    subtitulo.classList.add('sublinhado')
}