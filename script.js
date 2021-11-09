const btn = document.querySelector('#btn-submit');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
