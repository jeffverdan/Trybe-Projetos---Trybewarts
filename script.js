// Requisto 3

function btnSignUp() {
  // Resolvido com a ajuda https://www.linhadecomando.com/javascript/javascript-validando-campos-de-email
  if (document.forms[0].email.value === '' || document.forms[0].email.value.indexOf('@') === -1) {
    return alert('Email ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
}

const btnClick = document.getElementById('btn-login');
btnClick.addEventListener('click', btnSignUp);
