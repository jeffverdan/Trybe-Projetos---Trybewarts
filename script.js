function validate() {
  const x = document.getElementById('email');
  const y = document.getElementById('senha');
  const button = document.getElementById('btn');

  button.addEventListener('click', () => {
    if (x.value === 'tryber@teste.com' && y.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function submit() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', () => {
    alert('Seu formulário foi enviado com sucesso.');
  });
}

function agree() {
  const verificado = document.getElementById('agreement');
  const verify = document.getElementById('submit-btn');
  verificado.addEventListener('change', () => {
    if (verificado.checked === true) {
      verify.removeAttribute('disabled');
    } else {
      verify.setAttribute('disabled', 'disabled');
    }
  });
}

agree();
submit();
validate();
