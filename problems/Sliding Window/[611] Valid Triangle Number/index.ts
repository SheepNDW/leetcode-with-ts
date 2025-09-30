/*
  brute force
*/
function triangleNumber0(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] > nums[k]) {
          count++;
        }
      }
    }
  }

  return count;
}

/*
  binary search
*/
function triangleNumber1(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) continue;

    for (let j = i + 1; j < n - 1; j++) {
      const target = nums[i] + nums[j];
      let l = j + 1;
      let r = n;

      while (l < r) {
        const mid = (l + r) >> 1;

        if (target > nums[mid]) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }

      count += l - j - 1;
    }
  }

  return count;
}

/*
  two pointer
*/
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let k = n - 1; k >= 2; k--) {
    if (nums[k] === 0) break;
    let i = 0;
    let j = k - 1;

    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
}

export { triangleNumber };
