function findKthNumber(n: number, k: number): number {
  let cur = 1; // 從字典序的第一個數字開始（也就是 1）
  k -= 1; // 因為我們已經站在第一個數字了，所以先扣掉 1

  while (k > 0) {
    const steps = countSteps(n, cur, cur + 1);

    if (steps <= k) {
      // 如果整棵以 cur 為字首的子樹節點數都可以跳過
      k -= steps;
      cur += 1; // 換到兄弟節點
    } else {
      // 第 k 小的數字在這棵子樹裡面，往下潛
      cur *= 10;
      k -= 1; // 把目前節點自己也算掉
    }
  }

  return cur;
}

function countSteps(n: number, prefix1: number, prefix2: number) {
  let steps = 0;

  while (prefix1 <= n) {
    steps += Math.min(n + 1, prefix2) - prefix1;
    prefix1 *= 10;
    prefix2 *= 10;
  }

  return steps;
}

export { findKthNumber };
