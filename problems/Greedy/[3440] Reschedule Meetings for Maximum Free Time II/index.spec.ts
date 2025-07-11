import { describe, expect, it } from 'vitest';
import { maxFreeTime } from '.';

describe('maxFreeTime', () => {
  it('example 1', () => {
    const eventTime = 5;
    const startTime = [1, 3];
    const endTime = [2, 5];

    const result = maxFreeTime(eventTime, startTime, endTime);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const eventTime = 10;
    const startTime = [0, 7, 9];
    const endTime = [1, 8, 10];

    const result = maxFreeTime(eventTime, startTime, endTime);

    expect(result).toBe(7);
  });

  it('example 3', () => {
    const eventTime = 10;
    const startTime = [0, 3, 7, 9];
    const endTime = [1, 4, 8, 10];

    const result = maxFreeTime(eventTime, startTime, endTime);

    expect(result).toBe(6);
  });

  it('example 4', () => {
    const eventTime = 5;
    const startTime = [0, 1, 2, 3, 4];
    const endTime = [1, 2, 3, 4, 5];

    const result = maxFreeTime(eventTime, startTime, endTime);

    expect(result).toBe(0);
  });
});
