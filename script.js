const btnEntrar = document.querySelector('#loginBtn');
const mailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');

btnEntrar.addEventListener('click', () => {
  if (mailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function entrar() {
  const check = document.getElementById('agreement');
  check.addEventListener('change', () => {
    if (!check.checked) {
      document.getElementById('submit-btn').setAttribute('disabled', 'disabled');
    } else {
      document.getElementById('submit-btn').removeAttribute('disabled');
    }
  });
}

entrar();
