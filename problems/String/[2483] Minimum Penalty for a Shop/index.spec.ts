import { describe, expect, it } from 'vitest';
import { bestClosingTime } from '.';

describe('bestClosingTime', () => {
  it('should return the earliest closing time with minimum penalty for YYNY', () => {
    const customers = 'YYNY';

    const result = bestClosingTime(customers);

    expect(result).toBe(2);
  });

  it('should return 0 for all Ns', () => {
    const customers = 'NNNNN';

    const result = bestClosingTime(customers);

    expect(result).toBe(0);
  });

  it('should return 4 for all Ys', () => {
    const customers = 'YYYY';

    const result = bestClosingTime(customers);

    expect(result).toBe(4);
  });

  it('should handle edge cases', () => {
    const customers = 'N';

    const result = bestClosingTime(customers);

    expect(result).toBe(0);
  });
});
