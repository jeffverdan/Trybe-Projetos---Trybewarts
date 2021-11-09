let submitLogin = document.querySelector('#submitLogin')
let emailLogin = document.querySelector('#emailLogin')
let senhaLogin = document.querySelector('#senhaLogin')

function login(event) {
    if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
        window.alert('Olá, Tryber!')
    } else {
        window.alert('Email ou senha inválidos.')
    }
}


submitLogin.addEventListener('click', login)