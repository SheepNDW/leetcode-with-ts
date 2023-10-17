import { describe, expect, it } from 'vitest';
import { getRow } from '.';

describe('getRow', () => {
  it('should return [1, 3, 3, 1] when rowIndex is 3', () => {
    const rowIndex = 3;

    const result = getRow(rowIndex);

    expect(result).toEqual([1, 3, 3, 1]);
  });

  it('should return [1] when rowIndex is 0', () => {
    const rowIndex = 0;

    const result = getRow(rowIndex);

    expect(result).toEqual([1]);
  });

  it('should return [1, 1] when rowIndex is 1', () => {
    const rowIndex = 1;

    const result = getRow(rowIndex);

    expect(result).toEqual([1, 1]);
  });

  it('should return [1, 4, 6, 4, 1] when rowIndex is 4', () => {
    const rowIndex = 4;

    const result = getRow(rowIndex);

    expect(result).toEqual([1, 4, 6, 4, 1]);
  });
});
