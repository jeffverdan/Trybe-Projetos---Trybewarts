const submitLogin = document.querySelector("#submitLogin");
const emailLogin = document.querySelector("#emailLogin");
const senhaLogin = document.querySelector("#senhaLogin");

function login() {
  if (
    emailLogin.value === "tryber@teste.com" &&
    senhaLogin.value === "123456"
  ) {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
}

submitLogin.addEventListener("click", login);
