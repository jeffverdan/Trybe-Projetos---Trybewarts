const btnLogin = document.getElementById('BtnL');

btnLogin.addEventListener('click', () => {
  const inputSenha = document.getElementById('senha');
  const inputEmail = document.getElementById('email');
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
