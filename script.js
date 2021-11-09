const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonLoginEnter = document.querySelector("#button-login-enter");

function verify(valueA, valueB) {
  return valueA && valueB
    ? alert("Olá, Tryber!")
    : alert("Email ou senha inválidos.");
}

buttonLoginEnter.addEventListener("click", () => {
  const emailValue = email.value;
  const passwordValue = password.value;
  const checkEmail = emailValue === "tryber@teste.com";
  const checkPassword = passwordValue === "123456";
  verify(checkEmail, checkPassword);
});
