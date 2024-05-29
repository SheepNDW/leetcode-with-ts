import { describe, expect, it } from 'vitest';
import { numSteps } from '.';

describe.skip('numSteps', () => {
  it('should return 6 for s = "1101"', () => {
    const s = '1101';

    const result = numSteps(s);

    expect(result).toBe(6);
  });

  it('should return 1 for s = "10"', () => {
    const s = '10';

    const result = numSteps(s);

    expect(result).toBe(1);
  });

  it('should return 0 for s = "1"', () => {
    const s = '1';

    const result = numSteps(s);

    expect(result).toBe(0);
  });

  it('should return 85', () => {
    const s = '1111011110000011100000110001011011110010111001010111110001';

    const result = numSteps(s);

    expect(result).toBe(85);
  });
});
