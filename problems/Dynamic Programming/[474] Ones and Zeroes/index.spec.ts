import { describe, expect, it } from 'vitest';
import { findMaxForm } from '.';

describe('findMaxForm', () => {
  it('example 1', () => {
    const strs = ['10', '0001', '111001', '1', '0'];
    const m = 5;
    const n = 3;

    const result = findMaxForm(strs, m, n);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const strs = ['10', '0', '1'];
    const m = 1;
    const n = 1;

    const result = findMaxForm(strs, m, n);

    expect(result).toBe(2);
  });
});
