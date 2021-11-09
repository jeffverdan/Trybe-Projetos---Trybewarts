const btnEnter = document.getElementById('btnEntrar');
console.log(btnEnter);

btnEnter.addEventListener('click', (e) => {
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');

  if(inputEmail.value === "tryber@teste.com" && inputPassword.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});
