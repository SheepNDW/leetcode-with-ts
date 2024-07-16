interface Robot {
  pos: number;
  health: number;
  dir: string;
  idx: number;
}

function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string
): number[] {
  const n = positions.length;
  const robots: Robot[] = [];

  for (let i = 0; i < n; i++) {
    robots.push({
      pos: positions[i],
      health: healths[i],
      dir: directions[i],
      idx: i,
    });
  }

  robots.sort((a, b) => a.pos - b.pos);
  const stack: Robot[] = [];

  for (let i = 0; i < n; i++) {
    if (robots[i].dir === 'R') {
      stack.push(robots[i]);
    } else {
      while (stack.length && stack[stack.length - 1].dir === 'R') {
        const top = stack.pop()!;

        if (top.health < robots[i].health) {
          robots[i].health -= 1;
        } else if (top.health === robots[i].health) {
          robots[i].health = 0;
          break;
        } else {
          top.health -= 1;
          robots[i].health = 0;
          stack.push(top);
          break;
        }
      }

      if (robots[i].health > 0) {
        stack.push(robots[i]);
      }
    }
  }

  stack.sort((a, b) => a.idx - b.idx);

  return stack.map((robot) => robot.health);
}

export { survivedRobotsHealths };
