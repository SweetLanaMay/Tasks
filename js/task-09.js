
const colorChanged = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", onColorChangeBtnClick);

function onColorChangeBtnClick(event) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorChanged.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
