const button = document.getElementById('btn');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

button.addEventListener('click', () => {
  if (input1.value === 'tryber@teste.com' && input2.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const button2 = document.getElementById('submit-btn');
const checked = document.querySelector('#agreement');
checked.addEventListener('click', () => {
  button2.disabled = false; 
})

