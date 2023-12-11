function removeAlmostEqualCharacters(word: string): number {
  let count = 0;

  for (let i = 1; i < word.length; i++) {
    const diff = Math.abs(word[i].charCodeAt(0) - word[i - 1].charCodeAt(0));
    if (diff <= 1) {
      count++;
      i++; // 跳過下一個
    }
  }

  return count;
}

/**
 * 檢查相鄰兩個，如果需要調整 count 就加一，並且在下一次跳過它避免重複計算
 */

export { removeAlmostEqualCharacters };
