const button = document.getElementById('btn-entrar');
const email = document.getElementById('input-email');
const password = document.getElementById('input-pass');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
