// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      // Remove ativo de todos os botões e abas
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Adiciona ativo ao botão e aba clicados
      this.classList.add("active")
      document.getElementById(tabName + "-tab").classList.add("active")
    })
  })

  const loginForm = document.getElementById("login-form")
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = document.getElementById("login-user").value.trim()
    const pass = document.getElementById("login-pass").value.trim()

    const resultado = fazerLogin(user, pass)

    if (resultado.sucesso) {
      if (resultado.usuario.isAdmin) {
        alert("✅ Bem-vindo, Administrador!")
        window.location.href = "admin.html"
      } else {
        alert("✅ Login realizado com sucesso!")
        window.location.href = "biblioteca.html"
      }
    } else {
      alert("❌ " + (resultado.mensagem || "Usuário ou senha incorretos. Tente novamente."))
      document.getElementById("login-pass").value = ""
      document.getElementById("login-pass").focus()
    }
  })

  const registerForm = document.getElementById("register-form")
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("register-name").value.trim()
    const username = document.getElementById("register-user").value.trim()
    const password = document.getElementById("register-pass").value.trim()
    const confirmPassword = document.getElementById("register-confirm").value.trim()
    const email = document.getElementById("register-email").value.trim()

    // Validações
    if (password.length < 4) {
      alert("❌ A senha deve ter pelo menos 4 caracteres!")
      return
    }

    if (password !== confirmPassword) {
      alert("❌ As senhas não conferem!")
      return
    }

    const resultado = registrarUsuario(name, username, password, email)

    if (resultado.sucesso) {
      alert("✅ Conta criada com sucesso! Faça login para continuar.")
      registerForm.reset()
      document.querySelector('[data-tab="login"]').click()
    } else {
      alert("❌ " + (resultado.mensagem || "Erro ao criar conta. Tente novamente."))
    }
  })
})
