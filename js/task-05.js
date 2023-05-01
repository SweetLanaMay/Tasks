const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue === "") {
    outputEl.textContent = "Anonymus";
  } else {
    outputEl.textContent = inputValue;
  }
}
