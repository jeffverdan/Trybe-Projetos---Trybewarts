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

const buttonMain = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked === false) {
    buttonMain.disabled = true;
  } else {
    buttonMain.disabled = false;
  }
});
