/* eslint-disable */
const email = document.getElementById('email');
const pass = document.getElementById('password');
const btnEnviar = document.getElementById('btn-header');

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    this.alert('Olá, Tryber!');
  } else {
    this.alert('Email ou senha inválidos.');
  }
});
