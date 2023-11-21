function countNicePairs(nums: number[]): number {
  const MOD = 1e9 + 7;
  const rev = (x: number) => {
    // const strX = `${x}`;
    // let reverseX = '';
    // for (let i = strX.length - 1; i >= 0; i--) {
    //   reverseX += strX[i];
    // }
    // return Number(reverseX);
    let reversed = 0;

    while (x !== 0) {
      const pop = x % 10;
      x = Math.floor(x / 10);
      reversed = reversed * 10 + pop;
    }

    return reversed;
  };

  const hash: Record<number, number> = {};
  let numsOfPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    // 把 nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]) 做移項
    // nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
    // 所以我們只要記錄相同差值出現的次數
    const diff = nums[i] - rev(nums[i]);
    if (hash[diff] !== undefined) {
      numsOfPairs = (numsOfPairs + hash[diff]) % MOD;
      hash[diff]++;
    } else {
      hash[diff] = 1;
    }
  }

  return numsOfPairs;
}

export { countNicePairs };
