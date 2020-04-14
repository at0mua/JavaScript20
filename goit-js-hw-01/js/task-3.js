const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('Введите пароль: ');

if (password === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

alert(message);
