/*
  simple sorting: O(n log n)
*/
function heightChecker0(heights: number[]): number {
  // const expected = [...heights].sort((a, b) => a - b);

  // new es feature: toSorted
  const expected = heights.toSorted((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }

  return count;
}

/*
  counting sort: O(n + k) k is buckets size
*/
function heightChecker(heights: number[]): number {
  const buckets = Array.from({ length: 101 }, () => 0);
  for (const h of heights) {
    buckets[h] += 1;
  }

  const expected: number[] = [];

  for (let h = 1; h < 101; h++) {
    let times = buckets[h];
    while (times--) {
      expected.push(h);
    }
  }

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }

  return count;
}

export { heightChecker };
