function alienLanguage(str) {
  return str
    .split(' ')
    .map(word => {
      const upperWord = word.toUpperCase();
      return upperWord.slice(0, -1) + upperWord.slice(-1).toLowerCase();
    })
    .join(' ');
}
