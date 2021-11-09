const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const btnSubmit = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');
const logo = document.getElementById('logo');

const nome = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const textAreaValue = document.getElementById('textarea');

function login() {
  const emailLogin = inputEmail.value;
  const password = inputPassword.value;

  if (emailLogin === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
/* ------------------------------------------ */
btnLogin.addEventListener('click', login);

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});
/* ------------------------------------------ */

/* ------------------------------------------ */
function getFamily() {
  const family = document.querySelectorAll('input[name="family"]:checked');
  let familyValue = '';
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      familyValue = family[i].value;
    }
  }
  return familyValue;
}

/* ------------------------------------------ */

function getTechs() {
  const techs = document.querySelectorAll('.subject');
  let techsValue = '';
  for (let i = 0; i < techs.length; i += 1) {
    if (techs[i].checked) {
      techsValue += `${techs[i].value}, `;
    }
  }
  return techsValue;
}

/* ------------------------------------------ */

function getAvaliation() {
  const avaliation = document.querySelectorAll('input[name="rate"]:checked');
  let avaliationValue = '';
  for (let i = 0; i < avaliation.length; i += 1) {
    if (avaliation[i].checked) {
      avaliationValue = avaliation[i].value;
    }
  }
  return avaliationValue;
}

/* ------------------------------------------ */

function infoObject() {
  const info = {
    Nome: `${nome.value} ${lastName.value}`,
    Email: email.value,
    Casa: house.value,
    Família: getFamily(),
    Matérias: getTechs(),
    Avaliação: getAvaliation(),
    Observações: textAreaValue.value,
  };
  return info;
}

/* ------------------------------------------ */
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const result = document.querySelector('.result');
  const bg = document.querySelector('.bg');
  const p = document.createElement('p');
  const info = infoObject();

  setTimeout(() => {
    form.innerHTML = '';
    form.appendChild(bg);
    logo.style.display = 'none';
    bg.style.display = 'flex';

    for (let i = 0; i < Object.keys(info).length; i += 1) {
      p.innerHTML += `${Object.keys(info)[i]}: ${Object.values(info)[i]}<br>`;
      result.appendChild(p);
    }
  }, 1000);
});
/* ------------------------------------------ */

const check = document.getElementById('agreement');

check.addEventListener('change', () => {
  if (check.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
});
