import { describe, expect, it } from 'vitest';
import { avoidFlood } from '.';

describe('avoidFlood', () => {
  it('example 1', () => {
    const rains = [1, 2, 3, 4];
    const result = avoidFlood(rains);
    expect(result).toEqual([-1, -1, -1, -1]);
  });

  it('example 2', () => {
    const rains = [1, 2, 0, 0, 2, 1];
    const result = avoidFlood(rains);
    expect(result).toEqual([-1, -1, 2, 1, -1, -1]);
  });

  it('example 3', () => {
    const rains = [1, 2, 0, 1, 2];
    const result = avoidFlood(rains);
    expect(result).toEqual([]);
  });

  it('example 4', () => {
    const rains = [69, 0, 0, 0, 69];
    const result = avoidFlood(rains);
    expect(result).toEqual([-1, 69, 1, 1, -1]);
  });
});
