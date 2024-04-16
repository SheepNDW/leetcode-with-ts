/*
  Tree pass solution:
  heights[i] => nextSmaller[i], prevSmaller[i]
  max{ area[i] = heights[i] * (nextSmaller[i] - prevSmaller[i] - 1) }
*/
function largestRectangleArea0(heights: number[]): number {
  const n = heights.length;
  const stack: number[] = [];
  const nextSmaller: number[] = new Array(n).fill(n);

  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      nextSmaller[stack.pop()!] = i;
    }
    stack.push(i);
  }

  stack.length = 0;
  const prevSmaller: number[] = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      stack.pop();
    }
    if (stack.length) {
      prevSmaller[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const area = heights[i] * (nextSmaller[i] - prevSmaller[i] - 1);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

/*
  One pass solution
*/
function largestRectangleArea(heights: number[]): number {
  heights.push(0);
  heights.unshift(0);
  const n = heights.length;

  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack.pop()!];
      const w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  return maxArea;
}

export { largestRectangleArea };
