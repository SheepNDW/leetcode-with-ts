import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/*
  PQ_empty: [2,3, ...]
  PQ_used: [{returnTime, chairId}, {}, {}]
*/
function smallestChair0(times: number[][], targetFriend: number): number {
  const empty = new MinPriorityQueue({ priority: (el: number) => el });
  const used = new MinPriorityQueue({ priority: (el: { leave: number; id: number }) => el.leave });

  for (let i = 0; i < times.length; i++) {
    empty.enqueue(i);
    times[i].push(i); // {start, end, personId}
  }

  times.sort((a, b) => a[0] - b[0]);

  for (const [arrival, leaving, person] of times) {
    while (!used.isEmpty() && used.front().element.leave <= arrival) {
      empty.enqueue(used.dequeue().element.id);
    }

    const chair = empty.dequeue().element;

    if (person === targetFriend) {
      return chair;
    }

    used.enqueue({ leave: leaving, id: chair });
  }

  return -1;
}

/*
  題目說到 Each arrival_i time is distinct.
  所以可以做點小改良
*/
function smallestChair(times: number[][], targetFriend: number): number {
  const available = new MinPriorityQueue({ priority: (el: number) => el });
  const occupied = new MinPriorityQueue({
    priority: (el: { leave: number; id: number }) => el.leave,
  });

  for (let i = 0; i < times.length; i++) {
    available.enqueue(i);
  }

  const targetTime = times[targetFriend][0];
  times.sort((a, b) => a[0] - b[0]);

  for (const [arrival, leave] of times) {
    while (!occupied.isEmpty() && occupied.front().element.leave <= arrival) {
      available.enqueue(occupied.dequeue().element.id);
    }

    const id = available.dequeue().element;

    if (arrival === targetTime) {
      return id;
    }

    occupied.enqueue({ leave, id });
  }

  return -1;
}

export { smallestChair };
