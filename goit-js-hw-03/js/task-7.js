/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

let trId = 0;

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    trId += 1;
    const transactions = { ID: trId, TYPE: type, AMOUNT: amount };
    this.transactions.push(transactions);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, 'deposit');
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      this.createTransaction(amount, 'withdraw');
    }
    return 'Cятие такой суммы не возможно, недостаточно средств.';
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.ID === id) {
        return transaction;
      }
    }

    return 'Транзакция не найдена.';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTransactionAmount = 0;
    for (const transaction of this.transactions) {
      if (transaction.TYPE === type) {
        totalTransactionAmount += transaction.AMOUNT;
      }
    }
    return totalTransactionAmount;
  },
};

account.deposit(500);
account.withdraw(84);
account.deposit(100);
account.deposit(340);
account.deposit(560);
account.withdraw(140);
console.table(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(7));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
