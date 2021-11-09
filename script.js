const headerInputEmail = document.querySelector('.header-input-email');
const headerInputSenha = document.querySelector('.headerInputSenha');
const headerBtnEntrar = document.querySelector('.header-btn-entrar');



headerBtnEntrar.addEventListener('click', () => {
  if (
    headerInputEmail.value === 'tryber@teste.com'
    && headerInputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});