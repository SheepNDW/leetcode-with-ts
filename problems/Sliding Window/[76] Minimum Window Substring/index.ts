// brute force, TLE
function minWindow0(s: string, t: string): string {
  const counts = new Map<string, number>();
  for (const c of t) {
    counts.set(c, (counts.get(c) || 0) + 1);
  }

  let minSubstr = '';

  for (let right = s.length - 1; right >= 0; right--) {
    if (counts.has(s[right])) {
      const currCounts = new Map(counts);
      let curRight = right;
      let substr = '';

      while (curRight >= 0) {
        const curStr = s[curRight];
        if (currCounts.has(curStr)) {
          const remain = currCounts.get(curStr)! - 1;
          if (remain) {
            currCounts.set(curStr, remain);
          } else {
            currCounts.delete(curStr);
          }
        }
        substr = s[curRight] + substr;
        curRight--;
        if (currCounts.size === 0) break;
      }

      if (currCounts.size === 0 && (minSubstr === '' || substr.length <= minSubstr.length)) {
        minSubstr = substr;
      }
    }
  }

  return minSubstr;
}

/*
  sliding window
*/
function minWindow(s: string, t: string): string {
  const countT = new Map<string, number>();
  for (const c of t) {
    countT.set(c, (countT.get(c) || 0) + 1);
  }

  const window = new Map<string, number>();

  let have = 0;
  let need = countT.size;
  let range = [0, 0];
  let minLen = Infinity;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const cur = s[right];
    window.set(cur, (window.get(cur) || 0) + 1);

    if (countT.has(cur) && window.get(cur) === countT.get(cur)) {
      have += 1;
    }

    while (have === need) {
      // update range
      if (right - left + 1 < minLen) {
        range = [left, right];
        minLen = right - left + 1;
      }
      // pop from the left of our window
      window.set(s[left], window.get(s[left])! - 1);
      if (countT.has(s[left]) && window.get(s[left])! < countT.get(s[left])!) {
        have -= 1;
      }
      left += 1;
    }
  }

  return minLen === Infinity ? '' : s.substring(range[0], range[1] + 1);
}

export { minWindow };
