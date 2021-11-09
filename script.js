const btnEnter = document.getElementById('btnEnter');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnSend = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
let counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
// Mensagem e efeito de login
btnEnter.addEventListener('click', function () {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  };
});

// Habilitar botão de enviar
window.onload = () => {
  btnSend.disabled = true;
};

checkBox.addEventListener('click', function () {
  if (checkBox.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  };
});

// Contagem de caracteres

let textarea2 = textarea.getAttribute('maxlength');
counter.innerHTML = textarea2;
textarea.addEventListener('keyup', function () {
  document.getElementById('counter').innerHTML = textarea2 - this.value.length;
});

counter.innerHTML = textarea2;
