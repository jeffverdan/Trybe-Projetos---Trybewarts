const email = document.querySelector('#email').value;
const senha = document.querySelector('#senha').value;
const Btn = document.queryselector('#BtnL');

function Login() {
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

Btn.addEventListener('click', Login);
