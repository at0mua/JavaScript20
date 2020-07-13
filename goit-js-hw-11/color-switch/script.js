const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let colorChanger = null;
let changerActive = false;

refs.buttonStart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', stopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBodyColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

function changeColor() {
  if (changerActive) {
    return;
  }
  randomBodyColor();
  changerActive = true;
  colorChanger = setInterval(randomBodyColor, 1000);
}

function stopChangeColor() {
  clearInterval(colorChanger);
  changerActive = false;
}
