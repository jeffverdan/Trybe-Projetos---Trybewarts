let buttonLogin = document.querySelector('#button-login');
let emailLogin = document.querySelector('#email-login');
let passwordLogin = document.querySelector('#password-login');

function checkTryber() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', checkTryber);