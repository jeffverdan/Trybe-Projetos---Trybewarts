const botao = document.getElementById('botao');
const inputemail = document.getElementById('email');
const inputsenha = document.getElementById('senha');
function validar() {
  if (
    inputemail.value === 'tryber@teste.com'
    && inputsenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', validar);

const btnSubmit = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

function enableButton() {
  if (agreementCheckbox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
const carac = ' caracteres restantes';
agreementCheckbox.addEventListener('click', enableButton);
const counter = document.getElementById('counter');
counter.innerHTML = 500 + carac;
const textarea = document.getElementById('textarea');
function contar() {
  counter.innerHTML = 500 - textarea.value.length + carac;
  console.log(counter);
  return counter;
}

textarea.addEventListener('keyup', contar);
