const lg = function login() {
  if (
    document.getElementById('email').value.includes('@', '.com')
    && document.getElementById('password').value.length > 4
  ) {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    window.alert('Olá, Tryber!');
  } else {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    window.alert('Email ou senha inválidos.');
  }
};
document.getElementById('login').addEventListener('click', lg);
