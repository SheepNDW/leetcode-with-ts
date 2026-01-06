import { describe, expect, it } from 'vitest';
import { findCircleNum } from '.';

describe('findCircleNum', () => {
  it('example 1', () => {
    const isConnected = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    const result = findCircleNum(isConnected);
    expect(result).toBe(2);
  });

  it('example 2', () => {
    const isConnected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const result = findCircleNum(isConnected);
    expect(result).toBe(3);
  });

  it('example 3', () => {
    const isConnected = [
      [1, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 1],
    ];
    const result = findCircleNum(isConnected);
    expect(result).toBe(1);
  });
});
