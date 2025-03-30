/*
  hash
*/
function minimumIndex0(nums: number[]): number {
  const n = nums.length;
  const freqMap: Record<number, number> = {};
  let maxFreq = 0;
  let x = -1;

  for (const num of nums) {
    freqMap[num] = (freqMap[num] ?? 0) + 1;

    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      x = num;
    }
  }

  let curLeftX = 0;
  for (let i = 0; i <= n - 2; i++) {
    if (nums[i] === x) curLeftX++;
    const curRightX = maxFreq - curLeftX;

    if (curLeftX > (i + 1) / 2 && curRightX > (n - i - 1) / 2) {
      return i;
    }
  }

  return -1;
}

/*
  Boyer-Moore Voting
*/
function minimumIndex(nums: number[]): number {
  let x = -1;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      x = num;
      count = 1;
    } else if (num === x) {
      count++;
    } else {
      count--;
    }
  }

  const n = nums.length;
  let leftCount = 0;
  let rightCount = nums.reduce((acc, num) => acc + (num === x ? 1 : 0), 0);

  for (let i = 0; i < n; i++) {
    if (nums[i] === x) {
      leftCount++;
      rightCount--;
    }

    if (leftCount > (i + 1) / 2 && rightCount > (n - i - 1) / 2) {
      return i;
    }
  }

  return -1;
}

export { minimumIndex };
