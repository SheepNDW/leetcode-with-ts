import { describe, expect, it } from 'vitest';
import { minimumTotal } from '.';

describe('Triangle', () => {
  it('example 1', () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    const result = minimumTotal(triangle);
    expect(result).toBe(11);
  });

  it('example 2', () => {
    const triangle = [[-10]];
    const result = minimumTotal(triangle);
    expect(result).toBe(-10);
  });
});
