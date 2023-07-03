import { describe, it, expect } from 'vitest';
import { buddyStrings } from '.';

/**
 * @link https://leetcode.com/problems/buddy-strings/
 */

describe('buddyStrings', () => {
  it('returns true when s and goal can be made identical by swapping two characters in s', () => {
    const s = 'ab';
    const goal = 'ba';
    expect(buddyStrings(s, goal)).toBe(true);
  });

  it('returns false when s and goal are identical', () => {
    const s = 'ab';
    const goal = 'ab';
    expect(buddyStrings(s, goal)).toBe(false);
  });

  it('returns true when s has duplicate characters and is identical to goal', () => {
    const s = 'aa';
    const goal = 'aa';
    expect(buddyStrings(s, goal)).toBe(true);
  });

  it('returns true when s and goal can be made identical by swapping two characters at different positions in s', () => {
    const s = 'abcd';
    const goal = 'cbad';
    expect(buddyStrings(s, goal)).toBe(true);
  });

  it('returns false when s and goal cannot be made identical by swapping two characters in s', () => {
    const s = 'abcd';
    const goal = 'badc';
    expect(buddyStrings(s, goal)).toBe(false);
  });

  it('returns true when s and goal are identical and s contains duplicate characters', () => {
    const s = 'abab';
    const goal = 'abab';
    expect(buddyStrings(s, goal)).toBe(true);
  });

  it('returns false when s and goal have distinct characters', () => {
    const s = 'abcaa';
    const goal = 'abcbb';
    expect(buddyStrings(s, goal)).toBe(false);
  });

  it('returns false when the order of characters in s and goal is different', () => {
    const s = 'abc';
    const goal = 'bca';
    expect(buddyStrings(s, goal)).toBe(false);
  });

  it('returns false when the length of s and goal is not identical', () => {
    const s = 'abcd';
    const goal = 'abcde';
    expect(buddyStrings(s, goal)).toBe(false);
  });
});
