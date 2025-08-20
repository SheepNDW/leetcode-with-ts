import { describe, expect, it } from 'vitest';
import { diffWaysToCompute } from '.';

describe('diffWaysToCompute', () => {
  it('example 1', () => {
    const expression = '2-1-1';

    const result = diffWaysToCompute(expression);

    expect(result).toHaveLength(2);
    expect(result).toContain(0);
    expect(result).toContain(2);
  });

  it('example 2', () => {
    const expression = '2*3-4*5';

    const result = diffWaysToCompute(expression);

    expect(result.sort((a, b) => a - b)).toEqual([-34, -14, -10, -10, 10]);
  });
});
