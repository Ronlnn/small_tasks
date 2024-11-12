function splitAndMerge(string, separator) {
  const words = string.split(' ');
  const transformedWords = [];

  // Шаг 2: Проходимся по каждому слову
  for (let i = 0; i < words.length; i++) {
    // Разбиваем слово на символы, соединяем их с separator и добавляем к результату
    const transformedWord = words[i].split('').join(separator);
    transformedWords.push(transformedWord);
  }

  // Шаг 3: Объединяем все слова обратно в строку с пробелами между ними
  return transformedWords.join(' ');
}
