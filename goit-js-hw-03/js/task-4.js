const countTotalSalary = function(employees) {
  const salariesWorkers = Object.values(employees);

  let totalSalaries = 0;

  for (const salary of salariesWorkers) {
    totalSalaries += salary;
  }

  return totalSalaries;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
