import { describe, expect, it } from 'vitest';
import { maxFreeTime } from '.';

describe('maxFreeTime', () => {
  it('example 1', () => {
    const eventTime = 5;
    const k = 1;
    const startTime = [1, 3];
    const endTime = [2, 5];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toBe(2);
  });

  it('example 2', () => {
    const eventTime = 10;
    const k = 1;
    const startTime = [0, 2, 9];
    const endTime = [1, 4, 10];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toBe(6);
  });

  it('example 3', () => {
    const eventTime = 5;
    const k = 2;
    const startTime = [0, 1, 2, 3, 4];
    const endTime = [1, 2, 3, 4, 5];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toBe(0);
  });

  it('example 4', () => {
    const eventTime = 21;
    const k = 1;
    const startTime = [7, 10, 16];
    const endTime = [10, 14, 18];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toBe(7);
  });
});
