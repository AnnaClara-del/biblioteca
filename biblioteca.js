// SISTEMA DE LIVROS DINÂMICOS PARA A BIBLIOTECA

document.addEventListener('DOMContentLoaded', function() {
  carregarLivrosCustomizados();
});

function carregarLivrosCustomizados() {
  const livros = JSON.parse(localStorage.getItem('livros-customizados')) || [];
  
  if (livros.length === 0) return;
  
  const livrosGrid = document.querySelector('.livros-grid');
  
  if (!livrosGrid) return;
  
  livros.forEach(livro => {
    const livroDiv = document.createElement('div');
    livroDiv.className = 'livro';
    livroDiv.setAttribute('data-genero', livro.genero);
    
    livroDiv.innerHTML = `
      <div class="livro-header">
        <img src="${livro.imagem}" alt="${livro.titulo}">
        <button class="btn-favorito" title="Adicionar aos favoritos">🤍</button>
      </div>
      <h3>${livro.titulo}</h3>
      <p class="genero-tag">${livro.genero.charAt(0).toUpperCase() + livro.genero.slice(1)}</p>
      <p>${livro.descricao}</p>
      <a href="${livro.link}" class="btn">Ler Agora</a>
    `;
    
    livrosGrid.appendChild(livroDiv);
  });
  
  // Recarregar os event listeners dos favoritos
  if (typeof configurarBotoesFavoritos === 'function') {
    configurarBotoesFavoritos();
  }
}