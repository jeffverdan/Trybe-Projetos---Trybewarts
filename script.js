const btnLogin = document.getElementById('loginBtn');
const inpEmail = document.getElementById('eMail');
const inpSenha = document.getElementById('passWord');

// declaração de atalhos ^

function itsTryber() {
  const a = inpEmail.value;
  const b = inpSenha.value;

  if (a === 'tryber@teste.com' && b === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// checa o login da trybe ^

btnLogin.addEventListener('click', itsTryber);

// requisito de travar o botão sem checkbox:

const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true;
const checkBox = document.getElementById('agreement');

function liberar(event) {
  if (event.target.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}
checkBox.addEventListener('click', liberar);

// requisito de contar o texto
//
const textArea = document.getElementById('textarea');
const paragraph = document.getElementById('counter');

paragraph.innerText = `${500},' caracteres restantes`;

function contador() {
  const numerocaractere = textArea.value.length;
  const resultado = `${500 - numerocaractere} caracteres restantes`;
  paragraph.innerText = resultado;
}

textArea.addEventListener('keyup', contador);

// requisito recuperar o texto
