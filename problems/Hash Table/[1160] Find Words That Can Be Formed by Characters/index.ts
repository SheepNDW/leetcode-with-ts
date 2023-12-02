// count with hash map
function countCharacters0(words: string[], chars: string): number {
  const map = new Map<string, number>();
  for (const c of chars) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let totalLength = 0;

  for (const word of words) {
    const tempMap = new Map<string, number>();
    for (const c of word) {
      tempMap.set(c, (tempMap.get(c) || 0) + 1);
    }

    let canForm = true;
    for (const [char, count] of tempMap) {
      if (!map.has(char) || map.get(char)! < count) {
        canForm = false;
        break;
      }
    }

    if (canForm) {
      totalLength += word.length;
    }
  }

  return totalLength;
}

// count with array
function countCharacters(words: string[], chars: string): number {
  const counts: number[] = new Array(26).fill(0);

  for (const c of chars) {
    const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
    counts[idx]++;
  }

  let ans = 0;

  for (const word of words) {
    const wordCounts: number[] = new Array(26).fill(0);

    for (const c of word) {
      const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
      wordCounts[idx]++;
    }

    let canForm = true;

    for (let i = 0; i < 26; i++) {
      if (counts[i] < wordCounts[i]) {
        canForm = false;
        break;
      }
    }

    if (canForm) {
      ans += word.length;
    }
  }

  return ans;
}

export { countCharacters };
