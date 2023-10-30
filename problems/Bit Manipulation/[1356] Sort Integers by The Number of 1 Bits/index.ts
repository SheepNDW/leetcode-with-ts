function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const diff = countOnes(a) - countOnes(b);
    if (diff !== 0) return diff;
    return a - b;
  });
}

function countOnes(num: number): number {
  let count = 0;
  while (num > 0) {
    num = num & (num - 1);
    count++;
  }
  return count;
}

export { sortByBits };
