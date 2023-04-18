function mergeAlternately(word1: string, word2: string): string {
  let result = '';

  if (word1.length >= word2.length) {
    for (let i = 0; i < word1.length; i++) {
      result += word1.charAt(i);
      result += word2.charAt(i);
    }
  } else {
    for (let i = 0; i < word2.length; i++) {
      result += word1.charAt(i);
      result += word2.charAt(i);
    }
  }

  return result;
}

export { mergeAlternately };
