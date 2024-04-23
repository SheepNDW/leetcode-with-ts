function openLock(deadends: string[], target: string): number {
  const deads = new Set(deadends);
  if (deads.has('0000')) return -1;
  if (target === '0000') return 0;

  const queue: [string, number][] = [];
  const visited = new Set<string>();

  queue.push(['0000', 0]);
  visited.add('0000');

  while (queue.length) {
    const [state, step] = queue.shift()!;

    for (const next of scroll(state)) {
      if (!deads.has(next) && !visited.has(next)) {
        if (next === target) return step + 1;
        visited.add(next);
        queue.push([next, step + 1]);
      }
    }
  }

  return -1;
}

function scroll(state: string): string[] {
  const result: string[] = [];

  for (let i = 0; i < 4; i++) {
    for (const d of [-1, 1]) {
      let num = +state[i];
      num = (num + d + 10) % 10;

      const temp = state.slice(0, i) + `${num}` + state.slice(i + 1);

      result.push(temp);
    }
  }

  return result;
}

export { openLock };
