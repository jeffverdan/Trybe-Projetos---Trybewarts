const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('.button');

function loginCorreto(event) {
  event.preventDefault();

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', loginCorreto);

let input = document.querySelector('#agreement');
let button = document.querySelector('#submit-btn');

button.disabled = true;

input.addEventListener('change', verificaAceite);

function verificaAceite() {
  if (document.querySelector("#agreement").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}
