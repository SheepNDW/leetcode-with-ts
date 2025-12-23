import { describe, expect, it } from 'vitest';
import { maxTwoEvents } from '.';

describe('maxTwoEvents', () => {
  it('example 1', () => {
    const events = [
      [1, 3, 2],
      [4, 5, 2],
      [2, 4, 3],
    ];
    const result = maxTwoEvents(events);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const events = [
      [1, 3, 2],
      [4, 5, 2],
      [1, 5, 5],
    ];
    const result = maxTwoEvents(events);
    expect(result).toBe(5);
  });
});
