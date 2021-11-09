const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');
const btnLogin = document.getElementById('btnLogin');
const aceiteTermos = document.getElementById('agreement');
const btnSubit = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
const formsContaier = document.getElementById('evaluation-form');
let infosDoAluno = '';
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementsByName('family');
const materias = document.getElementsByClassName('subject');
const nota = document.getElementsByName('rate');

btnLogin.addEventListener('click', () => {
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

aceiteTermos.addEventListener('change', (e) => {
  if (e.target.checked === true) {
    btnSubit.disabled = false;
  } else {
    btnSubit.disabled = true;
  }
});

areaTexto.addEventListener('input', (e) => {
  contador.innerText = 500 - e.target.value.length;
});

function verificaFamilia() {
  infosDoAluno = '';
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      infosDoAluno += `Famlia: ${familia[i].value} `;
    }
  }
  const mensagemFamilia = document.createElement('p');
  mensagemFamilia.innerText = infosDoAluno;
  formsContaier.appendChild(mensagemFamilia);
}

function verificaConteudos() {
  let conteudos = '';
  infosDoAluno = '';
  for (let j = 0; j < materias.length; j += 1) {
    if (materias[j].checked) {
      conteudos += `${materias[j].value}, `;
    }
  }
  infosDoAluno += `Matérias: ${conteudos.substr('', conteudos.length - 2)}`;
  const mensagemConteudo = document.createElement('p');
  mensagemConteudo.innerText = infosDoAluno;
  formsContaier.appendChild(mensagemConteudo);
}

function verificaNota() {
  infosDoAluno = '';
  for (let k = 0; k < nota.length; k += 1) {
    if (nota[k].checked) {
      infosDoAluno += `Avaliação: ${nota[k].value}`;
    }
  }
  const mensagemNota = document.createElement('p');
  mensagemNota.innerText = infosDoAluno;
  formsContaier.appendChild(mensagemNota);
}

function aparecerMensagem() {
  const mensagemNome = document.createElement('p');
  mensagemNome.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  formsContaier.appendChild(mensagemNome);
  const mensagemEmail = document.createElement('p');
  mensagemEmail.innerText = `Email: ${email.value}`;
  formsContaier.appendChild(mensagemEmail);
  const mensagemCasa = document.createElement('p');
  mensagemCasa.innerText = `Casa: ${casa.value}`;
  formsContaier.appendChild(mensagemCasa);
  verificaFamilia();
  verificaConteudos();
  verificaNota();
  const mensagemObs = document.createElement('p');
  mensagemObs.innerText = `Observações: ${areaTexto.value}`;
  formsContaier.appendChild(mensagemObs);
}

btnSubit.addEventListener('click', (e) => {
  e.preventDefault();
  formsContaier.innerHTML = '';
  aparecerMensagem();
});
