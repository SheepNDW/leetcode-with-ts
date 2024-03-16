import { describe, expect, it } from 'vitest';
import { pivotInteger } from '.';

describe.skip('pivotInteger', () => {
  it('should return 6 for n = 8', () => {
    const n = 8;

    const result = pivotInteger(n);

    expect(result).toBe(6);
  });

  it('should return 1 for n = 1', () => {
    const n = 1;

    const result = pivotInteger(n);

    expect(result).toBe(1);
  });

  it('should return -1 for n = 4', () => {
    const n = 4;

    const result = pivotInteger(n);

    expect(result).toBe(-1);
  });

  it('should return -1 for n = 15', () => {
    const n = 15;

    const result = pivotInteger(n);

    expect(result).toBe(-1);
  });
});
