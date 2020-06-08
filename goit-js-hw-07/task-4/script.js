const decrBtn = document.querySelector('[data-action="decrement"]');

const incrBtn = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

let counterValue = Number(value.textContent);

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrBtn.addEventListener('click', decrement);
incrBtn.addEventListener('click', increment);
