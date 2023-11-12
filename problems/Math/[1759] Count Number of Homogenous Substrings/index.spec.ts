import { describe, expect, it } from 'vitest';
import { countHomogenous } from '.';

describe.skip('countHomogenous', () => {
  it('should return 13 for "abbcccaa"', () => {
    const input = 'abbcccaa';
    const expected = 13;
    const result = countHomogenous(input);
    expect(result).toEqual(expected);
  });

  it('should return 2 for "xy"', () => {
    const input = 'xy';
    const expected = 2;
    const result = countHomogenous(input);
    expect(result).toEqual(expected);
  });

  it('should return 15 for "zzzzz"', () => {
    const input = 'zzzzz';
    const expected = 15;
    const result = countHomogenous(input);
    expect(result).toEqual(expected);
  });
});
