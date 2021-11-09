const loginHeader = document.getElementById('botao-entrar');
const emailHeader = document.getElementById('email');
const senhaHeader = document.getElementById('senha');
const submitregister = document.getElementById('submit-btn');
const agreementcheck = document.getElementById('agreement');
const textAreaInput = document.getElementById('textarea');
const counter = document.getElementById('counter');
let checked;

loginHeader.addEventListener('click', () => {
  if (emailHeader.value === 'tryber@teste.com' && senhaHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementcheck.addEventListener('click', () => {
  if (checked === undefined || checked === true) {
    submitregister.disabled = false;
    checked = false;
  } else {
    checked = true;
    submitregister.disabled = true;
  }
});

textAreaInput.addEventListener('input', () => {
  counter.innerText = 500 - textAreaInput.value.length;
});
