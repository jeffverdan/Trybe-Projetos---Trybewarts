const btnEnter = document.getElementById('btnEnter');
const email = document.getElementById('email');
const password = document.getElementById('password')
const btnSend = document.getElementById('submit-btn')
const checkBox = document.getElementById('agreement')
// Mensagem e efeito de login
btnEnter.addEventListener('click', function(){
if(email.value == "tryber@teste.com" && password.value == "123456") {
    alert('Olá, Tryber!')
} else {
alert("Email ou senha inválidos.")
}
});

// Habilitar botão de enviar
window.onload = () => {
    btnSend.disabled = true
}
    

checkBox.addEventListener('click', function(){
       
    if(checkBox.checked) {
        btnSend.disabled = false;
    } else {
        btnSend.disabled = true;
    }
})



