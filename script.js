const login = document.querySelector('.trybewarts-login');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  const usuario = {
    email: login.elements.email.value,
    password: login.elements.password.value,
  };

  if (usuario.email === 'tryber@teste.com' && usuario.password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  // document.getElementById('demo').innerText = JSON.stringify(usuario);
});
