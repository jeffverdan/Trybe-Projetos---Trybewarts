const button = document.getElementById('btn-entrar');
const email = document.getElementById('input-email');
const password = document.getElementById('input-pass');
const submitButton = document.getElementById('submit-btn');
const agreeCheckBox = document.getElementById('agreement');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreeCheckBox.addEventListener('click', () => {
  if (agreeCheckBox.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});
