const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#senha');
const loginButton = document.querySelector('#submit');

loginButton.addEventListener('click', () => {
  if (inputEmail.value || inputPassword.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
