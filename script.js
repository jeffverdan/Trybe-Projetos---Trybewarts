let email = document.querySelector('#email')
let password = document.querySelector('#password')
let buttonLogin = document.querySelector('#buttonLogin')

function login() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Email ou senha inválidos.')
    }
}

buttonLogin.addEventListener('click', login)