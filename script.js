const botao = document.querySelector('.btn-enviar');
const inputEmail = document.querySelector('.input-email');
const inputSenha = document.querySelector('.input-senha');

botao.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
