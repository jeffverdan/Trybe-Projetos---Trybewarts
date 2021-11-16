const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

// Função para validar login
function valLogin() {
  const e = email.value;
  const p = password.value;
  if (e === 'tryber@teste.com' && p === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', valLogin);

// Função que trava e destrava Botão de Eviar de acordo com checkbox (referencia www.w3schools.com/jsref/prop_pushbutton_disabled.asp)
const send = document.getElementById('submit-btn');
send.disabled = true;
const agreement = document.getElementById('agreement');

function destravaBtn(e) {
  if (e.target.checked === true) {
    send.disabled = false;
  } else {
    send.disabled = true;
  }
}
agreement.addEventListener('click', destravaBtn);

// Contador de caracteres dinâmico
const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', () => {
  const textareaContent = document.getElementById('textarea').value;
  const spanCounter = document.getElementById('counter');
  const counter = 500 - textareaContent.length;
  spanCounter.innerHTML = counter;
});