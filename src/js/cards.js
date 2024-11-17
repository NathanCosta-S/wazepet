  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const forms = document.querySelectorAll("form");
    const fecharModal = document.getElementById("fecharModal");

    forms.forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o envio real do formulário
        modal.classList.remove("hidden"); // Abre o modal
      });
    });

    fecharModal.addEventListener("click", () => {
      modal.classList.add("hidden"); // Fecha o modal
    });

    document.getElementById("abrirCamera").addEventListener("click", () => {
      alert("Função para abrir câmera ainda não implementada.");
      // Aqui você pode usar a API getUserMedia para abrir a câmera
    });
  });

