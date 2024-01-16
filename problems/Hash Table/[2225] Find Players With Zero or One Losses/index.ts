function findWinners0(matches: number[][]): number[][] {
  const table = new Map<number, [number, number]>();

  matches.forEach(([winner, loser]) => {
    const currWinner = table.get(winner) || [0, 0];
    const currLoser = table.get(loser) || [0, 0];
    table.set(winner, [currWinner[0] + 1, currWinner[1]]);
    table.set(loser, [currLoser[0], currLoser[1] + 1]);
  });

  const ans: number[][] = [[], []];

  for (const [player, result] of table) {
    if (result[1] === 0) ans[0].push(player);
    if (result[1] === 1) ans[1].push(player);
  }

  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);

  return ans;
}

// ==== Alternatives ====

// record loses count
function findWinners(matches: number[][]): number[][] {
  const loseCounter = new Map<number, number>();

  matches.forEach(([winner, loser]) => {
    if (!loseCounter.has(winner)) loseCounter.set(winner, 0);
    loseCounter.set(loser, (loseCounter.get(loser) || 0) + 1);
  });

  const ans: number[][] = [[], []];

  for (const [player, loses] of loseCounter.entries()) {
    if (loses === 0) ans[0].push(player);
    else if (loses === 1) ans[1].push(player);
  }

  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);

  return ans;
}

export { findWinners };
