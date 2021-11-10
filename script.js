function logIn() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableSend() {
  if(agreement.checked) {
    document.getElementById("submit-btn").disabled = false;
  } else {
    document.getElementById("submit-btn").disabled = true;
  }
}

function counterChars(chars) {
  let textLenght = chars.length;
  counter.innerText = 500 - textLenght;
}

const buttonLogIn = document.getElementById('login');
const agreement = document.getElementById('agreement');
const counter = document.getElementById('counter');

buttonLogIn.addEventListener('click', logIn);
agreement.addEventListener('change', enableSend);
