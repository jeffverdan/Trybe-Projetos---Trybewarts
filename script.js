const btnEnter = document.getElementById('btnEntrar');

btnEnter.addEventListener('click', () => {
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkboxAgreement = document.getElementById('agreement');

checkboxAgreement.addEventListener('click', () => {
  const btnEnviar = document.getElementById('submit-btn');
  if (checkboxAgreement.checked !== true) {
    btnEnviar.disabled = true;
  } else {
    btnEnviar.disabled = false;
  }
});
