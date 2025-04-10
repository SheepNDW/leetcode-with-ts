import { describe, expect, it } from 'vitest';
import { numberOfPowerfulInt } from '.';

describe('numberOfPowerfulInt', () => {
  it('example 1', () => {
    const start = 1;
    const finish = 6000;
    const limit = 4;
    const s = '124';

    const result = numberOfPowerfulInt(start, finish, limit, s);

    expect(result).toEqual(5);
  });

  it('example 2', () => {
    const start = 15;
    const finish = 215;
    const limit = 6;
    const s = '10';

    const result = numberOfPowerfulInt(start, finish, limit, s);

    expect(result).toEqual(2);
  });

  it('example 3', () => {
    const start = 1000;
    const finish = 2000;
    const limit = 4;
    const s = '3000';

    const result = numberOfPowerfulInt(start, finish, limit, s);

    expect(result).toEqual(0);
  });
});
