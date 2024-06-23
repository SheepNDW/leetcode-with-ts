function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  const n = customers.length;
  let basic = 0;

  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      basic += customers[i];
    }
  }

  let max = basic;

  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 1) {
      basic += customers[i];
    }
    if (i - minutes >= 0 && grumpy[i - minutes] === 1) {
      basic -= customers[i - minutes];
    }
    max = Math.max(max, basic);
  }

  return max;
}

export { maxSatisfied };
