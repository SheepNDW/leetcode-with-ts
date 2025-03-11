/*
  brute force
*/
function countOfSubstrings0(word: string, k: number): number {
  const n = word.length;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let res = 0;

  for (let i = 0; i <= n - 5; i++) {
    const set = new Set<string>();
    let count = 0;

    for (let j = i; j < n; j++) {
      if (vowels.has(word[j])) {
        set.add(word[j]);
      } else {
        count += 1;
        if (count > k) break;
      }

      if (set.size === 5 && count === k) {
        res += 1;
      }
    }
  }

  return res;
}

/*
  sliding window

  [i X X X X X j-1] j X X]
                  連續vowel

  countV # vowel types
  countC # consonants

  countV == 5 && countC == k

  countV < 5 || countC < k

  countV == 5 && countC >= k
  1. countC == k, ret += 1 + consecutive[j]
  2. countC > k, i++
*/
function countOfSubstrings(word: string, k: number): number {
  const n = word.length;
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  const map = new Map<string, number>();

  const consecutive = new Array(n).fill(0);
  let c = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (vowelSet.has(word[i])) {
      c++;
    } else {
      c = 0;
    }
    consecutive[i] = c;
  }

  let res = 0;
  let vowelCount = 0;
  let consonantCount = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j < n && (vowelCount < 5 || consonantCount < k)) {
      if (vowelSet.has(word[j])) {
        map.set(word[j], (map.get(word[j]) || 0) + 1);
        if (map.get(word[j]) === 1) vowelCount++;
      } else {
        consonantCount++;
      }
      j++;
    }

    if (vowelCount === 5 && consonantCount === k) {
      res += 1 + (j < n ? consecutive[j] : 0);
    }

    if (vowelSet.has(word[i])) {
      map.set(word[i], map.get(word[i])! - 1);
      if (map.get(word[i]) === 0) vowelCount--;
    } else {
      consonantCount--;
    }
  }

  return res;
}

export { countOfSubstrings };
