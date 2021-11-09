const btnLogin = document.getElementById("btn-login");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("senha");

function validationLogin() {
  if (
    inputEmail.value === "tryber@teste.com" &&
    inputPassword.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

btnLogin.addEventListener("click", validationLogin);
