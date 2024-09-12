function minBitFlips(start: number, goal: number): number {
  let xor = start ^ goal;
  let count = 0;

  while (xor > 0) {
    // 計算 xor 的二進位表示中有多少個 1
    count += xor & 1;
    xor >>= 1; // 右移一位
  }

  return count;
}

export { minBitFlips };
