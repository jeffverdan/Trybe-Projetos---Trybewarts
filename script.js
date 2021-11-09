const loginButton = document.getElementById('login-button');
const inputEmail = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');

loginButton.addEventListener('click', ()=>{
    if(inputEmail.value.length > 0 && inputSenha.value.length >0){
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
});