const btnHeader = document.getElementById('submit-header');
function alertEmailAndPassword() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnHeader.addEventListener('click', alertEmailAndPassword);
// Criando os radio buttons (req 14)
function createRadioButtons() {
  const elementLabel = document.createElement('label');
  elementLabel.id = 'label-rate';
  elementLabel.innerText = 'Como você avalia a Trybewarts?';
  const evaluationForm = document.getElementById('evaluation-form');
  const elementDiv = document.createElement('div');
  elementDiv.id = 'radio-container';
  evaluationForm.appendChild(elementDiv);
  elementDiv.appendChild(elementLabel);
  for (let i = 0; i <= 10; i += 1) {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.innerHTML = i;
    radioButton.value = i;
    radioButton.name = 'rate';
    elementDiv.appendChild(radioButton);
  }
}
createRadioButtons();
// Criando o textarea (req 15)
function createTextArea() {
  const elementLabel = document.createElement('label');
  elementLabel.className = 'textarea';
  elementLabel.innerText = 'Deixe seu comentário:';
  document.getElementById('evaluation-form').appendChild(elementLabel);
  const textArea = document.createElement('textarea');
  textArea.id = 'textarea';
  textArea.maxLength = 500;
  document.getElementById('evaluation-form').appendChild(textArea);
}
createTextArea();
// Req 17 (pulei o 16)
function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submit-btn';
  submitBtn.innerText = 'Enviar';
  submitBtn.type = 'submit';
  document.getElementById('evaluation-form').appendChild(submitBtn);
}
createSubmitBtn();
