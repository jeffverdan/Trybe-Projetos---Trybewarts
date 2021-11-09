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
const btnTextarea = document.getElementById('textarea');
// Resposta encontrada neste site: https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
btnTextarea.addEventListener('keyup', () => {
  const texto = document.querySelector('#textarea').value;
  const quant = 500;
  const total = texto.length;
  const resto = quant - total;
  document.getElementById('contador').innerHTML = resto;
});
