const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', ()=>{
    if(document.getElementById('input-email').value.length > 0 && document.getElementById('input-senha').value.length >0){
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
});