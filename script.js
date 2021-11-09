const btnEntrar = document.querySelector('.btn-entrar');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
btnEntrar.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
