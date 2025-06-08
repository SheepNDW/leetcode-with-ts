// enumeration
function answerString0(word: string, numFriends: number): string {
  if (numFriends === 1) return word;

  const n = word.length;
  const maxLen = n - (numFriends - 1);
  let res = '';

  for (let i = 0; i < n; i++) {
    const sub = word.slice(i, Math.min(i + maxLen, n));
    if (sub > res) {
      res = sub;
    }
  }

  return res;
}

// two pointer
function answerString(word: string, numFriends: number): string {
  if (numFriends === 1) return word;

  const n = word.length;
  const maxLen = n - numFriends + 1;
  let i = 0;
  let j = 1;
  let k = 0;

  while (j + k < n) {
    if (word[i + k] === word[j + k]) {
      k++;
    } else if (word[i + k] > word[j + k]) {
      j = j + k + 1;
      k = 0;
    } else {
      i = Math.max(i + k + 1, j);
      j = i + 1;
      k = 0;
    }
  }

  return word.slice(i, i + maxLen);
}

export { answerString };
