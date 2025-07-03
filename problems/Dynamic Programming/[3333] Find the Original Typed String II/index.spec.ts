import { describe, expect, it } from 'vitest';
import { possibleStringCount } from '.';

describe('possibleStringCount', () => {
  it('example 1', () => {
    const word = 'aabbccdd';
    const k = 7;
    const result = possibleStringCount(word, k);
    expect(result).toBe(5);
  });

  it('example 2', () => {
    const word = 'aabbccdd';
    const k = 8;
    const result = possibleStringCount(word, k);
    expect(result).toBe(1);
  });

  it('example 3', () => {
    const word = 'aaabbb';
    const k = 3;
    const result = possibleStringCount(word, k);
    expect(result).toBe(8);
  });
});
