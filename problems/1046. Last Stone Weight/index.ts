// sort + recursion
function lastStoneWeight(stones: number[]): number {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  const sortedList: number[] = [...stones].sort((a, b) => b - a);
  const smashedResult = sortedList[0] - sortedList[1];

  if (smashedResult > 0) {
    sortedList.splice(0, 2, smashedResult);
  } else {
    sortedList.splice(0, 2);
  }

  return lastStoneWeight(sortedList);
}

export { lastStoneWeight };
