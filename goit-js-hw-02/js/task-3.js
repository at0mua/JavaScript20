const findLongestWord = function(string) {
  let array = string.split(' ');
  let longestWord;
  let wordLength = 0;

  for (let i = 0; i <= array.length - 1; i += 1) {
    if (wordLength < array[i].length) {
      wordLength = array[i].length;
      longestWord = array[i];
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
