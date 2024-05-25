function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const lettersCount: number[] = Array(26).fill(0);
  for (const letter of letters) {
    lettersCount[letter.charCodeAt(0) - 97]++;
  }

  function getScore(word: string): number {
    let res = 0;
    for (const letter of word) {
      res += score[letter.charCodeAt(0) - 97];
    }
    return res;
  }

  function canFormWord(word: string, lettersCount: number[]): boolean {
    const wordCount: number[] = Array(26).fill(0);
    for (const letter of word) {
      wordCount[letter.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
      if (wordCount[i] > lettersCount[i]) {
        return false;
      }
    }

    return true;
  }

  function backtrack(i: number): number {
    if (i === words.length) {
      return 0;
    }

    let maxScore = backtrack(i + 1);

    if (canFormWord(words[i], lettersCount)) {
      for (const letter of words[i]) {
        lettersCount[letter.charCodeAt(0) - 97]--;
      }

      maxScore = Math.max(maxScore, getScore(words[i]) + backtrack(i + 1));

      for (const letter of words[i]) {
        lettersCount[letter.charCodeAt(0) - 97]++;
      }
    }

    return maxScore;
  }

  return backtrack(0);
}

export { maxScoreWords };
