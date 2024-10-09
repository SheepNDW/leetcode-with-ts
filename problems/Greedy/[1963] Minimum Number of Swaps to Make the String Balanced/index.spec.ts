import { describe, expect, it } from 'vitest';
import { minSwaps } from '.';

describe.skip('minSwaps', () => {
  it('should return 1 for "][]["', () => {
    const s = '][][';

    const result = minSwaps(s);

    expect(result).toBe(1);
  });

  it('should return 2 for "]]][[["', () => {
    const s = ']]][[[';

    const result = minSwaps(s);

    expect(result).toBe(2);
  });

  it('should return 0 for "[]"', () => {
    const s = '[]';

    const result = minSwaps(s);

    expect(result).toBe(0);
  });
});
