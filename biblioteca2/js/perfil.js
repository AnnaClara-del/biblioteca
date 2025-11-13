// Script para a página de perfil

document.addEventListener("DOMContentLoaded", () => {
  // Recuperar dados do usuário do localStorage
  carregarDadosPerfil()

  // Gerenciar abas
  const abaBtns = document.querySelectorAll(".aba-btn")
  abaBtns.forEach((btn) => {
    btn.addEventListener("click", mudarAba)
  })

  // Formulário de dados pessoais
  const formDados = document.getElementById("form-dados")
  formDados.addEventListener("submit", salvarDadosPerfil)

  // Formulário de senha
  const formSenha = document.getElementById("form-senha")
  formSenha.addEventListener("submit", alterarSenha)

  // Botão alterar foto
  const btnAlterarFoto = document.getElementById("btn-alterar-foto")
  btnAlterarFoto.addEventListener("click", alterarFoto)

  // Botão deletar conta
  const btnDeletarConta = document.getElementById("btn-deletar-conta")
  btnDeletarConta.addEventListener("click", deletarConta)

  // Botão logout
  const btnLogout = document.getElementById("btn-logout")
  btnLogout.addEventListener("click", fazerLogout)

  // Botão voltar
  const btnVoltar = document.getElementById("btn-voltar")
  if (btnVoltar) {
    btnVoltar.addEventListener("click", voltarPerfil)
  }

  // Carregar favoritos e histórico
  carregarFavoritos()
  carregarHistorico()
})

// Carregar dados do perfil do localStorage
function carregarDadosPerfil() {
  const usuario = JSON.parse(localStorage.getItem("currentUser")) || {}

  document.getElementById("user-name").textContent = usuario.name || usuario.username || "Usuário"
  document.getElementById("user-email").textContent = usuario.email || "sem email"
  document.getElementById("nome").value = usuario.name || usuario.username || ""
  document.getElementById("email").value = usuario.email || ""
  document.getElementById("data-nasc").value = usuario.dataNasc || ""
  document.getElementById("genero-favorito").value = usuario.generoFavorito || ""
  document.getElementById("bio").value = usuario.bio || ""
  document.getElementById("data-membro").textContent = usuario.createdAt || new Date().getFullYear()

  // Alterar avatar se existir
  if (usuario.avatar) {
    document.getElementById("user-avatar").src = usuario.avatar
  }
}

// Salvar dados pessoais
function salvarDadosPerfil(e) {
  e.preventDefault()

  const usuario = JSON.parse(localStorage.getItem("currentUser")) || {}

  usuario.name = document.getElementById("nome").value
  usuario.email = document.getElementById("email").value
  usuario.dataNasc = document.getElementById("data-nasc").value
  usuario.generoFavorito = document.getElementById("genero-favorito").value
  usuario.bio = document.getElementById("bio").value

  localStorage.setItem("currentUser", JSON.stringify(usuario))

  alert("✅ Dados salvos com sucesso!")
  carregarDadosPerfil()
}

// Alternar abas
function mudarAba(e) {
  const abaAtiva = e.target.getAttribute("data-aba")

  // Remover classe ativa de todos os botões e conteúdos
  document.querySelectorAll(".aba-btn").forEach((btn) => {
    btn.classList.remove("aba-ativa")
  })

  document.querySelectorAll(".aba-conteudo").forEach((conteudo) => {
    conteudo.classList.remove("aba-ativa")
  })

  // Adicionar classe ativa ao botão clicado
  e.target.classList.add("aba-ativa")

  // Mostrar conteúdo correspondente
  document.getElementById("aba-" + abaAtiva).classList.add("aba-ativa")
}

// Alterar foto de perfil
function alterarFoto() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"

  input.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const novaFoto = event.target.result

        // Salvar no localStorage
        const usuario = JSON.parse(localStorage.getItem("currentUser")) || {}
        usuario.avatar = novaFoto
        localStorage.setItem("currentUser", JSON.stringify(usuario))

        // Atualizar imagem na página
        document.getElementById("user-avatar").src = novaFoto
        alert("✅ Foto de perfil atualizada!")
      }
      reader.readAsDataURL(file)
    }
  })

  input.click()
}

