import { describe, expect, it } from 'vitest';
import { minChanges } from '.';

describe.skip('minChanges', () => {
  it('should return 2 when s = "1001"', () => {
    const s = '1001';

    const result = minChanges(s);

    expect(result).toBe(2);
  });

  it('should return 1 when s = "10"', () => {
    const s = '10';

    const result = minChanges(s);

    expect(result).toBe(1);
  });

  it('should return 0 when s = "0000"', () => {
    const s = '0000';

    const result = minChanges(s);

    expect(result).toBe(0);
  });
});
