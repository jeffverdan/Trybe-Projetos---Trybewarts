const loginButton = document.getElementById('login-button');
const inputEmail = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

loginButton.addEventListener('click', () => {
  if (inputEmail.value.length > 0 && inputSenha.value.length > 0) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
submitButton.disabled = true;
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else if (!agreement.checked) {
    submitButton.disabled = true;
  }
});
