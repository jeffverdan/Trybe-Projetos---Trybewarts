const btnLogin = document.getElementById("btn-login");
let btnEnviar = document.getElementById("submit-btn");
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

function btnAtivar(elem) {
  if (elem.checked === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

btnLogin.addEventListener("click", validaLogin);
btnEnviar.addEventListener("click", btnAtivar);
