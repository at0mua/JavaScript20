const findLongestWord = function(string) {
  const arrayWords = string.split(' ');
  let longestWord;
  let wordLength = 0;
  for (const oneWord of arrayWords) {
    if (wordLength < oneWord.length) {
      wordLength = oneWord.length;
      longestWord = oneWord;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
