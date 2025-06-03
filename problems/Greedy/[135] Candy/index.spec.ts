import { describe, expect, it } from 'vitest';
import { candy } from '.';

describe.skip('candy', () => {
  it('example 1', () => {
    const ratings = [1, 0, 2];
    const result = candy(ratings);
    expect(result).toBe(5);
  });

  it('example 2', () => {
    const ratings = [1, 2, 2];
    const result = candy(ratings);
    expect(result).toBe(4);
  });

  it('example 3', () => {
    const ratings = [1, 2, 2, 0];
    const result = candy(ratings);
    expect(result).toBe(6);
  });

  it('example 4', () => {
    const ratings = [0, 100, 100, 100, 0];
    const result = candy(ratings);
    expect(result).toBe(7);
  });

  it('example 5', () => {
    const ratings = [1, 2, 2, 0, 3, 2, 3];
    const result = candy(ratings);
    expect(result).toBe(11);
  });
});
