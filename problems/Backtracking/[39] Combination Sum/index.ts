function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const combination: number[] = [];
  const end = candidates.length;

  const backtrack = (start: number, target: number) => {
    if (target === 0) {
      result.push([...combination]);
      return;
    }

    if (target > 0) {
      for (let i = start; i < end; i++) {
        combination.push(candidates[i]);
        backtrack(i, target - candidates[i]);
        combination.pop();
      }
    }
  };

  backtrack(0, target);
  return result;
}

export { combinationSum };
