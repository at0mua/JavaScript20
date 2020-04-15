let credits = 23580;
const pricePerDroid = 3000;

console.log(`На Вашем счету ${credits} кредитов.`);

let numberOfDroids = prompt('Какое количество дроидов вы хотите купить?');

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = pricePerDroid * numberOfDroids;
  console.log(`Сумма заказа ${totalPrice} кредитов.`);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${numberOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
