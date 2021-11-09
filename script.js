const submitLogin = document.querySelector('#submitLogin');
const emailLogin = document.querySelector('#emailLogin');
const senhaLogin = document.querySelector('#senhaLogin');
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

function login() {
  if (
    emailLogin.value === 'tryber@teste.com'
    && senhaLogin.value === '123456'
  ) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', login);

btnSubmit.disabled = true;

checkAgreement.addEventListener('input', () => {
  const verifyCheck = checkAgreement.value;

  if (verifyCheck !== null && verifyCheck !== '') {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
