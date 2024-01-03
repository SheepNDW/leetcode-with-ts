import { describe, expect, it } from 'vitest';
import { numberOfBeams } from '.';

describe.skip('numberOfBeams', () => {
  it('should return 8 for bank = ["011001","000000","010100","001000"]', () => {
    const bank = ['011001', '000000', '010100', '001000'];
    const result = numberOfBeams(bank);
    expect(result).toBe(8);
  });

  it('should return 0 for bank = ["000","111","000"]', () => {
    const bank = ['000', '111', '000'];
    const result = numberOfBeams(bank);
    expect(result).toBe(0);
  });
});
