function reorderedPowerOf2(n: number): boolean {
  const countDigits = (num: number): number[] => {
    const counts = new Array(10).fill(0);
    while (num > 0) {
      counts[num % 10]++;
      num = Math.floor(num / 10);
    }
    return counts;
  };

  const nCount = countDigits(n);

  for (let i = 0; i < 31; i++) {
    const powerOf2Count = countDigits(1 << i);
    if (nCount.toString() === powerOf2Count.toString()) {
      return true;
    }
  }

  return false;
}

export { reorderedPowerOf2 };
