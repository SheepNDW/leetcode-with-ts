// Queue
function maxVowels1(s: string, k: number): number {
  let max = 0;
  let currentMax = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const queue: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (queue.length < k) {
      if (vowels.includes(s[i])) currentMax++;
      queue.push(s[i]);
    } else {
      if (vowels.includes(queue.shift()!)) currentMax--;
      if (vowels.includes(s[i])) currentMax++;
      queue.push(s[i]);
    }

    if (currentMax > max) max = currentMax;
  }

  return max;
}

// Two Pointer
function maxVowels(s: string, k: number): number {
  let max = 0;
  let currentMax = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) {
    if (i < k && vowels.includes(s[i])) {
      currentMax++;
    } else {
      if (vowels.includes(s[i])) currentMax++;
      if (vowels.includes(s[i - k])) currentMax--;
    }

    max = Math.max(max, currentMax);
  }

  return max;
}

export { maxVowels };
