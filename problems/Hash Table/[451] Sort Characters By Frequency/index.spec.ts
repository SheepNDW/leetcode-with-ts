import { describe, expect, it } from 'vitest';
import { frequencySort } from '.';

describe.skip('frequencySort', () => {
  it('should sort the string "tree" by the frequency of the characters in descending order', () => {
    const input = 'tree';

    const result = frequencySort(input);

    expect(result).toMatch(/e{2}t{1}r{1}|e{2}r{1}t{1}/);
  });

  it('should sort the string "cccaaa" by the frequency of the characters in descending order', () => {
    const input = 'cccaaa';

    const result = frequencySort(input);

    expect(result).toMatch(/c{3}a{3}|a{3}c{3}/);
  });

  it('should sort the string "Aabb" by the frequency of the characters in descending order', () => {
    const input = 'Aabb';

    const result = frequencySort(input);

    expect(result).toMatch(/b{2}A{1}a{1}|b{2}a{1}A{1}/);
  });
});
