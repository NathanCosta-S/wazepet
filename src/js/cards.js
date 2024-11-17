  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const forms = document.querySelectorAll("form");
    const fecharModal = document.getElementById("fecharModal");

    forms.forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        modal.classList.remove("hidden"); 
      });
    });

    fecharModal.addEventListener("click", () => {
      modal.classList.add("hidden"); 
    });

    document.getElementById("abrirCamera").addEventListener("click", () => {
      alert("Função para abrir câmera ainda não implementada.");
    });
  });

