const btnEnter = document.querySelector('#btn-enter');
const inputEmail = document.querySelector('#login-email');
const inputPassword = document.querySelector('#input-password');
const btnSubmit = document.querySelector('#submit-btn');
const inputSubmit = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');

btnEnter.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputSubmit.addEventListener('click', () => {
  if (inputSubmit.checked) {
    btnSubmit.removeAttribute('disabled');
  }
});

textArea.addEventListener('keyup', () => {
  count.innerText = 500 - textArea.value.length;
});
