import { describe, expect, it } from 'vitest';
import { maxLength } from '.';

describe.skip('maxLength', () => {
  it('should return 4 for arr = ["un", "iq", "ue"]', () => {
    const arr = ['un', 'iq', 'ue'];

    const result = maxLength(arr);

    expect(result).toBe(4);
  });

  it('should return 6 for arr = ["cha", "r", "act", "ers"]', () => {
    const arr = ['cha', 'r', 'act', 'ers'];

    const result = maxLength(arr);

    expect(result).toBe(6);
  });

  it('should return 26 for arr = ["abcdefghijklmnopqrstuvwxyz"]', () => {
    const arr = ['abcdefghijklmnopqrstuvwxyz'];

    const result = maxLength(arr);

    expect(result).toBe(26);
  });
});
