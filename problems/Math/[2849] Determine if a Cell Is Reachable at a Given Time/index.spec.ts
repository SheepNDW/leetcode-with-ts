import { describe, expect, it } from 'vitest';
import { isReachableAtTime } from '.';

describe.skip('isReachableAtTime', () => {
  it('should return true when the cell is reachable at the given time', () => {
    const sx = 2,
      sy = 4,
      fx = 7,
      fy = 7,
      t = 6;
    const expected = true;

    const result = isReachableAtTime(sx, sy, fx, fy, t);

    expect(result).toEqual(expected);
  });

  it('should return false when the cell is not reachable at the given time', () => {
    const sx = 3,
      sy = 1,
      fx = 7,
      fy = 3,
      t = 3;
    const expected = false;

    const result = isReachableAtTime(sx, sy, fx, fy, t);

    expect(result).toEqual(expected);
  });

  it('sx = 1, sy = 1, fx = 1, fy = 2, t = 0 should return false', () => {
    const sx = 1,
      sy = 1,
      fx = 1,
      fy = 2,
      t = 0;
    const expected = false;

    const result = isReachableAtTime(sx, sy, fx, fy, t);

    expect(result).toEqual(expected);
  });

  it('sx = 1, sy = 1, fx = 2, fy = 2, t = 1 should return true', () => {
    const sx = 1,
      sy = 1,
      fx = 2,
      fy = 2,
      t = 1;
    const expected = true;

    const result = isReachableAtTime(sx, sy, fx, fy, t);

    expect(result).toEqual(expected);
  });
});
