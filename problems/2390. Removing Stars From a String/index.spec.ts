import { describe, expect, it } from 'vitest';
import { removeStars } from '.';

describe('removeStars', () => {
  it('example 1', () => {
    const s = 'leet**cod*e';
    const expected = 'lecoe';
    const result = removeStars(s);
    expect(result).toBe(expected);
  });

  it('example 2', () => {
    const s = 'erase*****';
    const expected = '';
    const result = removeStars(s);
    expect(result).toBe(expected);
  });

  it('all stars', () => {
    const s = '*****';
    const expected = '';
    const result = removeStars(s);
    expect(result).toBe(expected);
  });

  it('no stars', () => {
    const s = 'abcdefg';
    const expected = 'abcdefg';
    const result = removeStars(s);
    expect(result).toBe(expected);
  });
});

/**
 * @link https://leetcode.com/problems/removing-stars-from-a-string/submissions/931642400/
 */
