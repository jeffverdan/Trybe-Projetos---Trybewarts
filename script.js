const loginForm = document.querySelector('.trybewarts-login');
const loginBtn = document.querySelector('button[type="submit"]');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = loginForm.children[0];
  const password = loginForm.children[1];
  if (name.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Email ou senha inválidos.');
    return false;
  }
  alert('Olá, Tryber!');
});

const btnSubmit = document.getElementById('submit-btn');
btnSubmit.disabled = true;
const checkBox = document.getElementById('agreement');

checkBox.addEventListener('click', (e) => {
  if (e.target.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const spamArea = document.getElementById('counter');

spamArea.textContent = 500;

textArea.addEventListener('keyup', () => {
  const numCaracter = textArea.value.length;
  const resultado = 500 - numCaracter;
  spamArea.textContent = resultado;
});
