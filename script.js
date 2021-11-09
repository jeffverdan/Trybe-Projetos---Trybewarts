const entrar = document.querySelector('.entrar');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
entrar.addEventListener('click', login);

function habilitarBotao() {
  if (checkbox.checked === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('click', habilitarBotao);
