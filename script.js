const themeToggle = document.getElementById("theme-toggle")
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const isDark = document.body.classList.contains("dark")
    themeToggle.innerHTML = isDark
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
    localStorage.setItem("theme", isDark ? "dark" : "light")
  })

  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark")
    themeToggle.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
  } else {
    themeToggle.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Aguardar auth.js estar carregado
  setTimeout(() => {
    if (typeof verificarAdmin === 'function') {
      const adminLink = document.getElementById('admin-link')
      
      if (adminLink) {
        if (verificarAdmin()) {
          adminLink.style.display = '' // Mostrar link
          console.log('[v0] Link Admin visível para administrador')
        } else {
          adminLink.style.display = 'none' // Esconder link
          console.log('[v0] Link Admin escondido para usuário comum')
        }
      }
    }
  }, 100) // Pequeno delay para garantir que auth.js foi carregado
})