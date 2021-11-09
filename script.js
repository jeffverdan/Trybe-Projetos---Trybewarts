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

const caracteres = document.getElementById('textarea');
const counter = document.getElementById('counter');
const qtMaxCaracteres = caracteres.maxLength;
counter.innerText = qtMaxCaracteres;

caracteres.addEventListener('input', () => {
  const contador = caracteres.value.length;
  counter.innerText = qtMaxCaracteres - contador;
});

const formCadastro = document.getElementById('evaluation-form');
const parentCadastro = document.getElementById('box-text-form');
const materias = document.getElementsByClassName('subject');

function adicionarConteudoCadastro(conteudo) {
  const campo = document.createElement('p');
  parentCadastro.appendChild(campo);
  campo.innerText = conteudo;
}

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault(); // previne que o evento de enviar form seja disparado.
  document.getElementById('campos').classList.add('hidden');
  adicionarConteudoCadastro(`Nome: ${formCadastro.nome.value} ${formCadastro.sobrenome.value}`);
  adicionarConteudoCadastro(`Email: ${formCadastro.email.value}`);
  adicionarConteudoCadastro(`Casa: ${formCadastro.house.value}`);
  adicionarConteudoCadastro(`Família: ${formCadastro.family.value}`);
  const result = [];
  for (const index of materias) {
    if (index.checked) {
      result.push(index.value);
    }
  }
  adicionarConteudoCadastro(`Matérias: ${result.join(', ')}`);
  adicionarConteudoCadastro(`Avaliação: ${formCadastro.rate.value}`);
  adicionarConteudoCadastro(`Observações: ${formCadastro.textarea.value}`);
  parentCadastro.classList.remove('hidden');
});
