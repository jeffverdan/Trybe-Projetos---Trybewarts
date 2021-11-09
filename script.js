const botao = document.querySelector('.btn-enviar');
const inputEmail = document.querySelector('.input-email');
const inputSenha = document.querySelector('.input-senha');

botao.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const inputAgree = document.querySelector('#agreement');

function checkedButton(event) {
  const buttonSubmit = document.querySelector('#submit-btn');
  const buttonClick = event.target.checked;
  if (buttonClick) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

function checkedInput() {
  inputAgree.addEventListener('click', checkedButton);
}

window.onload = () => {
  checkedInput();
};

// quando a janela carregar vai chamar a função do input e quando a gente clicar no input vai habilitar ou desabilitar o botão de enviar.
