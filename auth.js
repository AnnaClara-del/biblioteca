// Dados do administrador (hardcoded - não pode ser alterado)
const ADMIN_CREDENTIALS = {
  nome: 'Administrador',
  usuario: 'Administrador',
  email: 'goncalvesannaclara57@gmail.com',
  senha: 'admin123'
}

// Função para fazer login
function fazerLogin(emailOuUsuario, senha) {
  console.log('[v0] Tentando login com:', emailOuUsuario)
  
  // Verificar se é o administrador
  if ((emailOuUsuario === ADMIN_CREDENTIALS.email || 
       emailOuUsuario === ADMIN_CREDENTIALS.usuario || 
       emailOuUsuario === 'admin') && 
      senha === ADMIN_CREDENTIALS.senha) {
    
    const adminUser = {
      id: 'admin-001',
      email: ADMIN_CREDENTIALS.email,
      senha: ADMIN_CREDENTIALS.senha,
      name: ADMIN_CREDENTIALS.nome,
      username: ADMIN_CREDENTIALS.usuario,
      isAdmin: true,
      createdAt: '2025-01-01'
    }
    
    localStorage.setItem('usuarioLogado', JSON.stringify(adminUser))
    localStorage.setItem('currentUser', JSON.stringify(adminUser))
    console.log('[v0] Login admin bem-sucedido')
    return { sucesso: true, usuario: adminUser }
  }
  
  // Verificar usuários normais
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
  const usuario = usuarios.find(u => 
    (u.email === emailOuUsuario || u.username === emailOuUsuario) && 
    (u.senha === senha || u.password === senha)
  )
  
  if (usuario) {
    // Garantir que não seja admin
    usuario.isAdmin = false
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
    localStorage.setItem('currentUser', JSON.stringify(usuario))
    console.log('[v0] Login usuário normal bem-sucedido')
    return { sucesso: true, usuario }
  }
  
  // Compatibilidade com sistema antigo
  const usersAntigos = JSON.parse(localStorage.getItem('users') || '[]')
  const userAntigo = usersAntigos.find(u => 
    (u.username === emailOuUsuario || u.email === emailOuUsuario) && 
    u.password === senha
  )
  
  if (userAntigo) {
    const usuarioNormalizado = {
      id: userAntigo.id,
      name: userAntigo.name,
      username: userAntigo.username,
      email: userAntigo.email || userAntigo.username,
      senha: userAntigo.password,
      isAdmin: false,
      createdAt: userAntigo.createdAt || new Date().getFullYear()
    }
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioNormalizado))
    localStorage.setItem('currentUser', JSON.stringify(usuarioNormalizado))
    console.log('[v0] Login usuário antigo bem-sucedido')
    return { sucesso: true, usuario: usuarioNormalizado }
  }
  
  console.log('[v0] Login falhou')
  return { sucesso: false, mensagem: 'Email ou senha incorretos' }
}

// Função para registrar novo usuário
function registrarUsuario(nome, emailOuUsername, senha, email) {
  // Validações
  if (!nome || !emailOuUsername || !senha) {
    return { sucesso: false, mensagem: 'Todos os campos são obrigatórios' }
  }
  
  if (senha.length < 4) {
    return { sucesso: false, mensagem: 'A senha deve ter pelo menos 4 caracteres' }
  }
  
  // Verificar se não está tentando usar credenciais de admin
  if (emailOuUsername === ADMIN_CREDENTIALS.email || 
      emailOuUsername === ADMIN_CREDENTIALS.usuario) {
    return { sucesso: false, mensagem: 'Este email/usuário não pode ser usado' }
  }
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
  
  // Verificar se já existe
  if (usuarios.some(u => u.email === emailOuUsername || u.username === emailOuUsername)) {
    return { sucesso: false, mensagem: 'Email ou usuário já cadastrado' }
  }
  
  const usersAntigos = JSON.parse(localStorage.getItem('users') || '[]')
  if (usersAntigos.some(u => u.email === emailOuUsername || u.username === emailOuUsername)) {
    return { sucesso: false, mensagem: 'Email ou usuário já cadastrado' }
  }
  
  const novoUsuario = {
    id: Date.now(),
    name: nome,
    username: emailOuUsername,
    email: email || emailOuUsername, // Usar o email fornecido ou o username
    senha: senha,
    password: senha,
    isAdmin: false,
    createdAt: new Date().getFullYear(),
    dataCriacao: new Date().toISOString()
  }
  
  usuarios.push(novoUsuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  
  console.log('[v0] Usuário registrado com sucesso')
  return { sucesso: true, usuario: novoUsuario }
}

// Função para fazer logout
function fazerLogout() {
  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('currentUser')
  window.location.href = 'index.html'
}

// Função para obter usuário logado
function obterUsuarioLogado() {
  return JSON.parse(localStorage.getItem('usuarioLogado'))
}

// Função para verificar se é admin
function verificarAdmin() {
  const usuario = obterUsuarioLogado()
  return usuario && usuario.isAdmin === true
}

// Função para verificar se está logado
function verificarLogin() {
  return obterUsuarioLogado() !== null
}

function atualizarUsuario(dadosAtualizados) {
  const usuarioLogado = obterUsuarioLogado()
  if (!usuarioLogado) return false
  
  // Atualizar dados
  const usuarioAtualizado = { ...usuarioLogado, ...dadosAtualizados }
  
  // Garantir que isAdmin não seja modificado
  usuarioAtualizado.isAdmin = usuarioLogado.isAdmin
  
  // Salvar no localStorage
  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado))
  localStorage.setItem('currentUser', JSON.stringify(usuarioAtualizado))
  
  // Atualizar na lista de usuários (apenas se não for admin)
  if (!usuarioAtualizado.isAdmin) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
    const index = usuarios.findIndex(u => u.id === usuarioAtualizado.id)
    if (index !== -1) {
      usuarios[index] = usuarioAtualizado
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
  }
  
  console.log('[v0] Usuário atualizado com sucesso')
  return true
}