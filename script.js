const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
