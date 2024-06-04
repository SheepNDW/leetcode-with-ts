/*
  hash map
*/
function longestPalindrome0(s: string): number {
  const count = new Map<string, number>();
  for (const c of s) {
    count.set(c, (count.get(c) || 0) + 1);
  }

  let res = 0;
  let hasOdd = false;
  for (const freq of count.values()) {
    if (freq % 2 === 0) {
      res += freq;
    } else {
      res += freq - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? res + 1 : res;
}

/*
  hash map optimized
*/
function longestPalindrome1(s: string): number {
  const count = new Map<string, number>();
  let oddCount = 0;

  for (const c of s) {
    count.set(c, (count.get(c) || 0) + 1);
    if (count.get(c)! % 2 === 1) {
      oddCount += 1;
    } else {
      oddCount -= 1;
    }
  }

  if (oddCount > 0) {
    return s.length - oddCount + 1;
  }
  return s.length;
}

/*
  hash set
*/
function longestPalindrome(s: string): number {
  const set = new Set<string>();
  let res = 0;
  for (const c of s) {
    if (set.has(c)) {
      set.delete(c);
      res += 2;
    } else {
      set.add(c);
    }
  }

  if (set.size > 0) {
    res += 1;
  }

  return res;
}

export { longestPalindrome };
