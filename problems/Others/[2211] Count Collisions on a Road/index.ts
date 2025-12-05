/*
  stack simulation
*/
function countCollisions0(directions: string): number {
  const stack: string[] = [];
  let count = 0;

  for (const d of directions) {
    if (d === 'L') {
      let cur = d;
      // 處理碰撞
      // [S] L
      if (stack.length && stack[stack.length - 1] === 'S') {
        count += 1;
      }

      // [R R] L
      // [R] S
      // [S]
      while (stack.length && stack[stack.length - 1] === 'R') {
        stack.pop();
        if (cur === 'L') {
          count += 2;
          cur = 'S';
        } else if (cur === 'S') {
          count += 1;
        }
      }

      if (cur === 'S') stack.push(cur);
    } else if (d === 'S') {
      while (stack.length && stack[stack.length - 1] === 'R') {
        stack.pop();
        count += 1;
      }
      stack.push(d);
    } else {
      stack.push(d);
    }
  }

  return count;
}

/*
  greedy two pass
*/
function countCollisions(directions: string): number {
  const n = directions.length;
  let count = 0;

  let flag = false;
  for (let i = 0; i < n; i++) {
    if (!flag && (directions[i] === 'R' || directions[i] === 'S')) {
      flag = true;
    }
    if (flag && directions[i] === 'L') {
      count += 1;
    }
  }

  flag = false;
  for (let i = n - 1; i >= 0; i--) {
    if (!flag && (directions[i] === 'L' || directions[i] === 'S')) {
      flag = true;
    }
    if (flag && directions[i] === 'R') {
      count += 1;
    }
  }

  return count;
}

export { countCollisions };
