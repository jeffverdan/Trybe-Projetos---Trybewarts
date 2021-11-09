const loginBtn = document.getElementById('loginBtn');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputAgreement = document.getElementById('agreement');
const formsBtn = document.getElementById('submit-btn');

loginBtn.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputAgreement.addEventListener('click', () => {
  if (inputAgreement.className !== 'checked') {
    inputAgreement.className = 'checked';
    formsBtn.disabled = false;
  } else {
    inputAgreement.className = 'unchecked';
    formsBtn.disabled = true;
  }
});
