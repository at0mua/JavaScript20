let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите случайное число');
  console.log(input);

  if (Number.isNaN(Number(input)) === false) {
    numbers.push(Number(input));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);

numbers.pop();

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
