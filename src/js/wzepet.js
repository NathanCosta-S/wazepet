// Carregar cards na página wazepet
async function loadCards() {
    const response = await fetch('/api/cards');
    const cards = await response.json();
    
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image_url}" alt="${card.title}" style="width:100%">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <a href="${card.link_url}">Acessar</a>
        `;
        cardContainer.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', loadCards);
