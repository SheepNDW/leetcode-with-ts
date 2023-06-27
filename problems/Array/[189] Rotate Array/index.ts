// space O(n)
function rotate0(nums: number[], k: number): void {
  if (nums.length === 1) return;
  const n = nums.length;
  let steps = k % n;
  const stack: number[] = [];
  while (steps > 0) {
    stack.push(nums.pop() as number);
    steps--;
  }
  nums.forEach((num) => stack.push(num));

  for (let i = n - 1; i >= k % n; i--) {
    nums[i] = stack.pop() as number;
  }
  for (let i = 0; i < k % n; i++) {
    nums[i] = stack.pop() as number;
  }
}

// 三次反轉 space O(1)
function rotate(nums: number[], k: number): void {
  k %= nums.length;
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}

export { rotate };
