import { describe, expect, it } from 'vitest';
import { coloredCells } from '.';

describe.skip('coloredCells', () => {
  it('should return 1 for n = 1', () => {
    const result = coloredCells(1);
    expect(result).toBe(1);
  });

  it('should return 5 for n = 2', () => {
    const result = coloredCells(2);
    expect(result).toBe(5);
  });

  it('should return 13 for n = 3', () => {
    const result = coloredCells(3);
    expect(result).toBe(13);
  });

  it('should return 25 for n = 4', () => {
    const result = coloredCells(4);
    expect(result).toBe(25);
  });
});
