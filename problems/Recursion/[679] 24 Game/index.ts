function judgePoint24(cards: number[]): boolean {
  const EPS = 1e-6;
  const nums = permutation(cards);

  for (const curNums of nums) {
    const answers = helper(curNums, 0, 3);

    for (const ans of answers) {
      // 處理浮點數誤差
      if (Math.abs(ans - 24) < EPS) return true;
    }
  }

  return false;
}

function helper(nums: number[], a: number, b: number): Set<number> {
  if (a === b) return new Set([nums[a]]);

  const res = new Set<number>();

  for (let i = a; i < b; i++) {
    const aPart = helper(nums, a, i);
    const bPart = helper(nums, i + 1, b);

    for (const x of aPart) {
      for (const y of bPart) {
        res.add(x + y);
        res.add(x - y);
        res.add(x * y);
        if (y !== 0) res.add(x / y);
      }
    }
  }

  return res;
}

function permutation(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];
  const candidate: number[] = [];
  const used: boolean[] = Array(n).fill(false);

  const dfs = (cur: number) => {
    if (cur === n) {
      res.push([...candidate]);
    } else {
      for (let i = 0; i < n; i++) {
        if (!used[i]) {
          used[i] = true;
          candidate.push(nums[i]);
          dfs(cur + 1);
          candidate.pop();
          used[i] = false;
        }
      }
    }
  };

  dfs(0);
  return res;
}

export { judgePoint24 };
