document.querySelector('#btn-entrar').addEventListener('click', () => {
  const email = document.querySelector('#email-login').value;
  const senha = document.querySelector('#senha-login').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.querySelector('#agreement');

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    document.querySelector('#submit-btn').disabled = false;
  }
  if (checkbox.checked === false) {
    document.querySelector('#submit-btn').disabled = true;
  }
});
