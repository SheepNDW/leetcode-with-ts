function countOrders(n: number): number {
  const mod = 1e9 + 7;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = (result * (2 * i - 1) * i) % mod;
  }

  return result;
}

export { countOrders };
