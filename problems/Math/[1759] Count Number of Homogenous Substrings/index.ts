function countHomogenous(s: string): number {
  const MOD = 1e9 + 7;
  let ans = 0;
  let count = 0;
  let prevChar = '';

  for (const c of s) {
    if (c === prevChar) {
      // 如果字符與前一個相同，繼續累加
      count++;
    } else {
      // 如果字符不同，重置計數器
      prevChar = c;
      count = 1;
    }

    // 將連續字符的組合數加到總數
    ans = (ans + count) % MOD;
  }

  return ans;
}

export { countHomogenous };
