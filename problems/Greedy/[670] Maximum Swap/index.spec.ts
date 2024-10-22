import { describe, expect, it } from 'vitest';
import { maximumSwap } from '.';

describe.skip('maximumSwap', () => {
  it('should return 7236 for num = 2736', () => {
    const num = 2736;

    const result = maximumSwap(num);

    expect(result).toBe(7236);
  });

  it('should return 9973 for num = 9973', () => {
    const num = 9973;

    const result = maximumSwap(num);

    expect(result).toBe(9973);
  });

  it('should return 9913 for num = 1993', () => {
    const num = 1993;

    const result = maximumSwap(num);

    expect(result).toBe(9913);
  });
});
