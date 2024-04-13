/*
  DP: three pass
*/
function trap0(height: number[]): number {
  const n = height.length;

  // leftHighest[i]: left highest bar to the left of i
  const leftHighest: number[] = new Array(n).fill(0);
  // rightHighest[i]: right highest bar to the right of i
  const rightHighest: number[] = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    leftHighest[i] = Math.max(leftHighest[i - 1], height[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    rightHighest[i] = Math.max(rightHighest[i + 1], height[i + 1]);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const h = Math.min(leftHighest[i], rightHighest[i]) - height[i];
    ans += Math.max(0, h);
  }

  return ans;
}

/*
  monotonic stack
*/
function trap(height: number[]): number {
  const n = height.length;
  const stack: number[] = [];

  let ans = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const base = height[stack.pop()!];
      if (stack.length) {
        const nextTop = stack[stack.length - 1];
        const h = Math.min(height[nextTop], height[i]) - base;
        const w = i - nextTop - 1;
        ans += h * w;
      }
    }
    stack.push(i);
  }

  return ans;
}

export { trap };
