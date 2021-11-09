// Requisito 3
function login() {
  const email = document.getElementById('email-input');
  const password = document.getElementById('password-input');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
} 
  return alert('Email ou senha inválidos.');
}

document.getElementById('btn-login').addEventListener('click', login);
