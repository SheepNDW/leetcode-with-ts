import { PriorityQueue } from '@datastructures-js/priority-queue';

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const next: [to: number, price: number][][] = Array.from({ length: n }, () => []);

  for (const [from, to, price] of flights) {
    next[from].push([to, price]);
  }

  // costs[city][stops] = minimum cost to reach city with stops
  const costs: number[][] = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));

  const pq = new PriorityQueue<{ cost: number; city: number; stops: number }>(
    (a, b) => a.cost - b.cost,
  );
  pq.push({ cost: 0, city: src, stops: 0 });

  while (!pq.isEmpty()) {
    const { cost, city, stops } = pq.pop()!;

    if (city === dst) return cost;
    if (stops === k + 1) continue;
    if (costs[city][stops] <= cost) continue;

    costs[city][stops] = cost;

    for (const [nextCity, price] of next[city]) {
      const newCost = cost + price;
      if (costs[nextCity][stops + 1] > newCost) {
        pq.push({ cost: newCost, city: nextCity, stops: stops + 1 });
      }
    }
  }

  return -1;
}

export { findCheapestPrice };
