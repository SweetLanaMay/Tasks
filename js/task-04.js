const counterValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let value = 0;

btnDecrement.addEventListener("click", onBtnDecrementClick);

function onBtnDecrementClick(event) {
  value -= 1;
  counterValue.textContent = value;
}

btnIncrement.addEventListener("click", onBtnIncrementClick);

function onBtnIncrementClick(event) {
  value += 1;
  counterValue.textContent = value;
}
