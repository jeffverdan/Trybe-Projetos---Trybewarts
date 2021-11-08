const primeiroBotao = document.querySelector('button');

primeiroBotao.addEventListener('click', () => {
  const inputEmail = document.querySelector('input');
  const inputSenha = document.querySelectorAll('input')[1];
  
  if (inputEmail.value === 'tryber@teste.com' || inputSenha == '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
})