const btnEnter = document.getElementById('btnEnter');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnSend = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const main = document.getElementById('main');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const casa = document.getElementById('house');
const email2 = document.getElementById('input-email');



// Mensagem e efeito de login
btnEnter.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Habilitar botão de enviar
window.onload = () => {
  btnSend.disabled = true;
};

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
});

// Contagem de caracteres

const textarea2 = textarea.getAttribute('maxlength');
counter.innerHTML = textarea2;
textarea.addEventListener('keyup', function () {
  counter.innerHTML = textarea2 - this.value.length;
});

counter.innerHTML = textarea2;

// Usamos esse link como base e adaptamos para nosso entendimento https://www.ti-enxame.com/pt/javascript/contar-caracteres-textarea/1069724142/

// Requisito 21 Substituir formulario por dados

btnSend.addEventListener('click', () => {
  const materias2 = document.querySelectorAll('input[name="te"]:checked');
  
  let materias3 = '';
  for(let i = 0; i < materias2.length; i += 1) {
   
   if((materias2.length - 1) === i) {
    materias3 += materias2[i].defaultValue + '.';
   } else {
     materias3 += materias2[i].defaultValue + ', ';
   }
    
  };


  let itens = {
    nome:'Nome: ' + nome.value + ' ' + sobrenome.value,
    email:'Email: ' + email2.value,
    casa:'Casa: ' + casa.value,
    familia:'Família: ' + document.querySelector('input[name="family"]:checked').value,
    materias:'Matérias: ' + materias3,
    avaliacao:'Avaliação: ' + document.querySelector('input[name="rate"]:checked').value,
    comentario:'Observações: ' + textarea.value,
  }
 
  
const form = document.getElementById('evaluation-form');
  main.removeChild(form);
  let ul = document.createElement('ol');
  ul.className = 'lista';
  main.appendChild(ul);
  for(let i in itens) {
  let li = document.createElement('li');
  li.innerHTML = itens[i];
  li.style.listStyle = 'none';
  li.className = 'itens';
  ul.appendChild(li);
  }
});

