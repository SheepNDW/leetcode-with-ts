import { describe, expect, it } from 'vitest';
import { soupServings } from '.';

describe('soupServings', () => {
  it('example 1', () => {
    const n = 50;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.625, 5);
  });

  it('example 2', () => {
    const n = 100;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.71875, 5);
  });

  it('example 3', () => {
    const n = 850;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.96612, 5);
  });

  it('example 4', () => {
    const n = 4800;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.99999, 5);
  });

  it('example 5', () => {
    const n = 660295675;
    const result = soupServings(n);
    expect(result).toBeCloseTo(1, 5);
  });
});
