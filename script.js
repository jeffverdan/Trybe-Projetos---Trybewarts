const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnEnviar = document.getElementById("submit-btn");
const checkBox = document.getElementById("agreement");

window.onload = function desabilita() {
  checkBox.disbaled = true;
};

function login() {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

function ativaBtnEnviar() {
  if (checkBox.disbaled == false) {
    btnEnviar.disabled == false;
  } else {
    btnEnviar.disabled == true;
    btnEnviar.style.backgroundColor = "purple";
  }
}
btnLogin.addEventListener("click", login);
checkBox.addEventListener("click", ativaBtnEnviar);
console.log(checkBox.checked);
