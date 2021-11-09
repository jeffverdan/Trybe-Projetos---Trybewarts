const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');
const btnLogin = document.getElementById('btnLogin');
const aceiteTermos = document.getElementById('agreement');
const btnSubit = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
const formsContaier = document.getElementById('evaluation-form');
const mensagem = document.getElementById('mensagem');
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
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      infosDoAluno += `Famlia: ${familia[i].value} <br>`;
    }
  }
  return infosDoAluno;
}

function verificaConteudos() {
  let conteudos = '';
  for (let j = 0; j < materias.length; j += 1) {
    if (materias[j].checked) {
      conteudos += `${materias[j].value}, `;
    }
  }
  infosDoAluno += `Matérias: ${conteudos.substr('', conteudos.length - 2)} <br>`;
  return infosDoAluno;
}
// testando erro lint
function verificaNota() {
  for (let k = 0; k < nota.length; k += 1) {
    if (nota[k].checked) {
      infosDoAluno += `Avaliação: ${nota[k].value} <br>`;
    }
  }
  return infosDoAluno;
}

function aparecerMensagem() {
  infosDoAluno += `Nome: ${nome.value} ${sobrenome.value} <br>`;
  infosDoAluno += `Email: ${email.value} <br>`;
  infosDoAluno += `Casa: ${casa.value} <br>`;
  verificaFamilia();
  verificaConteudos();
  verificaNota();
  infosDoAluno += `Observações: ${areaTexto.value} <br>`;
  mensagem.innerHTML = infosDoAluno;
}

btnSubit.addEventListener('click', (e) => {
  e.preventDefault();
  formsContaier.style.display = 'none';
  mensagem.style.display = 'block';
  aparecerMensagem();
});
