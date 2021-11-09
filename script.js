const selecionaButao = document.querySelector(".header-button");

selecionaButao.addEventListener("click", alerta);

function alerta() {
  const emailInput = document.querySelector("#input-email");
  const senhaInput = document.querySelector("#input-senha");

  if (
    emailInput.value === "tryber@teste.com" &&
    senhaInput.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválido");
  }
}
