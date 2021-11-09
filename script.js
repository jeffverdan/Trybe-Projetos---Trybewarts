let botao = document.getElementById('botao')
botao.addEventListener('click', validar)
let inputemail = document.getElementById('email')
let inputsenha = document.getElementById('senha')
function validar () {
    if (inputemail.value == 'tryber@teste.com' && inputsenha.value == "123456") {
        alert("Olá, Tryber!")
    }
    else {
        alert("Email ou senha inválidos.")
    }
}