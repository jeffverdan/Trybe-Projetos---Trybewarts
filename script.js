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

const textarea = document.getElementById('textarea');
textarea.addEventListener('input', (e) => {
  const target = e.currentTarget;
  // Destructuring
  const { maxLength } = target;
  const currentLength = target.value.length;
  // Selecting html element
  const counter = document.getElementById('counter');
  // Put value into counter
  counter.textContent = `${maxLength - currentLength}`;
});
//  source: https://stackoverflow.com/questions/14086398/count-textarea-characters
