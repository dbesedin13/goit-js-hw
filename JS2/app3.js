// TASK 3

const findLongestWord = function(string) {
  let str = string.split(' ');
  let long = 0;
  let longWord;
  for (let i = 0; i < str.length; i++) {
    if (long < str[i].length) {
      long = str[i].length;
      longWord = str[i];
    }
  }
  return longWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
