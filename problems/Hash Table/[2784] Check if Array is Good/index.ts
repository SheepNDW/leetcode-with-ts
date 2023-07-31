function isGood(nums: number[]): boolean {
  const count = new Array(nums.length + 1).fill(0);

  nums.forEach((num) => count[num]++);

  const n = nums.length - 1;
  for (let i = 1; i < n; i++) {
    if (count[i] !== 1) return false;
  }
  if (count[n] !== 2) return false;

  return true;
}

// ==== Alternatives ====

function isGood1(nums: number[]): boolean {
  const maxNum = Math.max(...nums);
  const counts: Record<number, number> = {};

  // Count the occurrences of each number
  for (const num of nums) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  // Check if each number from 1 to maxNum (exclusive) appears exactly once
  for (let i = 1; i < maxNum; i++) {
    if (counts[i] !== 1) {
      return false;
    }
  }

  // Check if maxNum appears exactly twice
  if (counts[maxNum] !== 2) {
    return false;
  }

  return true;
}

export { isGood };
