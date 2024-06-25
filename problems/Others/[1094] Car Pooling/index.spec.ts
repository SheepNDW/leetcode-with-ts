import { describe, expect, it } from 'vitest';
import { carPooling } from '.';

describe.skip('carPooling', () => {
  it('should return false for trips = [[2,1,5],[3,3,7]], capacity = 4', () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 4;

    const result = carPooling(trips, capacity);

    expect(result).toBe(false);
  });

  it('should return true for trips = [[2,1,5],[3,3,7]], capacity = 5', () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 5;

    const result = carPooling(trips, capacity);

    expect(result).toBe(true);
  });

  it('should return true for trips = [[2,1,5],[3,5,7]], capacity = 3', () => {
    const trips = [
      [2, 1, 5],
      [3, 5, 7],
    ];
    const capacity = 3;

    const result = carPooling(trips, capacity);

    expect(result).toBe(true);
  });
});
