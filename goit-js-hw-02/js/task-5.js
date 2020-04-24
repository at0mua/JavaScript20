const checkForSpam = function(message) {
  const arraySymbols = message.toLowerCase().split('');
  const newArraySymbols = [];

  for (let i = 0; i <= arraySymbols.length - 1; i += 1) {
    if (
      arraySymbols[i].includes('[') === false &&
      arraySymbols[i].includes(']') === false
    ) {
      newArraySymbols.push(arraySymbols[i]);
    }
  }

  const formatMessage = newArraySymbols.join('');
  const arrayWords = formatMessage.split(' ');

  for (let i = 0; i <= arrayWords.length - 1; i += 1) {
    if (
      arrayWords[i].includes('spam') === true ||
      arrayWords[i].includes('sale') === true
    ) {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
