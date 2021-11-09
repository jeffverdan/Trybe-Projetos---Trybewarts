const btnLogin = document.getElementById('BtnL');

btnLogin.addEventListener('click', function(){
  let inputSenha = document.getElementById('senha')
  let inputEmail = document.getElementById('email')
  if(inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com'){
    alert('Olá, Tryber!')
  }else {
    alert('Email ou senha inválidos.')
  }
  
})
