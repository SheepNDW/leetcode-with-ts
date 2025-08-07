class SegTree {
  private segNode: number[];
  private n: number;
  baskets: number[];

  constructor(baskets: number[]) {
    this.baskets = baskets;
    this.n = baskets.length;
    this.segNode = new Array(4 * this.n + 7).fill(0);
    this.build(1, 0, this.n - 1);
  }

  private build(p: number, l: number, r: number) {
    //如果 l === r，就到了葉節點，直接把 baskets[l] 填進 segNode[p]
    if (l === r) {
      this.segNode[p] = this.baskets[l];
      return;
    }

    const mid = Math.floor((l + r) / 2);
    // 左子節點編號：p * 2，負責 [l, mid]
    this.build(p * 2, l, mid);
    // 右子節點編號：p * 2 + 1，負責 [mid+1, r]
    this.build(p * 2 + 1, mid + 1, r);

    //回傳時，內部節點存左右子區間的最大值
    this.segNode[p] = Math.max(this.segNode[p * 2], this.segNode[p * 2 + 1]);
  }

  queryFirst(p: number, l: number, r: number, target: number): number {
    //如果當前區間的最大值小於 target，則無法放入水果，返回 -1
    if (this.segNode[p] < target) return -1;

    //如果目前區間只剩一個元素，則返回這個元素的索引
    if (l === r) return l;

    // 在左右子區間中查找
    const mid = Math.floor((l + r) / 2);
    if (this.segNode[p * 2] >= target) {
      return this.queryFirst(p * 2, l, mid, target);
    }
    return this.queryFirst(p * 2 + 1, mid + 1, r, target);
  }

  update(p: number, l: number, r: number, idx: number, val: number) {
    // 找到葉節點
    if (l === r) {
      this.segNode[p] = val;
      return;
    }

    const mid = Math.floor((l + r) / 2);
    if (idx <= mid) {
      this.update(p * 2, l, mid, idx, val);
    } else {
      this.update(p * 2 + 1, mid + 1, r, idx, val);
    }

    // 更新內部節點
    this.segNode[p] = Math.max(this.segNode[p * 2], this.segNode[p * 2 + 1]);
  }
}

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const n = baskets.length;
  const tree = new SegTree(baskets);
  let res = 0;

  for (const fruit of fruits) {
    // 在 [0, n-1] 區間中查找第一個能放入 fruit 的籃子
    const idx = tree.queryFirst(1, 0, n - 1, fruit);
    if (idx === -1) {
      res++;
    } else {
      // 放入後更新籃子為已使用 (0)
      tree.update(1, 0, n - 1, idx, 0);
    }
  }

  return res;
}

export { numOfUnplacedFruits };
