import { describe, expect, it } from 'vitest';
import { knightDialer } from '.';

describe.skip('knightDialer', () => {
  it('should return 10 when n = 1', () => {
    const n = 1;

    const result = knightDialer(n);

    expect(result).toBe(10);
  });

  it('should return 20 when n = 2', () => {
    const n = 2;

    const result = knightDialer(n);

    expect(result).toBe(20);
  });

  it('should return 136006598 when n = 3131', () => {
    const n = 3131;

    const result = knightDialer(n);

    expect(result).toBe(136006598);
  });
});
