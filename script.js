const inputEmail = document.getElementById('email');
const inputPword = document.getElementById('password');
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPword.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
});
