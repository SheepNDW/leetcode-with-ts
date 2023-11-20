import { describe, expect, it } from 'vitest';
import { garbageCollection } from '.';

describe.skip('garbageCollection', () => {
  it('should return 21 when garbage = ["G","P","GP","GG"], travel = [2,4,3]', () => {
    const garbage = ['G', 'P', 'GP', 'GG'];
    const travel = [2, 4, 3];

    const result = garbageCollection(garbage, travel);

    expect(result).toBe(21);
  });

  it('should return 37 when garbage = ["MMM","PGM","GP"], travel = [3,10]', () => {
    const garbage = ['MMM', 'PGM', 'GP'];
    const travel = [3, 10];

    const result = garbageCollection(garbage, travel);

    expect(result).toBe(37);
  });
});
