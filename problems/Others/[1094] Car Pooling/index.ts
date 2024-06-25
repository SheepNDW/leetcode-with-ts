/*
  diff array
*/
function carPooling(trips: number[][], capacity: number): boolean {
  const diff: { stop: number; diffs: number }[] = [];

  for (const [passengers, from, to] of trips) {
    diff.push({ stop: from, diffs: passengers });
    diff.push({ stop: to, diffs: -passengers });
  }

  diff.sort((a, b) => {
    if (a.stop - b.stop === 0) {
      return a.diffs - b.diffs;
    }
    return a.stop - b.stop;
  });
  let total = 0;

  for (const d of diff) {
    total += d.diffs;
    if (total > capacity) return false;
  }

  return true;
}

export { carPooling };
