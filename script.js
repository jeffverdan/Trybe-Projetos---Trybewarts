const loginBtn = document.getElementById('loginBtn');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

loginBtn.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
