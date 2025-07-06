class FindSumPairs {
  private nums1: number[];
  private nums2: number[];
  private freqMap: Map<number, number> = new Map();

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    for (const num of nums2) {
      this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
    }
  }

  add(index: number, val: number): void {
    const oldValue = this.nums2[index];
    this.nums2[index] += val;

    // Update frequency map
    this.freqMap.set(oldValue, (this.freqMap.get(oldValue) || 0) - 1);
    this.freqMap.set(this.nums2[index], (this.freqMap.get(this.nums2[index]) || 0) + 1);
  }

  count(tot: number): number {
    let count = 0;

    for (const num of this.nums1) {
      const complement = tot - num;
      count += this.freqMap.get(complement) || 0;
    }

    return count;
  }
}

export { FindSumPairs };
