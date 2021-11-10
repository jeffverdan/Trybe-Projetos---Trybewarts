const btn = document.querySelector('#btnSubmit');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const submitBtn = document.querySelector('#submit-btn');
const checkboxAgree = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const mainForm = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const secondEmail = document.querySelector('#input-email');
const houseSelector = document.querySelector('#house');
let ratioValue = document.querySelector('input[name="family"]:checked').value;
const checkedBoxes = document.querySelectorAll('.subject');
let rating = document.querySelector('input[name="rate"]:checked').value;
const ratingDiv = document.querySelector('#rating-container');
const family = document.querySelector('.labels');
const boxes = [];

function checkBoxes() {
  for (let i = 0; i < checkedBoxes.length; i += 1) {
    if (checkedBoxes[i].checked === true) {
      boxes.push(` ${checkedBoxes[i].value}`);
    }
  }
}

family.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    ratioValue = document.querySelector('input[name="family"]:checked').value;
  }
});

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

ratingDiv.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    rating = document.querySelector('input[name="rate"]:checked').value;
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  checkBoxes();

  const para = document.createElement('p');
  para.className = 'new';
  para.innerHTML = `Nome: ${inputName.value} 
  ${inputLastname.value} <br> Email: 
  ${secondEmail.value} <br> Casa: 
  ${houseSelector.value} <br> Família: 
  ${ratioValue} <br> Matérias: 
  ${boxes}<br> Avaliação: 
  ${rating} <br> Observações: 
  ${textArea.value}`;
  mainForm.innerHTML = '';
  mainForm.appendChild(para);
});
