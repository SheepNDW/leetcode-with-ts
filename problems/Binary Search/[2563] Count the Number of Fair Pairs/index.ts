/*
  [X X X i X X]

  [lower - nums[i], upper - nums[i]]
*/
function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  let pair = 0;

  for (const x of nums) {
    // [lower - x, upper - x]
    const b = upperBound(nums, upper - x); // how many el <= upper - x
    const a = lowerBound(nums, lower - x); // how many el < lower - x

    let count = b - a;

    if (x >= lower - x && x <= upper - x) {
      count -= 1;
    }

    pair += count;
  }

  return pair / 2;
}

function upperBound(nums: number[], target: number) {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = (l + r) >> 1;

    if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

function lowerBound(nums: number[], target: number) {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const mid = (l + r) >> 1;

    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

export { countFairPairs };
