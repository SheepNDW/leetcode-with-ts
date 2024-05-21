/*
  backtracking
*/
function subsetXORSum0(nums: number[]): number {
  const subsets: number[] = [];
  const curSubs: number[] = [];
  function getSubsets(i: number, subs: number[]) {
    if (i === nums.length) {
      if (subs.length > 0) {
        const xorSum = subs.reduce((a, c) => a ^ c);
        subsets.push(xorSum);
      }
    } else {
      subs.push(nums[i]);
      getSubsets(i + 1, subs);
      subs.pop();
      getSubsets(i + 1, subs);
    }
  }
  getSubsets(0, curSubs);

  return subsets.reduce((a, c) => a + c, 0);
}

/*
  backtrack space optimize
*/
function subsetXORSum(nums: number[]): number {
  function backtrack(i: number, curSum: number): number {
    if (i === nums.length) {
      return curSum;
    }
    const withCur = backtrack(i + 1, curSum ^ nums[i]);
    const withoutCur = backtrack(i + 1, curSum);
    return withCur + withoutCur;
  }

  return backtrack(0, 0);
}

export { subsetXORSum };
