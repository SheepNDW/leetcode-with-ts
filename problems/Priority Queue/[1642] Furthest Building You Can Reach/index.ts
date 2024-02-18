import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { MinHeap } from '../../utils/Heap';

/*
  LeetCode built-in MinPriorityQueue
*/
function furthestBuilding0(heights: number[], bricks: number, ladders: number): number {
  const pq = new MinPriorityQueue({ priority: (el: number) => el });
  let count = 0;

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] <= heights[i - 1]) continue;

    if (count < ladders) {
      count++;
      pq.enqueue(heights[i] - heights[i - 1]);
    } else {
      pq.enqueue(heights[i] - heights[i - 1]);
      if (bricks < pq.front().element) {
        return i - 1;
      }
      bricks -= pq.dequeue().element;
    }
  }

  return heights.length - 1;
}

/*
  Min Heap
*/
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const heap = new MinHeap<number>();
  let count = 0;

  for (let i = 1; i < heights.length; i++) {
    const diff = heights[i] - heights[i - 1];
    if (diff <= 0) continue;

    if (count < ladders) {
      count++;
      heap.push(diff);
    } else {
      heap.push(diff);
      if (bricks < heap.top()) {
        return i - 1;
      }
      bricks -= heap.top();
      heap.pop();
    }
  }

  return heights.length - 1;
}

export { furthestBuilding };
