import { describe, expect, it } from 'vitest';
import { maxDistance } from '.';

describe.skip('maxDistance', () => {
  it('should return 3 for position = [1,2,3,4,7], m = 3', () => {
    const position = [1, 2, 3, 4, 7];
    const m = 3;

    const result = maxDistance(position, m);

    expect(result).toBe(3);
  });

  it('should return 999999999 for position = [5,4,3,2,1,1000000000], m = 2', () => {
    const position = [5, 4, 3, 2, 1, 1000000000];
    const m = 2;

    const result = maxDistance(position, m);

    expect(result).toBe(999999999);
  });
});
