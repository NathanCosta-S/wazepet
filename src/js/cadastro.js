function validarCadastro() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const mensagemErro = document.getElementById("mensagemErro");


    if (!nome || !dataNascimento || !cpf || !email || !telefone || !senha || !confirmarSenha) {
        mensagemErro.textContent = "Todos os campos são obrigatórios.";
        return;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        mensagemErro.textContent = "CPF inválido. Use o formato 000.000.000-00.";
        return;
    }


    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
        mensagemErro.textContent = "Telefone inválido. Use o formato (00) 00000-0000.";
        return;
    }


    if (senha !== confirmarSenha) {
        mensagemErro.textContent = "As senhas não coincidem.";
        return;
    }

    mensagemErro.textContent = "Cadastro realizado com sucesso!";
    mensagemErro.style.color = "green";
}
