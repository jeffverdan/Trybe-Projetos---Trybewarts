const submitBtn = document.getElementById('submit-btn');

submitBtn.disabled = true;

const checkbox = document.getElementById('agreement');

checkbox.addEventListener('change', function checked() {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
