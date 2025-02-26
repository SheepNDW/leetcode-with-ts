/*
    [X X X X X X X X] = presum[i] - presum[-1]
  -1 0             i

  if presum[i] is even:
    find out how many previous presum is odd
  if presum[i] is odd:
    find out how many previous presum is even
*/
function numOfSubarrays(arr: number[]): number {
  const mod = 1e9 + 7;

  let oddCount = 0;
  let evenCount = 1;
  let presum = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    presum += arr[i];

    if (presum % 2 === 0) {
      res += oddCount;
      evenCount += 1;
    } else {
      res += evenCount;
      oddCount += 1;
    }
    res %= mod;
  }

  return res;
}

export { numOfSubarrays };
