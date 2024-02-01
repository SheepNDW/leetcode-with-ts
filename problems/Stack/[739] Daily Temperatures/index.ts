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
  Greedy solution:

  從後往前思考，對於 ans[i]，可以先觀察右邊的元素的 ans[j] (j = i + 1)。
  當 temp[j] <= temp[i] 時，直接將 j 跳到 j += ans[j] (比 temp[j] 大的位置)，這樣就可以加速搜尋，
  直到找到一個 temp[j] > temp[i] 為止，或是 ans[j] == 0 說明找不到了。
*/
function dailyTemperatures1(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ans: number[] = Array(n).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    let j = i + 1;

    while (ans[j] !== 0 && temperatures[j] <= temperatures[i]) {
      j = j + ans[j];
    }

    if (temperatures[j] > temperatures[i]) {
      ans[i] = j - i;
    } else {
      ans[i] = 0;
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
