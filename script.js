const buttonHeader = document.querySelector('#btn-enter');
const emailHeader = document.querySelector('#email-input');

buttonHeader.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailHeader.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
