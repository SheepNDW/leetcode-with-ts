/*
  brute force
  TC: O(L * N * M)
  word[0] 長度: L
  words 長度: N
  word 平均長度: M
*/
function commonChars0(words: string[]): string[] {
  const res: string[] = [];

  for (const letter of words[0]) {
    if (words.every((w) => w.includes(letter))) {
      res.push(letter);
      words = words.map((w) => w.replace(letter, ''));
    }
  }

  return res;
}

/*
  hash map counts all frequencies
*/
function commonChars1(words: string[]): string[] {
  const n = words.length;
  const map = new Map<string, number[]>();

  for (let i = 0; i < n; i++) {
    for (const c of words[i]) {
      if (!map.has(c)) {
        map.set(c, Array(n).fill(0));
      }
      (map.get(c) as number[])[i] += 1;
    }
  }

  const res: string[] = [];

  for (const [c, freq] of map) {
    const min = Math.min(...freq);
    for (let i = 0; i < min; i++) {
      res.push(c);
    }
  }

  return res;
}

/*
  array + frequency intersection
*/
function commonChars(words: string[]): string[] {
  const n = words.length;
  const BASE_CODE = 'a'.charCodeAt(0);
  const counts = Array.from({ length: 26 }, () => 0);

  for (const c of words[0]) {
    counts[c.charCodeAt(0) - BASE_CODE]++;
  }

  for (let i = 1; i < n; i++) {
    const curCounts = Array.from({ length: 26 }, () => 0);

    for (const c of words[i]) {
      curCounts[c.charCodeAt(0) - BASE_CODE]++;
    }

    for (let i = 0; i < 26; i++) {
      counts[i] = Math.min(counts[i], curCounts[i]);
    }
  }

  const res: string[] = [];

  for (let i = 0; i < 26; i++) {
    for (let count = 0; count < counts[i]; count++) {
      res.push(String.fromCharCode(i + BASE_CODE));
    }
  }

  return res;
}

export { commonChars };
