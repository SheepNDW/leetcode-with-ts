// Sliding Window
function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const n = answerKey.length;
  let result = 0;
  let left = 0;
  let changeCount = 0;

  for (let i = 0; i < n; i++) {
    if (answerKey[i] === 'F') changeCount++;
    while (changeCount > k) {
      if (answerKey[left] === 'F') changeCount--;
      left++;
    }

    result = Math.max(result, i - left + 1);
  }

  left = 0;
  changeCount = 0;
  for (let i = 0; i < n; i++) {
    if (answerKey[i] === 'T') changeCount++;
    while (changeCount > k) {
      if (answerKey[left] === 'T') changeCount--;
      left++;
    }

    result = Math.max(result, i - left + 1);
  }

  return result;
}

export { maxConsecutiveAnswers };
