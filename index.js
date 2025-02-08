// função para consumir api de filmes
function getData() {
  // elemento de lista
  let ulElement = document.getElementById("ulElement");
  //   url da api
  const URL = "https://sujeitoprogramador.com/r-api/?api=filmes";
  // usando fecth
  fetch(URL)
    //   then
    .then((r) => r.json())
    // then
    .then((data) => {
      // mostra no console os dados
      console.log(data);
      //   para cada filme
      data.forEach((filme) => {
        // cria um elemento do item de lista para cada filme
        let liElement = document.createElement("li");
        //   cria um elemento de titulo para o nome
        let titleElement = document.createElement("h2");
        //   cria elemento de imagem para planer do filme
        let imgElement = document.createElement("img");
        //   cria elemento de link para trailer do filme
        let linkElement = document.createElement("a");
        //   cria um elemento de paragrafo para resumo
        let pElement = document.createElement("p");
        //   titulo recebe o nome dos filmes
        titleElement.innerText = filme.nome;
        //   img recebe planer do filme
        imgElement.setAttribute("src", filme.foto);
        //   link recebe texto
        linkElement.innerText = "Assistir!";
        //   link recebe link do trailer
        linkElement.setAttribute("href", "https://youtube.com");
        linkElement.setAttribute("target", "_blank");
        //   p recebe resumo do filme
        pElement.innerText = filme.sinopse;

        //   li adiciona titulo
        liElement.appendChild(titleElement);
        //   li adiciona img
        liElement.appendChild(imgElement);
        //   li adiciona link
        liElement.appendChild(linkElement);
        //   li adiciona sinopse
        liElement.appendChild(pElement);
        //   ul adiciona li
        ulElement.appendChild(liElement);
      });
    })
    // cacth / se erro
    .catch((Error) => {
      let mensagemErro = document.createElement("h1");
      mensagemErro.innerText =
        "Ops! A requisição da API falhou, tente novamente mais tarde.";
      ulElement.appendChild(mensagemErro);
      console.log(Error);
    });
}

// chamando a funcao
getData();
