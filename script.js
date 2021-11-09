const inputEmail = document.getElementById('email');
const inputPword = document.getElementById('password');
const btnLogin = document.querySelector('.btn-login');
const btnSubimit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

btnLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPword.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
});

checkbox.addEventListener('click', (e) => {
  btnSubimit.disabled = !e.target.checked;

});

window.onload = () => {
  btnSubimit.disabled = true;
};
