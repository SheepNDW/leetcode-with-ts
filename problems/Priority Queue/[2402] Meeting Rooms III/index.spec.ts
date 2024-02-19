import { describe, expect, it } from 'vitest';
import { mostBooked } from '.';

describe.skip('mostBooked', () => {
  it('should return 0 for n = 2 and meetings = [[0,10],[1,5],[2,7],[3,4]]', () => {
    const n = 2;
    const meetings = [
      [0, 10],
      [1, 5],
      [2, 7],
      [3, 4],
    ];

    const result = mostBooked(n, meetings);

    expect(result).toBe(0);
  });

  it('should return 1 for n = 3 and meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]', () => {
    const n = 3;
    const meetings = [
      [1, 20],
      [2, 10],
      [3, 5],
      [4, 9],
      [6, 8],
    ];

    const result = mostBooked(n, meetings);

    expect(result).toBe(1);
  });

  it('should return 0 for n = 1 and meetings = [[0,5],[5,10]]', () => {
    const n = 1;
    const meetings = [
      [0, 5],
      [5, 10],
    ];

    const result = mostBooked(n, meetings);

    expect(result).toBe(0);
  });
});
