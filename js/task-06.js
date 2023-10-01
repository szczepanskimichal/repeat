const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", function () {
  const desiredLength = parseInt(inputElement.getAttribute("data-length"));

  const enteredValue = inputElement.value.trim();

  const isVaild = enteredValue.length === desiredLength;

  if (isVaild) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
