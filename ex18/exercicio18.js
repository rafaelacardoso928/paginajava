function validarCadastro() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const resultado = document.getElementById('resultado');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nome || !email || !senha) {
      resultado.textContent = 'Preencha todos os campos.';
    } else if (!emailRegex.test(email)) {
      resultado.textContent = 'E-mail inválido.';
    } else {
      resultado.textContent = 'Cadastro realizado com sucesso!';
    }
  }
  