const loginHeader = document.getElementsById("botao-entrar");
const emailHeader = document.getElementById("email");
const senhaHeader = document.getElementById("senha");

loginHeader.addEventListener('click', () => {
  if (emailHeader.value === "" || senhaHeader.value === "") {
    alert("Email ou senha inválidos");
  } else {
    alert("Olá Tryber!");
  }
});
