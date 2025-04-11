function countSymmetricIntegers(low: number, high: number): number {
  const maxDigits = Math.floor(Math.log10(high)) + 1;
  const buffer = new Array(maxDigits).fill(0);
  let count = 0;

  for (let i = low; i <= high; i++) {
    let x = i;
    let n = 0;

    while (x) {
      buffer[n++] = x % 10;
      x = Math.floor(x / 10);
    }

    if (n % 2 !== 0) continue;

    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < n / 2; j++) {
      leftSum += buffer[j];
      rightSum += buffer[n - 1 - j];
    }

    if (leftSum === rightSum) count++;
  }

  return count;
}

export { countSymmetricIntegers };
