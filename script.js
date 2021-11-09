const inputEmail = document.getElementById('email');
const email = 'tryber@teste.com';
const inputSenha = document.getElementById('password');
const senha = '123456';
const btnEntrar = document.getElementById('button');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('label-infos');

btnEntrar.addEventListener('click', () => {
  if (inputEmail.value === email && inputSenha.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnSubmit.disabled = true;
agreement.addEventListener('click', desabilitar);
function desabilitar() {
  if (agreement) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
}
