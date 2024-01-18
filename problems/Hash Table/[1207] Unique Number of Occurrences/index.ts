function uniqueOccurrences(arr: number[]): boolean {
  const freqMap = new Map<number, number>();
  arr.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));

  const set = new Set([...freqMap.values()]);

  return freqMap.size === set.size;
}

export { uniqueOccurrences };
