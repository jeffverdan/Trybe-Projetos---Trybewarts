const btn = document.querySelector('#btnSubmit');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const submitBtn = document.querySelector('#submit-btn');
const checkboxAgree = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const main = document.querySelector('#main-container');
const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const secondEmail = document.querySelector('#input-email');
const houseSelector = document.querySelector('#house');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkboxAgree.addEventListener('click', () => {
  if (checkboxAgree.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textArea.value.length;
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  mainForm.style.display = 'none';
  let para = document.createElement('p')
  para.className = 'new'
  para.innerHTML = `Name: ${inputName.value} ${inputLastname.value} <br> Email: ${secondEmail.value} <br> Casa: ${houseSelector.value} <br> Família: ${ratioValue}`;
  main.appendChild(para)
});