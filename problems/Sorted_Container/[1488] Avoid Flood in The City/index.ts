import { lowerBound } from '../../utils/lowerbound';

/*
  rain[i] == 0
    dryDays.push(i)

  rain[i] == x
  1) x is empty: fill[x] = i
  2) x is full: when to drain x?
    -> must be in dryDays
    -> must be latter than fill[x]
*/
function avoidFlood(rains: number[]): number[] {
  const n = rains.length;
  const res = Array.from({ length: n }, () => 1);

  // fill[x] is the last day that rain filled lake x
  const fill = new Map<number, number>();
  const dryDays: number[] = [];

  for (let i = 0; i < n; i++) {
    const x = rains[i];

    if (x === 0) {
      dryDays.push(i);
    } else {
      res[i] = -1;

      if (fill.has(x)) {
        const lastFilled = fill.get(x)!;
        const idx = lowerBound(dryDays, lastFilled);

        if (idx === dryDays.length) {
          // no available dry day to drain lake x
          return [];
        }

        res[dryDays[idx]] = x;
        dryDays.splice(idx, 1);
      }

      fill.set(x, i);
    }
  }

  return res;
}

export { avoidFlood };
