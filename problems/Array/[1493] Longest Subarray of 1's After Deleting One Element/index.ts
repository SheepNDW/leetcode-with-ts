function longestSubarray(nums: number[]): number {
  let maxStreak = 0;
  let currentStreak = 0;
  let previousStreak = 0;

  nums.forEach((num) => {
    if (num === 1) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, previousStreak + currentStreak);
      previousStreak = currentStreak;
      currentStreak = 0;
    }
  });

  maxStreak = Math.max(maxStreak, previousStreak + currentStreak);

  return maxStreak === nums.length ? maxStreak - 1 : maxStreak;
}

export { longestSubarray };
