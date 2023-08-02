function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const candidate: number[] = [];
  const end = nums.length;

  const backtrack = (start: number) => {
    result.push([...candidate]);

    for (let i = start; i < end; i++) {
      candidate.push(nums[i]);
      backtrack(i + 1);
      candidate.pop();
    }
  };

  backtrack(0);
  return result;
}

export { subsets };
