function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const candidate: number[] = [];
  const end = nums.length;
  const seen = new Set<string>();

  const backtrack = (start: number) => {
    const candidateKey = candidate.toString();
    if (!seen.has(candidateKey)) {
      result.push([...candidate]);
      seen.add(candidateKey);
    }
    for (let i = start; i < end; i++) {
      candidate.push(nums[i]);
      backtrack(i + 1);
      candidate.pop();
    }
  };

  backtrack(0);
  return result;
}

// ==== Alternatives ====

function subsetsWithDup1(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const candidate: number[] = [];
  const end = nums.length;

  function backtrack(start: number) {
    result.push([...candidate]);
    for (let i = start; i < end; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      candidate.push(nums[i]);
      backtrack(i + 1);
      candidate.pop();
    }
  }

  backtrack(0);
  return result;
}

export { subsetsWithDup };