// Alterar senha
function alterarSenha(e) {
  e.preventDefault()

  const senhaAtual = document.getElementById("senha-atual").value
  const senhaNova = document.getElementById("senha-nova").value
  const confirmarSenha = document.getElementById("confirmar-senha").value

  const usuario = JSON.parse(localStorage.getItem("currentUser")) || {}

  if (senhaAtual !== usuario.senha) {
    alert("❌ Senha atual incorreta!")
    return
  }

  if (senhaNova !== confirmarSenha) {
    alert("❌ As novas senhas não coincidem!")
    return
  }

  if (senhaNova.length < 4) {
    alert("❌ A nova senha deve ter pelo menos 4 caracteres!")
    return
  }

  usuario.senha = senhaNova
  localStorage.setItem("currentUser", JSON.stringify(usuario))

  alert("✅ Senha alterada com sucesso!")
  document.getElementById("form-senha").reset()
}

// Carregar livros favoritos
function carregarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
  const lista = document.getElementById("lista-favoritos")

  if (favoritos.length === 0) {
    lista.innerHTML = '<p class="vazio">Você não tem livros favoritos ainda</p>'
    return
  }

  lista.innerHTML = favoritos
    .map(
      (livro) => `
    <div class="favorito-item">
      <img src="${livro.capa}" alt="${livro.titulo}">
      <div class="favorito-info">
        <h4>${livro.titulo}</h4>
        <p><strong>Gênero:</strong> ${livro.genero}</p>
        <p><strong>Sinopse:</strong> ${livro.descricao.substring(0, 100)}...</p>
      </div>
    </div>
  `,
    )
    .join("")
}

// Carregar histórico de leitura
function carregarHistorico() {
  const historico = JSON.parse(localStorage.getItem("historico")) || []
  const container = document.getElementById("historico-leitura")

  if (historico.length === 0) {
    container.innerHTML = '<p class="vazio">Você ainda não começou a ler nenhum livro</p>'
    return
  }

  container.innerHTML = historico
    .map((livro) => {
      const progresso = livro.progresso || 0
      return `
      <div class="historico-item">
        <img src="${livro.capa}" alt="${livro.titulo}">
        <div class="historico-info">
          <h4>${livro.titulo}</h4>
          <p><strong>Gênero:</strong> ${livro.genero}</p>
          <p><strong>Última leitura:</strong> ${new Date(livro.ultimaLeitura).toLocaleDateString("pt-BR")}</p>
          <div class="progresso-leitura">
            <p>Progresso: <strong>${progresso}%</strong></p>
            <div class="progresso-leitura-barra">
              <div class="progresso-leitura-preenchimento" style="width: ${progresso}%"></div>
            </div>
          </div>
        </div>
      </div>
    `
    })
    .join("")
}

// Deletar conta
function deletarConta() {
  const confirmacao = confirm(
    "⚠️ Tem certeza que deseja deletar sua conta?\n" + "Esta ação é irreversível e todos os seus dados serão perdidos!",
  )

  if (confirmacao) {
    const confirmacao2 = confirm("⚠️ ÚLTIMA CONFIRMAÇÃO: Você realmente deseja deletar sua conta?")

    if (confirmacao2) {
      localStorage.removeItem("currentUser")
      localStorage.removeItem("favoritos")
      localStorage.removeItem("historico")
      alert("✅ Sua conta foi deletada com sucesso")
      window.location.href = "login.html"
    }
  }
}

// Fazer logout
function fazerLogout() {
  const confirmacao = confirm("Você tem certeza que deseja sair?")
  if (confirmacao) {
    localStorage.removeItem("currentUser")
    window.location.href = "login.html"
  }
}

function voltarPerfil() {
  window.location.href = "biblioteca.html"
}
