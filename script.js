const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const botao = document.querySelector('.button');

function loginCorreto() {
if (email === "tryber@teste.com" && senha === 123456) {
    alert('Olá, Trybe!')

} else {
    alert('Email ou senha inválidos.')
    
}
}

botao.addEventListener('click', loginCorreto)