// 用 set 實作，但是在 getRandom 時將 set 轉成陣列是一個 O(n) 的操作！
class RandomizedSet0 {
  private set;

  constructor() {
    this.set = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.set.has(val)) return false;
    this.set.add(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
  }

  // O(n)
  getRandom(): number | void {
    const n = this.set.size;
    if (n > 0) {
      const randomIndex = Math.floor(Math.random() * n);
      return [...this.set][randomIndex];
    }
  }
}

// 維護一個陣列 + 一個記錄每個元素所在 index 的 map
class RandomizedSet {
  private set: number[];
  private indices: Map<number, number>;

  constructor() {
    this.set = [];
    this.indices = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.indices.has(val)) return false;

    this.indices.set(val, this.set.length);
    this.set.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.indices.has(val)) return false;

    const index = this.indices.get(val)!;
    const lastElement = this.set[this.set.length - 1];
    this.set[index] = lastElement;
    this.indices.set(lastElement, index);

    this.set.pop();
    this.indices.delete(val);
    return true;
  }

  getRandom(): number {
    const randonIndex = Math.floor(Math.random() * this.set.length);
    return this.set[randonIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export { RandomizedSet };
