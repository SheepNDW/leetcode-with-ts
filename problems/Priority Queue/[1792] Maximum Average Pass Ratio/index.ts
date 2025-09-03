import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  max { (r1, r2, r3, ..., rn) / n }

  dr = (p+1)/(t+1) - p/t
*/
function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const n = classes.length;

  // [dr, p, t]
  const pq = new MaxPriorityQueue((value: number[]) => value[0]);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const [p, t] = classes[i];
    const dr = (p + 1) / (t + 1) - p / t;
    sum += p / t;

    pq.push([dr, p, t]);
  }

  while (extraStudents--) {
    let [dr, p, t] = pq.pop()!;
    sum += dr;

    p += 1;
    t += 1;
    dr = (p + 1) / (t + 1) - p / t;
    pq.push([dr, p, t]);
  }

  return sum / n;
}

export { maxAverageRatio };
