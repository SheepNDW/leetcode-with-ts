import { describe, expect, it } from 'vitest';
import { minTaps } from '.';

describe('minTaps', () => {
  it('should return 1 when the garden can be watered by a single tap', () => {
    const n = 5;
    const ranges = [3, 4, 1, 1, 0, 0];
    const n2 = 8;
    const ranges2 = [4, 0, 0, 0, 0, 0, 0, 0, 4];

    const result = minTaps(n, ranges);
    const result2 = minTaps(n2, ranges2);

    expect(result).toBe(1);
    expect(result2).toBe(2);
  });

  it('should return -1 when the garden cannot be watered', () => {
    const n = 3;
    const ranges = [0, 0, 0, 0];

    const result = minTaps(n, ranges);

    expect(result).toBe(-1);
  });
});
