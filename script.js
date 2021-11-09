const loginBtn = document.getElementById("loginBtn");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputAgreement = document.getElementById("agreement");
const formsBtn = document.getElementById("submit-btn");

loginBtn.addEventListener("click", () => {
  if (
    inputEmail.value === "tryber@teste.com" &&
    inputPassword.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

inputAgreement.addEventListener("click", () => {
  if (inputAgreement.value !== null) {
    formsBtn.disabled = false;
  } else  if (inputAgreement.checked){ 
    formsBtn.disabled = true;
  }
});
