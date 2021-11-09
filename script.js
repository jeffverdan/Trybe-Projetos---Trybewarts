const email1 = document.querySelector('#input-email-login');
const senha = document.querySelector('#input-senha');
const login1 = document.querySelector('#login-btn');

function checkEmail() {
  if (email1.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.');
  }
}

login1.addEventListener('click', checkEmail);