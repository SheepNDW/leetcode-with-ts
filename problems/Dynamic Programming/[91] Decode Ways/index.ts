// recursive + memo
function numDecodings1(s: string): number {
  const memo = new Map<number, number>();

  function decode(index: number): number {
    // 當遍歷完整個字串時，表示找到一種解碼方式
    if (index === s.length) return 1;

    // 如果字符串以 '0' 開始，則無法解碼
    if (s[index] === '0') return 0;

    if (memo.has(index)) return memo.get(index)!;

    // 單獨解碼
    let ans = decode(index + 1);

    // 與下一個字符一起解碼
    if (index < s.length - 1 && (s[index] === '1' || (s[index] === '2' && s[index + 1] < '7'))) {
      ans += decode(index + 2);
    }

    memo.set(index, ans);

    return ans;
  }

  return decode(0);
}

// bottom-up
function numDecodings(s: string): number {
  if (s[0] === '0') return 0;

  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const num1 = s[i - 1];
    const num2 = s.slice(i - 2, i);

    if (num1 !== '0') {
      dp[i] += dp[i - 1];
    }

    if (num2.charAt(0) === '1' || (num2.charAt(0) === '2' && num2.charAt(1) < '7')) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

export { numDecodings };
