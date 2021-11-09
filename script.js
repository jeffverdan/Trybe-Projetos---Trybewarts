const button = document.querySelector('#login-button');
const submitButton = document.querySelector('#submit-btn');
const checkbox = document.getElementById('agreement');

function login(event) {
  event.preventDefault();
  const emailLogin = document.getElementById('email').value;
  const passwordLogin = document.getElementById('password').value;

  if (emailLogin === 'tryber@teste.com' || passwordLogin === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);

function submitbtn(event) {
  event.preventDefault();
  if (!checkbox.checked) {
    submitButton.disabled = true;
  }
  submitButton.disabled = false;
}
// submitButton.addEventListener('click', submitbtn);
window.onload = submitbtn;
