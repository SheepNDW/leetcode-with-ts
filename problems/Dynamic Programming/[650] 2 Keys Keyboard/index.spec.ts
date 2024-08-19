import { describe, expect, it } from 'vitest';
import { minSteps } from '.';

describe.skip('minSteps', () => {
  it('should return 3 for n = 3', () => {
    const n = 3;
    const result = minSteps(n);
    expect(result).toBe(3);
  });

  it('should return 0 for n = 1', () => {
    const n = 1;
    const result = minSteps(n);
    expect(result).toBe(0);
  });
});
