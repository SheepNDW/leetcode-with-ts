import { describe, expect, it } from 'vitest';
import { maxPower } from '.';

describe('maxPower', () => {
  it('example 1', () => {
    const stations = [1, 2, 4, 5, 0];
    const r = 1;
    const k = 2;

    const result = maxPower(stations, r, k);

    expect(result).toEqual(5);
  });

  it('example 2', () => {
    const stations = [4, 4, 4, 4];
    const r = 0;
    const k = 3;

    const result = maxPower(stations, r, k);

    expect(result).toEqual(4);
  });
});
