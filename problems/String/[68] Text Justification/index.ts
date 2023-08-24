function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let lineWords: string[] = [];
  let lineLength = 0;

  for (const word of words) {
    if (lineLength + word.length + lineWords.length > maxWidth) {
      result.push(...distributeSpaces(lineWords, maxWidth));
      lineWords = [];
      lineLength = 0;
    }
    lineWords.push(word);
    lineLength += word.length;
  }

  // 最後一行
  const lastLine = lineWords.join(' ') + ' '.repeat(maxWidth - lineLength - lineWords.length + 1);
  result.push(lastLine);

  return result;
}

function distributeSpaces(words: string[], maxWidth: number): string[] {
  // 計算基本空格數量
  const totalWordsLength = words.join('').length;
  let totalSpaces = maxWidth - totalWordsLength;

  // 計算間隙數量
  const gaps = words.length - 1;

  // 如果只有一個字詞，則所有空格都放在字詞後面
  if (gaps === 0) return [words[0] + ' '.repeat(totalSpaces)];

  // 計算每個間隙的基本空格數量和剩餘的空格
  const spacesPerGap = Math.floor(totalSpaces / gaps);
  const extraSpaces = totalSpaces % gaps;

  // 分配空格
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    // 基本空格數量加上可能的額外空格
    let gap = ' '.repeat(spacesPerGap + (i <= extraSpaces ? 1 : 0));
    result += gap + words[i];
  }

  return [result];
}

export { fullJustify };
