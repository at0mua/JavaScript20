let input;
let total = 0;

do {
  input = prompt('Введите случайное число');
  total += Number(input);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
