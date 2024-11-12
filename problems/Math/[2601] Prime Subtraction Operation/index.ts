/*
  brute force
  O(n * m * sqrt(m))
*/
function primeSubOperation0(nums: number[]): boolean {
  let prev = 0;

  for (const n of nums) {
    const upperBound = n - prev;
    let largestPrime = 0;

    for (let i = upperBound - 1; i >= 2; i--) {
      if (isPrime(i)) {
        largestPrime = i;
        break;
      }
    }

    if (n - largestPrime <= prev) {
      return false;
    }

    prev = n - largestPrime;
  }

  return true;
}

/*
  optimize (precomoute)
  O(n * m + m * sqrt(m))
*/
function primeSubOperation1(nums: number[]): boolean {
  const primes = [false, false]; // primes[i] == true, if i == prime

  for (let i = 2; i < Math.max(...nums); i++) {
    if (isPrime(i)) {
      primes.push(true);
    } else {
      primes.push(false);
    }
  }

  let prev = 0;
  for (const n of nums) {
    const upperBound = n - prev;
    let largestPrime = 0;

    for (let i = upperBound - 1; i >= 2; i--) {
      if (primes[i]) {
        largestPrime = i;
        break;
      }
    }

    if (n - largestPrime <= prev) {
      return false;
    }
    prev = n - largestPrime;
  }

  return true;
}

/*
  alternatives
*/
function primeSubOperation(nums: number[]): boolean {
  const maxNum = Math.max(...nums);
  // primes[i] => largest prime <= i
  const primes = Array.from({ length: maxNum + 1 }, () => 0);

  for (let i = 2; i <= maxNum; i++) {
    if (isPrime(i)) {
      primes[i] = i;
    } else {
      primes[i] = primes[i - 1];
    }
  }

  let prev = 0;
  for (const n of nums) {
    const upperBound = n - prev;
    if (upperBound <= 0) return false;

    const largestPrime = primes[upperBound - 1];
    if (n - largestPrime <= prev) {
      return false;
    }
    prev = n - largestPrime;
  }

  return true;
}

function isPrime(n: number): boolean {
  // 由於傳入值只會從 2 開始
  for (let f = 2; f * f <= n; f++) {
    if (n % f === 0) return false;
  }
  return true;
}

export { primeSubOperation };
