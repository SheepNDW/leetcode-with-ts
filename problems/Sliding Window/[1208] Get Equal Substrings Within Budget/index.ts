/*
  sliding window + pre-compute
*/
function equalSubstring0(s: string, t: string, maxCost: number): number {
  const n = s.length;
  const costs = Array.from({ length: n }, (_, i) =>
    Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0))
  );

  let maxLen = 0;
  let curCost = 0;
  let left = 0;

  for (let right = left; right < n; right++) {
    curCost += costs[right];

    while (curCost > maxCost) {
      curCost -= costs[left];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

/*
  sliding window
*/
function equalSubstring(s: string, t: string, maxCost: number): number {
  const n = s.length;

  let maxLen = 0;
  let curCost = 0;
  let left = 0;

  for (let right = left; right < n; right++) {
    curCost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

    while (curCost > maxCost) {
      curCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export { equalSubstring };
