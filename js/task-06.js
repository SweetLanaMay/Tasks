const inputEl = document.querySelector("#validation-input");
const validLengthEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value;
  const validLengthEl = 6;

  if (inputValue.length === validLengthEl) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
