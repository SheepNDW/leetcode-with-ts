import { Queue } from '@datastructures-js/queue';

function pushDominoes(dominoes: string): string {
  const n = dominoes.length;
  const states = new Array(n).fill(0); // 0: 未推倒, -1: L, 1: R
  const queue = new Queue<[number, number]>(); // [位置, 方向]

  // 初始加入所有被推倒的骨牌
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === 'L') {
      states[i] = -1;
      queue.enqueue([i, -1]);
    } else if (dominoes[i] === 'R') {
      states[i] = 1;
      queue.enqueue([i, 1]);
    }
  }

  while (!queue.isEmpty()) {
    const layerSize = queue.size();
    const nextMap = new Map<number, number>();

    for (let i = 0; i < layerSize; i++) {
      const [pos, dir] = queue.dequeue();

      const nextPos = pos + dir;
      if (nextPos < 0 || nextPos >= n || states[nextPos] !== 0) continue;

      // 累積方向推力：+1 表 R，-1 表 L，0 表兩邊同時推
      nextMap.set(nextPos, (nextMap.get(nextPos) ?? 0) + dir);
    }

    for (const [pos, netForce] of nextMap.entries()) {
      if (netForce === 0) continue; // 兩邊同時推，保持直立
      states[pos] = netForce;
      queue.enqueue([pos, netForce]);
    }
  }

  // 組合最終結果
  return states
    .map((val) => {
      if (val === 1) return 'R';
      if (val === -1) return 'L';
      return '.';
    })
    .join('');
}

export { pushDominoes };
