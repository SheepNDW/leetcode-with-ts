import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

class LazyMultiSet {
  private pq: MinPriorityQueue<number> | MaxPriorityQueue<number>;
  private map: Map<number, number>;
  private _size: number;

  constructor(isMaxHeap: boolean) {
    this.pq = isMaxHeap ? new MaxPriorityQueue<number>() : new MinPriorityQueue<number>();
    this.map = new Map();
    this._size = 0;
  }

  private clean() {
    while (!this.pq.isEmpty() && !this.map.has(this.pq.front()!)) {
      this.pq.pop();
    }
  }

  insert(val: number) {
    this.pq.push(val);
    this.map.set(val, (this.map.get(val) || 0) + 1);
    this._size++;
  }

  remove(val: number) {
    const count = this.map.get(val)!;
    if (count === 1) {
      this.map.delete(val);
    } else {
      this.map.set(val, count - 1);
    }
    this._size--;
  }

  top(): number {
    this.clean();
    return this.pq.front()!;
  }

  pop(): number {
    this.clean();
    const val = this.pq.pop()!;
    return val;
  }

  has(val: number): boolean {
    return this.map.has(val);
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }
}

function minimumCost(nums: number[], k: number, dist: number): number {
  const n = nums.length;
  const smallSet = new LazyMultiSet(true); // max heap for k-1 smallest
  const largeSet = new LazyMultiSet(false); // min heap for rest

  let sum = 0;
  let res = Infinity;

  k--;

  for (let i = 1; i < n; i++) {
    // Add nums[i] to the window
    if (smallSet.size() < k) {
      smallSet.insert(nums[i]);
      sum += nums[i];
    } else {
      if (nums[i] >= smallSet.top()) {
        largeSet.insert(nums[i]);
      } else {
        const maxInSmall = smallSet.pop();
        smallSet.remove(maxInSmall);
        sum -= maxInSmall;

        largeSet.insert(maxInSmall);
        smallSet.insert(nums[i]);
        sum += nums[i];
      }
    }

    // Sliding window: remove nums[i - dist]
    if (i >= dist + 1) {
      res = Math.min(res, sum);

      const toRemove = nums[i - dist];

      if (largeSet.has(toRemove)) {
        largeSet.remove(toRemove);
      } else {
        smallSet.remove(toRemove);
        sum -= toRemove;

        // Rebalance: move smallest from largeSet to smallSet
        if (!largeSet.isEmpty()) {
          const minInLarge = largeSet.pop();
          largeSet.remove(minInLarge);
          smallSet.insert(minInLarge);
          sum += minInLarge;
        }
      }
    }
  }

  return res + nums[0];
}

export { minimumCost };
