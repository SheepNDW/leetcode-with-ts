import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/*
  min heap
  time: O(n + n log k)
*/
function topKFrequent0(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  // (num, freq)
  const pq = new MinPriorityQueue((el: [number, number]) => el[1]);
  for (const pair of counter) {
    pq.push(pair);
    if (pq.size() > k) pq.pop();
  }

  const res = [];
  for (let i = 1; i <= k; i++) {
    res.push(pq.pop()?.[0]!);
  }

  return res;
}

/*
  bucket sort
  time: O(n)
  space: O(n)
*/
function topKFrequent1(nums: number[], k: number): number[] {
  const n = nums.length;

  const counter = new Map<number, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  // bucket sort
  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [num, freq] of counter) {
    buckets[freq].push(num);
  }

  const res = [];
  for (let i = n; i >= 0 && res.length < k; i--) {
    if (buckets[i].length > 0) {
      res.push(...buckets[i]);
    }
  }

  return res;
}

/*
  quick select
  time: O(n) on average

  X X X P X X X
  S S P P P L L
      i t j
*/
function topKFrequent(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }
  const arr = Array.from(counter);

  const f = quickSelect(0, arr.length - 1, k);

  // return all elements with freq >= f
  const res = [];
  for (const [num, freq] of arr) {
    if (freq >= f) res.push(num);
  }

  return res;

  function quickSelect(a: number, b: number, k: number): number {
    const pivot = arr[(a + b) >> 1][1];

    let i = a;
    let j = b;
    let t = a;
    while (t <= j) {
      if (arr[t][1] < pivot) {
        swap(arr, i, t);
        i++;
        t++;
      } else if (arr[t][1] > pivot) {
        swap(arr, j, t);
        j--;
      } else {
        t++;
      }
    }

    if (b - j >= k) return quickSelect(j + 1, b, k);
    if (b - i + 1 >= k) return pivot;
    return quickSelect(a, i - 1, k - (b - i + 1));
  }
}

function swap(arr: unknown[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { topKFrequent };
