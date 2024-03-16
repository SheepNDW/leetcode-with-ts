/*
  prefix sum
*/
function pivotInteger1(n: number): number {
  const sum = ((1 + n) * n) / 2;
  let prefixSum = 0;

  for (let i = 1; i <= n; i++) {
    prefixSum += i;
    if (prefixSum === sum - prefixSum + i) {
      return i;
    }
  }

  return -1;
}

/*
  math

    1+2+...+x = x+...+n
  => x*(x+1)/2 = ((x+n)*(n-x+1))/2
  => 2x^2 = n^2 + n
  => x = Math.sqrt((n^2 + n)/2)
*/
function pivotInteger(n: number): number {
  const sum = ((1 + n) * n) / 2;
  const pivot = ~~Math.sqrt(sum);

  return pivot * pivot === sum ? pivot : -1;
}

export { pivotInteger };
