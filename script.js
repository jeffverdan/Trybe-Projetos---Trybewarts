// Requisto 3

function btnSignUp() {
  // Resolvido com a ajuda https://www.linhadecomando.com/javascript/javascript-validando-campos-de-email
  if (document.forms[0].email.value === '' || document.forms[0].email.value.indexOf('@') === -1) {
    return alert('Email ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
}

const btnClick = document.getElementById('btn-login');
btnClick.addEventListener('click', btnSignUp);

function validateSubmit(event) {
  const btnSubmit = document.getElementById('submit-btn');
  if (event.target.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}

const inputAgreement = document.getElementById('agreement');
inputAgreement.addEventListener('click', validateSubmit);

// Requisito 20 resolvido com a ajuda de https://pt.stackoverflow.com/questions/113089/contador-de-caracteres-digitados-em-um-textarea

const textArea = document.querySelector('textarea');
const count = document.getElementById('counter');
const limite = 500;

function verificar() {
  const caracteres = this.value.length;
  const rest = limite - caracteres;
  count.innerText = rest;
}

textArea.addEventListener('input', verificar);
