const btnLogin = document.getElementById('btn-login');

function validaLogin() {
  const inputEmail = document.getElementById('email-login');
  const inputSenha = document.getElementById('senha-login');
  if (inputEmail.value === 'trybe@teste.com' || inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', validaLogin);
