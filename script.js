const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLogin = document.querySelector('#buttonLogin');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

const agreementBtn = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

agreementBtn.addEventListener('click', function() {
  submitBtn.disabled = false;
})

