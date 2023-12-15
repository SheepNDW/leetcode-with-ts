import { describe, expect, it } from 'vitest';
import { destCity } from '.';

describe.skip('destCity', () => {
  it('should return "Sao Paulo" for paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]', () => {
    const paths = [
      ['London', 'New York'],
      ['New York', 'Lima'],
      ['Lima', 'Sao Paulo'],
    ];
    const expected = 'Sao Paulo';

    const result = destCity(paths);

    expect(result).toBe(expected);
  });

  it('should return "A" for paths = [["B","C"],["D","B"],["C","A"]]', () => {
    const paths = [
      ['B', 'C'],
      ['D', 'B'],
      ['C', 'A'],
    ];
    const expected = 'A';

    const result = destCity(paths);

    expect(result).toBe(expected);
  });

  it('should return "Z" for paths = [["A","Z"]]', () => {
    const paths = [['A', 'Z']];
    const expected = 'Z';

    const result = destCity(paths);

    expect(result).toBe(expected);
  });
});
