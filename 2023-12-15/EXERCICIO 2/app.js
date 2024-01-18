// Função JavaScript que é chamada quando o botão é clicado.
const carregarEstilo = () => {
  // Seleciona o elemento com ID "fonte".
  const body = document.getElementById("fonte");

  // Adiciona ou remove a classe "dark" do elemento "fonte", alternando entre os temas claro e escuro.
  // esta invertendo o valor "toggle"
  // body.classList.toggle('dark')

  // modo escuro apos o click
  //    Seleciona o elemento do botão.
  const mudanca = document.getElementById("butaoMudado");

  // verificando se existe
  // Verifica se a classe "dark" está presente.
  if (body.classList.contains("dark")) {
    // Se presente, atualiza o texto do botão para 'Dark Mode'.
    body.classList.remove("dark");
    mudanca.innerHTML = "Dark";
  } else {
    mudanca.innerHTML = "Dark Mode";
    body.classList.add("dark");
    // Se ausente, atualiza o texto do botão para 'Dark'.
  } // apos o primeiro click mudar para o normal
};
