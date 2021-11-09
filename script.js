let btnEntrar = document.getElementById('btn-entrar')
let email = document.querySelector('#email')
let senha = document.querySelector('#password')

btnEntrar.addEventListener('click', function (event) {
  event.preventDefault()
  if (email.value === 'tryber@teste.com' && senha.value === "123456") { 
    return alert ("Olá, Tryber!");
  }
  return alert ('Email ou senha inválidos.');
})
