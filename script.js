const btn = document.querySelector('#btn');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const check = document.getElementById('agreement');

btn.addEventListener('click', () => {
  if (email.value.length < 5 && senha.value.length < 5) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  email.value = '';
  senha.value = '';
});

check.addEventListener('click', () => {
  if (check.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});
const maxText = document.getElementById('text-area');
const par = document.getElementById('counter');
const count = 500;
maxText.addEventListener('input', () => {
  const textAreaValue = maxText.value;
  par.innerHTML = count - textAreaValue.length;
});
