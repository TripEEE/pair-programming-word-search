const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }

  const verticalJoin = letters[0].map((L, x) => letters.map(y => y[x]).join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseLetters = letters.reverse();
  const verticalJoinReverse = reverseLetters[0].map((L, x) => reverseLetters.map(y => y[x]).join(''));
  const horizontalJoinReverse = reverseLetters.map(ls => ls.reverse().join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (l of verticalJoinReverse) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (l of horizontalJoinReverse) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;