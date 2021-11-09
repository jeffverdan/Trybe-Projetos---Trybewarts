const btnEntrar = document.getElementById('btn-entrar');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});
