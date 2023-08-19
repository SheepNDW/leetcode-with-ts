function maximalNetworkRank(n: number, roads: number[][]): number {
  const connections = new Array(n).fill(0);
  const adjacent = new Set<number>();

  for (const [city1, city2] of roads) {
    connections[city1]++;
    connections[city2]++;
    adjacent.add(city1 * n + city2);
    adjacent.add(city2 * n + city1);
  }

  let maxRank = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rank = connections[i] + connections[j];
      if (adjacent.has(i * n + j)) {
        rank--;
      }
      maxRank = Math.max(maxRank, rank);
    }
  }

  return maxRank;
}

export { maximalNetworkRank };
