// FUNÇÕES DO PAINEL DE ADMINISTRADOR

// Atualiza estatísticas
function atualizarEstatisticas() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const livrosCustomizados = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  
  document.getElementById('total-livros').textContent = 16 + livrosCustomizados.length;
  document.getElementById('total-favoritos').textContent = favoritos.length;
  document.getElementById('total-usuarios').textContent = usuarios.length;
}

// Abrir modal para novo livro
function abrirModalNovoLivro() {
  document.getElementById('livro-id').value = '';
  document.getElementById('modal-livro').style.display = 'block';
  document.getElementById('modal-title').textContent = 'Adicionar Novo Livro';
  document.getElementById('form-livro').reset();
  document.getElementById('preview-imagem').style.display = 'none';
}

// Fechar modal
function fecharModal() {
  document.getElementById('modal-livro').style.display = 'none';
}

// Editar livro
function editarLivro(id) {
  const livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  const numId = parseInt(id);
  const livro = livros.find(l => l.id === numId);
  
  if (!livro) {
    console.log("[v0] Livro não encontrado. ID procurado:", numId, "IDs disponíveis:", livros.map(l => l.id));
    alert('Livro não encontrado!');
    return;
  }
  
  // Preencher o formulário com os dados do livro
  document.getElementById('livro-id').value = livro.id;
  document.getElementById('livro-titulo').value = livro.titulo;
  document.getElementById('livro-genero').value = livro.genero;
  document.getElementById('livro-descricao').value = livro.descricao;
  document.getElementById('livro-link').value = livro.link;
  
  // Mostrar imagem atual
  const preview = document.getElementById('preview-imagem');
  if (livro.imagem) {
    preview.src = livro.imagem;
    preview.style.display = 'block';
  }
  
  // Limpar input de arquivo
  document.getElementById('livro-imagem-file').value = '';
  document.getElementById('livro-imagem').value = '';
  
  // Atualizar título do modal
  document.getElementById('modal-title').textContent = 'Editar Livro';
  
  // Abrir modal
  document.getElementById('modal-livro').style.display = 'block';
}

// Deletar livro
function deletarLivro(id) {
  if (confirm('Tem certeza que deseja deletar este livro?')) {
    let livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
    livros = livros.filter(livro => livro.id !== parseInt(id));
    localStorage.setItem('livros-customizados', JSON.stringify(livros));
    alert('Livro deletado com sucesso!');
    carregarLivros();
    atualizarEstatisticas();
  }
}

// Ver usuários
function verUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.length === 0) {
    alert('Nenhum usuário registrado ainda.');
  } else {
    let lista = 'Usuários Registrados:\n\n';
    usuarios.forEach((user, index) => {
      lista += `${index + 1}. ${user.nome} (@${user.usuario})\n`;
    });
    alert(lista);
  }
}

// Exportar dados
function exportarDados() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const livrosCustomizados = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  
  const dados = {
    favoritos,
    usuarios,
    livrosCustomizados,
    dataExportacao: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(dados, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `biblioteca-backup-${Date.now()}.json`;
  link.click();
  
  alert('Dados exportados com sucesso!');
}

// Limpar cache
function limparCache() {
  if (confirm('Tem certeza que deseja limpar o cache? Esta ação não pode ser desfeita.')) {
    localStorage.clear();
    alert('Cache limpo com sucesso!');
    atualizarEstatisticas();
    location.reload();
  }
}

function procesarImagemLivro() {
  const fileInput = document.getElementById('livro-imagem-file');
  const urlInput = document.getElementById('livro-imagem');
  const preview = document.getElementById('preview-imagem');
  
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    
    // Validar tamanho (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("❌ A imagem deve ter no máximo 5MB!");
      return null;
    }
    
    // Validar tipo
    if (!file.type.startsWith('image/')) {
      alert("❌ Por favor, selecione apenas imagens!");
      return null;
    }
    
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        urlInput.value = event.target.result;
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
  
  return Promise.resolve(urlInput.value);
}

// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('livro-imagem-file');
  const preview = document.getElementById('preview-imagem');
  
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          preview.src = event.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);
      }
    });
  }

  atualizarEstatisticas();
  carregarLivros();
});

document.getElementById('form-livro')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const libroId = document.getElementById('livro-id').value;
  const titulo = document.getElementById('livro-titulo').value;
  const genero = document.getElementById('livro-genero').value;
  const descricao = document.getElementById('livro-descricao').value;
  const fileInput = document.getElementById('livro-imagem-file');
  const imagemUrl = document.getElementById('livro-imagem').value;
  
  if (!fileInput?.files?.length && !imagemUrl) {
    alert("❌ Por favor, selecione uma imagem ou cole uma URL!");
    return;
  }
  
  if (fileInput?.files?.length > 0) {
    procesarImagemLivro().then((imagemData) => {
      if (libroId) {
        atualizarLivro(libroId, titulo, genero, descricao, imagemData);
      } else {
        salvarLivro(titulo, genero, descricao, imagemData);
      }
    });
  } else {
    if (libroId) {
      atualizarLivro(libroId, titulo, genero, descricao, imagemUrl);
    } else {
      salvarLivro(titulo, genero, descricao, imagemUrl);
    }
  }
});

function atualizarLivro(id, titulo, genero, descricao, imagemUrl) {
  let livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  
  const numId = parseInt(id);
  const indice = livros.findIndex(l => l.id === numId);
  
  if (indice === -1) {
    console.log("[v0] Livro não encontrado para atualização. ID:", numId);
    alert('Livro não encontrado!');
    return;
  }
  
  livros[indice] = {
    ...livros[indice],
    titulo: titulo,
    genero: genero.toLowerCase(),
    descricao: descricao,
    imagem: imagemUrl,
    link: document.getElementById('livro-link').value || '#'
  };
  
  localStorage.setItem('livros-customizados', JSON.stringify(livros));
  
  alert(`Livro "${titulo}" atualizado com sucesso!`);
  fecharModal();
  carregarLivros();
  atualizarEstatisticas();
}

function salvarLivro(titulo, genero, descricao, imagemUrl) {
  let livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  
  const novoLivro = {
    id: Date.now(),
    titulo: titulo,
    genero: genero.toLowerCase(),
    descricao: descricao,
    imagem: imagemUrl,
    link: document.getElementById('livro-link').value || '#',
    customizado: true
  };
  
  livros.push(novoLivro);
  localStorage.setItem('livros-customizados', JSON.stringify(livros));
  
  alert(`Livro "${titulo}" adicionado com sucesso!`);
  fecharModal();
  carregarLivros();
  atualizarEstatisticas();
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modal-livro');
  if (event.target === modal) {
    fecharModal();
  }
};

function carregarLivros() {
  const livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  const tbody = document.querySelector('#tabela-livros tbody');
  
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  if (livros.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align: center;">Nenhum livro adicionado ainda.</td></tr>';
    return;
  }
  
  livros.forEach(livro => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${livro.titulo}</td>
      <td>${livro.genero.charAt(0).toUpperCase() + livro.genero.slice(1)}</td>
      <td>
        <button onclick="editarLivro(${livro.id})" class="btn-acao">✏️ Editar</button>
        <button onclick="deletarLivro(${livro.id})" class="btn-acao btn-deletar">🗑️ Deletar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}