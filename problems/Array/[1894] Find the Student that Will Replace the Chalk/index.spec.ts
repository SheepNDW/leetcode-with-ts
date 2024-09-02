import { describe, expect, it } from 'vitest';
import { chalkReplacer } from '.';

describe.skip('chalkReplacer', () => {
  it('should return 0 for chalk = [5, 1, 5], k = 22', () => {
    const chalk = [5, 1, 5];
    const k = 22;

    const result = chalkReplacer(chalk, k);

    expect(result).toBe(0);
  });

  it('should return 1 for chalk = [3, 4, 1, 2], k = 25', () => {
    const chalk = [3, 4, 1, 2];
    const k = 25;

    const result = chalkReplacer(chalk, k);

    expect(result).toBe(1);
  });
});
