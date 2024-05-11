/*
  brute force: tests passed but TLE
*/
function kthSmallestPrimeFraction0(arr: number[], k: number): number[] {
  const n = arr.length;
  const fractions: [number, number[]][] = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const num = arr[i] / arr[j];
      fractions.push([num, [arr[i], arr[j]]]);
    }
  }

  fractions.sort((a, b) => a[0] - b[0]);
  return fractions[k - 1][1];
}

/*
  binary search

  arr[i]/arr[j] <= mid
  arr[j] <= arr[i]/mid
*/
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let left = 0;
  let right = 1;
  let mid = 0;

  while (left < right) {
    mid = (left + right) / 2;

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const pos = lowerBound(arr, arr[i] / mid);
      count += arr.length - pos;
    }

    if (count < k) {
      left = mid;
    } else if (count > k) {
      right = mid;
    } else {
      break;
    }
  }

  let ret: number[] = [];
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    const pos = lowerBound(arr, arr[i] / mid);
    if (pos !== arr.length && arr[i] / arr[pos] > ans) {
      ans = arr[i] / arr[pos];
      ret = [arr[i], arr[pos]];
    }
  }

  return ret;
}

function lowerBound(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

export { kthSmallestPrimeFraction };
