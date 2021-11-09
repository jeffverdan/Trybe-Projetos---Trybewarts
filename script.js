const loginBtn = document.querySelector('#login-btn');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const emailTryber = 'tryber@teste.com';
const passwordTryber = '123456';
const submitBtn = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');

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
