/*
  brute force O(n^3)
*/
function countTriplets0(arr: number[]): number {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let a = 0;
    for (let j = i; j < n; j++) {
      a ^= arr[j];
      let b = 0;
      for (let k = j + 1; k < n; k++) {
        b ^= arr[k];
        if (a === b) count++;
      }
    }
  }

  return count;
}

/*
  O(n^2)
*/
function countTriplets1(arr: number[]): number {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let curXor = arr[i];
    for (let k = i + 1; k < n; k++) {
      curXor ^= arr[k];
      if (curXor === 0) {
        count += k - i;
      }
    }
  }

  return count;
}

/*
  這兩段區間的 XOR 和為 0
  X X [i X X] [j X X k] X X X
     
  代表在此區間內的整體 XOR 和會是 0
  X X [i X X j X X k] X X X 

  {i,k}: k-i

  xor_sum[i:k] = pre_xor_sum[k] ^ pre_xor_sum[i-1]

  pre_xor_sum[i-1] = pre_xor_sum[k] ^ 0
*/
function countTriplets(arr: number[]): number {
  const n = arr.length;

  // pre_xor_sum_val -> [idx]
  const map = new Map<number, number[]>();
  map.set(0, [-1]);

  let count = 0;
  let xorSum = 0;
  for (let k = 0; k < n; k++) {
    xorSum ^= arr[k];
    if (!map.has(xorSum)) map.set(xorSum, []);

    for (const i of map.get(xorSum)!) {
      // xor_sum[i+1:k] = 0;
      // j: i+2 -> k
      count += k - i - 1;
    }

    map.get(xorSum)?.push(k);
  }

  return count;
}

export { countTriplets };
