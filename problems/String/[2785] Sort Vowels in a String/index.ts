function sortVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const stringArray = s.split('');

  // 記錄每個位置上的字母是否為母音
  const isVowel = stringArray.map((char) => vowels.includes(char));

  const vowelsInString = stringArray.filter((_, index) => isVowel[index]).sort();

  const result = stringArray.map((char, index) => {
    if (isVowel[index]) {
      return vowelsInString.shift();
    }
    return char;
  });

  return result.join('');
}

export { sortVowels };
