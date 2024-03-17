function productExceptSelf0(nums: number[]): number[] {
  const n = nums.length;
  const prefix: number[] = new Array(n).fill(1);
  const postfix: number[] = new Array(n).fill(1);
  const ans: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] * postfix[i];
  }

  return ans;
}

// space optimization
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProduct = rightProduct * nums[i + 1];
    ans[i] = ans[i] * rightProduct;
  }

  return ans;
}

export { productExceptSelf };
