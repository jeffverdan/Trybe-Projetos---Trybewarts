const btnEntra = document.getElementById('btn-entra');
const inputMail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

btnEntra.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputMail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
