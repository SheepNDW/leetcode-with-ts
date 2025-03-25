import { describe, expect, it } from 'vitest';
import { countDays } from '.';

describe.skip('countDays', () => {
  it('example 1', () => {
    const days = 10;
    const meetings = [
      [5, 7],
      [1, 3],
      [9, 10],
    ];

    const result = countDays(days, meetings);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const days = 5;
    const meetings = [
      [2, 4],
      [1, 3],
    ];

    const result = countDays(days, meetings);

    expect(result).toBe(1);
  });

  it('example 3', () => {
    const days = 6;
    const meetings = [[1, 6]];

    const result = countDays(days, meetings);

    expect(result).toBe(0);
  });
});
