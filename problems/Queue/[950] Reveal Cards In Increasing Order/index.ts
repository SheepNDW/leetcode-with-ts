function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((a, b) => a - b);
  const n = deck.length;
  const reorder: number[] = new Array(n);
  const indexQueue = Array.from({ length: n }, (_, idx) => idx);

  for (const num of deck) {
    const i = indexQueue.shift()!;
    reorder[i] = num;

    if (indexQueue.length) {
      indexQueue.push(indexQueue.shift()!);
    }
  }

  return reorder;
}

export { deckRevealedIncreasing };
