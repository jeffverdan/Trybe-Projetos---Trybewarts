document.getElementById("submit-btn").disabled = true;

var checkbox = document.getElementById("agreement");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("submit-btn").disabled = false;
  } else {
    document.getElementById("submit-btn").disabled = true;
  }
});
