function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
  return helper(finish.toString(), limit, s) - helper((start - 1).toString(), limit, s);
}

function helper(boundStr: string, limit: number, s: string): number {
  if (boundStr.length < s.length) return 0;
  return dfs(boundStr, s, limit, 0, true);

  function dfs(bound: string, s: string, limit: number, k: number, same: boolean) {
    if (bound.length - k === s.length) {
      const len = s.length;
      if (!same || bound.slice(bound.length - len) >= s) return 1;
      return 0;
    }

    if (!same) {
      const d = bound.length - s.length - k;
      return Math.pow(1 + limit, d);
    }

    let res = 0;
    for (let d = 0; d <= Math.min(+bound[k], limit); d++) {
      if (d === +bound[k]) {
        res += dfs(bound, s, limit, k + 1, true);
      } else {
        res += dfs(bound, s, limit, k + 1, false);
      }
    }

    return res;
  }
}

export { numberOfPowerfulInt };
