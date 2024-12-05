import { describe, expect, it } from 'vitest';
import { canChange } from '.';

describe.skip('canChange', () => {
  it('should return true for start = "_L__R__R_", target = "L______RR"', () => {
    const start = '_L__R__R_';
    const target = 'L______RR';

    const result = canChange(start, target);

    expect(result).toBe(true);
  });

  it('should return false for start = "R_L_", target = "__LR"', () => {
    const start = 'R_L_';
    const target = '__LR';

    const result = canChange(start, target);

    expect(result).toBe(false);
  });

  it('should return false for start = "_R", target = "R_"', () => {
    const start = '_R';
    const target = 'R_';

    const result = canChange(start, target);

    expect(result).toBe(false);
  });

  it('should return false for start = "_L", target = "LL"', () => {
    const start = '_L';
    const target = 'LL';

    const result = canChange(start, target);

    expect(result).toBe(false);
  });

  it('should return false for start = "____", target = "R_L_"', () => {
    const start = '___';
    const target = 'R_L_';

    const result = canChange(start, target);

    expect(result).toBe(false);
  });
});
