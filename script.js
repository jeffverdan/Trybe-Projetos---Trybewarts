const submitButton = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');

checkboxAgreement.addEventListener('click', function() {
    submitButton.disabled = !submitButton.disabled;
})