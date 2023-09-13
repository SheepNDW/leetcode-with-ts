function groupThePeople(groupSizes: number[]): number[][] {
  const n = groupSizes.length;
  const groups = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    const size = groupSizes[i];
    if (!groups.has(size)) {
      groups.set(size, []);
    }
    groups.get(size)?.push(i);
  }

  const result: number[][] = [];

  for (const [size, members] of groups.entries()) {
    for (let i = 0; i < members.length; i += size) {
      const group = members.slice(i, i + size);
      result.push(group);
    }
  }

  return result;
}

export { groupThePeople };
