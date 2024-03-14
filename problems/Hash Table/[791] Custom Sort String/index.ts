function customSortString(order: string, s: string): string {
  const orderFreqMap = new Map<string, number>();

  let ans = '';
  for (const c of s) {
    if (order.includes(c)) {
      orderFreqMap.set(c, (orderFreqMap.get(c) || 0) + 1);
    } else {
      ans += c;
    }
  }

  for (const c of order) {
    ans += c.repeat(orderFreqMap.get(c)!);
  }

  return ans;
}

export { customSortString };
