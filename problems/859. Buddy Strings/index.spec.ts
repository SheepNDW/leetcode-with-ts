import { describe, it, expect } from 'vitest';
import { buddyStrings } from '.';

describe('buddyStrings()', () => {
  it('should return true when s can be transformed to goal by swapping two characters', () => {
    const s = 'ab';
    const goal = 'ba';

    expect(buddyStrings(s, goal)).toBeTruthy();
  });

  it('should return false when s and goal are equal', () => {
    const s = 'ab';
    const goal = 'ab';

    expect(buddyStrings(s, goal)).toBeFalsy();
  });

  it('should return true when s has duplicates and s is equal to goal', () => {
    const s = 'aa';
    const goal = 'aa';

    expect(buddyStrings(s, goal)).toBeTruthy();
  });

  it('should return true when s can be transformed to goal by swapping two characters in different positions', () => {
    const s = 'abcd';
    const goal = 'cbad';

    expect(buddyStrings(s, goal)).toBeTruthy();
  });

  it('should return false when s cannot be transformed to goal by swapping two characters', () => {
    const s = 'abcd';
    const goal = 'badc';

    expect(buddyStrings(s, goal)).toBeFalsy();
  });

  it('should return true when s and goal are the same and have duplicates', () => {
    const s = 'abab';
    const goal = 'abab';

    expect(buddyStrings(s, goal)).toBeTruthy();
  });

  it('should return false when s and goal have different characters', () => {
    const s = 'abcaa';
    const goal = 'abcbb';

    expect(buddyStrings(s, goal)).toBeFalsy();
  });
});

/**
 * @link https://leetcode.com/problems/buddy-strings/
 */
