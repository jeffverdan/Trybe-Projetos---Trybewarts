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

document.getElementById("submit-btn").disabled = true;
// seleciona o button e desabilita.
const checkInfo = document.getElementById("agreement");
// verifica o conteudo do check
checkInfo.addEventListener("input", () => {
  if ( checkInfo !== null ) {
    //habilita o botão
    document.getElementById("submit-btn").disabled = false;
  } else {
    //desabilita o botão se o conteúdo do input ficar em branco
    document.getElementById("submit-btn").disabled = true;
  }
});
