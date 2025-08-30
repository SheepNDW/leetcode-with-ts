import { describe, expect, it } from 'vitest';
import { flowerGame } from '.';

describe('flowerGame', () => {
  it('example 1', () => {
    const n = 3;
    const m = 2;
    const result = flowerGame(n, m);
    expect(result).toBe(3);
  });

  it('example 2', () => {
    const n = 1;
    const m = 1;
    const result = flowerGame(n, m);
    expect(result).toBe(0);
  });
});
