const loginButton = document.getElementById('login-button');
const inputEmail = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
loginButton.addEventListener('click', () => {
  if (inputEmail.value.length > 0 && inputSenha.value.length > 0) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// counter para text area
textarea.addEventListener('input', () => {
  const count = 500 - textarea.value.length;
  document.getElementById('counter').innerText = count;
});

// HABILITA BOTAO ENVIAR SOMENTE AO SELECIONAR O CHECKBOX
submitButton.disabled = true;
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else if (!agreement.checked) {
    submitButton.disabled = true;
  }
});
