import { describe, expect, it } from 'vitest';
import { dailyTemperatures } from '.';

describe.skip('dailyTemperatures', () => {
  it('should return [1,1,4,2,1,1,0,0] for temperatures = [73,74,75,71,69,72,76,73]', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it('should return [1,1,1,0] for temperatures = [30,40,50,60]', () => {
    const temperatures = [30, 40, 50, 60];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it('should return [1,1,0] for temperatures = [30,60,90]', () => {
    const temperatures = [30, 60, 90];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 1, 0]);
  });

  it('should return [1,2,1,0] for temperatures = [30,40,30,70]', () => {
    const temperatures = [30, 40, 30, 70];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 2, 1, 0]);
  });

  it.skip('TLE', () => {
    const temperatures = Array(100000).fill(99);
    temperatures[temperatures.length - 1] = 100;

    const result = dailyTemperatures(temperatures);

    const expected = Array(100000)
      .fill(0)
      .map((_, idx) => 99999 - idx);

    expect(result).toEqual(expected);
  });
});
