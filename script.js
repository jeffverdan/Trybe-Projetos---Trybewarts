let submitLogin = document.querySelector('#submitLogin')
let emailLogin = document.querySelector('#emailLogin')
let senhaLogin = document.querySelector('#senhaLogin')

function login(event) {
    console.log('b')
    if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
        window.alert('a')
    } else {
        window.alert('errado')
    }
}


submitLogin.addEventListener('click', login)