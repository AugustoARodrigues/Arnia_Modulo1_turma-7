const carregarEstilo = () => {

    //Isso seleciona o elemento com o ID 'fonte', que é o elemento principal que você deseja alterar o estilo.
    const mudanca = document.getElementById('fonte')
    mudanca.classList.toggle('fonte')

    // Isso seleciona o elemento do título.
    const mudanca2 = document.getElementById('titulo')
    
    //verifica se a classe 'tituloEstilo' está presente. Se estiver, ela a remove; se não estiver, ela a adiciona.
    if (mudanca2.classList.contains('tituloEstilo')) {
        mudanca2.classList.remove('tituloEstilo')
    } else {
        mudanca2.classList.add('tituloEstilo')
    }

    // Isso seleciona todos os elementos com a classe paragrafo1_2
    const mudanca3 = document.querySelectorAll('.paragrafo1_2')

    //Para cada parágrafo, verifica se a classe 'paragrafoEstilo' está presente e age de acordo, removendo ou adicionando a classe.
    mudanca3.forEach(paragrafo => {
        if (paragrafo.classList.contains('paragrafoEstilo')) {
            paragrafo.classList.remove('paragrafoEstilo')
        } else {
            paragrafo.classList.add('paragrafoEstilo')
        }
    });
    const mudancaBotao = document.getElementById('buton')

    //Isso verifica se a classe 'fonte' está presente no elemento principal. Se estiver, o texto do botão é definido como 'Retornar ao Normal'; caso contrário, é definido como 'Carregar Estilo'.
    mudancaBotao.innerHTML = mudanca.classList.contains('fonte') ? 'Retornar ao Normal' : 'Carregar Estilo';
    
    // ou 

    // if (mudanca.classList.contains('fonte')) {
    //     mudancaBotao.innerHTML = 'Retornar ao Normal';
    // } else {
    //     mudancaBotao.innerHTML = 'Carregar Estilo';
    // }
}
