// brute force
function xorQueries0(arr: number[], queries: number[][]): number[] {
  const n = queries.length;
  const res = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const [left, right] = queries[i];
    let xor = arr[left];

    for (let j = left + 1; j <= right; j++) {
      xor ^= arr[j];
    }

    res[i] = xor;
  }

  return res;
}

/*
  prefix

  A ^ B = C
  B = C ^ A

  xorsum[i:j] = pre_xorsum[j] ^ pre_xorsum[i-1]
  
  pre_xorsum[i-1] ^ xorsum[i:j] = pre_xorsum[j]
*/
function xorQueries(arr: number[], queries: number[][]): number[] {
  const pre = [0];
  for (const x of arr) {
    pre.push(pre[pre.length - 1] ^ x);
  }

  const res: number[] = [];
  for (const q of queries) {
    const l = q[0] + 1;
    const r = q[1] + 1;
    res.push(pre[r] ^ pre[l - 1]);
  }

  return res;
}

export { xorQueries };
