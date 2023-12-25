function numDecodings(s: string): number {
  const memo = new Map<number, number>();

  function decode(index: number): number {
    // 當遍歷完整個字串時，表示找到一種解碼方式
    if (index === s.length) return 1;

    // 如果字符串以 '0' 開始，則無法解碼
    if (s[index] === '0') return 0;

    // 檢查記憶化陣列
    if (memo.has(index)) return memo.get(index)!;

    // 單獨解碼
    let ans = decode(index + 1);

    // 與下一個字符一起解碼
    if (index < s.length - 1 && (s[index] === '1' || (s[index] === '2' && s[index + 1] < '7'))) {
      ans += decode(index + 2);
    }

    // 儲存結果到記憶化陣列
    memo.set(index, ans);

    return ans;
  }

  return decode(0);
}

export { numDecodings };
