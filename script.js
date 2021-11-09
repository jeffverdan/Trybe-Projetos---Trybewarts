const buttonLogin = document.querySelector('#button-login');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');

function checkTryber() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', checkTryber);
