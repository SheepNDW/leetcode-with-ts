/*
  1, 1, 0, [0, 1, 0, 1] 0, 1, 0
            j        i
*/
function longestOnes(nums: number[], k: number): number {
  let max = 0;
  let temp = 0;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      k--;

      while (k < 0) {
        if (nums[j] === 0) {
          k++;
        }
        temp--;
        j++;
      }
    }

    temp++;
    max = Math.max(max, temp);
  }

  return max;
}

export { longestOnes };
