import { describe, expect, it } from 'vitest';
import { averageWaitingTime } from '.';

describe.skip('averageWaitingTime', () => {
  it('should return 5.00000 for customers = [[1,2],[2,5],[4,3]]', () => {
    const customers = [
      [1, 2],
      [2, 5],
      [4, 3],
    ];

    const result = averageWaitingTime(customers);

    expect(result).toBeCloseTo(5.0);
  });

  it('should return 3.25000 for customers = [[5,2],[5,4],[10,3],[20,1]]', () => {
    const customers = [
      [5, 2],
      [5, 4],
      [10, 3],
      [20, 1],
    ];

    const result = averageWaitingTime(customers);

    expect(result).toBeCloseTo(3.25);
  });

  it('should return 4.16667 for customers = [[2,3],[6,3],[7,5],[11,3],[15,2],[18,1]]', () => {
    const customers = [
      [2, 3],
      [6, 3],
      [7, 5],
      [11, 3],
      [15, 2],
      [18, 1],
    ];

    const result = averageWaitingTime(customers);

    expect(result).toBeCloseTo(4.16667);
  });
});
