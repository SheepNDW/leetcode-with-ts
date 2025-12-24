function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let res = 0;

  for (const num of set) {
    // check if it's the start of a sequence
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) {
        len += 1;
      }
      res = Math.max(res, len);
    }
  }

  return res;
}

export { longestConsecutive };
