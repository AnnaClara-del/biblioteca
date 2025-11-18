document.addEventListener("DOMContentLoaded", () => {

  const livros = [
    { id: "acaba", titulo: "É Assim que Acaba", autor: "Colleen Hoover", imagem: "imagem/acaba.jpg", link: "leitura.html?livro=acaba" },
    { id: "verity", titulo: "Verity", autor: "Colleen Hoover", imagem: "imagem/verity.jpg", link: "leitura.html?livro=verity" },
    { id: "comeca", titulo: "É Assim que Começa", autor: "Colleen Hoover", imagem: "imagem/comeca.jpg", link: "leitura.html?livro=comeca" },
    { id: "tarde", titulo: "Tarde Demais", autor: "Colleen Hoover", imagem: "imagem/tarde.jpg", link: "leitura.html?livro=tarde" },
    { id: "partes", titulo: "As Mil Partes do Meu Coração", autor: "Colleen Hoover", imagem: "imagem/partes.jpg", link: "leitura.html?livro=partes" }
  ];

  // Inicializa contadores no localStorage
  livros.forEach(livro => {
    if (!localStorage.getItem(`cliques_${livro.id}`)) {
      localStorage.setItem(`cliques_${livro.id}`, 0);
    }
  });

  const container = document.querySelector(".livros-destaque-container");

  function atualizarDestaques() {
    container.innerHTML = "";

    // Ordena livros pelo número de cliques
    const livrosOrdenados = [...livros].sort((a, b) => {
      return parseInt(localStorage.getItem(`cliques_${b.id}`)) - parseInt(localStorage.getItem(`cliques_${a.id}`));
    });

    // Pega top 5
    livrosOrdenados.slice(0, 5).forEach(livro => {
      const div = document.createElement("div");
      div.classList.add("livro-destaque");
      div.innerHTML = `
        <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}">
        <h3>${livro.titulo}</h3>
        <p>${livro.autor}</p>
        <a href="${livro.link}" class="btn" data-id="${livro.id}">Ler Agora</a>
      `;
      container.appendChild(div);
    });

    // Adiciona listener para contar cliques
    container.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        let cliques = parseInt(localStorage.getItem(`cliques_${id}`)) || 0;
        cliques++;
        localStorage.setItem(`cliques_${id}`, cliques);
        // Atualiza os destaques após o clique
        atualizarDestaques();
      });
    });
  }

  atualizarDestaques();
});