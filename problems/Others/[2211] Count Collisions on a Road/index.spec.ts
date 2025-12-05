import { describe, expect, it } from 'vitest';
import { countCollisions } from '.';

describe('countCollisions', () => {
  it('example 1', () => {
    const directions = 'RLRSLL';
    const result = countCollisions(directions);
    expect(result).toBe(5);
  });

  it('example 2', () => {
    const directions = 'LLRR';
    const result = countCollisions(directions);
    expect(result).toBe(0);
  });
});
