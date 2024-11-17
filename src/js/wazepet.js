document.addEventListener('DOMContentLoaded', function() {
  fetch('/wazepet')  // Requisição para a rota '/wazepet'
      .then(response => response.json())  // Espera receber os dados em formato JSON
      .then(data => {
          const cardsContainer = document.getElementById('cards-container');
          cardsContainer.innerHTML = '';  // Limpa qualquer conteúdo anterior (caso haja)
          
          data.forEach(card => {
              // Cria o card dinamicamente
              const cardElement = document.createElement('div');
              cardElement.classList.add('card');
              cardElement.innerHTML = `
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
                  <img src="${card.image_url}" alt="${card.title}" />
              `;
              // Adiciona o card à div 'cards-container'
              cardsContainer.appendChild(cardElement);
          });
      })
      .catch(error => {
          console.log('Erro ao carregar cards:', error);
      });
});
