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

// queue class: TC: O(n * k)
function findTheWinner1(n: number, k: number): number {
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

/*
  Recursion: f(n,k) = (f(n-1,k) + k) mod n

  TC: O(n)
  SC: O(n)
*/
function findTheWinner2(n: number, k: number): number {
  const helper = (n: number, k: number): number => {
    if (n === 1) return 0; // 基底情況：只有一個人時，他的位置是 0（0-indexed）
    return (helper(n - 1, k) + k) % n;
  };

  return helper(n, k) + 1; // 將結果轉換為 1-indexed
}

/*
  Iterative

  TC: O(n)
  SC: O(1)
*/
function findTheWinner(n: number, k: number): number {
  let winner = 0;

  for (let i = 2; i <= n; i++) {
    winner = (winner + k) % i;
  }

  return winner + 1;
}

export { findTheWinner };
