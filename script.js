function entrar() {
  const botao = document.querySelector('.entrar');
  const email = document.querySelector('.email');
  const senha = document.querySelector('.senha');
  botao.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

entrar();

// function condicao() {
//   const botao = document.querySelector('#submit-btn')
//   const checkbox = document.querySelector('#agreement')
//   checkbox.addEventListener('click', () => {
//     checkbox.value = 'checked'
//   })
//   botao.addEventListener('click', () => {
//     if (checkbox.value === checked) {
//       botao.disabled = false
//     }
//     else {
//       botao.disabled = true
//     }
//   })
// }

// const check = document.querySelector('#agreement')
// function condicao() {
//   const botao = document.querySelector('#submit-btn')
//   check.addEventListener('click', () => {
//     if (document.querySelector('#agreement', ':selected') === true){
//     botao.disabled = false
//     }
//     else {
//       botao.disabled = true
//     }
//   })
//   }
// condicao()
