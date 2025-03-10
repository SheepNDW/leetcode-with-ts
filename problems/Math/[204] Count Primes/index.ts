function countPrimes(n: number): number {
  const isPrime = Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i] === true) {
      count += 1;

      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return count;
}

export { countPrimes };
