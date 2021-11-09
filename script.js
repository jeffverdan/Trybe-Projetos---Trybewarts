const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLoginEnter = document.querySelector('#button-login-enter');
const submitButton = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function verify(valueA, valueB) {
  return valueA && valueB
    ? alert('Olá, Tryber!')
    : alert('Email ou senha inválidos.');
}

buttonLoginEnter.addEventListener('click', () => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const checkEmail = emailValue === 'tryber@teste.com';
  const checkPassword = passwordValue === '123456';
  verify(checkEmail, checkPassword);
});

submitButton.disabled = true;

let check = true;

inputAgreement.addEventListener('input', () => {
  if (check) {
    submitButton.disabled = false;
    check = !check;
  } else {
    submitButton.disabled = true;
    check = !check;
  }
});

const contadorDePalavra = 500;

textarea.addEventListener('input', () => {
  const textAreaValuetext = textarea.value;
  contador.innerHTML = contadorDePalavra - textAreaValuetext.length;
});
