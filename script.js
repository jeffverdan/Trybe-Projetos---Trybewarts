const btn = document.querySelector('#btnSubmit');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const submitBtn = document.querySelector('#submit-btn');
const checkboxAgree = document.querySelector('#agreement');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkboxAgree.addEventListener('click', () => {
  if (checkboxAgree.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
