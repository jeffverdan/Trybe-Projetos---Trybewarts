function formLogin() {
  const email = document.getElementById('email');
  const password = document.getElementById('senha');
  const button = document.getElementById('button');
  function login() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  }
  button.addEventListener('click', login);
}

formLogin();
