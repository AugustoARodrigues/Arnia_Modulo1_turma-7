const alterarTitulo=() => {
    //recuperei o elemento com o id = titulo
    let tuitulo = document.querySelector('#titulo')
      //alterei o conteudo do elemento (tag) encontrado
    tuitulo.innerHTML = 'Novo Titulo'
}

const alterarTitulo2 =() => {
    const titulo2 = document.querySelector('.titulo2')
    titulo2.innerHTML = 'Bem Vindo Augusto'
}

const alterarTitulo3 =() => {
    const titulo3 = document.querySelector('.titulo3')
    titulo3.innerHTML = titulo3.innerHTML + ' - Bem Vindo Augusto'
}

const alterarTitulo45 =() => {
    //recuperar o primeiro elemento que atender o seletor => a classe subtitulo
    const titulo45 = document.querySelector('.titulo45')
    titulo45.innerHTML = titulo45.innerHTML + ' - Voce esta aqui'
}

const alterarTitulo67 =() => {
     //recuperar a lista de elementos que atendem o selector => a classe subtitulo
    const titulo67 = document.querySelectorAll('.titulo67')
    console.log(titulo67)

    titulo67.forEach(item => {
        item.innerHTML = item.innerHTML + ' - AQui!!!'
    })
}