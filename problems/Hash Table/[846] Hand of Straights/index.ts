/*
  hash + sorting: O(n log n)
*/
function isNStraightHand0(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize > 0) return false;

  hand.sort((a, b) => a - b);
  const counts = new Map<number, number>();
  hand.forEach((card) => counts.set(card, (counts.get(card) || 0) + 1));

  for (const card of hand) {
    if (counts.get(card) === 0) continue;

    for (let i = 0; i < groupSize; i++) {
      const curCard = card + i;

      if (!counts.get(curCard)) {
        return false;
      }

      counts.set(curCard, counts.get(curCard)! - 1);
    }
  }

  return true;
}

/*
  reverse decrement: O(n)
*/
function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize > 0) return false;

  const counts: Record<number, number> = {};
  for (const card of hand) {
    if (counts[card] === undefined) counts[card] = 0;
    counts[card]++;
  }

  for (const card of hand) {
    let startCard = card;

    while (counts[startCard - 1]) {
      startCard--;
    }

    while (startCard <= card) {
      while (counts[startCard]) {
        for (let nextCard = startCard; nextCard < startCard + groupSize; nextCard++) {
          if (!counts[nextCard]) {
            return false;
          }
          counts[nextCard]--;
        }
      }
      startCard++;
    }
  }

  return true;
}

export { isNStraightHand };
