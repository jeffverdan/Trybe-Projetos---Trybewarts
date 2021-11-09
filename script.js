const pegandoBotao = document.getElementById('login');

function disparaAlert() {
  const pegandoEmail = document.getElementById('email2');
  const pegandoSenha = document.getElementById('senha2');
  const valorDoEmail = pegandoEmail.value;
  const valorDaSenha = pegandoSenha.value;

  if (valorDoEmail === 'tryber@teste.com' && valorDaSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

pegandoBotao.addEventListener('click', disparaAlert);
