const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener('click', (event) => {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    event.preventDefault();
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
