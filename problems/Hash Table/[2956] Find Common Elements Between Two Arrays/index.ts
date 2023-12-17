function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans = [0, 0];

  nums1.forEach((num) => {
    if (set2.has(num)) ans[0]++;
  });

  nums2.forEach((num) => {
    if (set1.has(num)) ans[1]++;
  });

  return ans;
}

export { findIntersectionValues };
