const main = {
  prop: 42,
  login: {
    form: document.querySelector('.trybewarts-login'),
    email: document.querySelector('.trybewarts-login input[name="email"]'),
    pwd: document.querySelector('.trybewarts-login input[name="password"]'),
  },

  formListener: () => {
    main.login.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (main.login.email.value === 'tryber@teste.com' && main.login.pwd.value === '123456') {
        alert('Olá, Tryber!');
      } else {
        alert('Email ou senha inválidos.');
      }
    });
  },

  init: () => {
    main.formListener();
  },
};
main.init();
