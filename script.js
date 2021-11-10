const botao = document.querySelector('.trybewarts-login');
const email = 'tryber@teste.com';
const password = '123456';
function exibeAlert() {
if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!')
} else if (email !== 'tryber@teste.com' && password !== '123456'){
    alert('Email ou senha inválidos.')
}
};
