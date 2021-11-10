const btnEnter = document.querySelector('#btn-enter');
const inputEmail = document.querySelector('#login-email');
const inputPassword = document.querySelector('#input-password');
const btnSubmit = document.querySelector('#submit-btn');
const inputSubmit = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');
const formPage = document.querySelector('#evaluation-form');
const inputFamily = document.getElementsByName('family');
const inputContent = document.getElementsByClassName('subject');
const selectHouse = document.querySelector('#house').children;
const inputAvaliation = document.getElementsByName('rate');

btnEnter.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputSubmit.addEventListener('click', () => {
  if (inputSubmit.checked) {
    btnSubmit.removeAttribute('disabled');
  }
});

textArea.addEventListener('keyup', () => {
  count.innerText = 500 - textArea.value.length;
});


function colectData (input){
  let data = ''
  for (let index = 0; index < input.length; index += 1){
    if( input[index].checked ){
      data = input[index].value;  
    }
  }; 
  return data;
}

function colectDataHouse(){
  for (let index = 0; index < selectHouse.length; index += 1){
    if (selectHouse[index].selected){
      house = selectHouse[index].value;
    }
  };
  return house;
}

function colectMat(input){
  let content = []
  for (let index = 0; index < input.length; index += 1){
    if( input[index].checked ){
      content.push(` ${input[index].value}`);  
    }
  };
  content.join() 
  return content;
  
};

function printInformation (element){
  let paragraph = document.createElement('p')
  paragraph.innerText = element;
  formPage.appendChild(paragraph)
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let name = document.querySelector('#input-name').value;
  let lastName = document.querySelector('#input-lastname').value;
  let fullName = `Nome: ${name} ${lastName}`
  let email = `Email: ${document.querySelector('#input-email').value}`;
  let family = `Família: ${colectData(inputFamily)}`;
  let content = `Matérias: ${colectMat(inputContent)}`;
  let house = `Casa: ${colectDataHouse()}`;
  let avaliation = `Avaliação: ${colectData(inputAvaliation)}`
  let observation = `Observações: ${document.querySelector('#textarea').value}`;
  const arrData = [fullName,email,house,family,content,avaliation,observation]
  formPage.innerHTML = ''
  arrData.forEach(printInformation)
});