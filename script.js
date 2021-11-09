const selecionaButao = document.querySelector(".header-button");

selecionaButao.addEventListener("click", alerta);

function alerta() {
  const emailInput = document.querySelector("#email-header");
  const senhaInput = document.querySelector("#senha-header");

  if (emailInput.value === "tryber@teste.com" && senhaInput.value === "123456"){
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

function clickCheckbox() {
  const checkboxElement = document.querySelector('#agreement');
  checkboxElement.addEventListener('click', (e) => {
    const buttonElement = document.querySelector('#submit-btn');
    buttonElement.disabled = !e.target.checked;
  });
}
clickCheckbox();