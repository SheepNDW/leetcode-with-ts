import { describe, expect, it } from 'vitest';
import { largestOddNumber } from '.';

describe.skip('largestOddNumber', () => {
  it('should return "5" when num = "52"', () => {
    const num = '52';

    const result = largestOddNumber(num);

    expect(result).toBe('5');
  });

  it('should return "" when num = "4206"', () => {
    const num = '4206';

    const result = largestOddNumber(num);

    expect(result).toBe('');
  });

  it('should return "35427" when num = "35427"', () => {
    const num = '35427';

    const result = largestOddNumber(num);

    expect(result).toBe('35427');
  });
});
