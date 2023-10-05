// hash table
function majorityElement0(nums: number[]): number[] {
  const n = nums.length;
  const times = n / 3;

  const hash = new Map<number, number>();
  nums.forEach((num) => hash.set(num, (hash.get(num) ?? 0) + 1));

  const result: number[] = [];
  for (const [num, appearTimes] of hash.entries()) {
    if (appearTimes > times) {
      result.push(num);
    }
  }

  return result;
}

// Boyer–Moore majority vote algorithm
function majorityElement(nums: number[]): number[] {
  let count1 = 0;
  let count2 = 0;
  let candidate1 = 0;
  let candidate2 = 0;

  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  const result: number[] = [];
  count1 = 0;
  count2 = 0;

  for (const num of nums) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
  }

  if (count1 > nums.length / 3) result.push(candidate1);
  if (count2 > nums.length / 3) result.push(candidate2);

  return result;
}

export { majorityElement };
