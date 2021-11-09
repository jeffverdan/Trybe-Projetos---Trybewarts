const inputEmail = document.getElementById('email');
const email = 'tryber@teste.com';
const inputSenha = document.getElementById('password');
const senha = '123456';
const btnEntrar = document.getElementById('button');

btnEntrar.addEventListener('click', () => {
  if (inputEmail.value === email && inputSenha.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
