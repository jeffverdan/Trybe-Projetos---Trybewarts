const submitLogin = document.querySelector('#submitLogin');
const emailLogin = document.querySelector('#emailLogin');
const senhaLogin = document.querySelector('#senhaLogin');
const btnEnviar = document.querySelector('#submit-btn').disabled = true;
const checkAgreement = document.querySelector('#agreement');

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

checkAgreement.addEventListener('input', () => {
  const verifyCheck = checkAgreement.value;

  if (verifyCheck != null && verifyCheck != '') {
    document.querySelector('#submit-btn').disabled = false;
  } else {
    document.querySelector('#submit-btn').disabled = true;
  }
});
