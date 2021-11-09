/* eslint-disable */
const email = document.getElementById('email');
const pass = document.getElementById('password');
const btnEnviar = document.getElementById('btn-header');
const buttonSub = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    this.alert('Olá, Tryber!');
  } else {
    this.alert('Email ou senha inválidos.');
  }
});

buttonSub.disabled = true;

checkbox.addEventListener('change', function (){
  if (checkbox.checked){
    buttonSub.disabled = false;
  } else {
    buttonSub.disabled = true;
  }
})
