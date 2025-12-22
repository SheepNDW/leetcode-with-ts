import { describe, expect, it } from 'vitest';
import { minDeletionSize } from '.';

describe('minDeletionSize', () => {
  it('example 1', () => {
    const strs = ['babca', 'bbazb'];
    const result = minDeletionSize(strs);
    expect(result).toBe(3);
  });

  it('example 2', () => {
    const strs = ['edcba'];
    const result = minDeletionSize(strs);
    expect(result).toBe(4);
  });

  it('example 3', () => {
    const strs = ['ghi', 'def', 'abc'];
    const result = minDeletionSize(strs);
    expect(result).toBe(0);
  });
});
