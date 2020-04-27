let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите случайное число');

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

numbers.pop();

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
