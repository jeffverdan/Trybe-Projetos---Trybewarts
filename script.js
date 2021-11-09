const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementsByName('email');
  const senha = document.getElementsByName('password');
  console.log(email, senha);
});
