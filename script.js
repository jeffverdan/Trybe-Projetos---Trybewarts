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

agreementCheckbox.addEventListener('click', enableButton);
