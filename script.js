const loginForm = document.querySelector('.trybewarts-login');
const loginBtn = document.querySelector('button[type="submit"]');
const submitBtn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

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

document.querySelector('#agreement').addEventListener('click', () => {
  submitBtn.classList.toggle('enabled');
  submitBtn.disabled = false;
});

textarea.addEventListener('keydown', () => {
  counter.textContent = 500 - textarea.value.length;
});

// submitBtn.addEventListener('click', () => {
// })
