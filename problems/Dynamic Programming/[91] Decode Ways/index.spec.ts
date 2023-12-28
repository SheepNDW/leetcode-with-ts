import { describe, expect, it } from 'vitest';
import { numDecodings } from '.';

describe.skip('numDecodings', () => {
  it('should return 2 for s = "12"', () => {
    const s = '12';

    const result = numDecodings(s);

    expect(result).toBe(2);
  });

  it('should return 3 for s = "226"', () => {
    const s = '226';

    const result = numDecodings(s);

    expect(result).toBe(3);
  });

  it('should return 0 for s = "06"', () => {
    const s = '06';

    const result = numDecodings(s);

    expect(result).toBe(0);
  });

  it('should return 1 for s = "10"', () => {
    const s = '10';

    const result = numDecodings(s);

    expect(result).toBe(1);
  });
});
