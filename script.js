function entrar() {
  const botao = document.querySelector('.entrar');
  const email = document.querySelector('.email');
  const senha = document.querySelector('.senha');
  botao.addEventListener('click', function () {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

entrar();
