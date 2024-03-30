/*
  [1,3,2,3,3], k = 2

  [1,3,2,3] 3 -> nums of 3 === k
   i     j
   
  [1,3,2,3] 3 -> num of 3 < k break while loop
       i j

  count += i (2 subarrays)

  [1,3,2,3,3] -> nums of 3 === k
       i   j

  [1,3,2,3,3]
           ij
  
  count += i (4 subarrays)
*/
function countSubarrays0(nums: number[], k: number): number {
  const n = nums.length;

  const max = Math.max(...nums);
  let i = 0;
  let numsOfSub = 0;
  let times = 0;
  for (let j = 0; j < n; j++) {
    if (nums[j] === max) {
      times++;
    }

    while (times === k) {
      if (nums[i] === max) {
        times--;
      }
      i++;
    }

    numsOfSub += i;
  }

  return numsOfSub;
}

/*
  Track Indexes of Max Element

  nums = [1,3,2,3,3], k = 2
  max_element = 3
  indexes_of_max_elements = [1, 3, 4]

  -------------------
  For the index 3,
         ↓
  [1,3,2,3,3]
  index of the max element that appeared k maximum elements ago is  1
     ⌄   ↓
  [1,3,2,3,3]
  Add one to the index to find the number of possible starting positions:
  1 + 1 = 2.
  This indicates that the possible starting positions for the ending
  position 3 are [0, 1].

  -------------------
  For the index 4,
           ↓
  [1,3,2,3,3]
  the index of the max element that appeared k maximum elements ago is 3
         ⌄ ↓
  [1,3,2,3,3]
  Add one to the index to find the number of possible starting positions:
  1 + 3 = 4.
  This indicates that the possible starting positions for the ending
  position 3 are [0, 1, 2, 3].
*/
function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  const max = Math.max(...nums);
  const indexesOfMax: number[] = [];
  let numsOfSub = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === max) {
      indexesOfMax.push(i);
    }
    const freq = indexesOfMax.length;
    if (freq >= k) {
      numsOfSub += indexesOfMax[freq - k] + 1;
    }
  }

  return numsOfSub;
}

export { countSubarrays };
