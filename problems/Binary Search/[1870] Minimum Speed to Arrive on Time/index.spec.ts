import { describe, expect, it } from 'vitest';
import { minSpeedOnTime } from '.';

describe('minSpeedOnTime', () => {
  it('should return minimum speed 1 to arrive in 6 hours', () => {
    const dist = [1, 3, 2];
    const hour = 6;
    const expected = 1;

    const result = minSpeedOnTime(dist, hour);

    expect(result).toBe(expected);
  });

  it('should return minimum speed 3 to arrive in 2.7 hours', () => {
    const dist = [1, 3, 2];
    const hour = 2.7;
    const expected = 3;

    const result = minSpeedOnTime(dist, hour);

    expect(result).toBe(expected);
  });

  it('should return minimum speed 1e7 to arrive in 2.01 hours', () => {
    const dist = [1, 3, 2];
    const hour = 1.9;
    const expected = -1;

    const result = minSpeedOnTime(dist, hour);

    expect(result).toBe(expected);
  });

  // 注意這個測資，如果 maxSpeed 取 dist 中的最大值會過不了
  it('should return 1e7 as it is impossible to arrive in 1.9 hours', () => {
    const dist = [1, 1, 100000];
    const hour = 2.01;
    const expected = 1e7;

    const result = minSpeedOnTime(dist, hour);

    expect(result).toBe(expected);
  });
});
