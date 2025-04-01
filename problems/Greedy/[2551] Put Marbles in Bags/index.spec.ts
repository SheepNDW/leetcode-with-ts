import { describe, expect, it } from 'vitest';
import { putMarbles } from '.';

describe.skip('putMarbles', () => {
  it('should return 4 for weights [1,3,5,1] and k 2', () => {
    const weights = [1, 3, 5, 1];
    const k = 2;

    const result = putMarbles(weights, k);

    expect(result).toBe(4);
  });

  it('should return 0 for weights [1,3] and k 2', () => {
    const weights = [1, 3];
    const k = 2;

    const result = putMarbles(weights, k);

    expect(result).toBe(0);
  });
});
