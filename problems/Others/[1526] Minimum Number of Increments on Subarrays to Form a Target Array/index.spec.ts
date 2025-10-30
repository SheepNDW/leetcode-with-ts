import { describe, expect, it } from 'vitest';
import { minNumberOperations } from '.';

describe('minNumberOperations', () => {
  it('example 1', () => {
    const target = [1, 2, 3, 2, 1];
    const result = minNumberOperations(target);
    expect(result).toEqual(3);
  });

  it('example 2', () => {
    const target = [3, 1, 1, 2];
    const result = minNumberOperations(target);
    expect(result).toEqual(4);
  });

  it('example 3', () => {
    const target = [3, 1, 5, 4, 2];
    const result = minNumberOperations(target);
    expect(result).toEqual(7);
  });
});
