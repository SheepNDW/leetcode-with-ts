function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);

  let left = 1;
  let right = position[position.length - 1] - position[0] + 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (isOk(mid, position, m)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // left 為第一個不符合的 force
  return left - 1;
}

function isOk(force: number, position: number[], m: number): boolean {
  let count = 1;
  let j = 0;

  for (let i = 1; i < position.length; i++) {
    if (position[i] - position[j] >= force) {
      count++;
      j = i;
      if (count >= m) return true;
    }
  }

  return false;
}

export { maxDistance };
