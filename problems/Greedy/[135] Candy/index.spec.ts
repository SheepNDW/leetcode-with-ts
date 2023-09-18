import { describe, expect, it } from 'vitest';
import { candy } from '.';

describe('candy', () => {
  it('should return the minimum number of candies', () => {
    const ratings1 = [1, 0, 2];
    const ratings2 = [1, 2, 2];
    const ratings3 = [1, 2, 2, 0];

    const result1 = candy(ratings1);
    const result2 = candy(ratings2);
    const result3 = candy(ratings3);

    expect(result1).toBe(5);
    expect(result2).toBe(4);
    expect(result3).toBe(6);
  });
});
