/*
  binary search

  O(M + N * logM)
*/
function isArraySpecial0(nums: number[], queries: number[][]): boolean[] {
  const res: boolean[] = [];
  const violatingIndices: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      violatingIndices.push(i);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const start = queries[i][0];
    const end = queries[i][1];

    const hasViolation = binarySearch(start + 1, end, violatingIndices);

    res.push(!hasViolation);
  }

  return res;
}

function binarySearch(start: number, end: number, violatingIndices: number[]) {
  let left = 0;
  let right = violatingIndices.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const violatingIndex = violatingIndices[mid];

    if (violatingIndex < start) {
      left = mid + 1;
    } else if (violatingIndex > end) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

/*
  prefix sum
  O(M + N)
*/
function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const res: boolean[] = [];
  const prefix = Array.from({ length: nums.length }, () => 0);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) {
      prefix[i] = prefix[i - 1] + 1;
    } else {
      prefix[i] = prefix[i - 1];
    }
  }

  for (const [start, end] of queries) {
    res.push(prefix[end] - prefix[start] === 0);
  }

  return res;
}

export { isArraySpecial };
