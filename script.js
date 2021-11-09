const btnFornSubmit = document.querySelector('.btn-header-submit');
const emailFormHeader = document.getElementsByName('email')[0];
const passwordFormHeader = document.getElementsByName('password')[0];

function loginCredentials() {
  if (emailFormHeader.value === 'tryber@teste.com' && passwordFormHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnFornSubmit.addEventListener('click', loginCredentials);
