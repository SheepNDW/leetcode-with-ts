// sorting
function checkArithmeticSubarrays0(nums: number[], l: number[], r: number[]): boolean[] {
  const ans: boolean[] = [];

  for (let i = 0; i < l.length; i++) {
    let left = l[i];
    let right = r[i];

    const subArray = nums.slice(left, right + 1);
    subArray.sort((a, b) => a - b);
    let isArithmetic = true;
    const diff = subArray[1] - subArray[0];

    for (let j = 2; j < subArray.length; j++) {
      if (subArray[j] - subArray[j - 1] !== diff) {
        isArithmetic = false;
        break;
      }
    }

    ans.push(isArithmetic);
  }

  return ans;
}

// no sort
// 如果一個數列是等差數列 則他的公差 diff 會是 (max - min) / (n - 1)
function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const ans: boolean[] = [];

  for (let i = 0; i < l.length; i++) {
    const left = l[i];
    const right = r[i];
    const subArray = nums.slice(left, right + 1);
    ans.push(check(subArray));
  }

  return ans;
}

function check(arr: number[]) {
  const n = arr.length;
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);

  if ((maxVal - minVal) % (n - 1)) {
    return false;
  }

  const set = new Set(arr);
  const diff = (maxVal - minVal) / (n - 1);
  let curr = minVal + diff;

  while (curr < maxVal) {
    if (!set.has(curr)) {
      return false;
    }
    curr += diff;
  }

  return true;
}

export { checkArithmeticSubarrays };
