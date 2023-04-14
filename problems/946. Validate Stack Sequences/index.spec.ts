import { describe, expect, it } from 'vitest';
import { validateStackSequences } from '.';

describe('validateStackSequences', () => {
  it('example 1', () => {
    const pushed = [1, 2, 3, 4, 5];
    const popped = [4, 5, 3, 2, 1];

    const result = validateStackSequences(pushed, popped);

    expect(result).toBeTruthy();
  });

  it('example 2', () => {
    const pushed = [1, 2, 3, 4, 5];
    const popped = [4, 3, 5, 1, 2];

    const result = validateStackSequences(pushed, popped);

    expect(result).toBeFalsy();
  });

  it('example 3', () => {
    const pushed = [0, 2, 1];
    const popped = [0, 1, 2];

    const result = validateStackSequences(pushed, popped);

    expect(result).toBeTruthy();
  });

  it('example 4', () => {
    const pushed = [1, 0, 2];
    const popped = [2, 1, 0];

    const result = validateStackSequences(pushed, popped);

    expect(result).toBeFalsy();
  });
});
