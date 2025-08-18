import { describe, expect, it } from 'vitest';
import { new21Game } from '.';

describe('new21Game', () => {
  it('example 1', () => {
    const n = 10;
    const k = 1;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(1.0, 5);
  });
  it('example 2', () => {
    const n = 6;
    const k = 1;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(0.6, 5);
  });
  it('example 3', () => {
    const n = 21;
    const k = 17;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(0.73278, 5);
  });
  it('example 4', () => {
    const n = 5017;
    const k = 4725;
    const maxPts = 1863;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(0.29066, 5);
  });
});
