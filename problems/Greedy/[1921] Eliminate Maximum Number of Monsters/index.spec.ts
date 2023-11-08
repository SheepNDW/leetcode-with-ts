import { describe, expect, it } from 'vitest';
import { eliminateMaximum } from '.';

describe.skip('eliminateMaximum', () => {
  it('should eliminate all monsters when possible', () => {
    const dist = [1, 3, 4];
    const speed = [1, 1, 1];
    const expected = 3;
    expect(eliminateMaximum(dist, speed)).toBe(expected);
  });

  it('should eliminate only one monster when the second reaches the city at the same time', () => {
    const dist = [1, 1, 2, 3];
    const speed = [1, 1, 1, 1];
    const expected = 1;
    expect(eliminateMaximum(dist, speed)).toBe(expected);
  });

  it('should eliminate only one monster when monsters have different speeds', () => {
    const dist = [3, 2, 4];
    const speed = [5, 3, 2];
    const expected = 1;
    expect(eliminateMaximum(dist, speed)).toBe(expected);
  });

  // 界限情況測試：n 的最小值
  it('should handle the smallest number of monsters', () => {
    const dist = [5];
    const speed = [10];
    const expected = 1;
    expect(eliminateMaximum(dist, speed)).toBe(expected);
  });

  // 進階情況測試：混合速度和距離
  it('should handle a mix of different distances and speeds', () => {
    const dist = [1, 2, 3, 4, 5];
    const speed = [5, 4, 3, 2, 1];
    const expected = 1;
    expect(eliminateMaximum(dist, speed)).toBe(expected);
  });
});
