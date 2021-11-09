const entrar = document.querySelector('.entrar');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
entrar.addEventListener('click', login);
