function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);

  const answer: number[] = [];

  for (let i = 0; i < k; i++) {
    answer.push(sortedArr[i][0]);
  }

  return answer;
}

export { topKFrequent };
