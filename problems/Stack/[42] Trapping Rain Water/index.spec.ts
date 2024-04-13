import { describe, expect, it } from 'vitest';
import { trap } from '.';

describe.skip('trap', () => {
  it('should return 6 for height = [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

    const result = trap(height);

    expect(result).toBe(6);
  });

  it('should return 9 for height = [4,2,0,3,2,5]', () => {
    const height = [4, 2, 0, 3, 2, 5];

    const result = trap(height);

    expect(result).toBe(9);
  });
});
