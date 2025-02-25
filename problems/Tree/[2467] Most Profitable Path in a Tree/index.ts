function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
  const n = amount.length;
  const nodeToBob = Array.from({ length: n }, () => 10 ** 5);
  const adj: number[][] = Array.from({ length: n }, () => []);
  let res = Number.MIN_SAFE_INTEGER;

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  calculateDistanceToBob(0, -1, 0);
  calculateMaxProfit(0, -1, 0, 0);

  return res;

  function calculateDistanceToBob(cur: number, parent: number, step: number) {
    if (cur === bob) {
      nodeToBob[cur] = 0;
      return;
    }

    let toBob = 10 ** 5;

    for (const next of adj[cur]) {
      if (next === parent) continue;
      calculateDistanceToBob(next, cur, step + 1);
      toBob = Math.min(toBob, nodeToBob[next] + 1);
    }

    nodeToBob[cur] = toBob;
    return;
  }

  function calculateMaxProfit(cur: number, parent: number, step: number, score: number) {
    if (step === nodeToBob[cur]) {
      score += amount[cur] / 2;
    } else if (step < nodeToBob[cur]) {
      score += amount[cur];
    }

    if (adj[cur].length === 1 && cur !== 0) {
      res = Math.max(res, score);
      return;
    }

    for (const next of adj[cur]) {
      if (next === parent) continue;
      calculateMaxProfit(next, cur, step + 1, score);
    }
  }
}

export { mostProfitablePath };
