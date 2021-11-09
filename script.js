const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const headerButton = document.querySelector('#header-button');

// console.log(email.value, password.value, headerButton);

headerButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const sendbtn = document.querySelector('#submit-btn');
const checker = document.querySelector('#agreement');

checker.onchange = () => {
  if (this.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
};
