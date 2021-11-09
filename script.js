const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginButton.addEventListener('click', () => {
  console.log(email.value === 'tryber@teste.com');
  console.log(password.value);
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
