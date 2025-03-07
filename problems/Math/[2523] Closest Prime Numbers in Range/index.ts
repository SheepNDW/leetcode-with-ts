function closestPrimes(left: number, right: number): number[] {
  const isPrime = sieve(right);

  const primes: number[] = [];
  for (let i = left; i <= right; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  if (primes.length < 2) return [-1, -1];

  const res = [-1, -1];
  let minDiff = Infinity;

  for (let i = 1; i < primes.length; i++) {
    const diff = primes[i] - primes[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      res[0] = primes[i - 1];
      res[1] = primes[i];
    }
  }

  return res;
}

// Sieve of Eratosthenes
function sieve(limit: number): boolean[] {
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

export { closestPrimes };
