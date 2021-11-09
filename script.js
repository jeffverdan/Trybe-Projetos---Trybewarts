const primeiroBotao = document.querySelector('button');
const botaoEnviar = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');

primeiroBotao.addEventListener('click', () => {
  const inputEmail = document.querySelector('input');
  const inputSenha = document.querySelectorAll('input')[1];
  if (inputEmail.value === 'tryber@teste.com' || inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkboxAgreement.addEventListener('change', () => {
  if (botaoEnviar.disabled) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});
