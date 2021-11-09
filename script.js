const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementsByName('email')[0].value;
  const senha = document.getElementsByName('password')[0].value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', () => {
  const btnSubmitForm = document.getElementById('submit-btn');
  btnSubmitForm.removeAttribute('disabled');
});
