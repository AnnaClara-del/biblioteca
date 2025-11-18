document.addEventListener("DOMContentLoaded", () => {
  const campoPesquisa = document.getElementById("pesquisa")
  const generoSelect = document.getElementById("genero-select")
  const btnFavoritos = document.getElementById("btn-favoritos")
  const livros = document.querySelectorAll(".livro")

  // Carregar favoritos do localStorage
  const favoritos = JSON.parse(localStorage.getItem("livrosFavoritos")) || []
  let mostrando_apenas_favoritos = false

  const urlParams = new URLSearchParams(window.location.search)
  const generoFromUrl = urlParams.get("genero")
  if (generoFromUrl) {
    generoSelect.value = generoFromUrl
  }

  // Inicializar botões de favorito com estado salvo
  atualizarEstadoFavoritos()

  // Event listeners
  campoPesquisa?.addEventListener("input", filtrarLivros)
  generoSelect?.addEventListener("change", filtrarLivros)

  btnFavoritos?.addEventListener("click", function () {
    mostrando_apenas_favoritos = !mostrando_apenas_favoritos
    this.classList.toggle("ativo")
    filtrarLivros()
  })

  // Adicionar event listeners aos botões de favorito
  document.querySelectorAll(".btn-favorito").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      const livro = this.closest(".livro")
      const titulo = livro.querySelector("h3").innerText

      const index = favoritos.indexOf(titulo)
      if (index > -1) {
        favoritos.splice(index, 1)
      } else {
        favoritos.push(titulo)
      }

      localStorage.setItem("livrosFavoritos", JSON.stringify(favoritos))
      atualizarEstadoFavoritos()

      if (mostrando_apenas_favoritos) {
        filtrarLivros()
      }
    })
  })

  function atualizarEstadoFavoritos() {
    document.querySelectorAll(".btn-favorito").forEach((btn) => {
      const livro = btn.closest(".livro")
      const titulo = livro.querySelector("h3").innerText

      if (favoritos.includes(titulo)) {
        btn.classList.add("favorito")
        btn.innerText = "❤️"
      } else {
        btn.classList.remove("favorito")
        btn.innerText = "🤍"
      }
    })
  }

  function filtrarLivros() {
    const termo = campoPesquisa?.value.toLowerCase() || ""
    const generoSelecionado = generoSelect?.value || ""

    livros.forEach((livro) => {
      const titulo = livro.querySelector("h3")?.innerText.toLowerCase() || ""
      const descricao = livro.querySelector("p:not(.genero-tag)")?.innerText.toLowerCase() || ""
      const genero = livro.getAttribute("data-genero") || ""
      const tituloDoLivro = livro.querySelector("h3").innerText

      // Verificar se passa nos filtros
      const passaNaPesquisa = titulo.includes(termo) || descricao.includes(termo)

      const passaNoGenero = generoSelecionado === "" || genero === generoSelecionado

      const passaNosFavoritos = !mostrando_apenas_favoritos || favoritos.includes(tituloDoLivro)

      if (passaNaPesquisa && passaNoGenero && passaNosFavoritos) {
        livro.style.display = "block"
      } else {
        livro.style.display = "none"
      }
    })
  }

  filtrarLivros()
})