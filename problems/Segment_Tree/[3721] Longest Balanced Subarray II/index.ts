class SegTree {
  private n: number;
  private mn: number[];
  private mx: number[];
  private lazy: number[];

  constructor(n: number) {
    this.n = n;
    this.mn = new Array(4 * n).fill(0);
    this.mx = new Array(4 * n).fill(0);
    this.lazy = new Array(4 * n).fill(0);
    // 初始 D(l)=0 for all l
  }

  private apply(i: number, delta: number) {
    this.mn[i] += delta;
    this.mx[i] += delta;
    this.lazy[i] += delta;
  }

  private push(i: number) {
    const z = this.lazy[i];
    if (z !== 0) {
      this.apply(i * 2, z);
      this.apply(i * 2 + 1, z);
      this.lazy[i] = 0;
    }
  }

  add(ql: number, qr: number, delta: number) {
    if (ql > qr) return;
    this._add(1, 0, this.n - 1, ql, qr, delta);
  }

  private _add(i: number, l: number, r: number, ql: number, qr: number, delta: number) {
    if (ql <= l && r <= qr) {
      this.apply(i, delta);
      return;
    }
    this.push(i);
    const m = (l + r) >> 1;
    if (ql <= m) this._add(i * 2, l, m, ql, qr, delta);
    if (qr > m) this._add(i * 2 + 1, m + 1, r, ql, qr, delta);
    this.mn[i] = Math.min(this.mn[i * 2], this.mn[i * 2 + 1]);
    this.mx[i] = Math.max(this.mx[i * 2], this.mx[i * 2 + 1]);
  }

  // 回傳 [ql, qr] 範圍內最左邊 D==0 的 index，找不到回傳 -1
  firstZero(ql: number, qr: number): number {
    if (ql > qr) return -1;
    return this._firstZero(1, 0, this.n - 1, ql, qr);
  }

  private _firstZero(i: number, l: number, r: number, ql: number, qr: number): number {
    if (r < ql || l > qr) return -1;
    if (this.mn[i] > 0 || this.mx[i] < 0) return -1; // 不可能有 0
    if (l === r) return l;

    this.push(i);
    const m = (l + r) >> 1;

    const left = this._firstZero(i * 2, l, m, ql, qr);
    if (left !== -1) return left;
    return this._firstZero(i * 2 + 1, m + 1, r, ql, qr);
  }
}

function longestBalanced(nums: number[]): number {
  const n = nums.length;
  const st = new SegTree(n);
  const last = new Map<number, number>();
  let ans = 0;

  for (let r = 0; r < n; r++) {
    const x = nums[r];
    const prev = last.get(x) ?? -1;
    const delta = (x & 1) === 0 ? +1 : -1;

    // 對 l in [prev+1, r] 做 D(l) += delta
    st.add(prev + 1, r, delta);
    last.set(x, r);

    // 找最小 l <= r 使 D(l) == 0
    const l = st.firstZero(0, r);
    if (l !== -1) ans = Math.max(ans, r - l + 1);
  }

  return ans;
}

export { longestBalanced };
