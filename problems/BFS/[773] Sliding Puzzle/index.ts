/*
  [1, 2, 3]
  [4, 0, 5]

  -> 0 1 2 3 4 5 (idx)
    [1 2 3 4 0 5]
*/
function slidingPuzzle(board: number[][]): number {
  const adjacent: Record<number, number[]> = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  };

  const flatBoard = board.flat().join('');
  const queue = [{ i: flatBoard.indexOf('0'), b: flatBoard, length: 0 }];
  const visited = new Set(flatBoard);

  while (queue.length) {
    const { i, b, length } = queue.shift()!;

    if (b === '123450') return length;

    const bArr = b.split('');

    for (const j of adjacent[i]) {
      const copied = [...bArr];
      [copied[i], copied[j]] = [copied[j], copied[i]];
      const newBoard = copied.join('');

      if (!visited.has(newBoard)) {
        queue.push({ i: j, b: newBoard, length: length + 1 });
        visited.add(newBoard);
      }
    }
  }

  return -1;
}

export { slidingPuzzle };
