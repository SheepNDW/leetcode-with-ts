import { describe, expect, it } from 'vitest';
import { minimizedMaximum } from '.';

describe.skip('minimizedMaximum', () => {
  it('should return 3 when n = 6 and quantities = [11,6]', () => {
    const n = 6;
    const quantities = [11, 6];

    const result = minimizedMaximum(n, quantities);

    expect(result).toBe(3);
  });

  it('should return 5 when n = 7 and quantities = [15,10,10]', () => {
    const n = 7;
    const quantities = [15, 10, 10];

    const result = minimizedMaximum(n, quantities);

    expect(result).toBe(5);
  });

  it('should return 100000 when n = 1 and quantities = [100000]', () => {
    const n = 1;
    const quantities = [100000];

    const result = minimizedMaximum(n, quantities);

    expect(result).toBe(100000);
  });
});
