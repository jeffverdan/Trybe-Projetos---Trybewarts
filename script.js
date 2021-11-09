function validate () {
    const x = document.getElementById('email');
    const y = document.getElementById('senha');
    const button = document.getElementById('btn');

    button.addEventListener('click', function() {
        if (x.value === 'tryber@teste.com' && y.value === '123456' ) {
            alert('Olá, Tryber!')
        }else {
            alert('Email ou senha inválidos.')
        }
    });
}

validate();