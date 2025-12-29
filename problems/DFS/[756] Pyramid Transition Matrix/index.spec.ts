import { describe, expect, it } from 'vitest';
import { pyramidTransition } from '.';

describe('pyramidTransition', () => {
  it('example 1', () => {
    const bottom = 'BCD';
    const allowed = ['BCC', 'CDE', 'CEA', 'FFF'];
    const result = pyramidTransition(bottom, allowed);
    expect(result).toBe(true);
  });

  it('example 2', () => {
    const bottom = 'AAAA';
    const allowed = ['AAB', 'AAC', 'BCD', 'BBE', 'DEF'];
    const result = pyramidTransition(bottom, allowed);
    expect(result).toBe(false);
  });
});
