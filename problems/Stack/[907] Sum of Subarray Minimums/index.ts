/*
  keyword: Monotonic Stack

  X 0 [X X 3 2 4 X X 5] 1 X X X
             ^
          4 * 5 = 20 subarray
  prev smaller element
  next smaller element

  2 8 4 [6 5 7 5 6] 2
      a    i        b

  nums[i]:next smaller element
          previous smaller or equal element
*/
function sumSubarrayMins0(arr: number[]): number {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const nextSmaller = Array<number>(n).fill(n);
  const prevSmaller = Array<number>(n).fill(-1);

  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack.at(-1)!] > arr[i]) {
      nextSmaller[stack[stack.length - 1]] = i;
      stack.pop();
    }

    if (stack.length) {
      prevSmaller[i] = stack.at(-1) as number;
    }
    stack.push(i);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const a = prevSmaller[i];
    const b = nextSmaller[i];
    const num = (arr[i] * (i - a) * (b - i)) % MOD;
    sum = (sum + num) % MOD;
  }
  return sum;
}

// ==== alternatives ====
function sumSubarrayMins(arr: number[]): number {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack: number[] = [];
  let result = 0;

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || arr[stack.at(-1)!] >= arr[i])) {
      const mid = stack.pop() as number;
      const left = stack.length === 0 ? -1 : stack.at(-1)!;
      const right = i;

      const sum = (arr[mid] * (mid - left) * (right - mid)) % MOD;
      result = (result + sum) % MOD;
    }
    stack.push(i);
  }

  return result;
}

export { sumSubarrayMins };
