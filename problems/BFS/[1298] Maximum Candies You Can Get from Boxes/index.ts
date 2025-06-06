import { Queue } from '@datastructures-js/queue';

function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  const q = new Queue(initialBoxes);
  const keySet = new Set<number>();
  let res = 0;
  let opened = true;

  while (!q.isEmpty() && opened) {
    let len = q.size();
    opened = false;

    while (len--) {
      const box = q.pop();

      if (status[box] === 0 && !keySet.has(box)) {
        q.push(box);
      } else {
        opened = true;
        res += candies[box];

        for (const key of keys[box]) {
          keySet.add(key);
        }

        for (const newBox of containedBoxes[box]) {
          q.push(newBox);
        }
      }
    }
  }

  return res;
}

export { maxCandies };
