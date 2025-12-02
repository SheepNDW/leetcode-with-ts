import { describe, expect, it } from 'vitest';
import { maxRunTime } from '.';

describe('maxRunTime', () => {
  it('example 1', () => {
    const n = 2;
    const batteries = [3, 3, 3];

    const result = maxRunTime(n, batteries);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const n = 2;
    const batteries = [1, 1, 1, 1];

    const result = maxRunTime(n, batteries);

    expect(result).toBe(2);
  });
});
