const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', (event) => {
  const element = event.target;
  element.preventDefault();
  console.log('evento funcionando'); /* só pra testar */
});