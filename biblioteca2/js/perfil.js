// Script para a página de perfil

document.addEventListener("DOMContentLoaded", () => {
  if (!verificarLogin()) {
    alert('Você precisa estar logado para acessar esta página!')
    window.location.href = 'login.html'
    return
  }

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

  // Carregar favoritos e histórico
  carregarFavoritos()
  carregarHistorico()
})

function carregarDadosPerfil() {
  const usuario = obterUsuarioLogado()
  
  if (!usuario) {
    alert('Sessão expirada! Faça login novamente.')
    window.location.href = 'login.html'
    return
  }

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

function alterarFoto() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.capture = "environment" // Permite usar câmera em dispositivos mobile

  input.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validar tamanho do arquivo (máx 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("❌ A imagem deve ter no máximo 5MB!")
        return
      }

      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        alert("❌ Por favor, selecione apenas imagens!")
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const novaFoto = event.target.result

        // Atualizar usando função de atualização
        if (atualizarUsuario({ avatar: novaFoto })) {
          document.getElementById("user-avatar").src = novaFoto
          alert("✅ Foto de perfil atualizada com sucesso!")
        } else {
          alert("❌ Erro ao atualizar foto de perfil!")
        }
      }
      reader.onerror = () => {
        alert("❌ Erro ao ler o arquivo!")
      }
      reader.readAsDataURL(file)
    }
  })

  input.click()
}

function alterarSenha(e) {
  e.preventDefault()

  const senhaAtual = document.getElementById("senha-atual").value
  const senhaNova = document.getElementById("senha-nova").value
  const confirmarSenha = document.getElementById("confirmar-senha").value

  const usuario = obterUsuarioLogado()

  if (senhaAtual !== usuario.senha && senhaAtual !== usuario.password) {
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

  if (atualizarUsuario({ senha: senhaNova, password: senhaNova })) {
    alert("✅ Senha alterada com sucesso!")
    document.getElementById("form-senha").reset()
  } else {
    alert("❌ Erro ao alterar senha!")
  }
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

function deletarConta() {
  const confirmacao = confirm(
    "⚠️ ATENÇÃO: Você está prestes a DELETAR SUA CONTA!\n\n" + 
    "Esta ação é IRREVERSÍVEL e você perderá:\n" +
    "• Todos os seus dados pessoais\n" +
    "• Histórico de leitura\n" +
    "• Livros favoritos\n" +
    "• Configurações personalizadas\n\n" +
    "Tem CERTEZA que deseja continuar?"
  )

  if (confirmacao) {
    const confirmacao2 = confirm("⚠️ ÚLTIMA CONFIRMAÇÃO:\n\nDigite OK para DELETAR SUA CONTA PERMANENTEMENTE")

    if (confirmacao2) {
      const usuario = obterUsuarioLogado()
      
      // Não permitir deletar conta de admin
      if (usuario && usuario.isAdmin) {
        alert("❌ A conta de administrador não pode ser deletada!")
        return
      }
      
      // Remover da lista de usuários
      if (usuario) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
        const novaLista = usuarios.filter(u => u.id !== usuario.id)
        localStorage.setItem('usuarios', JSON.stringify(novaLista))
      }
      
      // Remover dados do usuário
      localStorage.removeItem('usuarioLogado')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('favoritos')
      localStorage.removeItem('historico')
      
      alert("✅ Sua conta foi deletada com sucesso.\n\nSentiremos sua falta! 😢")
      window.location.href = "index.html"
    }
  }
}

// Fazer logout
function fazerLogout(e) {
  e.preventDefault()
  const confirmacao = confirm("Você tem certeza que deseja sair?")
  if (confirmacao) {
    localStorage.removeItem("usuarioLogado")
    localStorage.removeItem("currentUser")
    window.location.href = "index.html"
  }
}

function salvarDadosPerfil(e) {
  e.preventDefault()
  
  const nome = document.getElementById("nome").value.trim()
  const email = document.getElementById("email").value.trim()
  const dataNasc = document.getElementById("data-nasc").value
  const generoFavorito = document.getElementById("genero-favorito").value
  const bio = document.getElementById("bio").value.trim()
  
  if (!nome || !email) {
    alert("❌ Nome e email são obrigatórios!")
    return
  }
  
  if (atualizarUsuario({ 
    name: nome, 
    email: email,
    dataNasc: dataNasc,
    generoFavorito: generoFavorito,
    bio: bio
  })) {
    alert("✅ Dados atualizados com sucesso!")
    carregarDadosPerfil() // Recarregar dados na tela
  } else {
    alert("❌ Erro ao atualizar dados!")
  }
}
