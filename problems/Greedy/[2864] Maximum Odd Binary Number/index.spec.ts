import { describe, expect, it } from 'vitest';
import { maximumOddBinaryNumber } from '.';

describe.skip('maximumOddBinaryNumber', () => {
  it('should return "001" for s = "010"', () => {
    const s = '010';

    const result = maximumOddBinaryNumber(s);

    expect(result).toBe('001');
  });

  it('should return "1001" for s = "0101"', () => {
    const s = '0101';

    const result = maximumOddBinaryNumber(s);

    expect(result).toBe('1001');
  });
});
