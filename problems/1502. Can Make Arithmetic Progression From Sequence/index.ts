// sorting O(nlog⁡n)
function canMakeArithmeticProgression0(arr: number[]): boolean {
  if (arr.length === 2) return true;
  arr.sort((a, b) => a - b);
  let diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) return false;
  }
  return true;
}

// Set O(n)
function canMakeArithmeticProgression(arr: number[]): boolean {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  const n = arr.length;
  const diff = (maxValue - minValue) / (n - 1); // 公差
  const set = new Set(arr);

  if (diff === 0) return true;
  if (diff % 1 !== 0) return false;

  for (let i = 0; i < n; i++) {
    if (!set.has(minValue + i * diff)) return false;
  }

  return true;
}

export { canMakeArithmeticProgression };
