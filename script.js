const btnLogin = document.getElementById("btn-login");
const btnEnviar = document.getElementById("submit-btn").disable = true;
const checkBox = document.getElementById("agreement");

function validaLogin() {
  const inputEmail = document.getElementById("email-login");
  const inputSenha = document.getElementById("senha-login");
  if (inputEmail.value === "trybe@teste.com" || inputSenha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

function btnAtivar() {
  if (checkBox.disable === false) {
    btnEnviar.disable = false;
  } else if (checkBox.disable === true) {
    btnEnviar.disable = true;
  }
}
btnLogin.addEventListener("click", validaLogin);
btnEnviar.addEventListener("click", btnAtivar);
