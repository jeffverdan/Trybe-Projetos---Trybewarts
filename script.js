const btnLogin = document.getElementById('BtnL');
const btnEnviar = document.getElementById('submit-btn');

btnLogin.addEventListener('click', () => {
  const inputSenha = document.getElementById('senha');
  const inputEmail = document.getElementById('email');
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnEnviar.disabled = true;
// seleciona o button e desabilita.
const checkInfo = document.getElementById('agreement');
// verifica o conteudo do check
checkInfo.addEventListener('input', () => {
  if (checkInfo !== null) {
    // habilita o botão
    btnEnviar.disabled = false;
  } else {
    // desabilita o botão se o conteúdo do input ficar em branco
    btnEnviar.disabled = true;
  }
});

const contador = 500;
document.getElementById('counter').innerHTML = `contador: ${contador}`;
const textArea = document.getElementById('textarea');

textArea.addEventListener('input', (event) => {
  const textInput = event.target.value;
  const num = contador - textInput.length;
  document.getElementById('counter').innerHTML = `Contador: ${num}`;
});

const fillName = () => {
  const name = document.getElementById('input-name');
  const lastname = document.getElementById('input-lastname');
  const filledName = document.getElementById('filled-name');

  filledName.innerHTML = `${name.value} ${lastname.value}`;
};

const fillEmail = () => {
  const email = document.getElementById('input-email');
  const filledEmail = document.getElementById('filled-email');
  filledEmail.innerHTML = email.value;
};

const fillHouse = () => {
  const house = document.getElementById('house');
  const filledHouse = document.getElementById('filled-house');
  filledHouse.innerHTML = house.value;
};

const fillFamily = () => {
  const familyName = document.querySelectorAll('input[name="family"]');
  const filledFamily = document.getElementById('filled-family');
  for (let index = 0; index < familyName.length; index += 1) {
    if (familyName[index].checked) {
      filledFamily.innerHTML = familyName[index].value;
    }
  }
};

const fillSubjects = () => {
  const subject = document.querySelectorAll('.subject');
  const filledSubject = document.getElementById('filled-subject');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      filledSubject.innerHTML += `${subject[index].value}, `;
    }
  }
};

const fillRate = () => {
  const rate = document.querySelectorAll('input[name="rate"]');
  const filledRate = document.getElementById('filled-rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      filledRate.innerHTML = rate[index].value;
    }
  }
};

const fillComent = () => {
  const coment = document.getElementById('textarea');
  const filledComent = document.getElementById('filled-coment');
  filledComent.innerHTML = coment.value;
};

function eventSubmit() {
  btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    fillName();
    fillEmail();
    fillHouse();
    fillFamily();
    fillSubjects();
    fillRate();
    fillComent();
  });
}

eventSubmit();
