import { describe, expect, it } from 'vitest';
import { maxEvents } from '.';

describe('maxEvents', () => {
  it('example 1', () => {
    const events = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const result = maxEvents(events);
    expect(result).toBe(3);
  });

  it('example 2', () => {
    const events = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 2],
    ];
    const result = maxEvents(events);
    expect(result).toBe(4);
  });
});
