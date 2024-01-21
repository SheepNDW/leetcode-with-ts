import { describe, expect, it } from 'vitest';
import { sumSubarrayMins } from '.';

describe.skip('sumSubarrayMins', () => {
  it('should return 17 when arr = [3,1,2,4]', () => {
    const arr = [3, 1, 2, 4];
    const result = sumSubarrayMins(arr);
    expect(result).toBe(17);
  });

  it('should return 444 when arr = [11,81,94,43,3]', () => {
    const arr = [11, 81, 94, 43, 3];
    const result = sumSubarrayMins(arr);
    expect(result).toBe(444);
  });
});
