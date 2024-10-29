function longestSquareStreak(nums: number[]): number {
  const set = new Set(nums);
  let maxStreak = -1;

  for (const num of nums) {
    let streak = 1;
    let curSquare = num ** 2;

    while (set.has(curSquare)) {
      streak += 1;
      curSquare *= curSquare;
    }

    if (streak >= 2) {
      maxStreak = Math.max(maxStreak, streak);
    }
  }

  return maxStreak;
}

export { longestSquareStreak };
