const email = document.querySelector("email");
const password = document.querySelector("password");

function alerta() {
  if (email === 'ryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

alerta();