const loginBtn = document.querySelector('#login-btn');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const emailTryber = 'tryber@teste.com';
const passwordTryber = '123456';
const submitBtn = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  const count = 500 - textArea.value.length;
  counter.innerHTML = count;
});

function loginAlert() {
  if (emailLogin.value === emailTryber && passwordLogin.value === passwordTryber) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', () => {
  loginAlert();
});

inputAgreement.addEventListener('click', () => {
  submitBtn.toggleAttribute('disabled');
});
