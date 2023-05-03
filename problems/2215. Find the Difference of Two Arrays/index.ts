function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  set1.forEach((item) => {
    if (set2.has(item)) {
      set2.delete(item);
      set1.delete(item);
    }
  });

  return [[...set1], [...set2]];
}

export { findDifference };
