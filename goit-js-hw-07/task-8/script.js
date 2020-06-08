const inputRef = document.querySelector('#controls > input');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let boxWidth = 30;
let boxHeight = 30;

const getRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const getNewBox = () => {
  const box = document.createElement('div');
  box.style.width = `${boxWidth}px`;
  box.style.height = `${boxHeight}px`;
  box.style.backgroundColor = getRandColor();
  return box;
};

const createBoxes = amount => {
  const arrBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    arrBoxes.push(getNewBox());
    boxWidth += 10;
    boxHeight += 10;
  }
  boxesRef.append(...arrBoxes);
};

renderRef.addEventListener('click', () => {
  createBoxes(Number(inputRef.value));
});

destroyRef.addEventListener('click', () => {
  while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.firstChild);
  }
  boxWidth = 30;
  boxHeight = 30;
});
