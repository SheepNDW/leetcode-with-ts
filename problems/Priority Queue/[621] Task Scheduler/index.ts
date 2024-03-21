import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  PQ{5a,2b,1c}, n = 2
  -> ab
  PQ{4a,1b,1c}
  -> abab
  PQ{3a,1c}
  -> ababac
  PQ{2a}, 不夠 n 就用 idle 來湊
  -> ababacaI
  PQ{1a}
  -> ababacaIaI
 */
function leastInterval0(tasks: string[], n: number): number {
  n++;
  const tasksMap = new Map<string, number>();
  tasks.forEach((task) => {
    tasksMap.set(task, (tasksMap.get(task) ?? 0) + 1);
  });

  const pq = new MaxPriorityQueue({ priority: (el: number) => el });
  for (const freq of tasksMap.values()) {
    pq.enqueue(freq);
  }

  let ans = 0;

  while (!pq.isEmpty()) {
    const k = Math.min(n, pq.size());
    const temp: number[] = [];

    for (let i = 0; i < k; i++) {
      let front = pq.dequeue().element;
      front--;
      if (front !== 0) temp.push(front);
    }
    if (temp.length > 0) {
      ans += n;
    } else {
      ans += k;
    }

    temp.forEach((d) => pq.enqueue(d));
  }

  return ans;
}

/*
  A,B: MaxFreq
  C: f_c
  D: f_d
  ...
  H: f_h

  A B C D E H X
  A B C D F X X
  A B C D F X X
  A B C E G X X
  A B 

  A B C D E H L p t
  A B C D F I M q u
  A B C D F J N r v
  A B C E G K O s
  A B 
*/
function leastInterval(tasks: string[], n: number): number {
  n++;
  const tasksMap = new Map<string, number>();
  let maxFreq = 0;
  tasks.forEach((task) => {
    let curFreq = (tasksMap.get(task) ?? 0) + 1;
    tasksMap.set(task, curFreq);
    maxFreq = Math.max(maxFreq, curFreq);
  });

  let tail = 0;
  for (const freq of tasksMap.values()) {
    if (freq === maxFreq) tail++;
  }

  return Math.max((maxFreq - 1) * n + tail, tasks.length);
}

export { leastInterval };
