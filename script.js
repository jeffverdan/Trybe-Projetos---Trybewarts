let btnLogin = document.getElementById('loginBtn')
let inpEmail = document.getElementById('eMail')
let inpSenha = document.getElementById('passWord')
// declaração de atalhos ^

function itsTryber () {
let a = inpEmail.value;
let b = inpSenha.value;

if( a === 'tryber@teste.com' && b === '123456') {
alert('Olá, Tryber!')
}else{
alert('Email ou senha inválidos.')  
}
}

// checa o login da trybe ^



btnLogin.addEventListener('click',itsTryber)