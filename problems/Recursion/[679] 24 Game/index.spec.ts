import { describe, expect, it } from 'vitest';
import { judgePoint24 } from '.';

describe('judgePoint24', () => {
  it('example 1', () => {
    const cards = [4, 1, 8, 7];
    const result = judgePoint24(cards);
    expect(result).toBe(true);
  });

  it('example 2', () => {
    const cards = [1, 2, 1, 2];
    const result = judgePoint24(cards);
    expect(result).toBe(false);
  });

  it('example 3', () => {
    const cards = [3, 3, 8, 8];
    const result = judgePoint24(cards);
    expect(result).toBe(true);
  });
});
