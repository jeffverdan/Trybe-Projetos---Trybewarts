const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const cont = document.getElementById('counter');

btnSubmit.disabled = true;

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgreement.addEventListener('click', () => {
  const agreement = checkAgreement.checked;
  if (agreement) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

cont.innerHTML = 500;

textArea.addEventListener('keyup', () => {
  cont.innerHTML = 500;
  cont.innerHTML -= textArea.textLength;
});
