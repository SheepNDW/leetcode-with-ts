function robotSim(commands: number[], obstacles: number[][]): number {
  const turnLeft = -2;
  const turnRight = -1;

  const set = new Set<string>();
  obstacles.forEach(([x, y]) => set.add(`${x},${y}`));

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let d = 0;
  let res = 0;
  let x = 0;
  let y = 0;

  for (const c of commands) {
    if (c === turnRight) {
      d = (d + 1) % 4;
    } else if (c === turnLeft) {
      d = (d + 3) % 4;
    } else {
      const [dx, dy] = dir[d];

      for (let i = 0; i < c; i++) {
        if (set.has(`${x + dx},${y + dy}`)) break;
        x += dx;
        y += dy;
      }
    }
    res = Math.max(res, x ** 2 + y ** 2);
  }

  return res;
}

export { robotSim };
