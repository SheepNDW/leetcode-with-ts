function tupleSameProduct(nums: number[]): number {
  const n = nums.length;
  const productMap = new Map<number, number>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];

      if (productMap.has(product)) {
        count += productMap.get(product)!;
      }

      productMap.set(product, (productMap.get(product) || 0) + 1);
    }
  }

  return count * 8;
}

export { tupleSameProduct };
