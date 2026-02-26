import { describe, expect, it } from 'vitest';
import { champagneTower } from '.';

describe('champagneTower', () => {
  it('example 1', () => {
    const poured = 1;
    const query_row = 1;
    const query_glass = 1;

    const result = champagneTower(poured, query_row, query_glass);

    expect(result).toBe(0.0);
  });

  it('example 2', () => {
    const poured = 2;
    const query_row = 1;
    const query_glass = 1;

    const result = champagneTower(poured, query_row, query_glass);

    expect(result).toBe(0.5);
  });

  it('example 3', () => {
    const poured = 100000009;
    const query_row = 33;
    const query_glass = 17;

    const result = champagneTower(poured, query_row, query_glass);

    expect(result).toBe(1.0);
  });
});
