function login() {
  const email = document.getElementById('email-input');
  const password = document.getElementById('password-input');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);

const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
function checkBtn() {
  if (!checkbox.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
checkBtn();
checkbox.addEventListener('click', checkBtn);

// Requisito 20 - Requisito realizado através da consulta na seguinte documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event

const textArea = document.getElementById('textarea');
const countOutput = document.getElementById('counter');

function countCaracther() {
  const contador = textArea.value.length;
  countOutput.innerText = 500 - contador;
}

textArea.addEventListener('keyup', countCaracther);
