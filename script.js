const button = document.querySelector('#login-button');


button.addEventListener('click', function (event) {
  event.preventDefault();

  const emailLogin = document.getElementById('email').value;
  const passwordLogin = document.getElementById('password').value;

  console.log(emailLogin);
  console.log(passwordLogin);
  if (emailLogin == "tryber@teste.com" || passwordLogin == "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});