document.addEventListener('DOMContentLoaded', function() {
  fetch('/wazepet')  
      .then(response => response.json()) 
      .then(data => {
          const cardsContainer = document.getElementById('cards-container');
          cardsContainer.innerHTML = '';  
          
          data.forEach(card => {
              const cardElement = document.createElement('div');
              cardElement.classList.add('card');
              cardElement.innerHTML = `
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
                  <img src="${card.image_url}" alt="${card.title}" />
              `;
              cardsContainer.appendChild(cardElement);
          });
      })
      .catch(error => {
          console.log('Erro ao carregar cards:', error);
      });
});
