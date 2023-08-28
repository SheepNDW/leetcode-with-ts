function canCross(stones: number[]): boolean {
  const n = stones.length;
  const hashMap = new Map<number, Set<number>>();
  hashMap.set(0, new Set([1]));
  const stoneSet = new Set(stones);

  for (let i = 0; i < n; i++) {
    const currStone = stones[i];
    const jumpDistances = hashMap.get(currStone);

    if (jumpDistances) {
      for (const k of jumpDistances) {
        const nextStone = currStone + k;

        if (nextStone === stones[n - 1]) {
          return true;
        }

        if (stoneSet.has(nextStone)) {
          const nextJumpDistances = hashMap.get(nextStone) || new Set();
          nextJumpDistances.add(k);
          nextJumpDistances.add(k + 1);
          if (k - 1 > 0) nextJumpDistances.add(k - 1);
          hashMap.set(nextStone, nextJumpDistances);
        }
      }
    }
  }
  return false;
}

export { canCross };
