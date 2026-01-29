import { describe, expect, it } from 'vitest';
import { minimumCost } from '.';

describe('minimumCost', () => {
  it('example 1', () => {
    const source = 'abcd';
    const target = 'acbe';
    const original = ['a', 'b', 'c', 'c', 'e', 'd'];
    const changed = ['b', 'c', 'b', 'e', 'b', 'e'];
    const cost = [2, 5, 5, 1, 2, 20];

    const result = minimumCost(source, target, original, changed, cost);

    expect(result).toBe(28);
  });

  it('example 2', () => {
    const source = 'aaaa';
    const target = 'bbbb';
    const original = ['a', 'c'];
    const changed = ['c', 'b'];
    const cost = [1, 2];

    const result = minimumCost(source, target, original, changed, cost);

    expect(result).toBe(12);
  });

  it('example 3', () => {
    const source = 'abcd';
    const target = 'abce';
    const original = ['a'];
    const changed = ['e'];
    const cost = [10000];

    const result = minimumCost(source, target, original, changed, cost);

    expect(result).toBe(-1);
  });
});
