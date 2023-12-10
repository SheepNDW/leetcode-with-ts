import { Queue } from '../../utils/queue';

// array
function findTheWinner0(n: number, k: number): number {
  const playersQueue = Array.from({ length: n }, (_, i) => i + 1);

  while (playersQueue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      playersQueue.push(playersQueue.shift()!);
    }
    playersQueue.shift();
  }

  return playersQueue[0];
}

// queue class
function findTheWinner(n: number, k: number): number {
  const playersQueue = new Queue<number>();

  for (let i = 1; i <= n; i++) {
    playersQueue.enqueue(i);
  }

  while (playersQueue.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      playersQueue.enqueue(playersQueue.dequeue()!);
    }
    playersQueue.dequeue();
  }

  return playersQueue.front();
}

export { findTheWinner };
