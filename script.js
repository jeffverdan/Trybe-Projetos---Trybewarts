const btnEnter = document.querySelector('#btnEnter');
const btnEmail = document.querySelector('#email');
const btnPass = document.querySelector('#password');

btnEnter.addEventListener('click', () => {
  if (btnEmail.value === 'tryber@teste.com' && btnPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkBox = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
checkBox.addEventListener('change', function(){
  if(checkBox.value === 'on'){
    btnEnviar.disabled = false;
  }
})
