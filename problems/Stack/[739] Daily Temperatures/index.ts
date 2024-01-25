// brute force
function dailyTemperatures0(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ans: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[i] < temperatures[j]) {
        ans[i] = j - i;
        break;
      }
    }
  }

  return ans;
}

/*
    find nextGreater => monotonic stack
    [30,40,30,70]
    loop:
    i = 0 => stack: [0]

    i = 1 => stack size > 0, tem[i] = 40 > tem[stack.top] = 30
          => currTopIdx = 0, ans[0] = 1 - 0 = 1
          => stack: [1]

    i = 2 => tem[i] = 30 < tem[stack.top] = 40
          => stack: [1,2]
    
    i = 3 => tem[i] = 70 > tem[stack.top] = 40
          => currTopIdx = 2, ans[2] = 3 - 2 = 1
          => currTopIdx = 1, ans[1] = 3 - 1 = 2
          => stack: [3]
*/
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ans: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const currTop = stack.pop()!;
      ans[currTop] = i - currTop;
    }
    stack.push(i);
  }

  return ans;
}

export { dailyTemperatures };
