const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

btnColor.addEventListener('click', styleColor);

function styleColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
  
}
console.log(btnColor);




