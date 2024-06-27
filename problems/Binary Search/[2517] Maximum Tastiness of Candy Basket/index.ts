function maximumTastiness(price: number[], k: number): number {
  price.sort((a, b) => a - b);

  let minDiff = 1;
  let maxDiff = price[price.length - 1] - price[0] + 1;

  while (minDiff < maxDiff) {
    const mid = (minDiff + maxDiff) >> 1;

    if (isOk(mid, price, k)) {
      minDiff = mid + 1;
    } else {
      maxDiff = mid;
    }
  }

  return minDiff - 1;
}

function isOk(diff: number, price: number[], k: number): boolean {
  let count = 1;
  let i = 0;

  for (let j = 1; j < price.length; j++) {
    if (price[j] - price[i] >= diff) {
      count++;
      i = j;
      if (count >= k) return true;
    }
  }

  return false;
}

export { maximumTastiness };
