const btnEntrar = document.querySelector('.btn-entrar');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const checked = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
btnEntrar.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checked.addEventListener('click', (e) => {
  submitBtn.disabled = !e.target.checked;
});

window.onload = () => {
  document.querySelector('#submit-btn').disabled = true;
};
