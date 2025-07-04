import { describe, expect, it } from 'vitest';
import { kthCharacter } from '.';

describe('kthCharacter', () => {
  it('example 1', () => {
    const k = 5;
    const operations = [0, 0, 0];
    const result = kthCharacter(k, operations);
    expect(result).toBe('a');
  });

  it('example 2', () => {
    const k = 10;
    const operations = [0, 1, 0, 1];
    const result = kthCharacter(k, operations);
    expect(result).toBe('b');
  });

  it('example 3', () => {
    const k = 3;
    const operations = [1, 0];
    const result = kthCharacter(k, operations);
    expect(result).toBe('a');
  });
});
