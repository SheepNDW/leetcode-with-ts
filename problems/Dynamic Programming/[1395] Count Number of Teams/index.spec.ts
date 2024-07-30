import { describe, expect, it } from 'vitest';
import { numTeams } from '.';

describe.skip('numTeams', () => {
  it('should return 3 for rating = [2,5,3,4,1]', () => {
    const rating = [2, 5, 3, 4, 1];

    const result = numTeams(rating);

    expect(result).toBe(3);
  });

  it('should return 0 for rating = [2,1,3]', () => {
    const rating = [2, 1, 3];

    const result = numTeams(rating);

    expect(result).toBe(0);
  });

  it('should return 4 for rating = [1,2,3,4]', () => {
    const rating = [1, 2, 3, 4];

    const result = numTeams(rating);

    expect(result).toBe(4);
  });
});
