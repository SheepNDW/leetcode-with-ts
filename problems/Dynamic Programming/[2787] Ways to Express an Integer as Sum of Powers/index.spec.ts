import { describe, expect, it } from 'vitest';
import { numberOfWays } from '.';

describe('numberOfWays', () => {
  // Explanation: We can express n as the following: n = 3^2 + 1^2 = 10.
  // It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.
  it('example 1', () => {
    const n = 10;
    const x = 2;

    const result = numberOfWays(n, x);

    expect(result).toBe(1);
  });

  // Explanation: We can express n in the following ways:
  // - n = 4^1 = 4.
  // - n = 3^1 + 1^1 = 4.
  it('example 2', () => {
    const n = 4;
    const x = 1;

    const result = numberOfWays(n, x);

    expect(result).toBe(2);
  });
});
