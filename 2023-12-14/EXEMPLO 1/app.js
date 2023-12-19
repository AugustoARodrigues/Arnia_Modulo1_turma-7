const alertaInicio = () => {
  console.log(`Seja Bem vido Augusto =)`);
  // window.alert('Como voce esta?')
};

const alertarClique = () => {
  console.log("Voce apareceu hoje!!");
};

const alterarParagrafo = () => {
  let paragrafo = document.getElementById("first");
  console.log(paragrafo);

  paragrafo.innerHTML = "Teste";
  // p=> agora seu conteudo é 'teste'
};

const alterarParagrafoDivs = () => {
  const paragrafo = document.getElementById("first");
  paragrafo.innerHTML = `
        <div>
            Hoje eu vou!
        </div>
        <div>
            Aqui estou!
        </div>
  `
  // p=> agora seu conteudo para 'Divs'
  console.log(paragrafo)
}
