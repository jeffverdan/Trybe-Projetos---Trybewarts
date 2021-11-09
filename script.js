const btnHeader = document.getElementById('submit-header');

function alertEmailAndPassword() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    alert('Olá Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnHeader.addEventListener('click', alertEmailAndPassword);
