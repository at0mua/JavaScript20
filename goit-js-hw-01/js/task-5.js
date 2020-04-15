let destinationСountry = prompt('В скакую страну доставить товар?');
let cost;

if (destinationСountry === null) {
  alert('Отменено пользователем!');
} else {
  switch (destinationСountry.toLowerCase()) {
    case 'китай':
      cost = 100;
      break;

    case 'чили':
      cost = 250;
      break;

    case 'австралия':
      cost = 170;
      break;

    case 'индия':
      cost = 80;
      break;

    case 'ямайка':
      cost = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна.');
  }
  alert(`Доставка в ${destinationСountry} будет стоить ${cost} кредитов.`);
}
