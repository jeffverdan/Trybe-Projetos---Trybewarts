const btnLogin = document.getElementById('btnLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

window.onload = function desabilita() {
    checkBox.disbaled = true;
}

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

function ativaBtnEnviar() {
  if (checkBox.checked === false) {
    btnEnviar.disbaled = true;
    btnEnviar.style.backgroundColor = 'grey';
  } else {
    btnEnviar.style.backgroundColor = 'purple';
    btnEnviar.disbaled = false;
  }
}

btnLogin.addEventListener('click', login);
checkBox.addEventListener('click', ativaBtnEnviar);
console.log(checkBox.checked);
