// src/js/login.js
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Envia os dados de login para o servidor (substitua a URL pelo seu back-end)
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (data.success) {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Login falhou!';
    }
});